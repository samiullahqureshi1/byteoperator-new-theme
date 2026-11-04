'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { TextSplit } from '@/components/ui/TextSplit';
import { useSound } from '@/components/layout/SoundProvider';

const VIDEO_URL =
  'https://cdn.shopify.com/videos/c/o/v/19e561d1f9e44c84aa11d861fa5a5e6d.mp4';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { playClick, playHover } = useSound();

  // Scroll driven animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Background color transition from off-white cream directly to exact #A880F0
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.45, 0.7],
    ['#f3f2eb', '#f3f2eb', '#A880F0']
  );

  // Expands smoothly to 100% full screen width and 0 border radius on scroll
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.92, 1, 1, 0.96]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [28, 0, 0, 28]);
  const widthPercent = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ['94%', '100%', '100%', '94%']);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div style={{ backgroundColor }} className="transition-colors duration-500 overflow-hidden relative">
      {/* Hero Typography Section */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          {/* Eyebrow */}
          <div className="mb-5 sm:mb-6">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/10 text-xs font-semibold tracking-[0.14em] uppercase text-[rgb(15,29,7)]"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              HEALTHCARE AI SOLUTIONS &amp; SOFTWARE ENGINEERING
            </span>
          </div>

          {/* Main Headline - Decreased scale for better proportion */}
          <div className="mb-6 sm:mb-8 max-w-4xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-medium tracking-[-0.035em] text-[rgb(15,29,7)] leading-[1.08]"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
                color: 'rgb(15, 29, 7)',
              }}
            >
              Smarter Healthcare Operations, Powered by AI and Software Engineering
            </h1>
          </div>

          {/* Body Copy - Decreased and condensed */}
          <div className="mb-8 sm:mb-10 max-w-2xl">
            <p
              className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[rgb(15,29,7)]/75"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Byte Operator helps healthcare organizations automate administrative workflows, streamline patient communication, and build connected software systems tailored to your operational needs.
            </p>
          </div>

          {/* CTAs and Supporting Text */}
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[rgb(15,29,7)] text-white hover:bg-black font-medium text-sm sm:text-base transition-all duration-200 shadow-sm hover:scale-[1.02] group cursor-pointer"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                }}
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="/expertise"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[rgb(15,29,7)]/25 text-[rgb(15,29,7)] hover:bg-black/5 hover:border-[rgb(15,29,7)]/50 font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                }}
              >
                <span>Explore Our Solutions</span>
              </Link>
            </div>

            {/* Supporting Text */}
            <p
              className="text-xs sm:text-[13px] text-[rgb(15,29,7)]/60 font-medium tracking-wide"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              }}
            >
              Technology solutions for medical practices, specialty clinics, and healthcare organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Full Screen Expanding Video Section */}
      <section ref={containerRef} className="relative w-full overflow-hidden pb-0 flex flex-col items-center">
        <motion.div
          style={{
            width: widthPercent,
            scale,
            borderRadius,
          }}
          className="relative h-[75vh] sm:h-[88vh] lg:h-[98vh] min-h-[520px] overflow-hidden bg-black shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-200"
        >
          {/* Direct Vimeo MP4 Video Stream */}
          <video
            ref={videoRef}
            src={VIDEO_URL}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover select-none"
          />

          {/* Bottom Right Floating Video Controls */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg">
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-200"
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-200"
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};
