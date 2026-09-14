import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalSteps = 60 * duration;
    const increment = end / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      start += increment;
      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="font-heading font-extrabold text-4xl md:text-5xl text-white text-glow">
      {count}
      <span className="text-[#3b82f6]">{suffix}</span>
    </span>
  );
};
