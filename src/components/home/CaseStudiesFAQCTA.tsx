'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderKanban,
  HelpCircle,
  ArrowRight,
  Plus,
  Minus,
  Info,
  Calendar,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const caseStudyPillars = [
  {
    label: 'The Challenge',
    desc: 'Identifying the exact operational, communication, or technical bottlenecks.',
  },
  {
    label: 'The Solution Developed',
    desc: 'Architecting targeted software, voice agents, and custom workflow automations.',
  },
  {
    label: 'The Technology Involved',
    desc: 'Leveraging modern APIs, reliable cloud infrastructure, and integrated systems.',
  },
  {
    label: 'The Verified Results',
    desc: 'Delivering measurable reductions in repetitive work and improved patient access.',
  },
];

const faqs = [
  {
    q: '1. What healthcare AI solutions does Byte Operator provide?',
    a: "Byte Operator develops healthcare-focused AI automation, voice-agent workflows, custom software, and system integration solutions based on each organization's requirements.",
  },
  {
    q: '2. Can you build an AI receptionist for a medical practice?',
    a: 'Yes. We can scope AI voice-agent solutions for defined patient communication tasks, including routine inquiries, request capture, and call routing. Available features depend on the agreed implementation and connected systems.',
  },
  {
    q: '3. Can an AI voice agent schedule healthcare appointments?',
    a: 'Appointment scheduling can be included when the relevant scheduling platform supports the required integration and the workflow has been implemented and tested.',
  },
  {
    q: '4. Can you integrate with an EHR or EMR system?',
    a: 'Integration feasibility depends on the platform, available APIs, access permissions, vendor requirements, and data-exchange capabilities. We assess these requirements before confirming the project scope.',
  },
  {
    q: '5. What healthcare workflows can be automated?',
    a: 'Potential workflows include patient inquiry routing, appointment confirmations, reminders, intake processes, internal notifications, follow-up tasks, and data synchronization between supported applications.',
  },
  {
    q: '6. Do you develop custom healthcare software?',
    a: "Yes. We can scope custom web applications, SaaS platforms, portals, dashboards, and internal software around your organization's requirements.",
  },
  {
    q: '7. Do you work with small medical practices and clinics?',
    a: 'Our solutions can be scoped for medical practices, specialty clinics, and larger healthcare organizations. Project suitability and requirements are discussed during discovery.',
  },
  {
    q: '8. Are your healthcare solutions HIPAA compliant?',
    a: 'HIPAA requirements depend on the organization, data, services, and contractual responsibilities involved. We assess applicable technical and vendor requirements for each project and confirm responsibilities before implementation.',
  },
  {
    q: '9. How long does a healthcare software project take?',
    a: 'Project timelines depend on scope, integrations, complexity, data requirements, and testing. We establish a realistic implementation plan after discovery and technical assessment.',
  },
  {
    q: '10. Do you provide ongoing software support?',
    a: 'Yes. Maintenance, technical support, and further development can be included according to the agreed project and support requirements.',
  },
];

export const CaseStudiesFAQCTA: React.FC = () => {
  const { playHover, playClick } = useSound();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    playClick();
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      style={{ backgroundColor: '#f3f2eb' }}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden border-t border-black/[0.06]"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 space-y-20 sm:space-y-28 lg:space-y-36">
        {/* ============================================================== */}
        {/* SUBSECTION 1: CASE STUDIES */}
        {/* ============================================================== */}
        <div className="border-b border-black/10 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-4xl mb-10 sm:mb-14">
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
                <FolderKanban className="w-3 h-3 text-[#A880F0]" />
                CASE STUDIES
              </span>
            </motion.div>

            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              <TextSplit
                text="Engineering Solutions for Real Operational Challenges"
                stagger={0.012}
                delay={0.05}
              />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal mb-3"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Explore how software engineering, AI automation, and system integration can address practical business and technology requirements.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-xs sm:text-sm text-[#0f1d07]/65 leading-relaxed font-normal"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Each project should explain the challenge, the solution developed, the technology involved, and the verified results.
            </motion.p>
          </div>

          {/* 4 Pillars of a Byte Operator Project */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {caseStudyPillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                onMouseEnter={playHover}
                className="p-5 rounded-2xl bg-black/[0.025] border border-black/[0.08] hover:bg-black/[0.045] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span
                    className="text-sm font-medium text-[#0f1d07] tracking-tight"
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <p
                  className="text-xs text-[#0f1d07]/75 leading-relaxed font-normal"
                  style={{
                    fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Publishing note & CTA */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="p-3.5 sm:p-4 rounded-xl bg-black/[0.03] border-l-2 border-[#111814] text-xs sm:text-[13px] text-[#0f1d07]/80 leading-relaxed font-normal max-w-2xl flex items-start gap-2.5"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              <Info className="w-4 h-4 text-[#A880F0] shrink-0 mt-0.5" />
              <span>
                <strong>Publishing note:</strong> Feature genuine, approved client projects only. If no healthcare case study is available, use a clearly labelled solution demonstration rather than presenting it as a completed client implementation.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
            >
              <Link
                href="/work"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111814] text-white font-medium text-xs sm:text-sm hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl group shrink-0"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SUBSECTION 2: FREQUENTLY ASKED QUESTIONS */}
        {/* ============================================================== */}
        <div className="border-b border-black/10 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-4xl mb-10 sm:mb-14">
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
                <HelpCircle className="w-3 h-3 text-[#A880F0]" />
                FREQUENTLY ASKED QUESTIONS
              </span>
            </motion.div>

            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07]"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              <TextSplit
                text="Healthcare AI and Software Development FAQs"
                stagger={0.012}
                delay={0.05}
              />
            </h2>
          </div>

          {/* Interactive Accordion of 10 FAQs */}
          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    onMouseEnter={playHover}
                    className="w-full py-5 sm:py-6 flex items-start justify-between gap-4 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="text-base sm:text-lg lg:text-[19px] font-medium text-[#0f1d07] group-hover:text-black transition-colors leading-snug"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-[#0f1d07] group-hover:bg-[#111814] group-hover:text-white transition-colors duration-200">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="pb-6 text-sm sm:text-base text-[#0f1d07]/80 leading-relaxed font-normal max-w-4xl"
                          style={{
                            fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                            fontWeight: 400,
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* SUBSECTION 3: FINAL CALL TO ACTION */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-[#111814] text-white p-8 sm:p-12 lg:p-16 xl:p-20 overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#A880F0]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-4">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-white/90"
                style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
              >
                <Sparkles className="w-3 h-3 text-[#A880F0]" />
                FINAL CALL TO ACTION
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.035em] leading-[1.08] text-white mb-5"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              <TextSplit
                text="Let's Build Smarter Healthcare Technology"
                stagger={0.012}
                delay={0.05}
              />
            </h2>

            {/* Narrative Body */}
            <p
              className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed font-normal mb-3"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Whether you want to automate patient communication, connect existing systems, or develop custom healthcare software, Byte Operator can help you assess your requirements and define a practical engineering solution.
            </p>

            {/* Supporting Text */}
            <p
              className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal mb-8"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Let&apos;s discuss your challenges, explore the possibilities, and identify the right technology approach for your organization.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#111814] font-medium text-sm hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                <Calendar className="w-4 h-4 text-[#111814]" />
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-transparent text-white border border-white/20 font-medium text-sm hover:bg-white/10 transition-all duration-300 group"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                <MessageSquare className="w-4 h-4 text-white/80" />
                <span>Tell Us About Your Project</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
