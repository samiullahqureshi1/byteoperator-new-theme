'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { useSound } from '@/components/layout/SoundProvider';

interface WorkCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  priority?: boolean;
}

export const WorkCard: React.FC<WorkCardProps> = ({ project, onSelect, priority = false }) => {
  const { playHover, playClick } = useSound();
  const isLandscape = project.layout === 'landscape';
  const outerImg = project.outerImage || project.image;
  const innerImg = project.innerImage;
  const isWhiteText = project.whiteText !== false;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
      className={`group relative flex flex-col w-full ${
        isLandscape ? 'col-span-1 md:col-span-2' : 'col-span-1'
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        onMouseEnter={playHover}
        onClick={(e) => {
          e.preventDefault();
          playClick();
          onSelect(project);
        }}
        data-cursor="VIEW"
        className="block focus:outline-none cursor-pointer w-full select-none"
      >
        {/* Outer Card Container */}
        <div
          className={`relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-black shadow-lg transition-all duration-500 group-hover:shadow-2xl ${
            isLandscape
              ? 'aspect-[16/10] sm:aspect-[16/9.5] min-h-[380px] sm:min-h-[520px] md:min-h-[620px] lg:min-h-[700px]'
              : 'aspect-[710/890] sm:aspect-[4/5] min-h-[460px] sm:min-h-[560px]'
          }`}
        >
          {/* Outer Background Image */}
          {outerImg && (
            <Image
              src={outerImg}
              alt={project.title}
              fill
              priority={priority}
              sizes={isLandscape ? '(max-width: 1600px) 100vw, 1600px' : '(max-width: 768px) 100vw, 50vw'}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          )}

          {/* Video Preview if Sussex or Exposing Surveillance */}
          {project.videoUrl && (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={outerImg}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            >
              <source src={project.videoUrl} type="video/mp4" />
            </video>
          )}

          {/* Inner Floating Mockup / Screenshot */}
          {innerImg && (
            <div
              className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
                isLandscape
                  ? 'p-6 sm:p-10 md:p-14 lg:p-20'
                  : 'p-6 sm:p-8 md:p-10'
              }`}
            >
              {isLandscape ? (
                /* Desktop Browser Frame for Landscape Cards (like Pharmacy 777, Marvell Tile, Scotch College, PIQUE) */
                <div className="relative w-[92%] sm:w-[86%] md:w-[82%] lg:w-[80%] aspect-[16/10] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.55)] border border-white/15 bg-white/5 backdrop-blur-[2px]">
                  <Image
                    src={innerImg}
                    alt={`${project.title} Interface`}
                    fill
                    sizes="(max-width: 1600px) 90vw, 1200px"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                /* Mobile Frame for Portrait Cards (like Talk N Walk, Chaleit, Loam, Pentanet, TrailsWA) */
                <div className="relative w-[55%] sm:w-[50%] md:w-[52%] max-w-[270px] aspect-[9/18.5] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] border-[4px] sm:border-[6px] border-black/85 bg-black">
                  <Image
                    src={innerImg}
                    alt={`${project.title} Mobile Screen`}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          )}

          {/* Bottom Card Title */}
          <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-6 sm:left-8 lg:left-10 z-20 pointer-events-none">
            <h3
              className={`text-2xl sm:text-3xl lg:text-[2rem] font-medium tracking-tight leading-none ${
                isWhiteText ? 'text-white drop-shadow-md' : 'text-[#0f1d07]'
              }`}
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              }}
            >
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
