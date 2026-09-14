import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export const CustomCursor: React.FC = () => {
  const { position, trailingPosition, isHovered, isClicked, isVisible, hoverText } = useCustomCursor();

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden hidden md:block select-none">
      {/* 1. Precise Inner Glowing Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] shadow-[0_0_12px_#3b82f6] pointer-events-none z-10"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isClicked ? 0.6 : isHovered ? 1.4 : 1})`,
          transition: 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* 2. Sleek Fluid Outer Ring & Ambient Aura */}
      <div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none transition-all duration-250 ease-out z-0"
        style={{
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          transform: `translate3d(${trailingPosition.x - (isHovered ? 24 : 16)}px, ${trailingPosition.y - (isHovered ? 24 : 16)}px, 0) scale(${isClicked ? 0.85 : 1})`,
          backgroundColor: isHovered ? 'rgba(37, 99, 235, 0.12)' : 'transparent',
          border: isHovered ? '1.5px solid rgba(96, 165, 250, 0.7)' : '1px solid rgba(59, 130, 246, 0.35)',
          boxShadow: isHovered
            ? '0 0 25px rgba(37, 99, 235, 0.35), inset 0 0 15px rgba(59, 130, 246, 0.15)'
            : '0 0 10px rgba(37, 99, 235, 0.1)',
        }}
      />

      {/* 3. High-Tech Floating Micro-Pill Badge (when hovered with data-cursor) */}
      <AnimatePresence>
        {isHovered && hoverText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -5 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed top-0 left-0 pointer-events-none z-20 px-2.5 py-1 rounded-full bg-[#0e1738]/90 border border-[#3b82f6]/50 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-1.5"
            style={{
              transform: `translate3d(${trailingPosition.x + 18}px, ${trailingPosition.y - 32}px, 0)`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-wider text-[#60a5fa] uppercase whitespace-nowrap">
              {hoverText}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
