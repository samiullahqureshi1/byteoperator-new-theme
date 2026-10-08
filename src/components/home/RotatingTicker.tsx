'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useSound } from '@/components/layout/SoundProvider';

const rotatingWords = [
  'epic',
  'innovative',
  'delightful',
  'robust',
  'extraordinary',
  'original',
  'intelligent',
  'engaging',
  'beautiful',
  'secure',
  'world-class',
];

export const RotatingTicker: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { playClick } = useSound();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const currentWord = rotatingWords[index];

  return (
    <section className="py-32 sm:py-48 bg-[#eae8df] relative overflow-hidden border-t border-black/5">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 text-center relative z-10 flex flex-col items-center">
        {/* Rotating Headline */}
        <div className="flex flex-col items-center justify-center font-extrabold tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] text-[#111814] mb-14 select-none leading-none">
          <span className="text-[#111814]/40">Let&#x27;s make</span>
          <span className="text-[#111814]/70 mt-2">something</span>

          <div className="h-[1.25em] flex items-center justify-center overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#111814] underline decoration-[#111814]/20 underline-offset-8"
              >
                {currentWord}.
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Giant Magnetic CTA Button */}
        <MagneticButton
          onClick={playClick}
          className="group relative px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-[#111814] text-white font-extrabold text-lg sm:text-xl tracking-wide hover:bg-[#222a24] transition-all duration-500 shadow-2xl hover:scale-105"
        >
          <Link href="/contact" className="flex items-center gap-3">
            <span>Get in touch</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
};
