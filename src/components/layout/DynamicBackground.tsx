import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMouseParallax } from '../../hooks/useMouseParallax';

export const DynamicBackground: React.FC = () => {
  const { glow } = useMouseParallax();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 140 };

    const resize = () => {
      w = canvas.width = container.clientWidth || window.innerWidth;
      h = canvas.height = container.clientHeight || window.innerHeight;
      const count = Math.min(90, Math.floor((w * h) / 9000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 1,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const step = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / (dist || 1)) * force * 1.2;
            p.y += (dy / (dist || 1)) * force * 1.2;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(210, 225, 255, ${1 - dist / 130})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(step);
    };

    step();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="particles-bg"
      className="fixed inset-0 z-0 overflow-hidden bg-[#070f26] pointer-events-none"
    >
      {/* Interactive Canvas Particle Network */}
      <canvas
        ref={canvasRef}
        id="particles-canvas"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-25 z-10 pointer-events-none" />

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,15,38,0.85)_100%)] z-10 pointer-events-none" />

      {/* Primary Cyan Halo (Follows Mouse with Parallax) */}
      <motion.div
        animate={{
          x: glow.x * 1.5,
          y: glow.y * 1.5,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 25 }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#00BFFF]/20 via-[#2563eb]/15 to-transparent blur-[120px] opacity-70 pointer-events-none z-10"
      />

      {/* Secondary Cyan Accent Halo */}
      <motion.div
        animate={{
          x: -glow.x * 1.2,
          y: -glow.y * 1.2,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#22D3EE]/15 via-[#1e3a8a]/10 to-transparent blur-[140px] opacity-60 pointer-events-none z-10"
      />
    </div>
  );
};
