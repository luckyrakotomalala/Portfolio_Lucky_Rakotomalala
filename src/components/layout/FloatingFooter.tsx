import React from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

interface FloatingFooterProps {
  onTriggerEasterEgg: () => void;
}

export const FloatingFooter: React.FC<FloatingFooterProps> = ({ onTriggerEasterEgg }) => {
  return (
    <footer className="fixed bottom-6 right-6 md:right-12 z-40 hidden sm:flex items-center gap-6 text-xs text-gray-400 font-mono bg-[#0e1738]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
      <div className="flex items-center gap-2">
        <span className="text-gray-300">© 2026 {DEVELOPER_INFO.name}</span>
        <span className="text-gray-500">•</span>
        <span className="text-[#60a5fa]">React • TS • Framer Motion</span>
      </div>

      <div className="h-3 w-[1px] bg-white/15" />

      {/* Social Links */}
      <div className="flex items-center gap-3">
        <a
          href={DEVELOPER_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-125 transition-all duration-300"
          data-cursor="GitHub"
        >
          <FaGithub className="w-3.5 h-3.5" />
        </a>
        <a
          href={DEVELOPER_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-125 transition-all duration-300"
          data-cursor="WhatsApp"
        >
          <FaWhatsapp className="w-3.5 h-3.5" />
        </a>
        <a
          href={DEVELOPER_INFO.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-125 transition-all duration-300"
          data-cursor="Facebook"
        >
          <FaFacebook className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="h-3 w-[1px] bg-white/15" />

      {/* Secret Easter Egg Trigger */}
      <button
        onClick={onTriggerEasterEgg}
        className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-white transition-colors focus:outline-none"
        title="Trigger secret celebration (Or press Konami Code / type 'hello')"
        data-cursor="EasterEgg"
      >
        <Sparkles className="w-3 h-3 text-[#60a5fa]" />
        <span>v1.0</span>
      </button>
    </footer>
  );
};
