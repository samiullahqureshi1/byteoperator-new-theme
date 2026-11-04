'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PhoneCall, Check } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const capabilities = [
  'Inbound call answering and routine practice inquiries.',
  'Appointment requests and scheduling workflows.',
  'Appointment rescheduling through supported systems.',
  'Patient information and inquiry collection.',
  'Call routing and human team handover.',
  'Appointment reminders and approved follow-up calls.',
  'Structured conversation records and notifications.',
];

const SECTION_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/AI_Voice_Agents_Section_Rounded.png?v=1793788739';

export const AIVoiceAgents: React.FC = () => {
  const { playHover, playClick } = useSound();
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
          {/* Visual Column: Complete 4:3 Diagram with gentle scroll parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-7 flex items-center justify-center"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative w-full aspect-[4/3] group will-change-transform"
            >
              <Image
                src={SECTION_IMAGE}
                alt="AI Voice Agents for Healthcare Patient Communication"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
            </motion.div>
          </motion.div>

          {/* Content Column */}
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
                <PhoneCall className="w-3 h-3 text-[#A880F0]" />
                AI VOICE AGENTS
              </span>
            </motion.div>

            {/* Main Headline with character/word staggered reveal */}
            <h2
              className="text-2xl sm:text-4xl lg:text-[36px] xl:text-[40px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-3"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              <TextSplit
                text="AI Voice Agents for Healthcare Patient Communication"
                stagger={0.012}
                delay={0.05}
              />
            </h2>

            {/* Sub-lead Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-[#0f1d07]/90 font-medium leading-relaxed mb-2"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Help patients connect with your practice through intelligent voice-agent solutions designed around your communication workflows.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal mb-5"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Byte Operator develops AI voice-agent systems that can support routine patient interactions, capture requests, and route conversations to the appropriate team members.
            </motion.p>

            {/* Capabilities Header */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="mb-3"
            >
              <span
                className="text-xs sm:text-[13px] font-medium text-[#0f1d07] tracking-tight uppercase"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                Depending on the implementation and connected systems, capabilities can include:
              </span>
            </motion.div>

            {/* Capabilities Check List with Staggered Slide & Spring Pop */}
            <ul className="space-y-2 mb-5">
              {capabilities.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.28 + idx * 0.05,
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
                      delay: 0.3 + idx * 0.05,
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
              Our approach focuses on making patient communication more accessible while keeping your team involved whenever human assistance is required.
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.72 }}
            >
              <Link
                href="/expertise"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111814] text-white font-medium text-xs sm:text-sm hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl group"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                <span>Explore AI Voice Agents</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
