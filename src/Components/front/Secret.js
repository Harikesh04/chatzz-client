import Typography from '../ui/Typography';
import api from '../../api';
import { useEffect, useState } from 'react';

import { useContext } from 'react';
import { Context } from '../../Contexts/userContext';

import ProfileCard from './profileCard';

import moment from 'moment';

import Spinner from '../ui/Spinner';

export default function Secret() {
  const [rooms, setRooms] = useState([]);
  const user = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const roomData = await api.get(`/api/private-rooms/${user.state.googleId}`);
    const secretRooms = [...roomData.data.rooms];
    if (secretRooms.length > 0) {
      setRooms(secretRooms);
    }
    setLoading(false);
  }, []);
  const renderSecretRooms = () => {
    return rooms.map((room) => {
      const timeFromNow = moment(room.createdAt).fromNow();
      console.log(room);
      return (
        <ProfileCard
          roomid={room.roomid}
          key={room._id}
          name={room.name}
          timeFromNow={timeFromNow}
          url={room.image}
        />
      );
    });
  };

  return (
    <div className='pt-6'>
      <Typography type='section-heading' className='font-bold'>
        Secret Rooms
      </Typography>
      {loading && <Spinner />}
      {!loading && (
        <div className='max-h-60 mt-2 space-y-2 overflow-y-auto scrollbar-hide'>
          {rooms.length === 0 ? (
            <Typography type='section-description' className='text-center'>
              Shh! its secret, create your's
            </Typography>
          ) : (
            renderSecretRooms()
          )}
        </div>
      )}
    </div>
  );
}
