'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import { useSound } from '@/components/layout/SoundProvider';
import { CaseStudyModal } from '@/components/home/CaseStudyModal';

const SHOWCASE_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/1_Main_Dashboard_Portal_1.png?v=1793722511';

export const WorkGrid: React.FC = () => {
  const { playHover, playClick } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Background color transitions from purple (#A880F0) when entering the section
  // to cream (#f3f2eb) as the showcase moves into full view.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 25%', 'start -10%'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#A880F0', '#f3f2eb']
  );

  const piqueProject = projects.find((p) => p.slug === 'pique') || projects[0];

  return (
    <>
      <motion.section
        ref={containerRef}
        style={{ backgroundColor }}
        className="pt-10 sm:pt-14 pb-20 sm:pb-28 lg:pb-36 relative overflow-hidden"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          {/* Featured Showcase: Clinical Operations Platform Card */}
          <div>
            <Link
              href={`/work/${piqueProject.slug}`}
              onMouseEnter={playHover}
              onClick={(e) => {
                e.preventDefault();
                playClick();
                setActiveProject(piqueProject);
              }}
              data-cursor="VIEW CASE"
              className="group block relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] min-h-[480px] sm:min-h-[600px] lg:min-h-[720px] rounded-3xl sm:rounded-[36px] overflow-hidden bg-black shadow-2xl focus:outline-none cursor-pointer"
            >
              {/* Clean Full Showcase Image */}
              <Image
                src={SHOWCASE_IMAGE}
                alt="Frontora - The 24/7 front desk for modern clinics"
                fill
                priority
                sizes="(max-width: 1600px) 100vw, 1600px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Bottom Right Arrow Button */}
              <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 z-20 pointer-events-auto">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Case Study Modal View (On same home page, with sticky narrative & scrollable media) */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
};
