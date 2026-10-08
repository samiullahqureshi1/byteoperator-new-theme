'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams, useRouter } from 'next/navigation';
import { X, ArrowRight, Quote } from 'lucide-react';
import { projects } from '@/data/projects';
import { useSound } from '@/components/layout/SoundProvider';

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const { playHover, playClick } = useSound();
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to window scroll to hide header and cross on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectIndex = projects.findIndex(
    (p) => p.slug === slug || p.id === slug || (slug === 'marvell-tile-and-stone' && p.slug === 'marvell-tile-stone')
  );
  if (projectIndex === -1) {
    return notFound();
  }

  const project = projects[projectIndex];

  const paragraphs = project.paragraphs || [project.description, project.summary];
  const leadParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <div className="min-h-screen bg-[#faf8f2] text-[#0f1d07] relative selection:bg-black selection:text-white">
      {/* FLOATING PILL HEADER AT TOP (ALWAYS VISIBLE & FIXED) */}
      <div className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-[200]">
        <nav className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-black/10 shadow-xl text-xs sm:text-[13px] font-medium text-[#0f1d07]">
          <Link
            href="/"
            onClick={playClick}
            className="px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={playClick}
            className="px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors"
          >
            About
          </Link>
          <span className="px-3.5 py-1.5 rounded-full bg-[#111814] text-white font-semibold shadow-sm">
            Work
          </span>
          <Link
            href="/expertise"
            onClick={playClick}
            className="px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors"
          >
            Expertise
          </Link>
          <Link
            href="/thinking"
            onClick={playClick}
            className="px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors hidden sm:inline-block"
          >
            Thinking
          </Link>
          <Link
            href="/contact"
            onClick={playClick}
            className="px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* CLOSE BUTTON AT TOP-RIGHT (ALWAYS VISIBLE & FIXED) */}
      <Link
        href="/"
        onClick={playClick}
        onMouseEnter={playHover}
        aria-label="Back to home"
        className="fixed top-4 right-5 sm:top-5 sm:right-8 lg:right-10 z-[200] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#243949] hover:bg-[#111814] text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <X className="w-5 h-5 stroke-[2.5]" />
      </Link>

      {/* Page Content Container: Complete Width */}
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 pt-16 sm:pt-20 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* Left Column: STICKY on desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-10 self-start flex flex-col">
            {/* Project Title */}
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#0f1d07] mb-6"
              style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
            >
              {project.title}
            </h1>

            {/* Visit Website Button & Category */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <a
                href={project.websiteUrl || '#'}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0f1d07] hover:bg-[#1f3016] text-white text-xs sm:text-sm font-semibold transition-all duration-300 group shadow-md"
              >
                <span>Visit Website</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#48c774] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <span className="text-xs sm:text-sm font-medium text-[#0f1d07]/75">
                {project.category}
              </span>
            </div>

            {/* Lead Headline Paragraph */}
            <p className="text-base sm:text-lg font-medium text-[#0f1d07] leading-relaxed mb-6">
              {leadParagraph}
            </p>

            {/* Remaining Narrative Paragraphs */}
            <div className="space-y-4 text-[#0f1d07]/75 text-sm sm:text-[15px] leading-relaxed">
              {remainingParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Scope Badges */}
            {project.scope && project.scope.length > 0 && (
              <div className="mt-8 pt-6 border-t border-black/10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0f1d07]/50 block mb-3">
                  Scope of Work
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.scope.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-black/5 text-[#0f1d07]/80 px-3 py-1 rounded-full border border-black/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Scrollable Media Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
            {/* 1. Main Featured Media Card */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-xl">
              {project.videoUrl ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={project.image}
                  className="w-full h-full object-cover"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              )}

              {/* PIQUE Floating Browser Mockup (if pique) */}
              {project.slug === 'pique' && (
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
                  <div className="relative w-[88%] sm:w-[84%] aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#e8e6df] shadow-2xl border border-black/10 flex flex-col justify-between">
                    <div className="w-full px-4 py-2.5 bg-[#e8e6df] border-b border-black/5 flex items-center justify-between text-black">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded bg-black flex items-center justify-center text-[9px] font-bold text-white">
                          P
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase">
                          MENU
                        </span>
                      </div>
                      <span className="font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                        PIQUE
                      </span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">
                        CONTACT
                      </span>
                    </div>

                    <div className="relative w-full flex-1 overflow-hidden">
                      <Image
                        src={
                          project.secondaryImage ||
                          'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/pique-landscape-1-297727_vVizzI6aI.jpg?tr=w-940,h-580,dpr-2,f-webp,q-80'
                        }
                        alt="PIQUE Showcase"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-center p-4">
                        <h4 className="text-lg sm:text-2xl font-serif text-white font-medium drop-shadow-md">
                          The PIQUE of<br />Home Design
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Two-Column Subcards (Matching Screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Subcard */}
              <div className="relative w-full aspect-[1/1.08] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181d24] shadow-lg">
                {project.slug === 'exposing-surveillance' ? (
                  <div className="relative w-full h-full p-6 flex flex-col justify-between text-white">
                    <Image
                      src="https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/sw_inner-885385_H4-kvJCJ0.png?tr=w-800,h-900,q-85"
                      alt="Surveillance Watch Map"
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
                        Investigation Dossier
                      </span>
                      <h4 className="text-lg font-bold">THEY KNOW WHO YOU ARE.</h4>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={
                        project.secondaryImage ||
                        'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/pique-landscape-1-297727_vVizzI6aI.jpg?tr=w-800,h-900,q-85'
                      }
                      alt={`${project.title} Detail`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                      <span className="text-white text-xs font-mono font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                        Architecture Preview
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Right Subcard */}
              <div className="relative w-full aspect-[1/1.08] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1e232b] shadow-lg p-6 flex flex-col items-center justify-between">
                {project.slug === 'exposing-surveillance' ? (
                  <div className="relative w-full h-full p-4 flex flex-col justify-between text-white">
                    <Image
                      src="https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/swglobelandscape-884732_Xc3fzGW06.jpg?tr=w-800,h-900,q-85"
                      alt="Surveillance Watch Mobile"
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-1">
                        Global Node Network
                      </span>
                      <h4 className="text-lg font-bold">CIRCLES INTELLIGENCE</h4>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Organic Blue Background Shape */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-blue-600/80 blur-2xl pointer-events-none" />

                    <div className="relative w-[78%] h-[88%] rounded-2xl overflow-hidden bg-white shadow-xl border border-black/10 flex flex-col">
                      <div className="w-full px-4 py-2 border-b border-black/5 flex items-center justify-between text-[10px] font-bold tracking-wider">
                        <span>MENU</span>
                        <span>{project.title}</span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-center items-center text-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-sm font-semibold">
                          🛏
                        </span>
                        <span className="text-xs font-bold text-[#0f1d07]">3 Bedrooms</span>
                        <span className="text-[11px] text-[#0f1d07]/60">
                          Custom modular configuration with solar energy architecture
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 3. Testimonial Card */}
            {project.testimonial && (
              <div className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0f1d07] text-white shadow-xl relative overflow-hidden">
                <Quote className="w-10 h-10 text-white/20 mb-4" />
                <p className="text-lg sm:text-xl font-light italic leading-relaxed mb-6 text-white/95">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div className="flex flex-col text-sm">
                  <span className="font-semibold text-white">
                    {project.testimonial.author}
                  </span>
                  <span className="text-white/60 text-xs">
                    {project.testimonial.role}
                  </span>
                </div>
              </div>
            )}

            {/* 4. Stats Row */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-bold text-[#0f1d07]">
                      {stat.value}
                    </span>
                    <span className="text-xs text-[#0f1d07]/60 font-mono mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
