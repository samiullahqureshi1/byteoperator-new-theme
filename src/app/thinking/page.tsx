'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { articles, Article } from '@/data/articles';
import { useSound } from '@/components/layout/SoundProvider';

// Custom 8-point sparkle star icon matching Humaan (#B488F1)
function SparkleStar({ className = 'w-3 h-3 text-[#B488F1]' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="currentColor"
      viewBox="0 0 13 13"
      className={className}
    >
      <path d="m7.124 4.995 2.919-2.92.882.883-2.92 2.918h4.13v1.248h-4.13l2.92 2.919-.882.881-2.919-2.919v4.128H5.877V8.005l-2.919 2.92-.882-.883 2.92-2.918H.867V5.876h4.126L2.076 2.958l.882-.882 2.919 2.919V.867h1.247z" />
    </svg>
  );
}

export default function ThinkingPage() {
  const { playHover, playClick } = useSound();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['All', 'Awards', 'Opinion', 'Design', 'Accessibility', 'SEO'];

  const filteredArticles = articles.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#f3f2eb] text-[#0f1d07] pt-24 sm:pt-28 pb-24 sm:pb-32 selection:bg-black selection:text-white">
      {/* 1. HERO SECTION WITH MASSIVE 'Thinking' TITLE */}
      <section className="relative w-full px-6 sm:px-10 lg:px-12 pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center">
          {/* Giant Title */}
          <h1
            className="text-[15vw] sm:text-[16vw] lg:text-[16.5vw] font-normal tracking-[-0.04em] leading-[0.85] text-[#0f1d07] text-center select-none"
            style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
          >
            Thinking
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-xl lg:text-2xl text-[#0f1d07] font-normal text-center mt-6 sm:mt-8 tracking-tight"
            style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
          >
            Musings on design, experience and technology.
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 mb-10 sm:mb-12">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-black/10 pb-6">
          <span
            className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#0f1d07]/60"
          >
            Showing {filteredArticles.length} Article{filteredArticles.length === 1 ? '' : 's'}
          </span>

          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playClick();
                    setActiveCategory(cat);
                  }}
                  onMouseEnter={playHover}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#111814] text-white shadow-sm'
                      : 'bg-black/5 hover:bg-black/10 text-[#0f1d07]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ARTICLES LIST (ROW FORMAT WITH BORDER LINE DIVIDERS, NO CARDS) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 border-b border-black/10">
        {filteredArticles.map((article, idx) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            className="border-t border-black/10 py-12 sm:py-16 lg:py-20 first:border-t-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
              {/* Left Column: Rounded Image */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div
                  onClick={() => {
                    playClick();
                    setSelectedArticle(article);
                  }}
                  onMouseEnter={playHover}
                  className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[480/600] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm cursor-pointer group bg-[#161616]"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority={idx < 2}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Title, Metadata, Excerpt, Actions */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Title */}
                <h2
                  onClick={() => {
                    playClick();
                    setSelectedArticle(article);
                  }}
                  onMouseEnter={playHover}
                  className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-medium tracking-tight text-[#0f1d07] leading-[1.12] mb-4 sm:mb-5 cursor-pointer hover:opacity-75 transition-opacity"
                  style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
                >
                  {article.title}
                </h2>

                {/* Metadata Row: Category + Lilac Sparkle Star + Read Time */}
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0f1d07]/75 mb-6">
                  <span>{article.category}</span>
                  <SparkleStar className="w-3.5 h-3.5 text-[#B488F1]" />
                  <span>{article.readTime}</span>
                </div>

                {/* Excerpt */}
                <p className="text-sm sm:text-base lg:text-lg text-[#0f1d07]/70 leading-relaxed mb-8 max-w-xl">
                  {article.excerpt}
                </p>

                {/* Bottom Actions Row */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
                  {/* Read Article Pill Button */}
                  <button
                    onClick={() => {
                      playClick();
                      setSelectedArticle(article);
                    }}
                    onMouseEnter={playHover}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#111814] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer group"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#48c774] group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Author Avatar & Name */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-black/10">
                      <Image
                        src={article.authorAvatar}
                        alt={article.authorName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#0f1d07]">
                      {article.authorName}
                    </span>
                  </div>

                  {/* Date */}
                  <span className="text-xs sm:text-sm text-[#0f1d07]/60 font-mono">
                    {article.date}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 4. FULL ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[150] select-none flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                playClick();
                setSelectedArticle(null);
              }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#faf8f2] text-[#0f1d07] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-2xl border border-black/10 select-text"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  playClick();
                  setSelectedArticle(null);
                }}
                onMouseEnter={playHover}
                className="absolute top-5 right-5 sm:top-7 sm:right-7 w-11 h-11 rounded-full bg-[#243949] hover:bg-black text-white flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Article Content */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0f1d07]/75 mb-4">
                <span>{selectedArticle.category}</span>
                <SparkleStar className="w-3.5 h-3.5 text-[#B488F1]" />
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2
                className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0f1d07] leading-[1.15] mb-6 pr-12"
                style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif' }}
              >
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-3 pb-8 mb-8 border-b border-black/10">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-black/10">
                  <Image
                    src={selectedArticle.authorAvatar}
                    alt={selectedArticle.authorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#0f1d07]">
                    {selectedArticle.authorName}
                  </span>
                  <span className="text-xs text-[#0f1d07]/60 font-mono">
                    Published on {selectedArticle.date}
                  </span>
                </div>
              </div>

              {/* Large Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 shadow-md">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Full Article Text */}
              <div className="space-y-6 text-[#0f1d07]/80 text-base sm:text-lg leading-relaxed max-w-none">
                <p className="font-medium text-lg sm:text-xl text-[#0f1d07] leading-relaxed">
                  {selectedArticle.excerpt}
                </p>

                <p>
                  At Wahid Solutions, we believe great digital experiences are born at the
                  intersection of refined aesthetics and technological precision. Whether crafting
                  award-winning web architectures or engineering performant mobile applications,
                  every detail must serve a strategic purpose.
                </p>

                <p>
                  Our multidisciplinary team across Australia and the United States continuously
                  researches emerging design paradigms, headless CMS capabilities, and AI-assisted
                  workflows to build software that stands the test of time.
                </p>

                <p>
                  By focusing on empathy, accessibility, and craft, we ensure our clients’ digital
                  presence doesn’t merely keep pace with the industry — it defines the standard.
                </p>
              </div>

              {/* Modal Bottom CTA */}
              <div className="mt-12 pt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    playClick();
                    setSelectedArticle(null);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#111814] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all cursor-pointer"
                >
                  ← Back to Thinking
                </button>
                <Link
                  href="/contact"
                  onClick={playClick}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0f1d07] hover:underline"
                >
                  <span>Discuss a project with us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#48c774]" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
