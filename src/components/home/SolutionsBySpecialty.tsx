'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaStethoscope,
  FaTooth,
  FaSpa,
  FaEye,
  FaHeartPulse,
  FaPlus,
} from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const specialties = [
  {
    title: 'Medical Practices',
    description:
      'Patient communication, appointment workflows, intake processes, and administrative automation.',
    icon: FaStethoscope,
  },
  {
    title: 'Dental Practices',
    description:
      'Patient inquiries, appointment coordination, follow-ups, and connected practice workflows.',
    icon: FaTooth,
  },
  {
    title: 'Dermatology & Aesthetic Clinics',
    description:
      'Consultation inquiries, patient communication, appointment requests, and administrative automation.',
    icon: FaSpa,
  },
  {
    title: 'Ophthalmology Clinics',
    description:
      'Patient communication, appointment coordination, and connected administrative processes.',
    icon: FaEye,
  },
  {
    title: 'Primary Care Practices',
    description:
      'Patient access workflows, routine inquiries, intake processes, and administrative task automation.',
    icon: FaHeartPulse,
  },
  {
    title: 'Other Healthcare Specialties',
    description:
      'Custom technology solutions designed around your specialty, systems, and operational requirements.',
    icon: FaPlus,
  },
];

const SECTION_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/Solutions_by_Specialty_Image.png?v=1793802329';

export const SolutionsBySpecialty: React.FC = () => {
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
          {/* Left Column: Narrative Content & 6 Specialty Cards */}
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
                <FaStethoscope className="w-3 h-3 text-[#A880F0]" />
                SOLUTIONS BY SPECIALTY
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
                text="Healthcare Technology Tailored to Your Medical Specialty"
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
              Different healthcare specialties have different patient communication, administrative, and technology requirements. We develop solutions around the workflows and operational needs of each organization.
            </motion.p>

            {/* 6 Specialty Cards in 2-column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-6">
              {specialties.map((item, idx) => {
                const Icon = item.icon;
                return (
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
                      <div className="w-7 h-7 rounded-lg bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shrink-0 text-[#0f1d07] group-hover:bg-[#111814] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
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
                href="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111814] text-white font-medium text-xs sm:text-sm hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl group"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                <span>Find a Solution for Your Practice</span>
                <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
            className="lg:col-span-6 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full aspect-[4/3] group cursor-pointer"
            >
              <Image
                src={SECTION_IMAGE}
                alt="Healthcare Technology Tailored to Your Medical Specialty"
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
