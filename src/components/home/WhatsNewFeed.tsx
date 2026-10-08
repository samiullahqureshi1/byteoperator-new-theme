'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { newsItems } from '@/data/news';
import { useSound } from '@/components/layout/SoundProvider';

export const WhatsNewFeed: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSound();

  return (
    <section
      style={{ backgroundColor: '#f3f2eb' }}
      className="pt-12 sm:pt-20 pb-28 sm:pb-36 relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2
            className="text-4xl sm:text-6xl lg:text-[4.5vw] font-medium tracking-tight text-[#0f1d07]"
            style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
          >
            What&apos;s New
          </h2>
        </motion.div>

        {/* Horizontal Scrolling Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {newsItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group shrink-0 w-[290px] sm:w-[330px] lg:w-[350px] snap-start flex flex-col"
            >
              <Link
                href={item.link}
                onMouseEnter={playHover}
                onClick={playClick}
                className="block focus:outline-none"
              >
                {/* Image Card Container */}
                <div className="relative w-full aspect-[1/1.08] rounded-3xl sm:rounded-[32px] overflow-hidden bg-black/10 shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 290px, (max-width: 1024px) 330px, 350px"
                    className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Top-Left Award Badges Stack (for Australian Web Awards) */}
                  {item.hasAwardPills && (
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10 pointer-events-none">
                      <div className="flex items-center gap-1">
                        <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[11px] shadow-sm">
                          <ArrowRight className="w-3 h-3 -rotate-45" />
                        </span>
                        <span className="bg-[#7c5cfc] text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm">
                          Best in show
                        </span>
                        <span className="bg-white text-black text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm">
                          Design
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[11px] shadow-sm">
                          <ArrowRight className="w-3 h-3 -rotate-45" />
                        </span>
                        <span className="bg-[#c25e00] text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm">
                          Campaign
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[11px] shadow-sm">
                          <ArrowRight className="w-3 h-3 -rotate-45" />
                        </span>
                        <span className="bg-[#0088cc] text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm">
                          Innovation
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[11px] shadow-sm">
                          <ArrowRight className="w-3 h-3 -rotate-45" />
                        </span>
                        <span className="bg-[#107c41] text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm">
                          Education
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Bottom-Left Category Pill Badge */}
                  <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                    <span
                      className={`text-xs font-medium px-3.5 py-1 rounded-full text-white backdrop-blur-sm shadow-md ${
                        item.badgeBg || 'bg-black/60'
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Date */}
                <div className="mt-4 mb-2">
                  <span className="text-xs text-[#0f1d07]/60 font-mono tracking-wide">
                    {item.date}
                  </span>
                </div>

                {/* Title & Description */}
                <p className="text-[15px] sm:text-base text-[#0f1d07] leading-snug">
                  <strong className="font-semibold text-[#0f1d07]">{item.title} </strong>
                  <span className="text-[#0f1d07]/80">{item.subtitle}</span>
                </p>

                {/* Action Link (Underlined) */}
                <div className="mt-3">
                  <span className="inline-block text-xs sm:text-sm font-medium text-[#0f1d07]/80 group-hover:text-[#0f1d07] underline underline-offset-4 transition-colors">
                    {item.actionText}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
