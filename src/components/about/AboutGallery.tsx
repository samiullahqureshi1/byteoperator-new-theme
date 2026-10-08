'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSound } from '@/components/layout/SoundProvider';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt?: string;
  isTall?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/2_workshop-278493_iYzy3jxZd.jpg?tr=h-495,dpr-2,f-webp,q-80',
    alt: 'Wahid Solutions Team Workshop',
    isTall: false,
  },
  {
    id: '2',
    type: 'image',
    src: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/lunching-289000_ch-UqVNIM.jpg?tr=h-347,dpr-2,f-webp,q-80',
    alt: 'Wahid Solutions Team Lunch',
    isTall: false,
  },
  {
    id: '3',
    type: 'video',
    src: 'https://player.vimeo.com/progressive_redirect/playback/901002477/rendition/720p/file.mp4?loc=external&log_user=0&signature=a7ee1000b5f48b65d0397e12fca18be3c1c58ba1ef9466c58c180f4548a1e6d8',
    poster:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/video1_placeholder-290212_bOO278Voz.jpg?tr=h-495,q-80',
    isTall: true,
  },
  {
    id: '4',
    type: 'image',
    src: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/ross-jess-289004_Cd807V1Pl.jpg?tr=h-495,dpr-2,f-webp,q-80',
    alt: 'Wahid Solutions Ice Cream Team',
    isTall: true,
  },
  {
    id: '5',
    type: 'video',
    src: 'https://player.vimeo.com/progressive_redirect/playback/901002491/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9b091e62d7300795690127c92eaf2f3d0cc08651da621b5bd6928df579df593b',
    poster:
      'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/video2_placeholder-290211_mR36OIE0j.jpg?tr=h-495,q-80',
    isTall: true,
  },
];

export const AboutGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const isHoveredRef = useRef(false);
  const animationFrameId = useRef<number | null>(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const { playHover, playClick } = useSound();

  // 3 copies to create an endless loop that can scroll or drag forwards and backwards indefinitely
  const repeatedItems = [...galleryItems, ...galleryItems, ...galleryItems];

  // Helper to handle wrapping smoothly
  const checkInfiniteWrap = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Single set width is approximately 1/3 of total scroll width
    const singleSetWidth = el.scrollWidth / 3;
    if (singleSetWidth <= 0) return;

    if (el.scrollLeft >= singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth;
    } else if (el.scrollLeft <= 10) {
      el.scrollLeft += singleSetWidth;
    }
  }, []);

  // Continuous 60fps auto-scroll loop
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Start in the middle set for bidirectional freedom
    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft === 0 && singleSetWidth > 0) {
      el.scrollLeft = singleSetWidth;
    }

    const scrollSpeed = 0.95; // Pixels per frame (~57px/sec)

    const step = () => {
      if (!isHoveredRef.current && !isDraggingRef.current && el) {
        el.scrollLeft += scrollSpeed;
        checkInfiniteWrap();
      }
      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [checkInfiniteWrap]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    setIsGrabbing(true);
    startXRef.current = e.pageX - el.offsetLeft;
    startScrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.35; // Responsive drag multiplier
    el.scrollLeft = startScrollLeftRef.current - walk;
    checkInfiniteWrap();
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].pageX - el.offsetLeft;
    startScrollLeftRef.current = el.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    const x = e.touches[0].pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.35;
    el.scrollLeft = startScrollLeftRef.current - walk;
    checkInfiniteWrap();
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 bg-[#D8E7EE] overflow-hidden select-none">
      {/* 
        Horizontal Auto-Scrolling & Draggable Gallery
        - Autoplays smoothly in an infinite seamless loop
        - Pauses when hovered so user can inspect and drag
        - Bidirectional infinite loop with seamless repositioning
      */}
      <div
        ref={scrollContainerRef}
        className={`w-full overflow-x-hidden no-scrollbar py-4 px-6 sm:px-10 flex items-center ${
          isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        data-cursor="DRAG"
        onMouseEnter={() => {
          isHoveredRef.current = true;
          playHover();
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          handleMouseUp();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10 shrink-0 w-max pointer-events-auto">
          {repeatedItems.map((item, index) => {
            const isTall = item.isTall ?? false;

            return (
              <motion.div
                key={`${item.id}-${index}`}
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`relative shrink-0 overflow-hidden rounded-[26px] sm:rounded-[32px] md:rounded-[36px] bg-black/5 shadow-[0_12px_40px_rgba(7,0,53,0.08)] border border-black/5 flex items-center justify-center transition-transform ${
                  isTall
                    ? 'w-[280px] sm:w-[350px] md:w-[410px] lg:w-[450px] h-[370px] sm:h-[450px] md:h-[510px] lg:h-[550px]'
                    : 'w-[320px] sm:w-[410px] md:w-[470px] lg:w-[530px] h-[250px] sm:h-[310px] md:h-[350px] lg:h-[390px]'
                }`}
                onClick={playClick}
              >
                {item.type === 'video' ? (
                  <div className="relative w-full h-full bg-zinc-900 overflow-hidden">
                    <video
                      src={item.src}
                      poster={item.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-zinc-100 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt || 'Wahid Solutions Gallery'}
                      fill
                      sizes="(max-width: 768px) 360px, (max-width: 1200px) 460px, 540px"
                      className="object-cover select-none pointer-events-none"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
