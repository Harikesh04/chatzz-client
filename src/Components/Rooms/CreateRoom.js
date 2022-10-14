import Modal from '../ui/Modal';
import TextRadio from '../ui/TextRadio';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import { v4 as uuidv4 } from 'uuid';
import { useMemo } from 'react';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { Context } from '../../Contexts/userContext';
import api from '../../api';

export default function CreateRoom({ setvalue }) {
  const id = useMemo(() => uuidv4(), []);
  const history = useHistory();

  const user = useContext(Context);

  const [publicRoomType, setPublicRoomType] = useState(true);

  const CreateRomHandler = async () => {
    const roomid = id;
    const owner = user.state.googleId;
    const type = publicRoomType ? 'public' : 'private';
    const image = user.state.imageUrl;
    const name = `${user.state.name}'s Room`;
    const roomInformation = {
      roomid,
      owner,
      type,
      image,
      name,
    };
    const rooms = await api.post('/api/create-room', roomInformation);
    history.push(`/room/${id}`);
  };

  return (
    <Modal title='Welcome to the Creation of Room'>
      <Typography type='section-heading'>
        Hurray!! your room is ready to share{' '}
        <span className='text-blue-500 '>{id}</span> You are about to create
        your wechat room, do you want to make it public or Private
      </Typography>
      <div className='py-2'>
        <TextRadio
          onClick={() => setPublicRoomType(true)}
          selected={publicRoomType ? 'true' : ''}
        >
          Public
        </TextRadio>
        <TextRadio
          onClick={() => setPublicRoomType(false)}
          selected={!publicRoomType ? 'true' : ''}
        >
          Private
        </TextRadio>
      </div>
      <div className='space-x-2 float-right'>
        <Button onClick={CreateRomHandler} btnType='primary' className='mt-2'>
          Submit
        </Button>
        <Button onClick={() => setvalue(false)} btnType='danger'>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
