'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSound } from '@/components/layout/SoundProvider';

interface ClientItem {
  name: string;
  renderLogo: () => React.ReactNode;
}

const clientsList: ClientItem[] = [
  // Row 1
  {
    name: 'TechCrunch',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-[#070035]">
        <div className="bg-[#00d664] text-black font-black text-xs px-1.5 py-0.5 rounded-[3px] tracking-tight">
          TC
        </div>
        <span className="font-extrabold tracking-tight text-sm sm:text-base">TechCrunch</span>
      </div>
    ),
  },
  {
    name: 'Satterley',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#070035]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 9v11l8 2 8-2V9l-8-7zm0 3.5l5 4.3v7.4l-5 1.3-5-1.3V9.8l5-4.3z" />
        </svg>
        <span className="font-black tracking-widest text-xs sm:text-sm uppercase font-mono">
          SATTERLEY
        </span>
      </div>
    ),
  },
  {
    name: 'PayTo',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-[#070035]">
        <span className="text-base sm:text-lg font-black tracking-tight">Pay</span>
        <span className="bg-[#070035] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full">
          to
        </span>
      </div>
    ),
  },
  {
    name: 'Trails WA',
    renderLogo: () => (
      <div className="flex flex-col items-center gap-1 text-[#070035]">
        <div className="flex gap-0.5">
          <span className="w-2.5 h-1 bg-[#070035] rounded-full" />
          <span className="w-2.5 h-1 bg-[#070035] rounded-full translate-y-0.5" />
          <span className="w-2.5 h-1 bg-[#070035] rounded-full" />
        </div>
        <span className="font-bold text-xs tracking-wider uppercase">Trails WA</span>
      </div>
    ),
  },
  {
    name: 'Cancer Council WA',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#070035]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2a4 4 0 0 1 4 4c0 2-2 4-4 6-2-2-4-4-4-6a4 4 0 0 1 4-4z" opacity="0.8" />
          <path d="M22 12a4 4 0 0 1-4 4c-2 0-4-2-6-4 2-2 4-4 6-4a4 4 0 0 1 4 4z" opacity="0.8" />
          <path d="M12 22a4 4 0 0 1-4-4c0-2 2-4 4-6 2 2 4 4 4 6a4 4 0 0 1-4 4z" opacity="0.8" />
          <path d="M2 12a4 4 0 0 1 4-4c2 0 4 2 6 4-2 2-4 4-6 4a4 4 0 0 1-4-4z" opacity="0.8" />
        </svg>
        <div className="flex flex-col text-[10px] font-bold leading-tight uppercase">
          <span>Cancer</span>
          <span>Council WA</span>
        </div>
      </div>
    ),
  },

  // Row 2
  {
    name: 'SUSSEX',
    renderLogo: () => (
      <span
        className="font-serif tracking-[0.22em] text-sm sm:text-base font-semibold text-[#070035] uppercase"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        SUSSEX
      </span>
    ),
  },
  {
    name: 'The Hospital Research Foundation Group',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#070035]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" />
        </svg>
        <div className="flex flex-col text-[8.5px] font-semibold leading-tight text-[#070035]">
          <span>The Hospital Research</span>
          <span>Foundation Group</span>
        </div>
      </div>
    ),
  },
  {
    name: 'AgriFutures Australia',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#070035]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 0 18M12 3a9 9 0 0 0 0 18" />
        </svg>
        <div className="flex flex-col">
          <span className="font-bold text-xs sm:text-sm tracking-tight leading-none">AgriFutures</span>
          <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Australia</span>
        </div>
      </div>
    ),
  },
  {
    name: 'ARGYLE PINK DIAMONDS',
    renderLogo: () => (
      <div className="flex flex-col items-center text-center text-[#070035]">
        <span className="font-serif tracking-[0.18em] text-[11px] sm:text-xs font-semibold uppercase">
          ARGYLE PINK
        </span>
        <span className="text-[7.5px] tracking-[0.3em] font-sans text-zinc-500 uppercase">
          DIAMONDS
        </span>
      </div>
    ),
  },
  {
    name: 'Curtin University',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 bg-[#070035] text-white px-2.5 py-1 rounded">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="4" />
        </svg>
        <span className="text-[10px] sm:text-xs font-bold tracking-tight">Curtin University</span>
      </div>
    ),
  },

  // Row 3
  {
    name: 'Deloitte.',
    renderLogo: () => (
      <div className="flex items-baseline text-[#070035]">
        <span className="font-bold tracking-tight text-base sm:text-lg">Deloitte</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#86bc25] ml-0.5 inline-block" />
      </div>
    ),
  },
  {
    name: 'Fremantle Arts Centre',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#070035]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
        </svg>
        <div className="flex flex-col text-[8.5px] font-bold uppercase leading-tight">
          <span>FREMANTLE</span>
          <span>ARTS CENTRE</span>
        </div>
      </div>
    ),
  },
  {
    name: 'MACQUARIE University',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#070035]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 3.2L18 8v7.8L12 19l-6-3.2V8l6-2.8z" />
        </svg>
        <div className="flex flex-col">
          <span className="font-extrabold text-[10px] sm:text-xs uppercase tracking-tight leading-none">
            MACQUARIE
          </span>
          <span className="text-[8px] font-sans text-zinc-500 leading-tight">University</span>
        </div>
      </div>
    ),
  },
  {
    name: 'RYCHIGER',
    renderLogo: () => (
      <span className="font-black italic tracking-widest text-sm sm:text-base uppercase text-[#070035]">
        RYCHIGER
      </span>
    ),
  },
  {
    name: 'PENTANET',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#070035]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 6.5-3.5 10.5h-11L3 8.5 12 2zm0 3L6 9.3l2.3 7.2h7.4l2.3-7.2L12 5z" />
        </svg>
        <span className="font-bold tracking-widest text-[11px] sm:text-xs uppercase">
          PENTANET
        </span>
      </div>
    ),
  },

  // Row 4
  {
    name: 'SEVEN WEST MEDIA',
    renderLogo: () => (
      <div className="flex flex-col items-center text-[#070035]">
        <div className="flex items-center gap-1">
          <span className="text-base font-black italic">7</span>
          <span className="w-3.5 h-3.5 rounded-full bg-[#070035] text-white flex items-center justify-center text-[9px] font-bold">
            W
          </span>
        </div>
        <span className="text-[7.5px] font-bold tracking-widest text-[#070035]/80 uppercase">
          SEVEN WEST MEDIA
        </span>
      </div>
    ),
  },
  {
    name: 'National Breast Cancer Foundation',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#070035]">
        <svg width="18" height="22" viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2C8.5 2 6 4.5 6 8C6 11.5 8.5 15 12 18.5C15.5 15 18 11.5 18 8C18 4.5 15.5 2 12 2ZM12 20L4 26M12 20L20 26" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex flex-col text-[8px] font-bold leading-tight uppercase">
          <span>National</span>
          <span>Breast Cancer</span>
          <span>Foundation</span>
        </div>
      </div>
    ),
  },
  {
    name: 'BONFIRE',
    renderLogo: () => (
      <div className="flex flex-col items-center text-[#070035]">
        <svg width="20" height="14" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M4 14C4 8 8 3 12 3s8 5 8 11" strokeLinecap="round" />
          <path d="M8 14C8 10 10 7 12 7s4 3 4 7" strokeLinecap="round" />
        </svg>
        <span className="font-black text-[9px] tracking-widest uppercase mt-0.5">BONFIRE</span>
      </div>
    ),
  },
  {
    name: 'Cocos Keeling Islands',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-[#070035]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3">
          <circle cx="12" cy="12" r="8" />
        </svg>
        <div className="flex flex-col text-[8.5px] font-bold leading-tight uppercase">
          <span>Cocos Keeling</span>
          <span>Islands</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Children’s Hospital Foundation',
    renderLogo: () => (
      <div className="flex flex-col items-center text-[#070035]">
        <svg width="22" height="14" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M2 14C2 7 6.5 2 12 2s10 5 10 12" strokeLinecap="round" />
          <circle cx="12" cy="14" r="2" fill="currentColor" />
        </svg>
        <div className="flex flex-col items-center text-[7.5px] font-bold uppercase leading-tight mt-0.5">
          <span>Children’s</span>
          <span className="text-[6.5px] font-normal text-zinc-600">Hospital Foundation</span>
        </div>
      </div>
    ),
  },
];

export const ClientGrid: React.FC = () => {
  const { playHover } = useSound();

  return (
    <section className="relative w-full pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-28 md:pb-32 bg-[#D8E7EE] overflow-hidden select-none">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* Section Headline matching media_1791455820575.png */}
        <div className="max-w-4xl mb-12 sm:mb-16 md:mb-20">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.035em] leading-[1.12] text-[#070035]"
            style={{
              fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              fontWeight: 500,
              lineHeight: 1.12,
            }}
          >
            Since 2010 we’ve been working with amazing{' '}
            <span className="text-[#928ae7] transition-colors duration-300 hover:text-[#7f76e3] cursor-default">
              clients
            </span>{' '}
            to create meaningful impact and compelling experiences.
          </h2>
        </div>

        {/* 4x5 Client Logos Grid matching media_1791455820575.png */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
          {clientsList.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.45,
                delay: idx * 0.02,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.03 }}
              onMouseEnter={playHover}
              className="relative aspect-square rounded-[22px] sm:rounded-[26px] bg-white/45 hover:bg-white/85 border border-white/60 shadow-[0_4px_20px_rgba(7,0,53,0.03)] hover:shadow-[0_12px_32px_rgba(7,0,53,0.08)] flex items-center justify-center p-5 transition-all duration-300 cursor-pointer group"
              data-cursor="CLIENT"
            >
              <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {client.renderLogo()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
