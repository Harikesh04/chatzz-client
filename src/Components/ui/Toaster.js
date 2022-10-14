import Typography from './Typography';
import { IoIosAlert } from 'react-icons/io';
export default function Toaster({ title, description, type }) {
  switch (type) {
    case 'failure': {
      return (
        <div
          style={{ top: '15%' }}
          className='absolute lg:w-1/2 md:w-3/4 w-full  left-1/2 z-20 transform -translate-x-1/2'
        >
          <div className='w-full relative bg-white px-8 py-2 rounded-lg shadow flex items-center space-x-3 '>
            <IoIosAlert className='text-yellow-500 text-3xl' />
            <div>
              <Typography type='section-heading' className='font-medium'>
                Uh oh,something went wrong
              </Typography>
              <Typography className='text-sm text-gray-500'>
                Here is something that went wrong,please try later
              </Typography>
            </div>
            <div className=' absolute -left-5 transform rotate-90 h-1.5 bg-yellow-500 w-14 lg:w-12 md:w-12 rounded-3xl'></div>
          </div>
        </div>
      );
    }
  }
}
