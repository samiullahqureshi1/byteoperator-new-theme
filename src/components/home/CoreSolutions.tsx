'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, Code2, Network, Cloud, Sparkles } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const solutions = [
  {
    title: 'AI Agents & Workflow Automation',
    description:
      'Automate routine patient communication and administrative processes through intelligent, connected workflows.',
    icon: Bot,
  },
  {
    title: 'Custom Healthcare Software',
    description:
      'Develop web applications, SaaS platforms, portals, and internal tools tailored to your business requirements.',
    icon: Code2,
  },
  {
    title: 'Healthcare System Integration',
    description:
      'Connect supported healthcare platforms and business applications through APIs and structured data workflows.',
    icon: Network,
  },
  {
    title: 'Cloud & Infrastructure Engineering',
    description:
      'Build and maintain the technical infrastructure needed to support reliable digital applications and future growth.',
    icon: Cloud,
  },
];

const SECTION_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/Core_Solutions_Section_Rounded.webp?v=1793788523';

export const CoreSolutions: React.FC = () => {
  const { playHover, playClick } = useSound();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#f3f2eb' }}
      className="py-14 sm:py-20 lg:py-28 relative overflow-hidden border-t border-black/[0.06]"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Compact Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07]"
                style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
              >
                <Sparkles className="w-3 h-3 text-[#A880F0]" />
                CORE SOLUTIONS
              </span>
            </motion.div>

            {/* Main Headline with TextSplit character reveal animation */}
            <h2
              className="text-2xl sm:text-4xl lg:text-[36px] xl:text-[40px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-3"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              <TextSplit
                text="Healthcare AI and Software Solutions Built Around Your Operations"
                stagger={0.012}
                delay={0.05}
              />
            </h2>

            {/* Introductory Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal mb-6"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              We bring AI automation, software engineering, and system integration together to help healthcare organizations improve the way their operations work.
            </motion.p>

            {/* 4 Core Solutions Compact List with Staggered Entrance */}
            <div className="flex flex-col divide-y divide-black/10 border-y border-black/10 mb-6">
              {solutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.25 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseEnter={playHover}
                    className="py-3.5 sm:py-4 flex items-start gap-3.5 sm:gap-4 group transition-colors duration-200 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -4, 4, 0] }}
                      transition={{ duration: 0.3 }}
                      className="w-9 h-9 rounded-xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shrink-0 text-[#0f1d07] group-hover:bg-[#111814] group-hover:text-white transition-colors duration-300 mt-0.5 shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className="text-base sm:text-lg lg:text-[19px] font-medium text-[#0f1d07] tracking-[-0.02em] leading-snug mb-1 group-hover:text-black transition-colors"
                        style={{
                          fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                          fontWeight: 500,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal"
                        style={{
                          fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                          fontWeight: 400,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/expertise"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111814] text-white font-medium text-xs sm:text-sm hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl group"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Complete 4:3 Diagram with Parallax & Smooth Float */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full aspect-[4/3] group cursor-pointer"
            >
              <Image
                src={SECTION_IMAGE}
                alt="Healthcare AI and Software Solutions Architecture"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain transition-transform duration-700 ease-out"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
