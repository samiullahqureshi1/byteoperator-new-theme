'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';

export const PeopleFirst: React.FC = () => {
  const { playHover, playClick } = useSound();

  return (
    <section
      style={{ backgroundColor: '#f3f2eb' }}
      className="py-20 sm:py-28 lg:py-36 relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Top Headline: Great work for great [smiley] people. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h2
            className="text-5xl sm:text-7xl lg:text-[5.5vw] font-medium tracking-[-0.035em] leading-[1.04] text-[#0f1d07]"
            style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
          >
            Great work for<br />
            great{' '}
            <span className="inline-flex items-center justify-center align-middle mx-1 sm:mx-2 w-[0.88em] h-[0.88em] rounded-full border-[3px] sm:border-[4px] border-[#0f1d07] relative -top-[0.04em]">
              <svg
                className="w-[68%] h-[68%] text-[#0f1d07]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="15.5" cy="9.5" r="1.5" fill="currentColor" stroke="none" />
                <path d="M7.5 14.5C8.8 17.2 15.2 17.2 16.5 14.5" />
              </svg>
            </span>{' '}
            people.
          </h2>
        </motion.div>

        {/* Two-Column Grid: Left Narrative & Metrics, Right Team Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative, CTA Button, and 3 Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="space-y-4 text-[#0f1d07]/85 text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                We put people first, understanding that a well-crafted product significantly impacts the lives of those who use it. By empowering users, we&apos;re able to solve unique problems, accelerate progress and unlock potential for our clients.
              </p>
              <p>
                Our independent spirit drives our creative energy and approach to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.
              </p>
            </div>

            {/* About Us CTA Button */}
            <div className="mt-6 mb-12 sm:mb-16">
              <Link
                href="/about"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f1d07] hover:bg-[#1a2e10] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md group"
              >
                <span>About Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#48c774] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* 3 Metric Counters separated by horizontal lines */}
            <div className="w-full max-w-xl">
              {/* Stat 1: 100% */}
              <div className="flex items-center py-6 sm:py-7 border-t border-black/15">
                <span className="w-36 sm:w-44 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0f1d07] shrink-0">
                  100%
                </span>
                <span className="text-sm sm:text-base text-[#0f1d07] font-medium leading-snug">
                  In-house &<br />independent
                </span>
              </div>

              {/* Stat 2: 15 */}
              <div className="flex items-center py-6 sm:py-7 border-t border-black/15">
                <span className="w-36 sm:w-44 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0f1d07] shrink-0">
                  15
                </span>
                <span className="text-sm sm:text-base text-[#0f1d07] font-medium leading-snug">
                  Years crafting digital<br />experiences
                </span>
              </div>

              {/* Stat 3: 80+ */}
              <div className="flex items-center py-6 sm:py-7 border-t border-black/15">
                <span className="w-36 sm:w-44 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0f1d07] shrink-0">
                  80+
                </span>
                <span className="text-sm sm:text-base text-[#0f1d07] font-medium leading-snug">
                  Awards from AWA,<br />FWA, and Awwwards
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full Portrait Team Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative w-full aspect-[4/4.3] sm:aspect-[4/4.1] lg:aspect-[4/4.4] rounded-2xl sm:rounded-3xl lg:rounded-[36px] overflow-hidden shadow-2xl bg-black/5">
              <Image
                src="https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/humaanabout-286282_OoNkAqIKe.jpg?tr=w-1400,h-1500,dpr-2,f-webp,q-85"
                alt="Byte Operator Studio Team"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
                className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
