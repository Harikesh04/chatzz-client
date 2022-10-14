import { GiSpy } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { dashboardVariants } from '../framer-motion/variants';
import { useState } from 'react';
import CreateRoom from '../Rooms/CreateRoom';
import JoinSecretRoom from '../Rooms/JoinSecretRoom';
export default function RoomGateBox() {
  const [openSecretModal, setOpenSecretModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const IconWrapper = ({ Component, ...props }) => {
    return (
      <motion.div
        {...props}
        variants={dashboardVariants}
        whileTap='whileTap'
        className='p-3 h-12 w-12 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer'
      >
        <Component className=' text-2xl text-white inline-block' />
      </motion.div>
    );
  };
  return (
    <motion.div
      variants={dashboardVariants}
      initial='hidden'
      animate='visible'
      className='absolute right-2 bottom-12 space-y-1'
    >
      <AnimatePresence>
        {openSecretModal && <JoinSecretRoom setvalue={setOpenSecretModal} />}
      </AnimatePresence>
      <AnimatePresence>
        {openCreateModal && <CreateRoom setvalue={setOpenCreateModal} />}
      </AnimatePresence>
      <IconWrapper onClick={() => setOpenSecretModal(true)} Component={GiSpy} />
      <IconWrapper
        onClick={() => setOpenCreateModal(true)}
        Component={AiOutlinePlus}
      />
    </motion.div>
  );
}

// 1,2,3,5,5
