'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  Layout,
  Smartphone,
  ShoppingBag,
  PieChart,
  Search,
  Layers,
  Palette,
  Sparkles,
  Grid,
  Zap,
  Code,
  Database,
  Server,
  Cpu,
  Briefcase,
  Heart,
  Rocket,
  ArrowRight,
  PhoneCall,
  Bot,
  Code2,
  GitBranch,
  Activity,
  Cloud,
  Stethoscope,
  Smile,
  Eye,
  PlusCircle,
} from 'lucide-react';
import { TextSplit } from '@/components/ui/TextSplit';
import { expertiseTaxonomy } from '@/data/expertise';
import { useSound } from '@/components/layout/SoundProvider';
import { RotatingTicker } from '@/components/home/RotatingTicker';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layout,
  Smartphone,
  ShoppingBag,
  PieChart,
  Search,
  Layers,
  Palette,
  Sparkles,
  Grid,
  Zap,
  Code,
  Database,
  Server,
  Cpu,
  Briefcase,
  Heart,
  Rocket,
  PhoneCall,
  Bot,
  Code2,
  GitBranch,
  Activity,
  Cloud,
  Stethoscope,
  Smile,
  Eye,
  PlusCircle,
};

export default function ExpertisePage() {
  const { playHover, playClick } = useSound();

  return (
    <div className="pt-36 sm:pt-48 pb-20">
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full-Spectrum Capabilities</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-12">
          <TextSplit text="Digital craftsmanship across the entire stack." stagger={0.02} />
        </h1>

        <p className="text-xl sm:text-2xl text-zinc-300 font-light max-w-3xl leading-relaxed pt-8 border-t border-white/10">
          From early-stage user validation and interface design systems to complex cloud infrastructure and intelligent AI workflows.
        </p>
      </section>

      {/* Categories Breakdown */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 mb-32 flex flex-col gap-24">
        {expertiseTaxonomy.map((category, idx) => (
          <div key={idx} className="flex flex-col gap-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-sky-400">0{idx + 1}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, sIdx) => {
                const IconComponent = iconMap[service.iconName] || Globe;
                return (
                  <Link
                    key={sIdx}
                    href={`/expertise/${service.slug}`}
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className="group p-8 rounded-3xl bg-[#12141c] border border-white/5 hover:border-sky-500/40 hover:bg-[#161824] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-sky-500/15 group-hover:border-sky-500/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-sky-400" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-sky-400 transition-colors">
                      <span>Explore Capability</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <RotatingTicker />
    </div>
  );
}
