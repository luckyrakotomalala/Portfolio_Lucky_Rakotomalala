import React from 'react';
import { motion } from 'framer-motion';
import { PageId } from '../../types';
import { PAGES } from '../../data/portfolioData';

interface PageIndicatorProps {
  currentPageIndex: number;
  onNavigate: (id: PageId) => void;
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({
  currentPageIndex,
  onNavigate,
}) => {
  const currentPage = PAGES[currentPageIndex];

  return (
    <div className="fixed bottom-8 left-6 md:left-12 z-40 hidden sm:flex items-center gap-4">
      {/* Number Badge */}
      <div className="flex items-baseline gap-1 font-mono">
        <motion.span
          key={currentPage.number}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-extrabold text-2xl text-[#60a5fa] text-glow"
        >
          {currentPage.number}
        </motion.span>
        <span className="text-gray-400 text-xs font-semibold">/ 05</span>
      </div>

      {/* Page Title */}
      <div className="h-4 w-[1px] bg-[#2563eb]/30" />
      <motion.span
        key={currentPage.name}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-heading text-xs font-semibold text-gray-300 uppercase tracking-widest"
      >
        {currentPage.name}
      </motion.span>

      {/* Mini Step Track */}
      <div className="hidden lg:flex items-center gap-1.5 ml-4">
        {PAGES.map((page, idx) => (
          <button
            key={page.id}
            onClick={() => onNavigate(page.id)}
            className="group relative py-2 focus:outline-none"
            data-cursor={page.shortName}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentPageIndex
                  ? 'w-6 bg-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.5)]'
                  : 'w-1.5 bg-[#2563eb]/30 group-hover:bg-[#2563eb]/60'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
