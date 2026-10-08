'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSound } from '@/components/layout/SoundProvider';

interface CapabilityGroup {
  title: string;
  items: string[];
}

const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Strategy & UX',
    items: [
      'Digital Strategy',
      'User Research',
      'User Journey Mapping',
      'Information Architecture',
      'Wireframing',
    ],
  },
  {
    title: 'Design',
    items: [
      'Interaction Design',
      'User Interface Design',
      'Design Systems',
      'Prototyping & Animation',
      'Accessibility',
    ],
  },
  {
    title: 'Development',
    items: [
      'Websites',
      'eCommerce',
      'Web Applications',
      'Mobile Apps (iOS & Android)',
      'Platform Integrations',
    ],
  },
  {
    title: 'Technology',
    items: [
      'Vue & React.js',
      'Headless Content Management',
      'WordPress & WooCommerce',
      'Laravel',
      'Shopify',
    ],
  },
  {
    title: 'Optimisation',
    items: [
      'Website / App Review',
      'Performance Optimisation',
      'Conversion Optimisation',
      'A/B Testing',
      'Ongoing Enhancements',
    ],
  },
  {
    title: 'Support',
    items: [
      'Project Management',
      'Website Hosting',
      'Website Maintenance',
      'Performance & Security',
      '3rd Party Integrations',
    ],
  },
];

const introWords = [
  { text: 'Our' },
  { text: 'capabilities', accent: true },
  { text: 'are' },
  { text: 'centred' },
  { text: 'around' },
  { text: 'our' },
  { text: 'ability' },
  { text: 'to' },
  { text: 'deliver' },
  { text: 'world-class' },
  { text: 'websites' },
  { text: 'and' },
  { text: 'apps.' },
  { text: 'We’re' },
  { text: '100%' },
  { text: 'in-house' },
  { text: 'and' },
  { text: 'work' },
  { text: 'end-to-end,' },
  { text: 'ensuring' },
  { text: 'each' },
  { text: 'project' },
  { text: 'is' },
  { text: 'delivered' },
  { text: 'to' },
  { text: 'the' },
  { text: 'highest' },
  { text: 'standard.' },
];

export const AboutCapabilities: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { playHover } = useSound();

  // Scroll-linked background color transition:
  // Starts at #D8E7EE (matching ClientGrid above it),
  // smoothly morphs into #3899ea as user scrolls down into the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'start 15%'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#D8E7EE', '#3899ea']
  );

  // Accent purple morphs to a brighter violet on the rich blue
  const accentColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#928ae7', '#b49fff']
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative w-full pt-16 sm:pt-24 lg:pt-32 pb-24 sm:pb-36 lg:pb-44 overflow-hidden select-none transition-colors duration-150"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* Intro Headline matching media_1791456122427.png & media_1791456129148.png */}
        <div className="max-w-[1360px]">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.65rem] font-medium leading-[1.12] tracking-[-0.035em] text-[#070035]"
            style={{
              fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              fontWeight: 500,
              lineHeight: 1.12,
            }}
          >
            {introWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.015,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word.accent ? (
                  <motion.span
                    style={{ color: accentColor }}
                    className="font-medium inline-block transition-colors duration-200"
                  >
                    {word.text}
                  </motion.span>
                ) : (
                  <span className="text-[#070035]">{word.text}</span>
                )}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* 6 Capabilities Columns matching exact 3x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20 xl:gap-x-28 gap-y-12 sm:gap-y-16 lg:gap-y-20 mt-16 sm:mt-24 lg:mt-32">
          {capabilityGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, x: -24, y: 12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: groupIdx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col"
            >
              <h3
                className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#070035] mb-5 sm:mb-6"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                }}
              >
                {group.title}
              </h3>
              <ul className="flex flex-col space-y-2.5 sm:space-y-3">
                {group.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    onMouseEnter={playHover}
                    className="text-base sm:text-lg text-[#070035]/80 hover:text-[#070035] hover:translate-x-1 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
