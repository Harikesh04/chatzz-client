import Header from '../Components/front/Header';
import Wrapper from '../Components/layouts/Wrapper';
import ChattingArea from '../Components/Rooms/ChattingArea';
import TextInput from '../Components/ui/TextInput';

import { Context } from '../Contexts/chatContext';
import { useContext, useEffect, useMemo, useState } from 'react';
import socketio from 'socket.io-client';
import { useParams } from 'react-router';
import { Context as UserContext } from '../Contexts/userContext';

export default function ChatRoom() {
  const chats = useContext(Context);
  const params = useParams();
  const roomid = useMemo(() => params.id, []);
  const user = useContext(UserContext);
  const [inputMsg, setInputMsg] = useState('');
  const [socket, setSocket] = useState();

  useEffect(() => {
    // const Endpoint = 'http://localhost:4000';
    const Endpoint = 'https://chatting-chatzzz.herokuapp.com';
    const socketTEMP = socketio(Endpoint, {
      withCredentials: true,
    });
    setSocket(socketTEMP);
  }, []);

  useEffect(() => {
    // console.log(socket)
    if (socket) {
      socket.emit('create', { room: roomid, name: user.state.givenName });
      socket.on('user-joined', (name) => {
        const message = `${name} Joined`;
        Notice(message, roomid, name);
      });
      socket.on('toClient', ({ name, message }) => {
        Recieved(message, roomid, name);
      });
      socket.on('user-left', (name) => {
        const message = `${name} Left`;
        Notice(message, roomid, name);
      });

      return function cleanup() {
        socket.close();
      };
    }
  }, [socket]);

  const Send = (message, roomid) => {
    chats.sendMessage(message, roomid);
  };
  const Recieved = (message, roomid, name) => {
    chats.recievedMessage(message, roomid, name);
  };
  const Notice = (message, roomid, name) => {
    chats.recievedNotice(message, roomid, name);
  };
  const HandleSendMessage = () => {
    if (!inputMsg) return;
    Send(inputMsg, roomid);
    socket.emit('toServer', {
      room: roomid,
      name: user.state.name,
      message: inputMsg,
    });
    setInputMsg('');
  };
  return (
    <Wrapper className='bg-white'>
      <Header />
      <ChattingArea roomid={roomid} />
      <TextInput
        value={inputMsg}
        setValue={setInputMsg}
        placeholder='Enter Your Message Here'
        type='message'
        sendMessage={HandleSendMessage}
      ></TextInput>
    </Wrapper>
  );
}
