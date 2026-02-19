'use client';

import Image from 'next/image';
import { useEffect, useCallback, useState } from 'react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [isEntering, setIsEntering] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsEntering(false), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  const goTo = useCallback((index: number, dir: 'left' | 'right') => {
    if (isTransitioning) return;
    setDirection(dir);
    setIsTransitioning(true);
    setTimeout(() => {
      onNavigate(index);
      setDirection(dir === 'left' ? 'right' : 'left');
      setTimeout(() => {
        setDirection(null);
        setIsTransitioning(false);
      }, 50);
    }, 250);
  }, [onNavigate, isTransitioning]);

  const goPrev = useCallback(() => {
    const prev = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    goTo(prev, 'left');
  }, [currentIndex, images.length, goTo]);

  const goNext = useCallback(() => {
    const next = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    goTo(next, 'right');
  }, [currentIndex, images.length, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, goPrev, goNext]);

  const getImageTransform = () => {
    if (isEntering) return 'scale(0.85) translateX(0)';
    if (isExiting) return 'scale(0.85) translateX(0)';
    if (direction === 'left') return 'scale(0.95) translateX(-60px)';
    if (direction === 'right') return 'scale(0.95) translateX(60px)';
    return 'scale(1) translateX(0)';
  };

  const getImageOpacity = () => {
    if (isEntering || isExiting) return 0;
    if (direction) return 0;
    return 1;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 transition-opacity duration-300"
        style={{ opacity: isEntering || isExiting ? 0 : 1 }}
      />

      {/* Close button */}
      <button
        className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors"
        onClick={handleClose}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 text-white/50 text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous arrow */}
      <button
        className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full h-full mx-16"
        style={{
          transform: getImageTransform(),
          opacity: getImageOpacity(),
          transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 250ms ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 85vw"
        />
      </div>
    </div>
  );
}
