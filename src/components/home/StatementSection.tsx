'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextSplit } from '@/components/ui/TextSplit';

interface ClientLogo {
  name: string;
  render: () => React.ReactNode;
}

const allClientLogos: ClientLogo[] = [
  // Set 1 (First 4)
  {
    name: 'RYCHIGER',
    render: () => (
      <span className="font-extrabold tracking-widest text-lg sm:text-xl font-mono uppercase text-white">
        RYCHIGER
      </span>
    ),
  },
  {
    name: 'National Breast Cancer Foundation',
    render: () => (
      <div className="flex items-center gap-2 text-white">
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 text-white/90">
          <path d="M12 2C8.5 2 6 4.5 6 8C6 11.5 8.5 15 12 18.5C15.5 15 18 11.5 18 8C18 4.5 15.5 2 12 2ZM12 20L4 26M12 20L20 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="flex flex-col text-[10px] sm:text-[11px] font-semibold leading-tight text-white/90 uppercase tracking-tight">
          <span>National</span>
          <span>Breast Cancer</span>
          <span>Foundation</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Curtin University',
    render: () => (
      <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md border border-white/20">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2"/>
          <path d="M7 6H17V9H10V11H16V14H10V18H7V6Z" fill="currentColor"/>
        </svg>
        <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
          Curtin University
        </span>
      </div>
    ),
  },
  {
    name: 'SEVEN WEST MEDIA',
    render: () => (
      <div className="flex flex-col items-center text-white">
        <div className="flex items-center gap-1">
          <span className="text-base sm:text-lg font-black italic">7</span>
          <span className="w-4 h-4 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[10px] font-bold">W</span>
        </div>
        <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-white/80 uppercase">
          SEVEN WEST MEDIA
        </span>
      </div>
    ),
  },

  // Set 2 (Next 4)
  {
    name: 'Cocos Keeling Islands',
    render: () => (
      <div className="flex items-center gap-2 text-white">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" className="text-white/90">
          <circle cx="12" cy="12" r="9"/>
        </svg>
        <div className="flex flex-col text-[10px] sm:text-[11px] font-bold leading-tight text-white uppercase tracking-tight">
          <span>Cocos Keeling</span>
          <span>Islands</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Tourism WA',
    render: () => (
      <div className="flex items-center gap-1.5 text-white">
        <span className="text-sm sm:text-base font-bold tracking-tight">Tourism</span>
        <span className="font-extrabold text-sm sm:text-base bg-white/20 px-1.5 py-0.5 rounded">WA</span>
      </div>
    ),
  },
  {
    name: 'PayTo',
    render: () => (
      <div className="flex items-center gap-1.5 text-white">
        <span className="text-lg sm:text-xl font-black italic tracking-tighter">Pay</span>
        <div className="w-5 h-5 rounded-full bg-white text-[#A880F0] flex items-center justify-center font-bold text-xs">
          To
        </div>
      </div>
    ),
  },
  {
    name: 'Deloitte',
    render: () => (
      <div className="flex items-center gap-1 text-white">
        <span className="text-lg sm:text-xl font-bold tracking-tight">Deloitte</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 ml-0.5" />
      </div>
    ),
  },
];

export const StatementSection: React.FC = () => {
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGroupIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentLogos = groupIndex === 0 ? allClientLogos.slice(0, 4) : allClientLogos.slice(4, 8);

  return (
    <section
      className="relative pt-12 sm:pt-16 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-16 overflow-hidden"
      style={{ backgroundColor: '#A880F0' }}
    >
      <div className="max-w-[1500px] mx-auto flex flex-col items-center text-center">
        {/* Main Statement Headline */}
        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.4vw] font-medium tracking-[-0.035em] leading-[1.08] text-white max-w-5xl mb-12 sm:mb-16"
          style={{
            fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
            fontWeight: 500,
          }}
        >
          <TextSplit
            text="We design, build and ship world-class digital products for forward-thinking brands."
            stagger={0.015}
          />
        </h2>

        {/* Partner Logos Animated Row (Tightly spaced, no extra empty gap) */}
        <div className="w-full min-h-[44px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 items-center justify-items-center"
            >
              {currentLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  {logo.render()}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
