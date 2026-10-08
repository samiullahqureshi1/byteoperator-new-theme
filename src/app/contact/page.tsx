'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X, CheckCircle2 } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';

const serviceOptions = [
  'Websites',
  'Software / Web Apps',
  'Mobile Apps',
  'Headless eCommerce',
  'UI/UX & Design Systems',
  'AI & Automation',
  '3D & Spatial Design',
];

const budgetRanges = [
  '< $25,000',
  '$25k - $50k',
  '$50k - $100k',
  '$100k - $250k+',
];

export default function ContactPage() {
  const { playClick, playHover } = useSound();
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('$50k - $100k');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const toggleService = (srv: string) => {
    playClick();
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#B8AFC6] text-white selection:bg-[#180a29] selection:text-white">
      {/* Desktop Background: 3D Kinetic Art (Smiley Face Sculpture) */}
      <div className="hidden lg:block absolute inset-0 -z-0 pointer-events-none">
        <Image
          src="https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/contact-video-frame-281595_dmJF-eITh.jpg?tr=w-1920,h-1200,q-90"
          alt="Contact Sculpture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none"
        />
      </div>

      {/* Mobile/Tablet Background: Square-cropped 3D Art */}
      <div className="lg:hidden absolute inset-0 -z-0 pointer-events-none">
        <Image
          src="https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/contact-video-frame-square-mobile-281596_d6Dbdwo1r.jpg?tr=w-900,h-900,q-90"
          alt="Contact Sculpture Mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom pointer-events-none select-none opacity-60 sm:opacity-85"
        />
      </div>

      {/* Main Content Hero */}
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-12 lg:px-16 pt-36 sm:pt-44 lg:pt-48 flex-1 flex flex-col justify-center relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.4rem] font-medium tracking-[-0.035em] leading-[0.96] text-white mb-8 sm:mb-12 select-none"
            style={{
              fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
            }}
          >
            We&apos;ve got a
            <br />
            great feeling
            <br />
            about this
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <button
              onClick={() => {
                playClick();
                setIsBriefModalOpen(true);
              }}
              onMouseEnter={playHover}
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              }}
              className="group inline-flex items-center gap-3.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#180a29] hover:bg-[#2b1248] text-white font-medium text-base sm:text-lg transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>Submit a brief</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                fill="none"
                strokeWidth="0.5"
                viewBox="0 0 14 13"
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom International Locations Row (Matching Reference Image) */}
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-12 lg:px-16 pt-16 pb-10 sm:pb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-white">
          {/* Column 1: Global */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-medium text-[15px] sm:text-[16px] text-white/90 mb-1.5">
              <Globe className="w-4 h-4 stroke-[1.8] text-white/80" />
              <span>We work globally</span>
            </div>
            <a
              href="mailto:contact@wahidsolutions.com"
              onMouseEnter={playHover}
              onClick={playClick}
              className="text-sm sm:text-[15px] text-white/90 hover:text-white transition-colors"
            >
              contact@wahidsolutions.com
            </a>
          </div>

          {/* Column 2: USA */}
          <div className="flex flex-col">
            <h3 className="font-medium text-[15px] sm:text-[16px] text-white/90 mb-1">USA</h3>
            <p className="text-sm text-white/60 mb-0.5">Los Angeles, CA</p>
            <a
              href="mailto:jason@wahidsolutions.com"
              onMouseEnter={playHover}
              onClick={playClick}
              className="text-sm sm:text-[15px] text-white/90 hover:text-white transition-colors"
            >
              jason@wahidsolutions.com
            </a>
          </div>

          {/* Column 3: Australia */}
          <div className="flex flex-col">
            <h3 className="font-medium text-[15px] sm:text-[16px] text-white/90 mb-1">Australia</h3>
            <p className="text-sm text-white/60 mb-0.5">Perth, WA</p>
            <a
              href="mailto:jay@wahidsolutions.com.au"
              onMouseEnter={playHover}
              onClick={playClick}
              className="text-sm sm:text-[15px] text-white/90 hover:text-white transition-colors"
            >
              jay@wahidsolutions.com.au
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Submit A Brief Modal */}
      <AnimatePresence>
        {isBriefModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBriefModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-white text-[rgb(15,29,7)] rounded-[32px] sm:rounded-[40px] shadow-2xl p-8 sm:p-12 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  playClick();
                  setIsBriefModalOpen(false);
                }}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-zinc-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3
                    className="text-3xl font-medium tracking-tight text-[rgb(15,29,7)]"
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    }}
                  >
                    Brief Received!
                  </h3>
                  <p className="text-zinc-600 max-w-md text-sm sm:text-base leading-relaxed">
                    Thank you for reaching out. One of our technical directors will review your brief and be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setIsBriefModalOpen(false);
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[rgb(15,29,7)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-purple-600 block mb-2">
                      New Engagement
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-medium tracking-tight text-[rgb(15,29,7)]"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      }}
                    >
                      Submit a brief
                    </h3>
                  </div>

                  {/* Capabilities selection */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                      Services required
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-[rgb(15,29,7)] text-white shadow-sm'
                                : 'bg-[#f3f2eb] text-zinc-700 hover:bg-[#e8e6df]'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                      Target budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => {
                            playClick();
                            setSelectedBudget(b);
                          }}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                            selectedBudget === b
                              ? 'bg-[rgb(15,29,7)] text-white shadow-sm'
                              : 'bg-[#f3f2eb] text-zinc-700 hover:bg-[#e8e6df]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Zeshan Qureshi"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f3f2eb] border border-black/5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="zeshan@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f3f2eb] border border-black/5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f3f2eb] border border-black/5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Project Overview *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your timeline, objectives, and deliverables..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f3f2eb] border border-black/5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[rgb(15,29,7)] hover:bg-black text-white font-medium text-base transition-opacity shadow-lg cursor-pointer"
                  >
                    Send brief →
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
