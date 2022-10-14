import { motion } from 'framer-motion';
import Typography from './Typography';
import { chatVariants } from '../framer-motion/variants';

export default function Chat({ type, children, user }) {
  switch (type) {
    case 'sent': {
      return (
        <div style={{ maxWidth: '80%' }} className=' ml-auto flex justify-end'>
          <motion.div
            variants={chatVariants}
            initial='hidden'
            animate='visible'
            className='inline-block bg-blue-500 py-1 px-3 rounded-lg'
          >
            <Typography type='caption' className='text-white font-base'>
              {children}
            </Typography>
          </motion.div>
        </div>
      );
    }
    case 'recieved': {
      return (
        <div
          style={{ maxWidth: '80%' }}
          className='flex justify-start relative '
        >
          <motion.div
            variants={chatVariants}
            initial='hidden'
            animate='visible'
            className='inline-block bg-gray-500 py-1 px-3 rounded-lg space-y-0.5 '
          >
            <Typography className='text-gray-200 text-xs'>{user}</Typography>
            <Typography type='caption' className='text-white font-base'>
              {children}
            </Typography>
          </motion.div>
        </div>
      );
    }
    case 'notice': {
      return (
        <motion.div variants={chatVariants} initial='hidden' animate='visible'>
          <Typography className='text-sm text-gray-200 font-base text-center'>
            {children}
          </Typography>
        </motion.div>
      );
    }
    default: {
      return <Typography>{children}</Typography>;
    }
  }
}
