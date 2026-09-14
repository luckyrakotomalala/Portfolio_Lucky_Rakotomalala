import { useState, useEffect, useCallback, useRef } from 'react';
import { PageId } from '../types';
import { PAGES } from '../data/portfolioData';

export function usePageNavigation() {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  const goToPage = useCallback((index: number) => {
    if (index < 0 || index >= PAGES.length) return;
    setDirection(index > currentPageIndex ? 'next' : 'prev');
    setCurrentPageIndex(index);
  }, [currentPageIndex]);

  const goToPageId = useCallback((id: PageId) => {
    const targetIdx = PAGES.findIndex((p) => p.id === id);
    if (targetIdx !== -1) {
      goToPage(targetIdx);
    }
  }, [goToPage]);

  const nextPage = useCallback(() => {
    if (currentPageIndex < PAGES.length - 1) {
      goToPage(currentPageIndex + 1);
    }
  }, [currentPageIndex, goToPage]);

  const prevPage = useCallback(() => {
    if (currentPageIndex > 0) {
      goToPage(currentPageIndex - 1);
    }
  }, [currentPageIndex, goToPage]);

  // Handle Wheel Scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't intercept scroll if inside a scrollable detail modal / container
      const target = e.target as HTMLElement;
      if (target.closest('.allow-scroll')) return;

      if (isScrolling.current) return;
      if (Math.abs(e.deltaY) < 20) return;

      isScrolling.current = true;
      if (e.deltaY > 0) {
        nextPage();
      } else {
        prevPage();
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextPage, prevPage]);

  // Handle Keyboard Arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage]);

  // Handle Touch Swipe
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.allow-scroll')) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      if (Math.abs(diffY) > 50) {
        if (diffY > 0) {
          nextPage();
        } else {
          prevPage();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextPage, prevPage]);

  return {
    currentPage: PAGES[currentPageIndex],
    currentPageIndex,
    direction,
    goToPage,
    goToPageId,
    nextPage,
    prevPage,
    totalPages: PAGES.length,
  };
}
