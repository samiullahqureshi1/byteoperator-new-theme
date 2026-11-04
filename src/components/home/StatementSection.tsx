'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiPhoneMissed, FiClipboard, FiLink2, FiTrendingUp } from 'react-icons/fi';
import { TextSplit } from '@/components/ui/TextSplit';
import { useSound } from '@/components/layout/SoundProvider';

const challenges = [
  {
    number: '01',
    title: 'Missed Patient Calls',
    description:
      'Unanswered calls and delayed responses can make it harder for patients to reach your practice and request appointments.',
    icon: FiPhoneMissed,
  },
  {
    number: '02',
    title: 'Repetitive Administrative Tasks',
    description:
      'Manual appointment coordination, patient intake, reminders, and follow-ups can consume valuable staff time.',
    icon: FiClipboard,
  },
  {
    number: '03',
    title: 'Disconnected Systems',
    description:
      'When business applications and healthcare platforms operate separately, teams may need to repeat tasks and transfer information manually.',
    icon: FiLink2,
  },
  {
    number: '04',
    title: 'Increasing Operational Demands',
    description:
      'As healthcare practices grow, maintaining efficient and consistent workflows becomes increasingly important.',
    icon: FiTrendingUp,
  },
];

export const StatementSection: React.FC = () => {
  const { playHover } = useSound();

  return (
    <section
      className="relative pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 lg:pb-36 px-6 sm:px-12 lg:px-16 overflow-hidden"
      style={{ backgroundColor: '#A880F0' }}
    >
      <div className="max-w-[1500px] mx-auto flex flex-col items-center">
        {/* Main Statement Headline */}
        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2vw] font-medium tracking-[-0.035em] leading-[1.1] text-white max-w-5xl text-center mb-6 sm:mb-8"
          style={{
            fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
            fontWeight: 500,
          }}
        >
          <TextSplit
            text="Healthcare Operations Shouldn't Be Held Back by Manual Work"
            stagger={0.012}
          />
        </h2>

        {/* Narrative Paragraphs Bellow Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl text-center mx-auto mb-14 sm:mb-20 flex flex-col gap-3 sm:gap-4 text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed"
        >
          <p>
            Healthcare teams manage patient calls, appointments, administrative tasks, and multiple software systems every day. Disconnected technology and repetitive processes can make these responsibilities more difficult to manage.
          </p>
          <p className="font-medium text-white">
            Byte Operator helps healthcare organizations address these challenges through practical software and automation solutions.
          </p>
        </motion.div>

        {/* 4 Challenges Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={playHover}
                className="group relative rounded-2xl sm:rounded-3xl bg-white/[0.12] hover:bg-white/[0.18] border border-white/25 p-7 sm:p-9 backdrop-blur-md transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white shadow-sm group-hover:scale-110 group-hover:bg-white group-hover:text-[#A880F0] transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
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
