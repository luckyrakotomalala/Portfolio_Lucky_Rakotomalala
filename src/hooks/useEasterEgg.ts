import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export function useEasterEgg() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [typedString, setTypedString] = useState('');
  const [isSecretActive, setIsSecretActive] = useState(false);

  const triggerCelebration = () => {
    setIsSecretActive(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#4ade80', '#ffffff', '#10b981'],
    });

    setTimeout(() => {
      setIsSecretActive(false);
    }, 5000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      // Konami Check
      if (e.key.toLowerCase() === KONAMI_CODE[konamiIndex].toLowerCase()) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === KONAMI_CODE.length) {
          triggerCelebration();
          setKonamiIndex(0);
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0);
      }

      // Word Check ('hello')
      const newTyped = (typedString + e.key.toLowerCase()).slice(-5);
      setTypedString(newTyped);
      if (newTyped === 'hello') {
        triggerCelebration();
        setTypedString('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex, typedString]);

  return { isSecretActive, triggerCelebration };
}
