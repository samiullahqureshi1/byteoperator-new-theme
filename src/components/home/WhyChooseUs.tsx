'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Award,
  Layers,
  SlidersHorizontal,
  Network,
  Code2,
  TrendingUp,
} from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const pillars = [
  {
    title: 'AI and Software Under One Roof',
    description:
      'Bring automation, custom application development, and system integration together through one engineering partner.',
    icon: Layers,
  },
  {
    title: 'Solutions Built Around Your Workflow',
    description:
      'We begin with your operational requirements rather than forcing your organization into a generic solution.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Connected Technology',
    description:
      'Develop applications and workflows that work together through suitable APIs and integrations.',
    icon: Network,
  },
  {
    title: 'Practical Engineering',
    description:
      'Select technologies and architectures based on your requirements, project scope, and long-term goals.',
    icon: Code2,
  },
  {
    title: 'Built for Future Growth',
    description:
      'Develop solutions with maintainability, future enhancements, and changing operational needs in mind.',
    icon: TrendingUp,
  },
];

const SECTION_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/Why_Choose_Byte_Operator_Image.png?v=1793803162';

export const WhyChooseUs: React.FC = () => {
  const { playHover } = useSound();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#f3f2eb' }}
      className="py-14 sm:py-20 lg:py-28 relative overflow-hidden border-t border-black/[0.06]"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Visual Column: Complete 4:3 Diagram with subtle scroll parallax (Left side on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-7 flex items-center justify-center"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative w-full aspect-[4/3] group will-change-transform cursor-pointer"
            >
              <Image
                src={SECTION_IMAGE}
                alt="More Than a Software Vendor. Your Healthcare Technology Partner."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
            </motion.div>
          </motion.div>

          {/* Content Column (Right side on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-center">
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
                <Award className="w-3 h-3 text-[#A880F0]" />
                WHY CHOOSE BYTE OPERATOR?
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
                text="More Than a Software Vendor. Your Healthcare Technology Partner."
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
              Choosing the right technology partner means finding a team that understands both your operational challenges and the engineering required to address them.
            </motion.p>

            {/* 5 Pillars Divided List */}
            <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
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
                    className="py-3 sm:py-3.5 flex items-start gap-3.5 group cursor-pointer transition-colors"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -4, 4, 0] }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-lg bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shrink-0 text-[#0f1d07] group-hover:bg-[#111814] group-hover:text-white transition-colors duration-300 mt-0.5"
                    >
                      <Icon className="w-3.5 h-3.5" />
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
