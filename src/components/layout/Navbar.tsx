import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageId } from '../../types';
import { PAGES, DEVELOPER_INFO } from '../../data/portfolioData';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  currentPageId: PageId;
  onNavigate: (id: PageId) => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPageId,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4 flex items-center justify-between glass-nav"
    >
      {/* Brand Logo */}
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-3 group focus:outline-none"
        data-cursor="Accueil"
      >
        <div className="relative w-10 h-10 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/30 group-hover:border-[#3b82f6]/60 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.35)] shadow-sm">
          <span className="font-heading font-extrabold text-sm text-[#60a5fa]">LR</span>
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#2563eb] rounded-full animate-ping opacity-75" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#2563eb] rounded-full" />
        </div>
        <div className="text-left hidden sm:block">
          <span className="block font-heading font-bold text-sm text-white tracking-wide group-hover:text-[#60a5fa] transition-colors">
            {DEVELOPER_INFO.name}
          </span>
          <span className="block text-[10px] text-gray-400 font-mono tracking-wider">
            Full Stack Developer
          </span>
        </div>
      </button>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-1 bg-[#0e1738]/80 p-1.5 rounded-full border border-white/10 shadow-md backdrop-blur-md">
        {PAGES.map((page) => {
          const isActive = currentPageId === page.id;
          return (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 focus:outline-none ${
                isActive
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white hover:scale-105'
              }`}
              data-cursor={page.name}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 font-mono opacity-60 text-[10px] ${isActive ? 'text-white' : ''}`}>
                {page.number}
              </span>
              <span className="relative z-10">{page.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Header Actions */}
      <div className="flex items-center gap-3">
        {/* Availability Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/30 text-[11px] text-[#60a5fa] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
          <span>Stage / Opportunité</span>
        </div>

        {/* CV Download Button */}
        <a
          href={DEVELOPER_INFO.cvUrl}
          download="CV_Lucky_Rakotomalala.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-bold text-xs hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          data-cursor="Download"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>CV</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none shadow-sm"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#070f26]/95 border-b border-white/10 p-6 md:hidden backdrop-blur-xl flex flex-col gap-4 shadow-xl"
          >
            {PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  onNavigate(page.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  currentPageId === page.id
                    ? 'bg-[#2563eb]/20 text-[#60a5fa] border border-[#2563eb]/40'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="font-semibold text-sm">{page.name}</span>
                <span className="font-mono text-xs opacity-50">{page.number}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
