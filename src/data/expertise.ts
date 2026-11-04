export interface ExpertiseService {
  title: string;
  slug: string;
  color: string; // 'cyan' | 'pink' | 'blue' | 'green' | 'purple' | 'yellow'
  iconName: string;
  description: string;
  deliverables: string[];
}

export interface ExpertiseCategory {
  title: string;
  services: ExpertiseService[];
}

export const expertiseTaxonomy: ExpertiseCategory[] = [
  {
    title: 'What We Do',
    services: [
      {
        title: 'AI Voice Agents & Receptionists',
        slug: 'ai-voice-agents-receptionists',
        color: 'cyan',
        iconName: 'PhoneCall',
        description: 'Intelligent, ultra-realistic conversational voice agents that handle inbound inquiries, schedule consultations, and qualify patients and clients 24/7.',
        deliverables: ['24/7 Inbound & Outbound AI Receptionists', 'Natural Voice Synthesis (ElevenLabs/Deepgram)', 'Calendar & EHR/CRM Bi-directional Sync', 'Real-Time Call Analytics & Transcription'],
      },
      {
        title: 'AI Workflow Automation',
        slug: 'ai-workflow-automation',
        color: 'purple',
        iconName: 'Bot',
        description: 'Autonomous multi-agent pipelines and intelligent document processing that eliminate repetitive manual labor across operations.',
        deliverables: ['Autonomous LLM Agent Architectures', 'Document Parsing & Intelligent OCR', 'Custom Webhooks & Trigger Pipelines', 'Human-in-the-Loop Review Interfaces'],
      },
      {
        title: 'Custom Software Development',
        slug: 'custom-software-development',
        color: 'pink',
        iconName: 'Code2',
        description: 'Tailor-made enterprise software platforms built with modern TypeScript, modular microservices, and bank-grade security.',
        deliverables: ['Bespoke Enterprise Systems', 'Microservices Architecture', 'PostgreSQL / Distributed Database Design', 'High-Throughput Processing Engines'],
      },
      {
        title: 'SaaS & Web Application Development',
        slug: 'saas-web-application-development',
        color: 'blue',
        iconName: 'Layout',
        description: 'High-performance multi-tenant SaaS products and modern web apps engineered with Next.js, real-time sync, and fluid interaction design.',
        deliverables: ['Multi-Tenant Cloud Architecture', 'Subscription Billing & Stripe Integration', 'Role-Based Access Control (RBAC)', 'Real-Time State & WebSockets'],
      },
      {
        title: 'API & System Integration',
        slug: 'api-system-integration',
        color: 'green',
        iconName: 'GitBranch',
        description: 'Seamless interconnectivity across third-party platforms, ERPs, CRMs, and custom endpoints with zero data loss.',
        deliverables: ['REST & GraphQL API Gateways', 'Bi-directional Data Synchronization', 'ERP & CRM Connector Pipelines', 'Webhook Monitoring & Automated Retries'],
      },
      {
        title: 'Healthcare Software Integration',
        slug: 'healthcare-software-integration',
        color: 'cyan',
        iconName: 'Activity',
        description: 'HIPAA-compliant software bridging EHR/EMR platforms, telehealth systems, and clinical workflows with military-grade encryption.',
        deliverables: ['FHIR & HL7 Standard Pipelines', 'EHR/EMR Bi-directional Sync', 'HIPAA & SOC 2 Compliance Audits', 'Secure Patient Data Encryption'],
      },
      {
        title: 'Cloud & Infrastructure Engineering',
        slug: 'cloud-infrastructure-engineering',
        color: 'yellow',
        iconName: 'Cloud',
        description: 'Scalable, resilient cloud environments on AWS, GCP, and edge CDNs with automated CI/CD and 99.99% uptime guarantees.',
        deliverables: ['AWS & GCP Cloud Architecture', 'Docker & Kubernetes Orchestration', 'Automated CI/CD Pipelines', 'Zero-Downtime Edge Deployment'],
      },
    ],
  },
  {
    title: 'Healthcare Solutions',
    services: [
      {
        title: 'Medical Practices',
        slug: 'medical-practices',
        color: 'cyan',
        iconName: 'Stethoscope',
        description: 'End-to-end digital operations for medical practices—from automated patient check-in to automated clinical note drafting and billing.',
        deliverables: ['Online Patient Booking & Intake', 'Automated Appointment Reminders', 'EHR Sync & Clinical Records', 'Telehealth Video Portals'],
      },
      {
        title: 'Dental Practices',
        slug: 'dental-practices',
        color: 'blue',
        iconName: 'Smile',
        description: 'Specialized practice management and patient acquisition platforms designed to fill dental chairs and streamline chair-side charting.',
        deliverables: ['Dental Practice Management Sync', 'Smart Recall & Hygiene Automation', 'Digital Consent & Charting', 'High-Converting Patient Portals'],
      },
      {
        title: 'Dermatology & Aesthetic Clinics',
        slug: 'dermatology-aesthetic-clinics',
        color: 'pink',
        iconName: 'Sparkles',
        description: 'Luxury digital clinic experiences, visual treatment planners, and automated consultation scheduling for aesthetic medicine.',
        deliverables: ['Visual Before & After Portals', 'Private Virtual Consultation Booking', 'Treatment Package Upsell Flows', 'HIPAA-Compliant Photo Storage'],
      },
      {
        title: 'Ophthalmology Clinics',
        slug: 'ophthalmology-clinics',
        color: 'purple',
        iconName: 'Eye',
        description: 'Digital workflows tailored for eye clinics, diagnostic imaging integrations, and seamless vision correction surgery consultations.',
        deliverables: ['Diagnostic Equipment Data Pipelines', 'LASIK / Cataract Assessment Funnels', 'Automated Post-Op Follow-up Bots', 'Specialist Referral Management'],
      },
      {
        title: 'Primary Care',
        slug: 'primary-care',
        color: 'green',
        iconName: 'Heart',
        description: 'Unified technology for high-volume family medicine and primary care networks focusing on patient retention and rapid triaging.',
        deliverables: ['AI-Assisted Patient Triage', 'Family Group Health Portals', 'Prescription Refill Automation', 'Preventive Care Outreach Campaigns'],
      },
      {
        title: 'Other Specialties',
        slug: 'other-specialties',
        color: 'yellow',
        iconName: 'PlusCircle',
        description: 'Custom healthcare software solutions for orthopedics, cardiology, psychiatry, physical therapy, and multidisciplinary healthcare clinics.',
        deliverables: ['Specialty-Specific Workflow Design', 'Custom Assessment Questionnaires', 'Third-Party Diagnostics Sync', 'Multi-Location Clinic Management'],
      },
    ],
  },
  {
    title: 'Technology',
    services: [
      {
        title: 'Headless',
        slug: 'headless',
        color: 'purple',
        iconName: 'Zap',
        description: 'Decoupled modern frontends delivering unmatched page speed, infinite flexibility, and bank-grade security.',
        deliverables: ['Next.js App Router Frontend', 'Edge Caching & Vercel / Cloudflare', 'GraphQL & REST API Bridges', 'Microservices Architecture'],
      },
      {
        title: 'React.js',
        slug: 'react-js',
        color: 'purple',
        iconName: 'Code',
        description: 'Enterprise-grade React and TypeScript development following modern component paradigms and strict type safety.',
        deliverables: ['React 19 & Server Components', 'State Management & Zustand', 'WebGL & Canvas Integration', 'Automated Testing (Vitest/Playwright)'],
      },
      {
        title: 'Payload CMS',
        slug: 'payload-cms',
        color: 'purple',
        iconName: 'Database',
        description: 'Modern headless TypeScript CMS providing flexible block builders and lightning-fast editorial workflows.',
        deliverables: ['Payload CMS 3.0 Architecture', 'Custom Admin Components', 'Role-Based Access Control', 'Multi-Language Localization'],
      },
      {
        title: 'Laravel',
        slug: 'laravel',
        color: 'pink',
        iconName: 'Server',
        description: 'Robust PHP and Laravel backends powering complex business logic, queues, and high-throughput APIs.',
        deliverables: ['Laravel Backend APIs', 'Livewire & Alpine Integration', 'PostgreSQL / MySQL Schema Design', 'Secure Payment Gateways'],
      },
      {
        title: 'AI & Automation',
        slug: 'ai-automation',
        color: 'purple',
        iconName: 'Cpu',
        description: 'Integrating LLMs, autonomous agentic pipelines, and smart automation into customer-facing products.',
        deliverables: ['LLM Workflow Integration', 'Custom Vector Search & RAG', 'Automated Content Pipelines', 'Intelligent Chatbots & Assistants'],
      },
    ],
  },
];
