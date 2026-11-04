'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';

const rotatingWords = [
  'delightful',
  'epic',
  'innovative',
  'robust',
  'extraordinary',
  'original',
  'intelligent',
  'engaging',
  'beautiful',
  'secure',
  'world-class',
];

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const { playHover, playClick } = useSound();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  if (pathname === '/contact') {
    return null;
  }

  const currentWord = rotatingWords[index];

  return (
    <footer className="relative bg-white pt-24 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 overflow-hidden text-[#0f1d07]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Main Huge Headline: Let's make -> something delightful */}
        <Link
          href="/contact"
          onMouseEnter={playHover}
          onClick={playClick}
          className="group block select-none focus:outline-none"
        >
          <h2
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] font-medium tracking-[-0.035em] leading-[0.98] text-[#0f1d07]"
            style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
          >
            <span className="inline-flex items-center">
              <span>Let&apos;s make</span>
              <span className="inline-flex items-center text-[#48c774] ml-4 sm:ml-8 group-hover:translate-x-4 transition-transform duration-300 ease-out">
                <svg
                  className="w-[0.75em] h-[0.75em]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="13 5 20 12 13 19" />
                </svg>
              </span>
            </span>
            <br />
            <span>something </span>
            <span className="inline-block relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -35, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </Link>

        {/* Global Contact & Presence (Single email, no physical address) */}
        <div className="mt-20 sm:mt-28 lg:mt-36 mb-16 sm:mb-24 text-[15px] sm:text-base">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-semibold text-[#0f1d07] mb-2.5">
              <Globe className="w-4 h-4 text-[#0f1d07] stroke-[2]" />
              <span>We work globally</span>
            </div>
            <Link
              href="/contact"
              onMouseEnter={playHover}
              onClick={playClick}
              className="text-[#0f1d07] hover:text-[#48c774] transition-colors mb-1.5 font-normal flex items-center gap-1 group w-fit"
            >
              <span>Submit a brief</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="mailto:info@byteoperator.com"
              onMouseEnter={playHover}
              className="text-[#0f1d07] font-semibold text-base sm:text-lg hover:text-[#48c774] transition-colors w-fit"
            >
              info@byteoperator.com
            </a>
          </div>
        </div>

        {/* Bright Light Green Divider Line */}
        <div className="w-full border-t border-[#86efac] mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs sm:text-sm text-[#0f1d07]/60 font-medium">
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            {/* Byte Operator Logo Wordmark */}
            <Link
              href="/"
              onMouseEnter={playHover}
              onClick={playClick}
              className="text-base sm:text-lg font-medium tracking-tight text-[#0f1d07] focus:outline-none flex items-center"
            >
              <span className="font-medium tracking-[0.06em]">Byte</span>
              <span className="font-normal opacity-45 tracking-[0.06em]">operator</span>
            </Link>

            <span>© 2026</span>

            <Link
              href="/privacy"
              onMouseEnter={playHover}
              className="hover:text-[#0f1d07] underline underline-offset-4 transition-colors"
            >
              Privacy
            </Link>

            <Link
              href="/about"
              onMouseEnter={playHover}
              className="hover:text-[#0f1d07] underline underline-offset-4 transition-colors"
            >
              Byte Operator &amp; AI
            </Link>
          </div>

          {/* Back to top smooth anchor */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onMouseEnter={playHover}
            className="text-xs uppercase tracking-wider text-[#0f1d07]/50 hover:text-[#0f1d07] transition-colors font-mono"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
