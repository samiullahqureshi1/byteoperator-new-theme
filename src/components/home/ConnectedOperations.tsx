'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Workflow, ShieldCheck } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const operationalSteps = [
  {
    step: '01',
    title: 'Patient Contact',
    description:
      'A patient contacts the practice through a supported communication channel.',
  },
  {
    step: '02',
    title: 'AI Communication',
    description:
      'An AI agent handles approved routine inquiries and captures relevant information.',
  },
  {
    step: '03',
    title: 'Workflow Automation',
    description:
      'Automated processes trigger the appropriate administrative actions based on agreed rules.',
  },
  {
    step: '04',
    title: 'System Integration',
    description:
      'Relevant information moves between supported applications through configured integrations.',
  },
  {
    step: '05',
    title: 'Human Handover',
    description:
      'Requests requiring personal attention are routed to the appropriate staff member.',
  },
  {
    step: '06',
    title: 'Follow-Up',
    description:
      'Approved reminders, notifications, and follow-up tasks are triggered according to the configured workflow.',
  },
];

const SECTION_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/Connected_Operations_Section_Image.png?v=1793802992';

export const ConnectedOperations: React.FC = () => {
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
          {/* Left Column: Narrative Content & 6 Step Pipeline */}
          <div className="lg:col-span-6 flex flex-col justify-center">
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
                <Workflow className="w-3 h-3 text-[#A880F0]" />
                CONNECTED HEALTHCARE OPERATIONS
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
                text="From Patient Communication to Connected Healthcare Operations"
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
              className="text-sm sm:text-base text-[#0f1d07]/80 leading-relaxed font-normal mb-6"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Healthcare automation is most effective when individual processes work together. We design connected workflows that help manage requests from the first patient interaction through to the appropriate application or team member.
            </motion.p>

            {/* 6 Sequential Operations Steps in 2-column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-6">
              {operationalSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.2 + idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={playHover}
                  className="p-3.5 sm:p-4 rounded-xl bg-black/[0.025] border border-black/[0.08] hover:bg-black/[0.045] transition-all duration-200 cursor-pointer group flex flex-col justify-start"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      className="px-2 py-0.5 rounded-md bg-black/[0.05] border border-black/[0.08] text-[11px] font-mono font-semibold text-[#0f1d07] group-hover:bg-[#111814] group-hover:text-white transition-colors duration-300"
                    >
                      {item.step}
                    </span>
                    <h3
                      className="text-sm sm:text-[15px] font-medium text-[#0f1d07] tracking-tight leading-snug group-hover:text-black transition-colors"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-xs text-[#0f1d07]/75 leading-relaxed font-normal"
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Governance & Human Oversight Callout Note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-3.5 sm:p-4 rounded-xl bg-black/[0.03] border-l-2 border-[#111814] text-xs sm:text-[13px] text-[#0f1d07]/80 leading-relaxed font-normal flex items-start gap-3"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Each solution is scoped around the organization&apos;s systems, policies, and operational requirements. Human oversight remains essential for requests requiring staff judgment or clinical attention.
              </span>
            </motion.div>
          </div>

          {/* Right Column: Complete 4:3 Diagram with Scroll Parallax */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full aspect-[4/3] group cursor-pointer"
            >
              <Image
                src={SECTION_IMAGE}
                alt="From Patient Communication to Connected Healthcare Operations"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain transition-transform duration-700 ease-out"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
