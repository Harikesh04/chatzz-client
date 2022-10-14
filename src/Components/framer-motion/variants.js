export const buttonVariants = {
  hidden: {
    scale: 0,
    scale: 0,
  },
  visible: {
    scale: 1,
  },
  whileTap: {
    scale: 0.95,
  },
};
export const chatVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
    },
  },
  whileTap: {
    scale: 0.95,
  },
};
export const dashboardVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 110,
    },
  },
  whileTap: {
    scale: 0.95,
  },
};
export const modalVariants = {
  hiddenOverlay: {
    opacity: 0,
  },
  visibleOverlay: {
    opacity: 1,
  },
  exitOverlay: {
    opacity: 1,
  },
  hiddenCard: {
    scale: 0,
  },
  visibleCard: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
  exitCard: {
    scale: 0,
  },
};
