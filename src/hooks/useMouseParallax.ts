import { useState, useEffect } from 'react';

export function useMouseParallax() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized from -0.5 to 0.5
      const normX = (e.clientX / innerWidth) - 0.5;
      const normY = (e.clientY / innerHeight) - 0.5;
      setMousePos({ x: normX, y: normY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return {
    raw: mousePos,
    bg: { x: mousePos.x * 4, y: mousePos.y * 4 },
    cards: { x: mousePos.x * 10, y: mousePos.y * 10 },
    avatar: { x: mousePos.x * 20, y: mousePos.y * 20 },
    glow: { x: mousePos.x * 30, y: mousePos.y * 30 },
  };
}
