import Typography from '../ui/Typography';
import { useHistory } from 'react-router';
export default function ProfileCard({
  name,
  url = '/assets/images/avatar2.jpg',
  timeFromNow,
  roomid,
  ...props
}) {
  if (!url.startsWith('http')) {
    url = '/assets/images/avatar2.jpg';
  }
  const history = useHistory();
  const shiftToRoom = () => {
    history.push(`/room/${roomid}`);
  };
  return (
    <div {...props} onClick={shiftToRoom} className='flex items-center'>
      <img
        className='w-12 h-12 object-cover rounded-full mr-3'
        src={url}
        alt='avatar'
      ></img>
      <div>
        <Typography type='profile-heading'>{name}</Typography>
        <Typography className='text-xs'>Created {timeFromNow}</Typography>
      </div>
    </div>
  );
}
