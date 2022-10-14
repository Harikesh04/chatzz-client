import { motion } from 'framer-motion';
import { buttonVariants } from '../framer-motion/variants';
export default function Button({ btnType, className, children, ...props }) {
  switch (btnType) {
    case 'primary': {
      return (
        <motion.button
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          whileTap='whileTap'
          {...props}
          className={`py-2 px-6 bg-blue-500 text-white text-base font-medium rounded-md ${className}`}
        >
          {children}
        </motion.button>
      );
    }
    case 'secondary': {
      return (
        <motion.button
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          whileTap='whileTap'
          {...props}
          className={`py-2 px-6 bg-blue-800 text-white text-base font-medium rounded-md ${className}`}
        >
          {children}
        </motion.button>
      );
    }
    case 'danger': {
      return (
        <motion.button
          {...props}
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          whileTap='whileTap'
          className={`py-2 px-6 bg-red-500 text-white text-base font-medium rounded-md ${className}`}
        >
          {children}
        </motion.button>
      );
    }
    default: {
      return (
        <motion.button
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          whileTap='whileTap'
          {...props}
          className={`${className}`}
        >
          {children}
        </motion.button>
      );
    }
  }
}
