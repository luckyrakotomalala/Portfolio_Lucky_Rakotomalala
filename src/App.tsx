import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LRLoader } from './components/loader/LRLoader';
import { CustomCursor } from './components/layout/CustomCursor';
import { DynamicBackground } from './components/layout/DynamicBackground';
import { Navbar } from './components/layout/Navbar';
import { PageIndicator } from './components/layout/PageIndicator';
import { FloatingFooter } from './components/layout/FloatingFooter';
import { PageTransition } from './components/layout/PageTransition';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

import { usePageNavigation } from './hooks/usePageNavigation';
import { useEasterEgg } from './hooks/useEasterEgg';
import { useSound } from './hooks/useSound';
import { Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentPage, currentPageIndex, goToPageId } = usePageNavigation();
  const { isSecretActive, triggerCelebration } = useEasterEgg();
  const { soundEnabled, toggleSound } = useSound();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage.id) {
      case 'home':
        return <Home onNavigate={goToPageId} />;
      case 'about':
        return <About onNavigate={goToPageId} />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={goToPageId} />;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#070f26] text-white select-none">
      {/* Initial Modern Loader */}
      <LRLoader isLoading={isLoading} />

      {/* Custom Windows Cursor Replacement */}
      <CustomCursor />

      {/* Dynamic Animated Background */}
      <DynamicBackground />

      {/* Fixed Header Navbar */}
      <Navbar
        currentPageId={currentPage.id}
        onNavigate={goToPageId}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Page Indicator (01 / 05) */}
      <PageIndicator
        currentPageIndex={currentPageIndex}
        onNavigate={goToPageId}
      />

      {/* Persistent Floating Footer */}
      <FloatingFooter onTriggerEasterEgg={triggerCelebration} />

      {/* Main Fullscreen Page Content with Cinematic Transitions */}
      <main className="relative z-20 w-full h-full pt-16 pb-12 flex items-center justify-center">
        <PageTransition currentPageId={currentPage.id}>
          {renderCurrentPage()}
        </PageTransition>
      </main>

      {/* Easter Egg Celebration Overlay Banner */}
      <AnimatePresence>
        {isSecretActive && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[90] px-6 py-3 rounded-full bg-[#0e1738] border-2 border-[#2563eb] shadow-[0_0_40px_rgba(37,99,235,0.8)] flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-[#3b82f6] animate-spin" />
            <span className="font-heading font-extrabold text-sm text-white">
              Mode Secret Activé ! 🎉 Félicitations !
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
