'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Workflow, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VIDEO_URL =
  'https://cdn.shopify.com/videos/c/o/v/4d4e7a0aa052413fbf8dafbebdd13081.mp4';
const WHY_WORKFLOW_AUTOMATION_IMAGE =
  'https://cdn.shopify.com/s/files/1/0676/1155/7936/files/Why_Workflow_Automation_Image_HD.webp?v=1793899976';
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiDatabase,
  FiShield,
  FiCheckCircle,
  FiHelpCircle,
  FiPlus,
  FiLayers,
  FiUserCheck,
  FiMessageSquare,
  FiRepeat,
  FiCpu,
  FiSliders,
  FiFileText,
  FiLock,
  FiAlertCircle,
  FiChevronRight,
  FiSend,
  FiActivity,
  FiShare2,
  FiGitCommit,
  FiSearch,
  FiCheck,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi';
import {
  FaUserDoctor,
  FaHospital,
  FaFileLines,
  FaLaptopMedical,
  FaNetworkWired,
  FaStethoscope,
} from 'react-icons/fa6';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const manualPainPoints = [
  {
    num: '01',
    title: 'Repetitive Data Entry',
    desc: 'Repetitive patient information entry across different applications and administrative portals.',
  },
  {
    num: '02',
    title: 'Document Processing Delays',
    desc: 'Delays in reviewing, extracting, and processing intake forms, referrals, and administrative documents.',
  },
  {
    num: '03',
    title: 'Time-Consuming Follow-Ups',
    desc: 'Hours spent manually sending routine appointment confirmations, reminders, and follow-up emails.',
  },
  {
    num: '04',
    title: 'Disconnected Communication',
    desc: 'Fragmented communication silos between clinical departments, front-desk reception, and administrative staff.',
  },
  {
    num: '05',
    title: 'Manual Task Tracking',
    desc: 'Difficulty tracking outstanding administrative tasks, approval requests, and pending patient actions.',
  },
  {
    num: '06',
    title: 'Inconsistent Workflow Visibility',
    desc: 'Lack of centralized visibility into multi-step processes across clinical and administrative teams.',
  },
  {
    num: '07',
    title: 'Repeated Data Handling',
    desc: 'Fragmented data handling across disconnected software systems that increases the likelihood of human error.',
  },
];

const solutionsList = [
  {
    id: 'intake',
    icon: FaFileLines,
    color: '#06b6d4',
    title: 'Patient Intake & Registration Automation',
    lead: 'Patient intake often involves collecting information from online forms, registration documents, emails and other communication channels. Staff may then need to review the information and enter it into the appropriate systems.',
    capabilities: [
      'Collecting patient information through configured digital forms.',
      'Extracting relevant fields from submitted documents.',
      'Identifying missing or incomplete information.',
      'Validating information against predefined business rules.',
      'Routing incomplete submissions to administrative staff.',
      'Generating internal notifications and follow-up tasks.',
      'Preparing approved information for synchronization with connected systems.',
    ],
    example:
      'For example, when a patient submits an intake form, an automated workflow can collect the information, check required fields, identify missing details and route the submission for review before any approved system update takes place.',
  },
  {
    id: 'scheduling',
    icon: FiCalendar,
    color: '#38bdf8',
    title: 'Appointment Scheduling & Reminder Automation',
    lead: 'Appointment management involves several repetitive activities, including handling requests, checking availability, confirming bookings and communicating schedule changes.',
    capabilities: [
      'Receiving appointment requests from configured channels.',
      'Checking availability through supported calendar or scheduling integrations.',
      'Routing requests to the appropriate administrative team.',
      'Sending appointment confirmations and reminders.',
      'Managing cancellation and rescheduling requests.',
      'Notifying staff when a request needs manual attention.',
      'Updating connected scheduling systems where authorized integrations are available.',
    ],
    example:
      'Automation rules can also help manage waitlists, follow-up reminders and appointment-related communication. The workflow respects your scheduling rules and directs unusual requests to staff.',
  },
  {
    id: 'referrals',
    icon: FiShare2,
    color: '#a855f7',
    title: 'Healthcare Referral Management Automation',
    lead: 'Referral management can involve multiple documents, communication channels and administrative handoffs. A referral may arrive through email, a digital form or another supported document channel before being reviewed and processed by staff.',
    capabilities: [
      'Capturing incoming referral documents.',
      'Extracting relevant information using AI and document processing.',
      'Identifying missing fields or supporting documents.',
      'Classifying referrals according to predefined categories.',
      'Routing documents to the appropriate department or staff member.',
      'Tracking administrative referral status.',
      'Sending notifications for pending actions.',
      'Updating connected systems after authorized review.',
    ],
    example:
      'An incoming referral document can trigger a workflow that extracts configured information, checks whether required fields are present, creates an administrative review task and notifies the responsible team.',
  },
  {
    id: 'documents',
    icon: FiFileText,
    color: '#ec4899',
    title: 'Healthcare Document Processing Automation',
    lead: 'Healthcare organizations handle different types of documents, including registration forms, referral letters, insurance documents, administrative correspondence and other records. Processing these documents manually creates repetitive work.',
    capabilities: [
      'Document classification and categorization.',
      'Information extraction from supported file formats.',
      'Structured data generation.',
      'Missing information identification.',
      'Document routing based on predefined rules.',
      'Administrative approval workflows.',
      'Secure synchronization with authorized applications.',
      'Exception reporting and processing logs.',
    ],
    example:
      'Using technologies such as large language models, NLP and structured extraction, workflows transform supported documents into organized data. Extracted information is validated before updating records.',
  },
  {
    id: 'communication',
    icon: FiMessageSquare,
    color: '#22c55e',
    title: 'Patient Communication & Follow-Up Automation',
    lead: 'Healthcare administrative teams frequently manage appointment inquiries, confirmations, reminders and other routine communications. Custom AI communication workflows coordinate these activities.',
    capabilities: [
      'Automated responses to routine administrative inquiries.',
      'Appointment confirmation messages.',
      'Configured reminder sequences.',
      'Follow-up communication after administrative events.',
      'Message classification and routing.',
      'Staff notifications for unresolved requests.',
      'Human handover when a conversation requires individual attention.',
    ],
    example:
      'AI agents use approved organizational information and predefined communication rules. Sensitive, ambiguous or clinically relevant questions are routed to qualified staff.',
  },
  {
    id: 'revenue-cycle',
    icon: FiTrendingUp,
    color: '#eab308',
    title: 'Administrative & Revenue Cycle Workflow Automation',
    lead: 'Administrative and revenue cycle operations often involve multiple steps, documents and external systems that require precision and timely processing.',
    capabilities: [
      'Insurance information collection and document organization.',
      'Administrative eligibility verification workflows.',
      'Prior authorization document preparation and tracking.',
      'Billing-related document processing.',
      'Missing information notifications.',
      'Administrative claim workflow routing.',
      'Denial-related document organization.',
      'Status updates and internal reporting.',
    ],
    example:
      'For prior authorization workflows, automation organizes supporting documents, prepares configured information and routes the request for authorized staff review, reducing repetitive administrative handling.',
  },
];

const architectureStages = [
  {
    step: '01',
    title: 'Workflow Discovery & Process Mapping',
    desc: 'We analyze manual tasks, information sources, destination systems, staff approval requirements, integration options, and common workflow bottlenecks.',
  },
  {
    step: '02',
    title: 'AI-Powered Information Processing',
    desc: 'Where unstructured inputs are involved, LLMs, NLP, RAG, and AI document extraction classify data, extract configured fields, and generate structured outputs.',
  },
  {
    step: '03',
    title: 'Validation & Business Rules',
    desc: 'AI outputs pass through strict validation gates: required-field checks, format validation, duplicate detection, confidence thresholds, and exception flags.',
  },
  {
    step: '04',
    title: 'Workflow Orchestration',
    desc: 'Using n8n, APIs, webhooks, and custom logic, multi-step actions coordinate across systems (e.g. Document Extraction → Validation → Routing → Approval → Sync).',
  },
  {
    step: '05',
    title: 'Human-in-the-Loop Review & Approval',
    desc: 'Staff review queues, manual approval gates, and escalation paths ensure humans maintain oversight for sensitive communications and financial updates.',
  },
  {
    step: '06',
    title: 'Monitoring & Continuous Optimization',
    desc: 'Real-time logging tracks workflow execution, API health, error handling, and performance metrics to identify opportunities for ongoing improvement.',
  },
];

const integrationPillars = [
  {
    title: 'Custom API Integrations',
    desc: 'Application Programming Interfaces (APIs) allow supported software systems to exchange information and trigger actions. We develop custom API integrations based on available documentation, authentication requirements, permissions and technical compatibility.',
    icon: FiCpu,
  },
  {
    title: 'Webhooks & Real-Time Workflow Triggers',
    desc: 'Webhooks initiate workflows instantly when configured events occur in connected applications—such as a new form submission, document upload, or status change—without requiring manual staff initiation.',
    icon: FiZap,
  },
  {
    title: 'Database & CRM Connectivity',
    desc: 'Custom workflows connect supported databases and CRM platforms to coordinate operational information, reducing repeated data entry and keeping connected applications synchronized according to defined business rules.',
    icon: FiDatabase,
  },
  {
    title: 'EHR & EMR Integration Assessment',
    desc: 'We evaluate integration options including available APIs, HL7 or FHIR standards, authentication protocols, permitted read/write operations, and vendor restrictions. Feasibility is confirmed against the actual technical environment.',
    icon: FaLaptopMedical,
  },
  {
    title: 'n8n Workflow Orchestration',
    desc: 'n8n provides a visual automation environment for connecting applications, APIs, data transformations, AI models, conditional routing, notifications, database operations, and human approval steps, extended with custom code.',
    icon: Workflow,
  },
];

const securityPillars = [
  {
    title: 'Access Management',
    desc: 'Define which users, applications and automated processes are permitted to access particular information and perform specific actions.',
    icon: FiLock,
  },
  {
    title: 'Data Protection',
    desc: 'Evaluate appropriate encryption, secure communication channels, data handling practices and infrastructure requirements for the proposed system.',
    icon: FiShield,
  },
  {
    title: 'Audit Logging',
    desc: 'Maintain appropriate records of workflow activity, including relevant processing events, system actions, approvals and errors.',
    icon: FiFileText,
  },
  {
    title: 'Human Review & Escalation',
    desc: 'Ensure that workflows can stop, flag uncertain information and route exceptions to authorized personnel.',
    icon: FiUserCheck,
  },
  {
    title: 'Data Retention & Handling',
    desc: 'Define how information is stored, accessed, retained, returned or securely deleted according to agreed requirements.',
    icon: FiDatabase,
  },
];

const supportedOrgs = [
  {
    icon: FaUserDoctor,
    title: 'Medical Clinics & Private Practices',
    desc: 'Support administrative processes such as patient intake, appointment requests, document handling and routine communication.',
  },
  {
    icon: FaHospital,
    title: 'Hospitals & Healthcare Networks',
    desc: 'Explore multi-step workflow automation across administrative teams, clinical departments and connected business applications.',
  },
  {
    icon: FaNetworkWired,
    title: 'Specialty Healthcare Groups',
    desc: 'Organize referral coordination, appointment administration, document processing and follow-up workflows around specialty-specific requirements.',
  },
  {
    icon: FaLaptopMedical,
    title: 'Telehealth & Digital Healthcare Providers',
    desc: 'Connect supported digital forms, communication channels, scheduling applications and administrative systems.',
  },
  {
    icon: FaStethoscope,
    title: 'Healthcare Operations & Admin Teams',
    desc: 'Reduce repetitive information handling and improve coordination between the applications and processes teams use every day.',
  },
];

const implementationSteps = [
  {
    num: '01',
    title: 'Discovery & Workflow Assessment',
    desc: 'Understand the current process, operational challenges, software environment and automation objectives.',
  },
  {
    num: '02',
    title: 'Technical Planning & Architecture',
    desc: 'Define the workflow sequence, integration requirements, AI components, validation rules and human approval points.',
  },
  {
    num: '03',
    title: 'Custom Workflow Development',
    desc: 'Build the required automation using suitable AI models, n8n workflows, APIs, webhooks and custom application logic.',
  },
  {
    num: '04',
    title: 'System Integration',
    desc: 'Connect supported applications and databases based on their technical capabilities and approved access permissions.',
  },
  {
    num: '05',
    title: 'Testing & Validation',
    desc: 'Test workflow execution, data handling, error scenarios, permissions, approval steps and exception management.',
  },
  {
    num: '06',
    title: 'Deployment & Optimization',
    desc: 'Deploy the approved workflow, monitor its performance and refine the automation based on operational feedback.',
  },
];

const whyChoosePoints = [
  {
    title: 'Custom Automation Engineering',
    desc: 'Workflows designed around your operational processes rather than generic templates.',
  },
  {
    title: 'AI Agents & LLM Integration',
    desc: 'AI-powered information processing, document understanding and task coordination.',
  },
  {
    title: 'n8n Workflow Orchestration',
    desc: 'Multi-step automation connecting supported applications, services and business logic.',
  },
  {
    title: 'API & Webhook Integrations',
    desc: 'Custom connections between existing software, databases and operational tools.',
  },
  {
    title: 'Human-in-the-Loop Controls',
    desc: 'Review, approval and escalation points for workflows requiring human involvement.',
  },
  {
    title: 'Flexible Architecture',
    desc: 'Solutions designed around current requirements with room for future expansion.',
  },
  {
    title: 'Monitoring & Optimization',
    desc: 'Workflow testing, execution monitoring and ongoing technical refinement.',
  },
];

const faqs = [
  {
    number: '01',
    q: 'What is AI workflow automation in healthcare?',
    a: 'AI workflow automation in healthcare uses artificial intelligence, workflow engines and software integrations to coordinate repetitive administrative processes. Examples include patient intake, appointment communication, referral document processing and administrative task routing.',
  },
  {
    number: '02',
    q: 'Which healthcare workflows can be automated using AI?',
    a: 'Potential use cases include patient registration, appointment scheduling, reminders, referral coordination, document extraction, administrative communication, insurance information processing and prior authorization document workflows. The appropriate level of automation depends on the organization’s requirements and available integrations.',
  },
  {
    number: '03',
    q: 'Can AI workflow automation integrate with existing EHR and EMR systems?',
    a: 'Potentially, yes. Integration feasibility depends on the specific EHR or EMR platform, its APIs, available HL7 or FHIR interfaces, access permissions and technical documentation. Each integration must be assessed before implementation.',
  },
  {
    number: '04',
    q: 'Is AI workflow automation suitable for small medical clinics?',
    a: 'Yes. Small clinics and private practices may benefit from automating repetitive administrative tasks such as intake processing, appointment reminders, document handling and staff notifications. The solution can be scoped around the clinic’s size, existing software and operational priorities.',
  },
  {
    number: '05',
    q: 'Can AI automate patient scheduling and appointment reminders?',
    a: 'Custom automation can support appointment requests, availability checks, confirmations, reminders, cancellations and rescheduling workflows when the required scheduling system integrations are available. Requests outside predefined rules can be routed to staff.',
  },
  {
    number: '06',
    q: 'Can AI automate healthcare referral management?',
    a: 'AI can assist with receiving and classifying referral documents, extracting configured information, identifying missing fields, creating administrative tasks and tracking workflow status. Staff review should remain in place where information is incomplete or an action requires human judgment.',
  },
  {
    number: '07',
    q: 'Does healthcare workflow automation require human oversight?',
    a: 'Human oversight is an important part of responsible healthcare automation. Approval gates, exception handling and staff escalation can be included so that uncertain information and consequential actions are reviewed by authorized personnel.',
  },
  {
    number: '08',
    q: 'Is AI workflow automation HIPAA compliant?',
    a: 'HIPAA compliance cannot be assumed simply because a workflow uses encryption, an AI model or a cloud platform. The organizations, infrastructure providers, data flows, contracts and safeguards must be evaluated. Where applicable, Business Associate Agreements and HIPAA requirements must be addressed before processing ePHI.',
  },
  {
    number: '09',
    q: 'Can Byte Operator build custom healthcare automation solutions?',
    a: 'Byte Operator develops custom AI automation, AI agent workflows, n8n pipelines, API integrations and connected software solutions. Healthcare projects are assessed individually to determine technical feasibility, data requirements, integration options and applicable security obligations.',
  },
  {
    number: '10',
    q: 'How long does healthcare workflow automation implementation take?',
    a: 'Implementation time depends on workflow complexity, integration availability, data requirements, approval processes and testing needs. A focused administrative workflow may require less development than a multi-system integration. A realistic timeline can be established after technical discovery.',
  },
  {
    number: '11',
    q: 'How much does AI workflow automation cost for healthcare organizations?',
    a: 'Pricing depends on the number of workflows, integrations, AI processing requirements, infrastructure, security considerations and ongoing support. A project assessment helps define the scope and identify the most practical implementation approach.',
  },
];

export const AIWorkflowAutomationServiceView: React.FC = () => {
  const { playHover, playClick } = useSound();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Scroll driven expanding video animation matching homepage & previous service page
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.93, 1, 1, 0.95]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [28, 0, 0, 28]);
  const widthPercent = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ['94%', '100%', '100%', '94%']);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFaq = (idx: number) => {
    playClick();
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div
      style={{ backgroundColor: '#f3f2eb' }}
      className="min-h-screen text-[#0f1d07] pt-20 sm:pt-24 lg:pt-28"
    >
      {/* ============================================================== */}
      {/* 1. HERO SECTION & VIDEO SHOWCASE */}
      {/* ============================================================== */}
      <section className="relative pt-8 sm:pt-12 md:pt-16 pb-0 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          {/* Eyebrow matching reference structure */}
          <div className="mb-5 sm:mb-6">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/10 text-xs font-semibold tracking-[0.14em] uppercase text-[rgb(15,29,7)]"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
              HEALTHCARE AI WORKFLOW AUTOMATION
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-6 sm:mb-8 max-w-4xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-medium tracking-[-0.035em] text-[rgb(15,29,7)] leading-[1.08]"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
                color: 'rgb(15, 29, 7)',
              }}
            >
              <TextSplit
                text="Custom AI Workflow Automation Solutions for Healthcare"
                stagger={0.015}
                delay={0.05}
              />
            </h1>
          </div>

          {/* Body Copy */}
          <div className="mb-8 sm:mb-10 max-w-3xl space-y-4">
            <p
              className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[rgb(15,29,7)]/75"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Healthcare organizations manage complex operations every day, from patient intake and appointment scheduling to referral coordination, document processing and administrative follow-ups. When these processes depend on disconnected software, repetitive data entry and manual communication, valuable staff time can be lost managing tasks instead of supporting patients.
            </p>
            <p
              className="text-sm sm:text-base font-normal leading-relaxed text-[rgb(15,29,7)]/70"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Byte Operator builds custom AI workflow automation solutions for healthcare organizations, helping clinics, private practices, hospitals and healthcare teams streamline repetitive administrative processes, connect business systems and coordinate multi-step workflows.
            </p>
            <p
              className="text-sm sm:text-base font-normal leading-relaxed text-[rgb(15,29,7)]/70"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              By combining AI agents, large language models (LLMs), workflow orchestration, custom API integrations and human-in-the-loop controls, we design automation systems around your existing operations rather than forcing your organization into a generic workflow.
            </p>
            <p
              className="text-sm sm:text-base font-normal leading-relaxed text-[rgb(15,29,7)]/70"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 400,
              }}
            >
              Whether you want to improve patient intake, organize referral documents, automate appointment communications or connect multiple business applications, our team can help assess the workflow and develop a solution around your technical requirements.
            </p>
          </div>

          {/* CTAs and Supporting Text matching reference structure */}
          <div className="flex flex-col gap-3.5 mb-12 sm:mb-16">
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[rgb(15,29,7)] text-white hover:bg-black font-medium text-sm sm:text-base transition-all duration-200 shadow-sm hover:scale-[1.02] group cursor-pointer"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                }}
              >
                <span>Book a Healthcare Automation Consultation</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <a
                href="#solutions"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[rgb(15,29,7)]/25 text-[rgb(15,29,7)] hover:bg-black/5 hover:border-[rgb(15,29,7)]/50 font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                }}
              >
                <span>Explore Automated Workflows</span>
              </a>
            </div>

            <p
              className="text-xs sm:text-[13px] text-[rgb(15,29,7)]/60 font-medium tracking-wide mt-1"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              }}
            >
              Automate repetitive healthcare operations. Connect your systems. Keep your team in control.
            </p>
          </div>
        </div>

        {/* Complete Expanding Video Showcase matching homepage & voice agents service page */}
        <div ref={videoContainerRef} className="relative w-full overflow-hidden flex flex-col items-center pb-16 sm:pb-24">
          <motion.div
            style={{
              width: widthPercent,
              scale,
              borderRadius,
            }}
            className="relative h-[65vh] sm:h-[80vh] lg:h-[92vh] min-h-[480px] overflow-hidden bg-black shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-200"
          >
            <video
              ref={videoRef}
              src={VIDEO_URL}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover select-none"
            />

            {/* Bottom Right Floating Video Controls */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg">
              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-200"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-200"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. WHY HEALTHCARE ORGANIZATIONS NEED WORKFLOW AUTOMATION */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          {/* Top 2-Column: Narrative + HD Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center mb-16 sm:mb-20">
            {/* Left Column: Headline and Story Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-3"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] font-mono">
                  <FiAlertCircle className="w-3.5 h-3.5 text-[#ec4899]" />
                  OPERATIONAL CHALLENGES
                </span>
              </motion.div>

              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-5"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                <TextSplit
                  text="Why Healthcare Organizations Need Workflow Automation"
                  stagger={0.012}
                  delay={0.05}
                />
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="text-base sm:text-lg text-[#0f1d07]/85 leading-relaxed font-normal mb-4"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 400,
                }}
              >
                Healthcare operations involve many interconnected administrative activities. A patient request may require information collection, document verification, appointment coordination, staff notifications and updates across multiple systems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 400,
                }}
              >
                When these activities are handled manually, organizations encounter persistent operational friction across their teams:
              </motion.p>
            </div>

            {/* Right Column: HD Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex items-center justify-center"
            >
              <div className="relative w-full overflow-hidden flex items-center justify-center group rounded-2xl sm:rounded-3xl border border-black/[0.08] shadow-sm bg-[#f3f2eb]/40">
                <img
                  src={WHY_WORKFLOW_AUTOMATION_IMAGE}
                  alt="Why Healthcare Organizations Need Workflow Automation"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* 7 Pain Points Layout: Row 1 = 4 cards, Row 2 = 3 cards centered */}
          <div className="mb-14 sm:mb-20">
            {/* Row 1: Cards 01 - 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {manualPainPoints.slice(0, 4).map((point, idx) => (
                <motion.div
                  key={point.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.04 * idx }}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className="p-6 sm:p-7 rounded-2xl bg-[#f3f2eb]/70 hover:bg-white border border-black/[0.08] hover:border-black/25 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between group cursor-default h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-black/[0.05] text-[#0f1d07]/70 group-hover:bg-[#111814] group-hover:text-white transition-colors duration-200">
                        {point.num}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-black/15 group-hover:bg-[#111814] transition-colors duration-200" />
                    </div>
                    <h3
                      className="text-base sm:text-lg font-medium text-[#0f1d07] mb-2 tracking-tight"
                      style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 500 }}
                    >
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: Cards 05 - 07 Centered */}
            <div className="flex flex-wrap justify-center gap-5">
              {manualPainPoints.slice(4).map((point, idx) => (
                <div
                  key={point.num}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-60px)/4)] flex"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.16 + 0.04 * idx }}
                    whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
                    className="p-6 sm:p-7 rounded-2xl bg-[#f3f2eb]/70 hover:bg-white border border-black/[0.08] hover:border-black/25 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between group cursor-default h-full w-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-black/[0.05] text-[#0f1d07]/70 group-hover:bg-[#111814] group-hover:text-white transition-colors duration-200">
                          {point.num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-black/15 group-hover:bg-[#111814] transition-colors duration-200" />
                      </div>
                      <h3
                        className="text-base sm:text-lg font-medium text-[#0f1d07] mb-2 tracking-tight"
                        style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 500 }}
                      >
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Resolution Statement */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#f3f2eb] border border-black/[0.08] max-w-4xl mx-auto">
            <h3
              className="text-xl sm:text-2xl font-medium text-[#0f1d07] mb-3 tracking-tight"
              style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 500 }}
            >
              Connecting Disconnected Systems, Not Replacing Them
            </h3>
            <p className="text-sm sm:text-base text-[#0f1d07]/80 leading-relaxed font-normal mb-4">
              These challenges are not always solved by introducing another standalone application. In many cases, organizations need their existing systems to communicate and their repetitive processes to follow a more consistent sequence.
            </p>
            <p className="text-sm sm:text-base text-[#0f1d07]/80 leading-relaxed font-normal mb-4">
              Healthcare workflow automation connects these activities through defined business rules, AI-powered processing and system integrations. Routine tasks can move through automated workflows, while incomplete information, exceptions and decisions requiring human judgment are directed to the appropriate team member.
            </p>
            <p className="text-sm sm:text-base font-medium text-[#0f1d07] leading-relaxed">
              The objective is to support healthcare staff, improve operational coordination and reduce unnecessary manual work—not replace professional judgment.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. CUSTOM AI WORKFLOW AUTOMATION SOLUTIONS */}
      {/* ============================================================== */}
      <section id="solutions" className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <Workflow className="w-3.5 h-3.5 text-[#a855f7]" />
              CORE AUTOMATION SOLUTIONS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Custom AI Workflow Automation Solutions for Healthcare
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Every healthcare organization has different operational requirements, software environments and administrative procedures. Byte Operator develops custom healthcare automation workflows based on the processes an organization wants to improve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsList.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.06 * idx }}
                  className="p-7 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${sol.color}15`, color: sol.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3
                      className="text-xl sm:text-[22px] font-medium text-[#0f1d07] mb-3 tracking-tight"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {sol.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal mb-5">
                      {sol.lead}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                        Configured Capabilities:
                      </p>
                      {sol.capabilities.slice(0, 5).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-[#0f1d07]/80 leading-snug">
                          <FiCheck className="w-3.5 h-3.5 text-[#22c55e] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/[0.02] border border-black/[0.06] text-[11px] sm:text-xs text-[#0f1d07]/70 leading-relaxed italic">
                    {sol.example}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. HOW OUR SYSTEMS WORK (6-STAGE ARCHITECTURE) */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiLayers className="w-3.5 h-3.5 text-[#06b6d4]" />
              STRUCTURED SYSTEM ARCHITECTURE
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              How Our AI Healthcare Workflow Automation Systems Work
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Effective automation requires more than connecting an AI model to an application. Each workflow needs a defined process, reliable data handling, validation rules, integration logic and a clear way to manage exceptions. Byte Operator approaches automation through a structured workflow architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {architectureStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 * idx }}
                className="p-7 sm:p-8 rounded-3xl bg-[#f3f2eb] border border-black/[0.08] hover:border-black/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-[#a855f7] mb-4 block">
                    {stage.step}
                  </span>
                  <h3
                    className="text-lg sm:text-xl font-medium text-[#0f1d07] mb-3 tracking-tight"
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Illustrative Pipeline Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111814] text-white">
            <p className="text-xs font-mono uppercase tracking-widest text-[#a855f7] mb-2 font-semibold">
              Illustrative Workflow Architecture Sequence:
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
              {[
                'Incoming Referral',
                'Document Extraction',
                'Information Validation',
                'Administrative Routing',
                'Human Review Queue',
                'Authorized System Update',
                'Status Notification',
              ].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">{item}</span>
                  {i < arr.length - 1 && <span className="text-white/40">→</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="text-[11px] text-white/50 mt-3 font-mono">
              *The actual sequence is scoped to your organization’s operational policies and verified integrations.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CONNECT WITH EXISTING SYSTEMS */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiDatabase className="w-3.5 h-3.5 text-[#22c55e]" />
              SYSTEM INTEGRATION &amp; ORCHESTRATION
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Connect AI Automation With Your Existing Healthcare Systems
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Healthcare organizations often rely on several applications to manage appointments, patient information, documents, communication and administrative operations. Our approach focuses on connecting supported systems through custom integrations rather than requiring organizations to replace their existing software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 * idx }}
                  className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-black/[0.04] text-[#0f1d07] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3
                      className="text-xl font-medium text-[#0f1d07] mb-3 tracking-tight"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-black/[0.025] border border-black/[0.08] text-xs sm:text-sm text-[#0f1d07]/70 leading-relaxed font-mono">
            <strong>Honest Assessment Note:</strong> Byte Operator does not represent every EHR or EMR platform as a pre-existing integration. Integration feasibility (including HL7, FHIR, APIs, and vendor permissions) is assessed against your actual technical environment.
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. SECURITY, HUMAN OVERSIGHT & RESPONSIBLE AI */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiShield className="w-3.5 h-3.5 text-[#22c55e]" />
              SECURITY, PRIVACY &amp; COMPLIANCE
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Security, Human Oversight and Responsible AI Automation
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Healthcare automation requires careful attention to how information is collected, processed, accessed, stored and transferred. Systems that handle Protected Health Information (PHI) or electronic Protected Health Information (ePHI) must be designed around the applicable legal, contractual and security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {securityPillars.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#f3f2eb] border border-black/[0.08]">
                  <div className="w-10 h-10 rounded-xl bg-black/[0.04] text-[#0f1d07] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-lg font-medium text-[#0f1d07] mb-2 tracking-tight"
                    style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 500 }}
                  >
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-amber-500/[0.06] border border-amber-500/20 max-w-4xl">
            <h4 className="text-base font-semibold text-amber-900 mb-2 font-mono flex items-center gap-2">
              <FiAlertCircle className="w-4 h-4 text-amber-700" />
              HIPAA &amp; Business Associate Agreement (BAA) Considerations
            </h4>
            <p className="text-xs sm:text-sm text-[#0f1d07]/80 leading-relaxed font-normal mb-3">
              HIPAA obligations depend on the organizations involved, the services being provided and whether PHI or ePHI is created, received, maintained or transmitted. Where a service provider qualifies as a business associate, the appropriate Business Associate Agreement (BAA) and applicable safeguards must be addressed before handling ePHI.
            </p>
            <p className="text-xs sm:text-sm text-[#0f1d07]/80 leading-relaxed font-normal">
              Byte Operator does not make unsupported blanket compliance claims. Technical safeguards, BAAs, and infrastructure security must be validated for each proposed solution and third-party vendor before any ePHI is processed.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. HEALTHCARE ORGANIZATIONS WE SUPPORT */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FaHospital className="w-3.5 h-3.5 text-[#0891b2]" />
              CLINICAL &amp; OPERATIONAL ENVIRONMENTS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Healthcare Organizations We Support
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Our custom automation approach can be assessed for different healthcare environments, depending on their operational needs and technical requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {supportedOrgs.map((org, idx) => {
              const Icon = org.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.06 * idx }}
                  className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-black/[0.04] text-[#0f1d07] flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-xl font-medium text-[#0f1d07] mb-3 tracking-tight"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {org.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                      {org.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. OUR IMPLEMENTATION PROCESS */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiSliders className="w-3.5 h-3.5 text-[#06b6d4]" />
              FROM DISCOVERY TO DEPLOYMENT
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Our AI Workflow Automation Implementation Process
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              We follow a structured development process to ensure that automation is aligned with the organization&apos;s actual requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * idx }}
                className="p-8 rounded-3xl bg-[#f3f2eb] border border-black/[0.08] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-[#a855f7] mb-4 block">
                    {step.num}
                  </span>
                  <h3
                    className="text-lg sm:text-xl font-medium text-[#0f1d07] mb-3 tracking-tight"
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. WHY CHOOSE BYTE OPERATOR */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiCheckCircle className="w-3.5 h-3.5 text-[#22c55e]" />
              ENGINEERING EXCELLENCE
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Why Choose Byte Operator for Healthcare Workflow Automation?
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Healthcare organizations need automation that fits their existing processes and technical environments. Byte Operator combines AI development, workflow orchestration and custom software integration to build solutions around specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3
                    className="text-base sm:text-lg font-medium text-[#0f1d07] mb-2 tracking-tight"
                    style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 500 }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#0f1d07]/60 mt-10 text-center font-normal italic">
            Our focus is to understand the process first, select the appropriate technology and build automation that addresses a real operational requirement.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Sticky Header & Direct Support Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-3"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] font-mono">
                    <FiHelpCircle className="w-3.5 h-3.5 text-[#a855f7]" />
                    FREQUENTLY ASKED QUESTIONS
                  </span>
                </motion.div>

                <h2
                  className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.03em] leading-[1.14] text-[#0f1d07] mb-4"
                  style={{
                    fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  <TextSplit
                    text="Frequently Asked Questions About AI Workflow Automation in Healthcare"
                    stagger={0.012}
                    delay={0.05}
                  />
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal"
                  style={{
                    fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  Find clear answers to common questions about workflow automation, n8n orchestration, EHR/EMR compatibility, and data security.
                </motion.p>
              </div>

              {/* Direct Support Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="p-5 sm:p-6 rounded-2xl bg-black/[0.025] border border-black/[0.08] flex flex-col gap-3"
              >
                <h3
                  className="text-base font-medium text-[#0f1d07] tracking-tight"
                  style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 500 }}
                >
                  Have questions about automating your specific software?
                </h3>
                <p
                  className="text-xs sm:text-sm text-[#0f1d07]/70 leading-relaxed font-normal"
                  style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 400 }}
                >
                  Our engineering team can evaluate your systems, manual bottlenecks, and custom integration possibilities during a discovery call.
                </p>
                <Link
                  href="/contact"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#0f1d07] hover:text-black underline underline-offset-4 mt-1 transition-colors group"
                  style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 500 }}
                >
                  <span>Book an engineering consultation</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: 11 Interactive Elevated FAQ Cards */}
            <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.03 * index }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-[#f3f2eb] border-black/15 shadow-sm'
                        : 'bg-black/[0.02] border-black/[0.07] hover:bg-black/[0.035]'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      onMouseEnter={playHover}
                      className="w-full p-4 sm:p-5 flex items-start justify-between gap-4 text-left group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3 sm:gap-3.5 pr-2">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold shrink-0 mt-0.5 transition-colors duration-200 ${
                            isOpen
                              ? 'bg-[#111814] text-white'
                              : 'bg-black/[0.05] text-[#0f1d07]/75 group-hover:bg-black/10'
                          }`}
                        >
                          {faq.number}
                        </span>
                        <span
                          className="text-base sm:text-[17px] font-medium text-[#0f1d07] leading-snug tracking-tight group-hover:text-black transition-colors"
                          style={{
                            fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                            fontWeight: 500,
                          }}
                        >
                          {faq.q}
                        </span>
                      </div>
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-[#111814] text-white rotate-45'
                            : 'bg-black/[0.04] text-[#0f1d07] group-hover:bg-[#111814] group-hover:text-white'
                        }`}
                      >
                        <FiPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-black/[0.06] ml-9 sm:ml-10">
                            <p
                              className="text-xs sm:text-sm text-[#0f1d07]/80 leading-relaxed font-normal pt-3"
                              style={{
                                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                                fontWeight: 400,
                              }}
                            >
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 11. FINAL CALL TO ACTION */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl bg-[#111814] text-white p-8 sm:p-12 lg:p-16 xl:p-20 overflow-hidden shadow-2xl"
          >
            {/* Ambient gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#a855f7]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-white/90 mb-4 font-mono">
                <Workflow className="w-3.5 h-3.5 text-[#a855f7]" />
                START SMALL. EXPAND WHEN READY.
              </span>

              <h2
                className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.08] text-white mb-6"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                Automate Your Healthcare Workflows With Byte Operator
              </h2>

              <p
                className="text-base sm:text-lg text-white/80 leading-relaxed font-normal mb-4"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 400,
                }}
              >
                Manual administrative processes and disconnected applications can make healthcare operations more difficult to manage. With custom AI workflow automation, healthcare organizations can explore more structured ways to process information, coordinate administrative tasks and connect existing software.
              </p>

              <p
                className="text-sm sm:text-base text-white/70 leading-relaxed font-normal mb-6"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 400,
                }}
              >
                Whether you operate a private medical practice, a specialty clinic or a larger healthcare organization, Byte Operator can help assess your workflow requirements and develop an automation approach around your existing technology.
              </p>

              <p className="text-sm sm:text-base text-[#a855f7] font-medium leading-relaxed mb-8 sm:mb-10 font-mono">
                Start with one operational challenge. Build a workflow that solves it. Expand when your organization is ready.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#111814] hover:bg-[#86efac] transition-all duration-200 text-sm sm:text-base font-medium group"
                  style={{
                    fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  <span>Discuss Your Healthcare Automation Project</span>
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm sm:text-base font-medium"
                  style={{
                    fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  <span>Book a Consultation</span>
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 text-xs text-white/60 font-mono">
                <span>Direct Inquiry: info@byteoperator.com</span>
                <span>•</span>
                <span>Custom n8n &amp; API Pipelines</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
