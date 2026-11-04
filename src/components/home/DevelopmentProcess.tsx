'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Milestone } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Requirements',
    description:
      'Understand your organization, workflows, users, existing systems, and project objectives.',
  },
  {
    step: '02',
    title: 'Solution Design',
    description:
      'Define the project scope, technical architecture, integration requirements, and implementation approach.',
  },
  {
    step: '03',
    title: 'Development & Integration',
    description:
      'Build the agreed application, automation, or connected system.',
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    description:
      'Evaluate functionality, permissions, integrations, and expected workflows before deployment.',
  },
  {
    step: '05',
    title: 'Support & Improvement',
    description:
      'Provide agreed maintenance, technical support, and future development.',
  },
];

const SECTION_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/Development_Process_Section_Image.png?v=1793803314';

export const DevelopmentProcess: React.FC = () => {
  const { playHover } = useSound();
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
          {/* Left Column: Narrative Content & 5 Process Steps */}
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
                <Milestone className="w-3 h-3 text-[#A880F0]" />
                OUR DEVELOPMENT PROCESS
              </span>
            </motion.div>

            {/* Main Headline with TextSplit character reveal */}
            <h2
              className="text-2xl sm:text-4xl lg:text-[36px] xl:text-[40px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-3"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              <TextSplit
                text="A Clear Process From Discovery to Deployment"
                stagger={0.012}
                delay={0.05}
              />
            </h2>

            {/* Introductory Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-[#0f1d07]/85 font-normal leading-relaxed mb-6"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              We follow a structured approach to understand your requirements, plan the solution, and deliver the agreed technology.
            </motion.p>

            {/* 5 Process Steps Divided List */}
            <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
              {processSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.2 + idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={playHover}
                  className="py-3.5 sm:py-4 flex items-start gap-3.5 sm:gap-4 group cursor-pointer transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 rounded-lg bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shrink-0 font-mono text-xs font-semibold text-[#0f1d07] group-hover:bg-[#111814] group-hover:text-white transition-colors duration-300 mt-0.5"
                  >
                    {item.step}
                  </motion.div>
                  <div className="flex-1">
                    <h3
                      className="text-sm sm:text-base font-medium text-[#0f1d07] tracking-tight leading-snug mb-1 group-hover:text-black transition-colors"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs sm:text-[13px] text-[#0f1d07]/75 leading-relaxed font-normal"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Complete 4:3 Diagram with Scroll Parallax */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full aspect-[4/3] group cursor-pointer"
            >
              <Image
                src={SECTION_IMAGE}
                alt="A Clear Process From Discovery to Deployment"
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
