import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: string | boolean;
  target?: string;
  rel?: string;
  cursorLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
  cursorLabel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Pull magnetic effect within max 30px offset
    setPosition({
      x: distanceX * 0.35,
      y: distanceY * 0.35,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
      data-cursor={cursorLabel}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={rel} onClick={onClick} className="inline-block">
        {Content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block focus:outline-none">
      {Content}
    </button>
  );
};
