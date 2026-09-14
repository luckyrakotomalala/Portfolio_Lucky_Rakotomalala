import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageId } from '../../types';
import { PAGES } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight, Sparkles, User, Code, FolderGit2, Mail } from 'lucide-react';

interface InteractivePreviewCarouselProps {
  onSelectPage: (id: PageId) => void;
}

export const InteractivePreviewCarousel: React.FC<InteractivePreviewCarouselProps> = ({
  onSelectPage,
}) => {
  const previewPages = PAGES.filter((p) => p.id !== 'home');
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % previewPages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + previewPages.length) % previewPages.length);
  };

  const getSectionIcon = (id: PageId) => {
    switch (id) {
      case 'about':
        return <User className="w-5 h-5" />;
      case 'projects':
        return <FolderGit2 className="w-5 h-5" />;
      case 'skills':
        return <Code className="w-5 h-5" />;
      case 'contact':
        return <Mail className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const activePage = previewPages[activeIndex];

  return (
    <div className="w-full mt-4 bg-[#0e1738]/80 backdrop-blur-xl border border-white/15 p-3.5 rounded-3xl shadow-2xl flex flex-col gap-3 group hover:border-[#2563eb]/50 transition-colors duration-500">
      {/* Header with Title & Arrow Controls */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#3b82f6] animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider text-gray-300 uppercase font-semibold">
            Sections ({activeIndex + 1}/{previewPages.length})
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-full bg-[#070f26] border border-white/10 hover:border-[#2563eb] text-gray-300 hover:text-[#3b82f6] transition-all duration-300 active:scale-95 focus:outline-none"
            title="Section précédente"
            data-cursor="Précédent"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1.5 rounded-full bg-[#070f26] border border-white/10 hover:border-[#2563eb] text-gray-300 hover:text-[#3b82f6] transition-all duration-300 active:scale-95 focus:outline-none"
            title="Section suivante"
            data-cursor="Suivant"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Circular Vignettes (Cercles) */}
      <div className="flex items-center justify-between gap-2 px-1">
        {previewPages.map((page, index) => {
          const isSelected = index === activeIndex;
          return (
            <motion.div
              key={page.id}
              onClick={() => {
                setActiveIndex(index);
                onSelectPage(page.id);
              }}
              onMouseEnter={() => setActiveIndex(index)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative flex flex-col items-center cursor-pointer group/circle"
              data-cursor={`Ouvrir ${page.shortName}`}
            >
              {/* Outer Circular Vignette */}
              <div
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white border-2 border-[#60a5fa] shadow-[0_0_20px_rgba(37,99,235,0.85)] ring-4 ring-[#2563eb]/25 scale-105'
                    : 'bg-[#070f26]/90 border border-white/15 text-gray-400 hover:text-white hover:border-[#2563eb]/60 hover:shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                }`}
              >
                {/* Section Icon */}
                {getSectionIcon(page.id)}

                {/* Number Badge at Top-Right */}
                <span
                  className={`absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold border transition-colors ${
                    isSelected
                      ? 'bg-[#070f26] text-[#60a5fa] border-[#2563eb]'
                      : 'bg-[#0e1738] text-gray-400 border-white/10'
                  }`}
                >
                  {page.number}
                </span>
              </div>

              {/* Label Under Circle */}
              <span
                className={`text-[10px] font-semibold mt-1 transition-colors font-mono ${
                  isSelected ? 'text-[#60a5fa] font-bold' : 'text-gray-400 group-hover/circle:text-white'
                }`}
              >
                {page.shortName}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Active Section Info Preview Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          onClick={() => onSelectPage(activePage.id)}
          className="p-2.5 rounded-2xl bg-[#070f26]/90 border border-white/10 hover:border-[#2563eb]/50 flex items-center justify-between cursor-pointer transition-all duration-300"
          data-cursor={`Aller à ${activePage.name}`}
        >
          <div>
            <span className="block font-heading font-bold text-xs text-white">
              {activePage.number} • {activePage.name}
            </span>
            <span className="block text-[10px] text-gray-400 font-mono">
              {activePage.subtitle}
            </span>
          </div>
          <button className="px-3 py-1 rounded-full bg-[#2563eb] text-white text-[10px] font-bold flex items-center gap-1 hover:bg-[#1d4ed8] shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-all">
            <span>Explorer</span>
            <span>→</span>
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
