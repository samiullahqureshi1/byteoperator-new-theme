import React from 'react';
import { Hero } from '@/components/home/Hero';
import { StatementSection } from '@/components/home/StatementSection';
import { WorkGrid } from '@/components/home/WorkGrid';
import { PeopleFirst } from '@/components/home/PeopleFirst';
import { WhatsNewFeed } from '@/components/home/WhatsNewFeed';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatementSection />
      <WorkGrid />
      <PeopleFirst />
      <WhatsNewFeed />
    </>
  );
}
