'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import { useSound } from '@/components/layout/SoundProvider';
import { CaseStudyModal } from '@/components/home/CaseStudyModal';

const PIQUE_IMAGE =
  'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/pique-landscape-1-297727_vVizzI6aI.jpg?tr=w-1600,h-1000,dpr-2,f-webp,q-85';

const SUSSEX_VIDEO_URL =
  'https://download-video-ak.vimeocdn.com/v3-1/playback/bd2c3c53-cea8-4145-9d5b-db8272066f9e/b6e2d40d?__token__=st=1791451655~exp=1791455255~acl=%2Fv3-1%2Fplayback%2Fbd2c3c53-cea8-4145-9d5b-db8272066f9e%2Fb6e2d40d%2A~hmac=c60e4f62669ccf3b132cdb28fdc2f04eff7604f5d6e7497f9e353b23eddb1a3f&r=dXMtZWFzdDE%3D';

const SURVEILLANCE_VIDEO_URL =
  'https://player.vimeo.com/progressive_redirect/playback/1003928096/rendition/1080p/file.mp4?loc=external&log_user=0&signature=72772845bfe5c543adb56c12158061528c1048a735c6743157c6651a3f238009';

export const WorkGrid: React.FC = () => {
  const { playHover, playClick } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Background color transitions from purple (#A880F0) when entering the section
  // to cream (#f3f2eb) as PIQUE moves into full view.
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
  const sussexProject = projects.find((p) => p.slug === 'sussex-taps') || projects[1];
  const chaleitProject = projects.find((p) => p.slug === 'chaleit') || projects[2];
  const surveillanceProject = projects.find((p) => p.slug === 'exposing-surveillance') || projects[3];

  return (
    <>
      <motion.section
        ref={containerRef}
        style={{ backgroundColor }}
        className="pt-10 sm:pt-14 pb-28 sm:pb-36 relative overflow-hidden"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          {/* 1. Featured Showcase: PIQUE Single Clean Image Card */}
          <div className="mb-10 sm:mb-14">
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
                src={PIQUE_IMAGE}
                alt="PIQUE Home Design"
                fill
                priority
                sizes="(max-width: 1600px) 100vw, 1600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Gradient Vignette at bottom for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Bottom Info Bar with PIQUE title and arrow */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-4xl font-medium tracking-tight text-white drop-shadow-md">
                    PIQUE
                  </span>
                  <span className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                    Brand & Digital Architecture
                  </span>
                </div>

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl pointer-events-auto">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* 2. Two Featured Cards directly below PIQUE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-14">
            {/* Left Card: Sussex Taps with Loop Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col"
            >
              <Link
                href={`/work/${sussexProject.slug}`}
                onMouseEnter={playHover}
                onClick={(e) => {
                  e.preventDefault();
                  playClick();
                  setActiveProject(sussexProject);
                }}
                data-cursor="VIEW CASE"
                className="block focus:outline-none cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl sm:rounded-[36px] overflow-hidden bg-black shadow-2xl transition-all duration-500">
                  {/* Embedded Video */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={sussexProject.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  >
                    <source src={SUSSEX_VIDEO_URL} type="video/mp4" />
                  </video>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="text-xs font-mono tracking-wider text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                      {sussexProject.category}
                    </span>
                  </div>

                  {/* Bottom Card Title & CTA */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10 pointer-events-none">
                    <div className="flex flex-col gap-1 max-w-lg">
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                        {sussexProject.client} • {sussexProject.year}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                        {sussexProject.title}
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl shrink-0 pointer-events-auto">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Right Card: Chaleit with Existing High-Res Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col"
            >
              <Link
                href={`/work/${chaleitProject.slug}`}
                onMouseEnter={playHover}
                onClick={(e) => {
                  e.preventDefault();
                  playClick();
                  setActiveProject(chaleitProject);
                }}
                data-cursor="VIEW CASE"
                className="block focus:outline-none cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl sm:rounded-[36px] overflow-hidden bg-black shadow-2xl transition-all duration-500">
                  <Image
                    src={chaleitProject.image}
                    alt={chaleitProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="text-xs font-mono tracking-wider text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                      {chaleitProject.category}
                    </span>
                  </div>

                  {/* Bottom Card Title & CTA */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10 pointer-events-none">
                    <div className="flex flex-col gap-1 max-w-lg">
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                        {chaleitProject.client} • {chaleitProject.year}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                        {chaleitProject.title}
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl shrink-0 pointer-events-auto">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* 3. Featured Showcase: Exposing Surveillance Full-Width Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Link
              href={`/work/${surveillanceProject.slug}`}
              onMouseEnter={playHover}
              onClick={(e) => {
                e.preventDefault();
                playClick();
                setActiveProject(surveillanceProject);
              }}
              data-cursor="VIEW CASE"
              className="group block relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] min-h-[480px] sm:min-h-[600px] lg:min-h-[720px] rounded-3xl sm:rounded-[36px] overflow-hidden bg-black shadow-2xl focus:outline-none cursor-pointer"
            >
              {/* Embedded 1080p Vimeo Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={surveillanceProject.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              >
                <source src={SURVEILLANCE_VIDEO_URL} type="video/mp4" />
              </video>

              {/* Subtle Gradient Vignette at bottom for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-75 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
                <span className="text-xs font-mono tracking-wider text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  {surveillanceProject.category}
                </span>
              </div>

              {/* Bottom Info Bar with Exposing Surveillance title and arrow */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-4xl font-medium tracking-tight text-white drop-shadow-md">
                    {surveillanceProject.title}
                  </span>
                  <span className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                    {surveillanceProject.heroHeadline || 'Interactive Data Visualization & Investigative Platform'}
                  </span>
                </div>

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl pointer-events-auto">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
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
