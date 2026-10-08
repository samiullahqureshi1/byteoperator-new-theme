'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { useSound } from '@/components/layout/SoundProvider';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  const { playHover, playClick } = useSound();
  const isLandscape = project.layout === 'landscape';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`group relative flex flex-col ${
        isLandscape ? 'col-span-1 md:col-span-2' : 'col-span-1'
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        onMouseEnter={playHover}
        onClick={playClick}
        data-cursor="VIEW CASE"
        className="block focus:outline-none"
      >
        {/* Card Image Container */}
        <div
          className={`relative w-full rounded-3xl overflow-hidden bg-zinc-900 transition-all duration-500 group-hover:shadow-2xl ${
            isLandscape ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/5] sm:aspect-[3/4]'
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
          />

          {/* Hover Darkening */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Top Badges */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
            <span className="text-xs font-mono tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {project.category}
            </span>
          </div>

          {/* Bottom Card Title & CTA */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
            <div className="flex flex-col gap-1 max-w-lg">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                {project.client} • {project.year}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl shrink-0">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Card Sub-info */}
        <div className="mt-4 px-2 flex flex-wrap items-center justify-between gap-3 text-[#111814]">
          <p className="text-sm text-[#111814]/70 line-clamp-1 max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-[#111814]/70 bg-black/5 px-2.5 py-1 rounded-md border border-black/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
