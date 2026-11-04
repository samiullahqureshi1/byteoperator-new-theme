import React from 'react';
import type { Metadata } from 'next';
import { AIVoiceAgentsServiceView } from './AIVoiceAgentsServiceView';

export const metadata: Metadata = {
  title: 'AI Voice Agents & Healthcare Receptionists | Byte Operator',
  description:
    'Automate healthcare calls, appointment scheduling and patient follow-ups with AI voice agents and custom EHR/EMR integrations from Byte Operator.',
  keywords: [
    'AI Voice Agents for Healthcare',
    'AI Healthcare Receptionists',
    'Healthcare Call Automation',
    'Healthcare Appointment Scheduling AI',
    'EHR EMR Integration',
    'Byte Operator',
  ],
  openGraph: {
    title: 'AI Voice Agents & Healthcare Receptionists | Byte Operator',
    description:
      'Automate healthcare calls, appointment scheduling and patient follow-ups with AI voice agents and custom EHR/EMR integrations from Byte Operator.',
    url: 'https://byteoperator.com/services/ai-voice-agents-healthcare',
    siteName: 'Byte Operator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agents & Healthcare Receptionists | Byte Operator',
    description:
      'Automate healthcare calls, appointment scheduling and patient follow-ups with AI voice agents and custom EHR/EMR integrations from Byte Operator.',
  },
};

export default function AIVoiceAgentsPage() {
  return <AIVoiceAgentsServiceView />;
}
