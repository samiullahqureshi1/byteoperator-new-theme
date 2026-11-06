import React from 'react';
import type { Metadata } from 'next';
import { AIWorkflowAutomationServiceView } from './AIWorkflowAutomationServiceView';

export const metadata: Metadata = {
  title: 'AI Workflow Automation for Healthcare Organizations | Byte Operator',
  description:
    'Streamline healthcare operations, patient intake, appointment scheduling, and referral document processing with custom AI workflow automation and n8n orchestration from Byte Operator.',
  keywords: [
    'Healthcare AI Workflow Automation',
    'Healthcare Process Automation',
    'n8n Healthcare Automation',
    'EHR EMR Workflow Automation',
    'Patient Intake Automation',
    'Referral Management AI',
    'Byte Operator',
  ],
  openGraph: {
    title: 'AI Workflow Automation for Healthcare Organizations | Byte Operator',
    description:
      'Streamline healthcare operations, patient intake, appointment scheduling, and referral document processing with custom AI workflow automation and n8n orchestration from Byte Operator.',
    url: 'https://byteoperator.com/services/ai-workflow-automation-healthcare',
    siteName: 'Byte Operator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation for Healthcare Organizations | Byte Operator',
    description:
      'Streamline healthcare operations, patient intake, appointment scheduling, and referral document processing with custom AI workflow automation and n8n orchestration from Byte Operator.',
  },
};

export default function AIWorkflowAutomationPage() {
  return <AIWorkflowAutomationServiceView />;
}
