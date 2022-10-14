import Typography from '../ui/Typography';
export default function SwiperCard({ data }) {
  return (
    <div className='bg-white p-1 h-full w-full rounded flex flex-col space-y-2 text-center'>
      <img
        src={data.src}
        alt='chat overview'
        className='h-2/3 w-full center object-cover rounded'
      ></img>
      <Typography type='primary'>{data.heading}</Typography>
      <Typography type='description'>{data.description}</Typography>
    </div>
  );
}
