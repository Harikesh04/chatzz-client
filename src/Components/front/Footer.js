import Typography from '../ui/Typography';
import RoomGateBox from './RoomGateBox';

export default function Footer() {
  return (
    <div className='fixed bottom-0 py-2 w-full md:w-6/12 md:-ml-2 lg:w-3/12 border-t-2 border-gray-100'>
      <RoomGateBox />
      <Typography className='text-gray-500 font-medium text-center'>
        Wechat © 2021
      </Typography>
    </div>
  );
}
