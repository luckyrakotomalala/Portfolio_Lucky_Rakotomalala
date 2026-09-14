import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LRLoaderProps {
  isLoading: boolean;
}

export const LRLoader: React.FC<LRLoaderProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070f26] text-white"
        >
          {/* Background subtle glow */}
          <div className="absolute w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl animate-pulse" />

          <div className="relative flex flex-col items-center">
            {/* Outer Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="w-28 h-28 rounded-full border-2 border-transparent border-t-[#2563eb] border-r-[#2563eb]/30 p-1"
            />

            {/* Inner Logo Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#0e1738] border border-[#2563eb]/40 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.45)]">
                <span className="font-heading font-extrabold text-2xl tracking-tighter text-[#3b82f6]">
                  LR
                </span>
              </div>
            </motion.div>

            {/* Text label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <h2 className="font-heading font-semibold text-lg tracking-wide text-white">
                Lucky Rakotomalala
              </h2>
              <p className="text-xs text-[#60a5fa] tracking-widest uppercase mt-1 font-mono">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Progress bar line */}
            <div className="w-48 h-1 bg-[#0e1738] rounded-full overflow-hidden mt-6 border border-white/5">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
