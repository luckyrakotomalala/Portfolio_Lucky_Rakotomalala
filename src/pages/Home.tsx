import React from 'react';
import { motion } from 'framer-motion';
import { PageId } from '../types';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { MagneticButton } from '../components/ui/MagneticButton';
import { InteractivePreviewCarousel } from '../components/preview/InteractivePreviewCarousel';
import { FaGithub, FaWhatsapp, FaFacebook, FaArrowRight, FaDownload } from 'react-icons/fa';
import { MapPin, Code2, Briefcase, GraduationCap } from 'lucide-react';

interface HomeProps {
  onNavigate: (id: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const animatedText = useTypewriter([
    'Lucky Rakotomalala',
    'Full Stack Web Developer',
    'Mobile Developer (Flutter)',
    'Spring Boot & React Specialist',
  ], 40, 2000);

  const { avatar } = useMouseParallax();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 flex flex-col justify-between h-[calc(100vh-130px)] allow-scroll overflow-y-auto custom-scrollbar">
      {/* Upper Grid: Left Presentation + Right Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8">
        {/* Left Column: Hero Text & Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col space-y-5"
        >
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/30 text-xs font-semibold text-[#60a5fa] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping" />
              <span>{DEVELOPER_INFO.status}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#60a5fa]" />
              <span>{DEVELOPER_INFO.location}</span>
            </div>
          </div>

          {/* Headline & Typewriter Title */}
          <div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight min-h-[70px] sm:min-h-[90px]">
              Bonjour, je suis{' '}
              <span className="gradient-text-blue block mt-1">
                {animatedText}
                <span className="inline-block w-1 h-8 sm:h-12 bg-[#2563eb] ml-1 animate-pulse" />
              </span>
            </h1>
          </div>

          {/* Paragraph Intro */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {DEVELOPER_INFO.bio}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 py-2">
            <div className="p-3 rounded-2xl bg-[#142244]/70 border border-[#5a82c8]/15 flex items-center gap-3 shadow-md backdrop-blur-md">
              <div className="p-2 rounded-xl bg-[#2563eb]/15 text-[#60a5fa]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-bold text-base text-white">15+</span>
                <span className="block text-[10px] text-gray-400 font-mono">Projets Réalisés</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#142244]/70 border border-[#5a82c8]/15 flex items-center gap-3 shadow-md backdrop-blur-md">
              <div className="p-2 rounded-xl bg-[#2563eb]/15 text-[#60a5fa]">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-bold text-base text-white">20+</span>
                <span className="block text-[10px] text-gray-400 font-mono">Technologies</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#142244]/70 border border-[#5a82c8]/15 flex items-center gap-3 shadow-md backdrop-blur-md">
              <div className="p-2 rounded-xl bg-[#2563eb]/15 text-[#60a5fa]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-bold text-base text-white">3+ Ans</span>
                <span className="block text-[10px] text-gray-400 font-mono">Expérience</span>
              </div>
            </div>
          </div>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton onClick={() => onNavigate('projects')} cursorLabel="Projets">
              <div className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-bold text-sm flex items-center gap-3 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300">
                <span>Voir mes projets</span>
                <FaArrowRight className="w-3.5 h-3.5" />
              </div>
            </MagneticButton>

            <MagneticButton href={DEVELOPER_INFO.cvUrl} download="CV_Lucky_Rakotomalala.pdf" target="_blank" cursorLabel="CV">
              <div className="px-6 py-3.5 rounded-full bg-white/10 border border-white/20 hover:border-[#2563eb]/60 text-white font-semibold text-sm flex items-center gap-2 hover:bg-white/20 transition-all duration-300 shadow-sm backdrop-blur-md">
                <FaDownload className="w-3.5 h-3.5 text-[#60a5fa]" />
                <span>Télécharger CV</span>
              </div>
            </MagneticButton>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <a
                href={DEVELOPER_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#2563eb] text-gray-300 hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-sm"
                data-cursor="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={DEVELOPER_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#2563eb] text-gray-300 hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-sm"
                data-cursor="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#2563eb] text-gray-300 hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-sm"
                data-cursor="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Portrait Composition + Section Previews */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          <div className="relative w-72 sm:w-80 lg:w-88 group">
            {/* Ambient Background Glowing Circles */}
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-[#2563eb]/25 via-transparent to-[#60a5fa]/15 blur-2xl group-hover:blur-3xl transition-all duration-500" />

            {/* Parallax Container */}
            <motion.div
              animate={{ x: avatar.x, y: avatar.y }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative rounded-[28px] overflow-hidden border border-white/10 bg-[#0e1738]/80 p-2 shadow-xl backdrop-blur-xl group-hover:border-[#2563eb]/50 transition-colors duration-500"
            >
              <img
                src={DEVELOPER_INFO.avatarUrl}
                alt="Lucky Rakotomalala"
                className="w-full h-80 sm:h-88 object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Glass Info Overlay Badge — dark version */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#070f26]/90 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-md">
                <div>
                  <span className="block font-heading font-bold text-xs text-white">
                    Lucky Rakotomalala
                  </span>
                  <span className="block text-[10px] text-[#60a5fa] font-mono">
                    Full Stack Developer
                  </span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/40 text-[9px] text-[#60a5fa] font-bold">
                  PRO
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section Previews */}
          <div className="w-72 sm:w-80 lg:w-88">
            <InteractivePreviewCarousel onSelectPage={onNavigate} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
