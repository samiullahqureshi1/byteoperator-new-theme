'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSound } from '@/components/layout/SoundProvider';

const TEAM_IMAGE_LOCAL = '/about-hero.webp';
const TEAM_IMAGE_REMOTE =
  'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/humaanabout-286282_OoNkAqIKe.jpg?tr=w-1500,h-1512,dpr-2,f-webp,q-80';
const MASK_IMAGE_LOCAL = '/about-mask.png';
const MASK_IMAGE_REMOTE =
  'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/humaanabout_mask-288855_NpsNMMq4w.png';

export const AboutHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSound();

  // Scroll parallax animation
  const { scrollY } = useScroll();
  const headingY = useTransform(scrollY, [0, 800], [0, 90]);
  const imageY = useTransform(scrollY, [0, 1000], [0, 180]);

  // Scroll-driven animation for "Human Experiences."
  const humanOpacity = useTransform(scrollY, [20, 240], [0, 1]);
  const humanY = useTransform(scrollY, [20, 240], [40, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#97c2bb] select-none"
      style={{
        backgroundColor: '#97c2bb',
      }}
    >
      <div className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-start">
        {/* Main Grid Wrapper: Overlays text and team photo */}
        <div className="grid grid-cols-1 w-full relative z-10 flex-1">
          {/* 
            Headline on First View:
            Exact placement matching reference image:
            - Starts at padding-top 23.15vw (middle-to-lower portion of the first viewport)
            - Massive Neue Montreal typography: "Digital Products."
            - Immediate entrance on page load
          */}
          <motion.div
            style={{ y: headingY }}
            className="col-start-1 row-start-1 z-20 flex flex-col justify-start pointer-events-none px-6 sm:px-10 md:px-12 lg:px-16 pt-[26vw] sm:pt-[24vw] lg:pt-[23.15vw] max-w-[94vw] lg:max-w-[82vw]"
          >
            <h1
              className="text-[15.5vw] sm:text-[14.5vw] md:text-[14vw] lg:text-[14.55vw] font-medium text-white tracking-[-0.045em] leading-[0.82] select-none"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
                lineHeight: 0.82,
              }}
            >
              {/* Line 1: Digital */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                  className="pointer-events-auto inline-block"
                >
                  {'Digital'.split('').map((char, i) => (
                    <span
                      key={i}
                      className="char-span inline-block transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      {char}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Line 2: Products. */}
              <div className="overflow-hidden mt-1 sm:mt-2 lg:mt-3">
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-auto inline-block"
                >
                  {'Products.'.split('').map((char, i) => (
                    <span
                      key={i}
                      className="char-span inline-block transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      {char}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Line 3 & 4: Human Experiences. (Revealed dynamically on scroll) */}
              <motion.div
                style={{
                  opacity: humanOpacity,
                  y: humanY,
                }}
                className="mt-2 sm:mt-3 lg:mt-4 pointer-events-auto text-white/95"
              >
                {/* Line 3: Human */}
                <div className="overflow-hidden">
                  <span className="inline-block">
                    {'Human'.split('').map((char, i) => (
                      <span
                        key={i}
                        className="char-span inline-block transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </div>

                {/* Line 4: Experiences. */}
                <div className="overflow-hidden mt-1 sm:mt-2 lg:mt-3">
                  <span className="inline-block">
                    {'Experiences.'.split('').map((char, i) => (
                      <span
                        key={i}
                        className="char-span inline-block transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </div>
              </motion.div>
            </h1>
          </motion.div>

          {/* 
            Team Photo on First View:
            Exact placement matching reference image:
            - mt-[max(13.2vw,30vh)]: ensures that on first view, ONLY the yellow umbrella
              and the looking man appear in the bottom-right corner.
            - All other team members are below the viewport fold and reveal on scroll!
          */}
          <motion.div
            style={{ y: imageY }}
            className="col-start-1 row-start-1 z-10 w-full pointer-events-auto flex items-end justify-end overflow-visible"
            data-cursor="MEET US"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            <div className="relative w-full max-w-[1920px] mx-auto overflow-visible">
              <div className="relative w-full aspect-square mt-[max(13.2vw,30vh)]">
                <Image
                  src={TEAM_IMAGE_LOCAL}
                  alt="Wahid Solutions Team"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
                  className="object-cover object-top select-none pointer-events-none"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src !== TEAM_IMAGE_REMOTE) {
                      img.src = TEAM_IMAGE_REMOTE;
                    }
                  }}
                />

                {/* 3D Depth Mask Layer */}
                <div
                  className="absolute inset-0 z-20 pointer-events-none hidden md:block"
                  style={{
                    WebkitMaskImage: `url(${MASK_IMAGE_LOCAL}), url(${MASK_IMAGE_REMOTE})`,
                    maskImage: `url(${MASK_IMAGE_LOCAL}), url(${MASK_IMAGE_REMOTE})`,
                    WebkitMaskSize: '100% 100%',
                    maskSize: '100% 100%',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                  }}
                >
                  <Image
                    src={TEAM_IMAGE_LOCAL}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="100vw"
                    className="object-cover object-top select-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom edge smooth fade into next section */}
        <div className="w-full h-16 sm:h-24 bg-gradient-to-b from-transparent to-[#97c2bb] pointer-events-none" />
      </div>
    </div>
  );
};
