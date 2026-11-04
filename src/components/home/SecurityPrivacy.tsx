'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Check } from 'lucide-react';
import { TextSplit } from '@/components/ui/TextSplit';

const securityConsiderations = [
  'Role-based access control and authentication.',
  'Encryption in transit and at rest.',
  'Secure API design and access management.',
  'Audit logging and activity monitoring.',
  'Data retention and access policies.',
  'Backup and recovery planning.',
  'Third-party service and vendor assessment.',
];

const SECTION_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/Security_Privacy_Section_Image.png?v=1793803531';

export const SecurityPrivacy: React.FC = () => {
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
                alt="Security and Privacy Considerations From the Start"
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
                <ShieldCheck className="w-3 h-3 text-[#A880F0]" />
                SECURITY & PRIVACY
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
                text="Security and Privacy Considerations From the Start"
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
              Healthcare technology can involve sensitive information, making security and privacy important considerations throughout the development process.
            </motion.p>

            {/* Considerations Subheader */}
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
                Depending on the project requirements, relevant technical considerations may include:
              </span>
            </motion.div>

            {/* Considerations Checklist with Staggered Entrance */}
            <ul className="space-y-2 mb-6">
              {securityConsiderations.map((item, idx) => (
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

            {/* Security Assessment & Regulatory Evaluation Callout Note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="p-3.5 sm:p-4 rounded-xl bg-black/[0.03] border-l-2 border-[#111814] text-xs sm:text-[13px] text-[#0f1d07]/80 leading-relaxed font-normal flex flex-col gap-2"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              <p>
                Healthcare projects must be evaluated against applicable legal, contractual, and regulatory requirements. Security responsibilities depend on the solution architecture, vendors, hosting environment, and each party&apos;s role.
              </p>
              <p className="font-medium text-[#0f1d07]">
                We define relevant security requirements during project discovery rather than making unsupported blanket compliance claims.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
