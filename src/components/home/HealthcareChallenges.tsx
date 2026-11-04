'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiPhoneMissed, FiClock, FiLink2, FiTrendingUp, FiAlertCircle } from 'react-icons/fi';
import { useSound } from '@/components/layout/SoundProvider';

const challenges = [
  {
    number: '01',
    title: 'Missed Patient Calls',
    description:
      'Unanswered calls and delayed responses can make it harder for patients to reach your practice and request appointments.',
    icon: FiPhoneMissed,
    color: '#ef4444',
    bgTint: 'rgba(239, 68, 68, 0.08)',
    borderTint: 'rgba(239, 68, 68, 0.18)',
  },
  {
    number: '02',
    title: 'Repetitive Administrative Tasks',
    description:
      'Manual appointment coordination, patient intake, reminders, and follow-ups can consume valuable staff time.',
    icon: FiClock,
    color: '#f59e0b',
    bgTint: 'rgba(245, 158, 11, 0.08)',
    borderTint: 'rgba(245, 158, 11, 0.18)',
  },
  {
    number: '03',
    title: 'Disconnected Systems',
    description:
      'When business applications and healthcare platforms operate separately, teams may need to repeat tasks and transfer information manually.',
    icon: FiLink2,
    color: '#8b5cf6',
    bgTint: 'rgba(139, 92, 246, 0.08)',
    borderTint: 'rgba(139, 92, 246, 0.18)',
  },
  {
    number: '04',
    title: 'Increasing Operational Demands',
    description:
      'As healthcare practices grow, maintaining efficient and consistent workflows becomes increasingly important.',
    icon: FiTrendingUp,
    color: '#10b981',
    bgTint: 'rgba(16, 185, 129, 0.08)',
    borderTint: 'rgba(16, 185, 129, 0.18)',
  },
];

export const HealthcareChallenges: React.FC = () => {
  const { playHover } = useSound();

  return (
    <section
      style={{ backgroundColor: '#f3f2eb' }}
      className="py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-16 overflow-hidden relative border-t border-black/[0.04]"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12 mb-14 sm:mb-20">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/10 text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-[rgb(15,29,7)]"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                }}
              >
                <FiAlertCircle className="w-3.5 h-3.5 text-amber-600" />
                HEALTHCARE CHALLENGES
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium tracking-[-0.035em] leading-[1.08] text-[rgb(15,29,7)]"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Healthcare Operations Shouldn&apos;t Be Held Back by Manual Work
            </h2>
          </div>

          {/* Narrative Paragraphs */}
          <div className="max-w-xl text-base sm:text-lg md:text-xl text-[rgb(15,29,7)]/75 leading-relaxed font-normal flex flex-col gap-4">
            <p>
              Healthcare teams manage patient calls, appointments, administrative tasks, and multiple software systems every day. Disconnected technology and repetitive processes can make these responsibilities more difficult to manage.
            </p>
            <p className="text-[rgb(15,29,7)] font-medium">
              Byte Operator helps healthcare organizations address these challenges through practical software and automation solutions.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {challenges.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={playHover}
                className="bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-10 lg:p-12 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    {/* Icon in soft tinted circle */}
                    <div
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: item.bgTint,
                        border: `1px solid ${item.borderTint}`,
                        color: item.color,
                      }}
                    >
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    {/* Step Number Badge */}
                    <span
                      className="text-xs sm:text-sm font-mono font-semibold tracking-widest text-[rgb(15,29,7)]/40 px-3 py-1 rounded-full bg-black/[0.03]"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    className="text-2xl sm:text-3xl font-medium tracking-tight text-[rgb(15,29,7)] mb-4 group-hover:text-black transition-colors"
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className="text-base sm:text-lg text-[rgb(15,29,7)]/70 leading-relaxed font-normal"
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
