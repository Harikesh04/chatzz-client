import Typography from '../ui/Typography';
import api from '../../api';
import { useState, useEffect } from 'react';
import ProfileCard from './profileCard';

import moment from 'moment';
import Spinner from '../ui/Spinner';

export default function Public() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const roomData = await api.get('/api/public-rooms');
    const publicRooms = [...roomData.data.rooms];
    if (publicRooms.length > 0) {
      setRooms(publicRooms);
    }
    setLoading(false);
  }, []);

  const renderPublicRooms = () => {
    return rooms.map((room) => {
      const timeFromNow = moment(room.createdAt).fromNow();
      console.log('public', room);
      return (
        <ProfileCard
          roomid={room.roomid}
          key={room._id}
          timeFromNow={timeFromNow}
          name={room.name}
          url={room.image}
        />
      );
    });
  };

  return (
    <div className='py-6'>
      <Typography type='section-heading' className='font-bold'>
        Public Rooms
      </Typography>
      {loading && <Spinner />}
      {!loading && (
        <div className='h-60 mt-2 space-y-2 overflow-y-auto scrollbar-hide'>
          {rooms.length === 0 ? (
            <Typography type='section-description' className='text-center'>
              Oopss, We don't have public rooms for now please create some's
            </Typography>
          ) : (
            renderPublicRooms()
          )}
        </div>
      )}
    </div>
  );
}
