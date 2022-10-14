import { createPortal } from 'react-dom';
import Typography from './Typography';
import { motion } from 'framer-motion';

import { modalVariants } from '../framer-motion/variants';

export default function Modal({ children, title }) {
  return createPortal(
    <motion.div
      variants={modalVariants}
      initial='hiddenOverlay'
      animate='visibleOverlay'
      exit='exitOverlay'
      className='flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-sm z-10'
    >
      <motion.div
        variants={modalVariants}
        initial='hiddenCard'
        animate='visibleCard'
        exit='exitCard'
        className='p-2 pb-6  lg:w-6/12 md:w-8/12 w-10/12 bg-white rounded '
      >
        <div className='pb-3'>
          <Typography
            type='section-heading'
            className=' font-bold lg:text-lg md:text-base sm:text-base capitalize'
          >
            {title}
          </Typography>
        </div>
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById('portal')
  );
}
