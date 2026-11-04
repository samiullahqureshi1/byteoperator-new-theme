import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { StatementSection } from '@/components/home/StatementSection';
import { WorkGrid } from '@/components/home/WorkGrid';
import { CoreSolutions } from '@/components/home/CoreSolutions';
import { AIVoiceAgents } from '@/components/home/AIVoiceAgents';
import { PeopleFirst } from '@/components/home/PeopleFirst';
import { WhatsNewFeed } from '@/components/home/WhatsNewFeed';

export const metadata: Metadata = {
  title: 'Healthcare AI Solutions & Software Development | Byte Operator',
  description:
    'Build smarter healthcare operations with AI voice agents, workflow automation, custom software and system integrations from Byte Operator.',
  keywords: [
    'Healthcare AI Solutions',
    'Healthcare Software Development',
    'AI Voice Agents for Healthcare',
    'Healthcare Workflow Automation',
    'Healthcare System Integration',
    'Custom Software Development',
    'Byte Operator',
  ],
  openGraph: {
    title: 'Healthcare AI Solutions & Software Development | Byte Operator',
    description:
      'Build smarter healthcare operations with AI voice agents, workflow automation, custom software and system integrations from Byte Operator.',
    url: 'https://byteoperator.com',
    siteName: 'Byte Operator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare AI Solutions & Software Development | Byte Operator',
    description:
      'Build smarter healthcare operations with AI voice agents, workflow automation, custom software and system integrations from Byte Operator.',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatementSection />
      <WorkGrid />
      <CoreSolutions />
      <AIVoiceAgents />
      <PeopleFirst />
      <WhatsNewFeed />
    </>
  );
}
