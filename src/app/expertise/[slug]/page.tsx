'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
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
} from 'lucide-react';
import { expertiseTaxonomy, ExpertiseService } from '@/data/expertise';
import { MagneticButton } from '@/components/ui/MagneticButton';
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

export default function ExpertiseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { playHover, playClick } = useSound();

  let service: ExpertiseService | null = null;
  let parentCategoryTitle = '';

  for (const cat of expertiseTaxonomy) {
    const found = cat.services.find(
      (s) => s.slug === slug || (slug === 'innovation' && s.slug === 'innovation-startups')
    );
    if (found) {
      service = found;
      parentCategoryTitle = cat.title;
      break;
    }
  }

  if (!service) {
    return notFound();
  }

  const IconComponent = iconMap[service.iconName] || Globe;

  return (
    <div className="pt-36 sm:pt-48 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 mb-8">
        <Link
          href="/expertise"
          onMouseEnter={playHover}
          onClick={playClick}
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-sky-400 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all capabilities</span>
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-8">
          <IconComponent className="w-3.5 h-3.5" />
          <span>{parentCategoryTitle}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8">
          {service.title}
        </h1>

        <p className="text-xl sm:text-3xl text-zinc-300 font-light max-w-3xl leading-relaxed pt-8 border-t border-white/10">
          {service.description}
        </p>
      </section>

      {/* Deliverables & Value Props */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-white/10">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-3">
              Core Deliverables
            </span>
            <h3 className="text-2xl font-bold text-white mb-6">
              What we build & deliver.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Every deliverable is crafted in-house by senior engineers and product designers, verified through automated pipelines and user feedback.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#12141c] border border-white/5 flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                <span className="text-base text-zinc-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RotatingTicker />
    </div>
  );
}
