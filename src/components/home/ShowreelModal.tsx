'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX, Play, Pause, Maximize2, Sparkles } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const showreelChapters = [
  { time: '00:00', title: 'PIQUE — Haute Digital Commerce' },
  { time: '00:24', title: 'Sussex Taps — 3D Spatial Showroom' },
  { time: '00:48', title: 'Exposing Surveillance — Investigative Data' },
  { time: '01:05', title: 'Chaleit — Global Financial Gateway' },
];

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const { playClick } = useSound();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClick();
            onClose();
          }}
          className="absolute inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden bg-zinc-950 border border-white/20 shadow-2xl z-10 flex flex-col justify-between"
        >
          {/* Top Bar Controls */}
          <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">
                Byte Operator Showreel 2026
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playClick();
                  setIsMuted(!isMuted);
                }}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => {
                  playClick();
                  onClose();
                }}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all hover:rotate-90 duration-300"
                title="Close Reel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Video / Reel Visual Simulation */}
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-tr from-sky-950/40 via-zinc-900 to-indigo-950/40">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster="https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/showreel_placeholder-285656_LfmLPCH6O.png?tr=w-1600,h-900,q-90"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4"
                type="video/mp4"
              />
            </video>

            {/* Dynamic visual overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
          </div>

          {/* Bottom Controls & Chapter Navigation */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    playClick();
                    setIsPlaying(!isPlaying);
                  }}
                  className="w-10 h-10 rounded-full bg-sky-400 text-black flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
                </button>
                <div className="text-xs font-mono text-zinc-300">
                  <span className="text-white font-bold">{showreelChapters[activeChapter].time}</span> / 01:24
                </div>
              </div>

              {/* Chapters list */}
              <div className="hidden sm:flex items-center gap-2">
                {showreelChapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playClick();
                      setActiveChapter(idx);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeChapter === idx
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                        : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {ch.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 rounded-full"
                animate={{ width: isPlaying ? '100%' : '50%' }}
                transition={{ duration: 84, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
