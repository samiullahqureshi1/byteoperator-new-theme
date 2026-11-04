'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Check } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const saasServices = [
  'SaaS platforms and subscription-based applications.',
  'Custom web applications.',
  'Multi-user and role-based platforms.',
  'Administrative dashboards.',
  'Database-driven applications.',
  'API-connected digital products.',
  'Existing application enhancements and modernization.',
];

const SECTION_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/SaaS_Web_Apps_Section_Image.webp?v=1793802744';

export const SaaSWebApps: React.FC = () => {
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
          {/* Left Column: Narrative Content & Services List */}
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
                <Globe className="w-3 h-3 text-[#A880F0]" />
                SAAS & WEB APPLICATION DEVELOPMENT
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
                text="SaaS and Web Applications Designed to Scale"
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
              className="text-sm sm:text-base text-[#0f1d07]/85 font-normal leading-relaxed mb-5"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Building a successful digital product requires more than a functional interface. It needs a reliable architecture, secure access, maintainable code, and a clear path for future development.
            </motion.p>

            {/* Services Subheader */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mb-3"
            >
              <span
                className="text-xs sm:text-[13px] font-medium text-[#0f1d07] tracking-tight uppercase"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                We help businesses design and develop:
              </span>
            </motion.div>

            {/* Services Checklist with Staggered Entrance */}
            <ul className="space-y-2 mb-5">
              {saasServices.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0f1d07]/80 leading-snug cursor-default group"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 450,
                      damping: 22,
                      delay: 0.28 + idx * 0.05,
                    }}
                    className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200"
                  >
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </motion.span>
                  <span
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Approach Callout Note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="p-3.5 sm:p-4 rounded-xl bg-black/[0.03] border-l-2 border-[#111814] text-xs sm:text-[13px] text-[#0f1d07]/80 leading-relaxed font-normal mb-6"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              From product planning to development and deployment, we build around your technical requirements and business objectives.
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.72 }}
            >
              <Link
                href="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111814] text-white font-medium text-xs sm:text-sm hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl group"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                <span>Build Your Application</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
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
                alt="SaaS and Web Applications Designed to Scale"
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
