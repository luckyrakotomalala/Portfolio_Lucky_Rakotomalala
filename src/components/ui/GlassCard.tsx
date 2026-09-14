import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  tiltOnHover?: boolean;
  onClick?: () => void;
  cursorLabel?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  tiltOnHover = true,
  onClick,
  cursorLabel,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltOnHover && !glowOnHover) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden glass-card rounded-[24px] p-6 md:p-8 cursor-pointer ${className}`}
      data-cursor={cursorLabel}
    >
      {/* Ambient Mouse Tracking Light Spotlight */}
      {glowOnHover && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.18), transparent 80%)`,
          }}
        />
      )}

      {/* Glass Surface Reflection Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563eb]/30 to-transparent pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
