import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { StatementSection } from '@/components/home/StatementSection';
import { WorkGrid } from '@/components/home/WorkGrid';
import { CoreSolutions } from '@/components/home/CoreSolutions';
import { AIVoiceAgents } from '@/components/home/AIVoiceAgents';
import { WorkflowAutomation } from '@/components/home/WorkflowAutomation';
import { SystemIntegration } from '@/components/home/SystemIntegration';
import { SolutionsBySpecialty } from '@/components/home/SolutionsBySpecialty';
import { CustomSoftware } from '@/components/home/CustomSoftware';
import { SaaSWebApps } from '@/components/home/SaaSWebApps';
import { CloudInfrastructure } from '@/components/home/CloudInfrastructure';
import { ConnectedOperations } from '@/components/home/ConnectedOperations';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { DevelopmentProcess } from '@/components/home/DevelopmentProcess';
import { SecurityPrivacy } from '@/components/home/SecurityPrivacy';
import { CaseStudiesFAQCTA } from '@/components/home/CaseStudiesFAQCTA';
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
      <WorkflowAutomation />
      <SystemIntegration />
      <SolutionsBySpecialty />
      <CustomSoftware />
      <SaaSWebApps />
      <CloudInfrastructure />
      <ConnectedOperations />
      <WhyChooseUs />
      <DevelopmentProcess />
      <SecurityPrivacy />
      <CaseStudiesFAQCTA />
      <PeopleFirst />
      <WhatsNewFeed />
    </>
  );
}
