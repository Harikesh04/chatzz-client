import Chat from '../ui/Chat';
import { useContext, useRef, useEffect } from 'react';
import { Context } from '../../Contexts/chatContext';
export default function ChattingArea({ roomid }) {
  const chats = useContext(Context);

  const chatRef = useRef();
  useEffect(() => {
    if (chatRef.current.lastElementChild) {
      const lastElement = 150;
      const visibleHeight = chatRef.current.offsetHeight;
      const containerHeight = chatRef.current.scrollHeight;
      const scrollOffset = chatRef.current.scrollTop + visibleHeight;
      if (containerHeight - lastElement <= scrollOffset) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }
  });

  const renderChats = () => {
    return chats.state.map((msg, index) => {
      if (msg.data.roomid !== roomid) return null;
      if (msg.type === 'recieved') {
        return (
          <Chat
            type={msg.type}
            key={`${msg.data.roomid}${index}`}
            user={msg.data.user}
          >
            {msg.data.message}
          </Chat>
        );
      } else {
        return (
          <Chat key={`${msg.data.roomid}${index}`} type={msg.type}>
            {msg.data.message}
          </Chat>
        );
      }
    });
  };

  return (
    <div
      ref={chatRef}
      style={{
        backgroundImage:
          "linear-gradient(to right bottom,rgb(0,0,0),rgba(0,0,0,0.4)),url('/assets/images/chat-bg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
      className='w-full h-4/5 py-2 px-2 space-y-2 overflow-y-auto scrollbar-hide '
    >
      {renderChats()}
    </div>
  );
}
