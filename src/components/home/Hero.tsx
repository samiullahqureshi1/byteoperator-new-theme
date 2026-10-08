'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { TextSplit } from '@/components/ui/TextSplit';
import { useSound } from '@/components/layout/SoundProvider';

const VIDEO_URL =
  'https://player.vimeo.com/progressive_redirect/playback/900035537/rendition/1080p/file.mp4?loc=external&log_user=0&signature=92f8baecbcaa673d013bf28d8697afbb95b9360f73659a39636e837060325902';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { playClick } = useSound();

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
      <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          {/* Main Headline - Exact Font Specs: neueMontreal, 130px, 500 weight, 119.6px line-height, rgb(15, 29, 7) */}
          <div className="mb-12 sm:mb-16">
            <h1
              className="text-[12vw] sm:text-[9.5vw] md:text-[8.5vw] lg:text-[130px] font-medium tracking-[-0.045em] text-[rgb(15,29,7)] select-none"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
                lineHeight: '0.92',
                color: 'rgb(15, 29, 7)',
              }}
            >
              <div className="block" style={{ lineHeight: '119.6px' }}>
                <TextSplit text="Extraordinary" stagger={0.02} />
              </div>
              <div className="block mt-1 sm:mt-2" style={{ lineHeight: '119.6px' }}>
                <TextSplit text="Digital Experiences" delay={0.25} stagger={0.02} />
              </div>
            </h1>
          </div>

          {/* Subheading */}
          <div>
            <p
              className="text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed max-w-3xl"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
                color: 'rgba(15, 29, 7, 0.8)',
              }}
            >
              We design, build and ship world-class digital products for forward-thinking brands.
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
