import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageId } from '../../types';

interface PageTransitionProps {
  currentPageId: PageId;
  children: React.ReactNode;
}

const variants = {
  initial: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(12px)',
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(12px)',
    y: -20,
    transition: {
      duration: 0.5,
      ease: [0.7, 0, 0.84, 0] as const,
    },
  },
};

export const PageTransition: React.FC<PageTransitionProps> = ({
  currentPageId,
  children,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPageId}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full h-full flex flex-col justify-center items-center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
