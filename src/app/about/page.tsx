'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutGallery } from '@/components/about/AboutGallery';
import { ClientGrid } from '@/components/about/ClientGrid';
import { AboutCapabilities } from '@/components/about/AboutCapabilities';
import { AboutAwards } from '@/components/about/AboutAwards';
import { useSound } from '@/components/layout/SoundProvider';

const statementWords = [
  { text: 'Human', accent: true },
  { text: 'experiences', accent: true },
  { text: 'are' },
  { text: 'the' },
  { text: 'foundation' },
  { text: 'of' },
  { text: 'everything' },
  { text: 'we' },
  { text: 'do' },
  { text: '–' },
  { text: 'client' },
  { text: 'relationships,' },
  { text: 'team' },
  { text: 'collaboration' },
  { text: 'and' },
  { text: 'an' },
  { text: 'unwavering' },
  { text: 'focus' },
  { text: 'on' },
  { text: 'the' },
  { text: 'end' },
  { text: 'user.' },
  { text: 'This' },
  { text: 'philosophy' },
  { text: 'is' },
  { text: 'in' },
  { text: 'our' },
  { text: 'name,' },
  { text: 'our' },
  { text: 'core' },
  { text: 'values' },
  { text: 'and' },
  { text: 'underpins' },
  { text: 'our' },
  { text: 'approach' },
  { text: 'to' },
  { text: 'every' },
  { text: 'engagement.' },
];

export default function AboutPage() {
  const { playHover, playClick } = useSound();

  return (
    <div className="relative w-full bg-[#f3f2eb] text-[rgb(15,29,7)] selection:bg-[#97c2bb] selection:text-black">
      {/* 
        First Section: Exact match to user-provided reference image
        - Mint (#97c2bb) background
        - Large white Neue Montreal headline "Digital Products."
        - Team photo with the yellow umbrella and man peering out at bottom-right
        - Parallax scroll depth and cursor interaction
      */}
      <AboutHero />

      {/* 
        Human Experiences Statement Section:
        Exact match to user's uploaded reference image (media_1791455072535.png)
        - Soft icy blue background (#D8E7EE)
        - Words animate smoothly into view on scroll
        - "Human experiences" in #928ae7
        - Remainder in deep navy #070035
      */}
      <section className="relative pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 bg-[#D8E7EE] overflow-hidden select-none">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <p
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#070035] max-w-[1440px]"
            style={{
              fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              fontWeight: 500,
              lineHeight: 1.08,
            }}
          >
            {statementWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.016,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className={`inline-block mr-[0.26em] transition-colors duration-200 ${
                  word.accent
                    ? 'text-[#928ae7] hover:text-[#7f76e3]'
                    : 'text-[#070035] hover:text-black'
                }`}
              >
                {word.text}
              </motion.span>
            ))}
          </p>
        </div>
      </section>

      {/* 
        AboutGallery Slider:
        Directly beneath the statement section, sharing the same #D8E7EE background
        Matches media_1791455420260.png with video stream and photo cards
      */}
      <AboutGallery />

      {/* 
        Client Logos Grid:
        Exact match to media_1791455820575.png
        - "Since 2010 we've been working with amazing clients..."
        - 20-client grid with interactive cards
      */}
      <ClientGrid />

      {/* 
        Our Capabilities Section:
        Exact match to media_1791456122427.png & media_1791456129148.png
        - Background transitions dynamically from #D8E7EE to #3899ea on scroll
        - "Our capabilities are centred around our ability to deliver..."
        - 6-group capabilities columns (Strategy & UX, Design, Development, Technology, Optimisation, Support)
      */}
      <AboutCapabilities />

      {/* 
        Awards Recognition Section:
        Exact match to media_1791456543276.png
        - "While our focus is on client success, we’re proud to have our work continually recognised by the best of the best."
        - 5-award cards (AWA, Good Design, Webby, Awwwards, FWA)
        - "+ See all awards" expandable archive
      */}
      <AboutAwards />
    </div>
  );
}
