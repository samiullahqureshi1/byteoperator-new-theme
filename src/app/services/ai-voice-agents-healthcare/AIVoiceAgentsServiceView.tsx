'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiPhoneCall,
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiActivity,
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
} from 'react-icons/fi';
import {
  FaUserDoctor,
  FaTooth,
  FaEye,
  FaStethoscope,
  FaHandDots,
  FaHospital,
} from 'react-icons/fa6';
import { useSound } from '@/components/layout/SoundProvider';
import { TextSplit } from '@/components/ui/TextSplit';

const opportunityList = [
  {
    num: '01',
    title: 'Inbound Patient Call Management',
    desc: 'Manage inbound patient calls efficiently through configured conversational AI voice agents.',
  },
  {
    num: '02',
    title: 'Routine Inquiry Handling',
    desc: 'Support routine non-clinical inquiries, office hours, location details, and administrative questions.',
  },
  {
    num: '03',
    title: 'Appointment Scheduling Workflows',
    desc: 'Assist with real-time appointment booking, availability lookups, rescheduling, and cancellations.',
  },
  {
    num: '04',
    title: 'Organized Reminders & Follow-Ups',
    desc: 'Trigger approved automated reminders and planned patient communication sequences.',
  },
  {
    num: '05',
    title: 'Connected Healthcare Systems',
    desc: 'Seamlessly connect voice-agent workflows with supported EHR, EMR, and scheduling platforms.',
  },
  {
    num: '06',
    title: 'Custom Practice-Specific Solutions',
    desc: 'Develop custom communication solutions engineered specifically around your clinic’s business processes.',
  },
];

const capabilities = [
  {
    icon: FiPhoneCall,
    title: 'Handle Inbound Patient Calls',
    p1: 'Incoming calls are an important part of the patient experience. Patients may contact a practice to ask about services, request appointments or obtain general administrative information.',
    p2: 'AI voice agents can assist with these interactions by understanding routine requests and responding according to configured practice information and workflows. This provides healthcare organizations with another way to manage incoming communication while helping reduce repetitive work for reception staff.',
  },
  {
    icon: FiMessageSquare,
    title: 'Respond to Routine Patient Inquiries',
    p1: 'Healthcare practices regularly receive questions about appointments, office information, available services and administrative procedures. An AI medical receptionist can be configured to handle approved, non-clinical inquiries using information supplied by the practice.',
    p2: 'This helps create a more organized communication process and gives patients a consistent way to access routine information. Clinical questions and requests that require professional judgment remain strictly within the healthcare team’s responsibility.',
  },
  {
    icon: FiCalendar,
    title: 'Assist With Appointment Requests',
    p1: 'Appointment coordination can involve multiple steps, from understanding a patient’s request to checking the relevant scheduling information and communicating the next step.',
    p2: 'Byte Operator’s AI voice solutions can support appointment-related workflows through appropriate scheduling integrations. Depending on the configured system, these workflows can support appointment requests, booking processes, rescheduling and cancellation requests.',
  },
  {
    icon: FiUserCheck,
    title: 'Support Call Routing & Staff Coordination',
    p1: 'Not every patient request should be handled entirely through automation. Some conversations require additional information, staff involvement or attention from the appropriate healthcare team.',
    p2: 'A well-designed voice-agent workflow accounts for these situations. During implementation, Byte Operator assesses the appropriate routing and escalation requirements for your organization’s communication process.',
  },
];

const schedulingPillars = [
  {
    num: '01',
    title: 'Patient Appointment Booking',
    desc: 'AI voice-agent workflows can assist patients with appointment requests and support booking processes through connected scheduling systems. The integration requirements depend on the healthcare organization’s existing software, scheduling rules and technical environment.',
  },
  {
    num: '02',
    title: 'Appointment Rescheduling & Cancellations',
    desc: 'Patients may need to change or cancel an existing appointment. Handling these requests manually can create additional work for front-desk teams. Configured AI workflows help process appointment-change requests and direct them through the appropriate scheduling process.',
  },
  {
    num: '03',
    title: 'More Organized Appointment Coordination',
    desc: 'Connecting appointment-related communication with existing systems helps practices organize scheduling activities more consistently. Byte Operator evaluates operational requirements before designing the appropriate integration and workflow.',
  },
];

const followUpFeatures = [
  {
    title: 'Appointment Reminders & Confirmations',
    desc: 'Appointment reminders help practices communicate important scheduling information to patients. Configured automation workflows can support reminder and confirmation processes according to the organization’s communication requirements.',
    icon: FiClock,
  },
  {
    title: 'Scheduled Patient Follow-Up Workflows',
    desc: 'Some practices need to contact patients after an appointment, follow up on an earlier inquiry or communicate information about a scheduled visit. Byte Operator develops follow-up workflows around the practice’s requirements.',
    icon: FiRepeat,
  },
  {
    title: 'Streamlined Patient Communication',
    desc: 'By organizing routine reminders and follow-up activities, healthcare providers reduce the amount of repetitive communication managed manually by their teams. Specific channels, timing, and actions are customized during planning.',
    icon: FiSend,
  },
];

const workflowSteps = [
  {
    step: '01',
    title: 'A Patient Calls the Practice',
    desc: 'A patient contacts the healthcare organization through its configured phone system. The AI voice agent receives the inbound call and begins the conversation according to the practice’s communication requirements.',
  },
  {
    step: '02',
    title: 'The AI Understands the Request',
    desc: 'The voice agent processes the patient’s spoken request and identifies the purpose of the conversation—whether asking about an appointment, requesting general practice information, or looking to change an existing booking.',
  },
  {
    step: '03',
    title: 'The Appropriate Workflow Is Initiated',
    desc: 'Based on the request and available integrations, the AI system follows the relevant configured workflow: providing approved practice information, assisting with an appointment request, or interacting with a connected scheduling system.',
  },
  {
    step: '04',
    title: 'The Appropriate Next Step Is Identified',
    desc: 'If a request requires additional attention or falls outside the configured workflow, the system follows the escalation or staff-coordination process established during implementation, ensuring human oversight is always maintained.',
  },
];

const specialties = [
  {
    icon: FaUserDoctor,
    title: 'Medical Practices',
    desc: 'Medical practices manage incoming patient calls, appointment requests and routine administrative inquiries. AI voice-agent workflows can support these communication activities and help organize appointment-related processes.',
    color: '#06b6d4',
  },
  {
    icon: FaTooth,
    title: 'Dental Practices',
    desc: 'Dental offices regularly coordinate consultations, appointment requests, scheduling changes and patient communication. AI receptionist solutions can be configured around these administrative workflows and scheduling requirements.',
    color: '#38bdf8',
  },
  {
    icon: FaHandDots,
    title: 'Dermatology & Aesthetic Clinics',
    desc: 'Dermatology and aesthetic clinics receive inquiries about consultations, treatments, appointments and general clinic information. Configured AI voice solutions support routine administrative communication while routing clinical questions to staff.',
    color: '#ec4899',
  },
  {
    icon: FaEye,
    title: 'Ophthalmology Clinics',
    desc: 'Ophthalmology practices coordinate patient appointments and respond to routine administrative inquiries. AI voice-agent workflows help organize incoming communication and support the practice’s appointment processes.',
    color: '#a855f7',
  },
  {
    icon: FaStethoscope,
    title: 'Primary Care',
    desc: 'Primary care providers manage ongoing patient communication and a variety of appointment-related administrative responsibilities. AI voice solutions can be configured to support routine inquiries, appointment requests and planned communication workflows.',
    color: '#22c55e',
  },
  {
    icon: FaHospital,
    title: 'Other Healthcare Specialties',
    desc: 'Different healthcare organizations have specialized operational requirements. Byte Operator assesses these requirements and explores custom AI voice-agent workflows suited to your services, software environment and communication processes.',
    color: '#eab308',
  },
];

const integrationPoints = [
  'Existing EHR and EMR systems.',
  'Available API documentation and integration capabilities.',
  'Appointment and scheduling workflows.',
  'Required information exchange.',
  'Existing software and operational processes.',
  'Technical and security requirements.',
];

const securityChecklist = [
  'Identifying the information required for each workflow.',
  'Evaluating how patient information moves between connected systems.',
  'Reviewing access permissions and data-handling requirements.',
  'Assessing applicable healthcare privacy and security obligations.',
  'Defining appropriate staff involvement for sensitive or out-of-scope requests.',
];

const faqs = [
  {
    number: '01',
    q: 'What is an AI healthcare receptionist?',
    a: 'An AI healthcare receptionist is a voice-based AI system designed to assist healthcare organizations with routine patient communication. Depending on its configuration, it can support incoming calls, general inquiries, appointment-related workflows and administrative communication.',
  },
  {
    number: '02',
    q: 'How do AI voice agents help healthcare providers?',
    a: 'AI voice agents can help healthcare providers organize routine phone communication, support appointment requests and streamline administrative workflows. They can reduce repetitive manual tasks and give staff more time for responsibilities requiring personal attention.',
  },
  {
    number: '03',
    q: 'Can an AI receptionist assist with patient appointment scheduling?',
    a: 'Yes. AI voice-agent workflows can be configured to support appointment requests and scheduling processes through appropriate system integrations. The available actions depend on the scheduling software, integration capabilities and agreed workflow.',
  },
  {
    number: '04',
    q: 'Can AI voice agents integrate with EHR and EMR systems?',
    a: 'AI voice solutions can be connected with supported EHR and EMR systems through suitable integration methods, including custom API development. Compatibility must be assessed based on the platform, available APIs and technical requirements.',
  },
  {
    number: '05',
    q: 'Can an AI receptionist handle appointment rescheduling and cancellations?',
    a: 'Appointment rescheduling and cancellation workflows can be configured when the necessary scheduling integration and business rules are available. The exact process depends on the connected system and the organization’s requirements.',
  },
  {
    number: '06',
    q: 'Can healthcare practices customize their AI voice agents?',
    a: 'Yes. Byte Operator offers custom-built AI voice-agent development alongside managed solution delivery. Workflows can be planned around the practice’s communication needs, operational processes and supported software integrations.',
  },
  {
    number: '07',
    q: 'Can an AI healthcare receptionist transfer calls to human staff?',
    a: 'Human involvement and escalation should be considered during implementation. The appropriate transfer or staff-coordination functionality depends on the phone system, configuration and agreed requirements.',
  },
  {
    number: '08',
    q: 'What is the difference between an AI receptionist and a traditional answering service?',
    a: 'A traditional answering service generally relies on human operators to receive and manage calls. An AI receptionist uses conversational AI to process spoken requests and follow configured workflows. The level of automation depends on the system’s capabilities and integrations.',
  },
  {
    number: '09',
    q: 'How are AI voice agents implemented in healthcare practices?',
    a: 'Implementation typically begins with understanding the practice’s call-handling requirements, existing phone and software systems, appointment workflows and integration needs. The solution is then configured or developed around the agreed requirements and tested before deployment.',
  },
  {
    number: '10',
    q: 'What should a healthcare practice consider before deploying an AI voice agent?',
    a: 'A healthcare practice should evaluate its communication requirements, scheduling systems, integration capabilities, patient privacy obligations, security requirements and the situations that require human involvement. A clearly defined implementation plan helps ensure that the solution fits the organization’s operations.',
  },
];

export const AIVoiceAgentsServiceView: React.FC = () => {
  const { playHover, playClick } = useSound();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    playClick();
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div
      style={{ backgroundColor: '#f3f2eb' }}
      className="min-h-screen text-[#0f1d07] pt-24 sm:pt-28 lg:pt-32"
    >
      {/* ============================================================== */}
      {/* 1. HERO SECTION */}
      {/* ============================================================== */}
      <section className="relative px-6 sm:px-12 lg:px-16 pt-8 pb-20 sm:pb-28 lg:pb-36 border-b border-black/[0.08] overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          {/* Breadcrumb / Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-6 sm:mb-8"
          >
            <Link
              href="/"
              onMouseEnter={playHover}
              onClick={playClick}
              className="text-xs uppercase tracking-widest text-[#0f1d07]/60 hover:text-black transition-colors font-mono"
            >
              Home
            </Link>
            <span className="text-[#0f1d07]/30 text-xs">/</span>
            <span className="text-xs uppercase tracking-widest text-[#0f1d07]/60 font-mono">
              Services
            </span>
            <span className="text-[#0f1d07]/30 text-xs">/</span>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#0891b2] text-[11px] font-semibold tracking-wider uppercase font-mono"
            >
              <FiPhoneCall className="w-3 h-3" />
              AI Voice Agents &amp; Receptionists
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading, Lead & CTAs */}
            <div className="lg:col-span-7">
              <h1
                className="text-4xl sm:text-6xl lg:text-[68px] font-medium tracking-[-0.035em] leading-[1.05] text-[#0f1d07] mb-6 sm:mb-8"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                <TextSplit
                  text="AI Voice Agents & Receptionists for Healthcare"
                  stagger={0.015}
                  delay={0.05}
                />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-lg sm:text-xl text-[#0f1d07]/85 leading-relaxed font-normal mb-5 max-w-2xl"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 400,
                }}
              >
                Healthcare practices depend on effective communication to manage patient inquiries, appointment requests and everyday administrative responsibilities. When incoming calls and repetitive tasks consume valuable staff time, it can become harder to maintain an organized patient communication process.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal mb-6 max-w-2xl"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 400,
                }}
              >
                Byte Operator develops AI voice agents and healthcare receptionist solutions that help healthcare providers manage inbound patient calls, support appointment scheduling and streamline routine communication workflows. Through custom development and API integrations, our solutions can be designed around existing healthcare systems and the operational requirements of each organization.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 400,
                }}
              >
                Whether you operate a medical practice, dental office, dermatology clinic or another healthcare organization, Byte Operator helps you explore practical AI voice solutions tailored to your communication needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#111814] text-white hover:bg-black transition-all duration-200 text-sm sm:text-base font-medium shadow-md group"
                  style={{
                    fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  <span>Discuss Your AI Voice Agent Project</span>
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#workflow"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-black/15 text-[#0f1d07] hover:bg-black/[0.04] transition-colors text-sm font-medium"
                >
                  <span>See How It Works</span>
                  <FiChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Right Column: Interactive System Architecture Preview Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl bg-white border border-black/10 p-6 sm:p-8 shadow-sm flex flex-col gap-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs uppercase font-mono tracking-wider font-semibold text-[#0f1d07]/75">
                      Live Telephony Flow
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-black/[0.04] text-[#0f1d07]/60">
                    24/7 Availability
                  </span>
                </div>

                {/* Workflow Simulation Stack */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-black/[0.02] border border-black/[0.06] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/10 text-[#0891b2] flex items-center justify-center shrink-0">
                      <FiPhoneCall className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-[#0f1d07]">Inbound Patient Call</p>
                      <p className="text-[#0f1d07]/60">Instant greeting &amp; natural language intake</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/[0.02] border border-black/[0.06] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#A880F0]/10 text-[#A880F0] flex items-center justify-center shrink-0">
                      <FiCpu className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-[#0f1d07]">Intent &amp; Routing Engine</p>
                      <p className="text-[#0f1d07]/60">Booking, rescheduling, or practice information</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/[0.02] border border-black/[0.06] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center shrink-0">
                      <FiDatabase className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-[#0f1d07]">Connected EHR / Scheduling API</p>
                      <p className="text-[#0f1d07]/60">Real-time slot sync &amp; database confirmation</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/[0.02] border border-black/[0.06] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ec4899]/10 text-[#ec4899] flex items-center justify-center shrink-0">
                      <FiUserCheck className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-[#0f1d07]">Human Escalation Fallback</p>
                      <p className="text-[#0f1d07]/60">Seamless warm transfer to on-duty staff</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#0f1d07]/60">
                  <span>Engineered by Byte Operator</span>
                  <span className="font-mono text-[#0891b2]">HIPAA Scoped Architecture</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. AI VOICE AGENTS BUILT FOR HEALTHCARE PROVIDERS */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiPhoneCall className="w-3.5 h-3.5 text-[#0891b2]" />
              ENGINEERED FOR CLINICAL OPERATIONS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-5"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              AI Voice Agents Built for Healthcare Providers
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal mb-4">
              Healthcare communication requires more than simply answering a phone call. Patients contact medical practices for appointment requests, general information, scheduling changes and other administrative needs. Each request requires an appropriate response and a clear communication process.
            </p>
            <p className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal mb-4">
              Byte Operator builds AI-powered voice solutions designed to support these healthcare interactions. An AI healthcare receptionist can understand routine patient requests, follow configured communication workflows and assist with administrative tasks that would otherwise require manual attention from reception teams.
            </p>
            <p className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal">
              Our approach focuses on combining conversational AI, workflow automation and custom software integration to create a solution that fits your practice.
            </p>
          </div>

          {/* 6 Key Operational Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunityList.map((opp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="p-6 sm:p-7 rounded-2xl bg-[#f3f2eb]/70 border border-black/[0.08] hover:border-black/20 hover:bg-[#f3f2eb] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-black/[0.05] text-[#0f1d07]/70 inline-block mb-4">
                    {opp.num}
                  </span>
                  <h3
                    className="text-lg sm:text-xl font-medium text-[#0f1d07] mb-2 tracking-tight"
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {opp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                    {opp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#0f1d07]/60 mt-10 text-center font-normal italic">
            The objective is to make routine communication more manageable while allowing healthcare staff to concentrate on responsibilities that require their personal attention.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. WHAT CAN OUR AI HEALTHCARE RECEPTIONIST DO? */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiCheckCircle className="w-3.5 h-3.5 text-[#22c55e]" />
              CORE FUNCTIONALITY
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              What Can Our AI Healthcare Receptionist Do?
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              An AI healthcare receptionist can support several administrative activities throughout the patient communication process. Its specific functions depend on the practice’s requirements, configured workflows and available system integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 * idx }}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-black/[0.04] text-[#0f1d07] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-medium text-[#0f1d07] mb-3 tracking-tight"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {cap.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#0f1d07]/80 leading-relaxed font-normal mb-3">
                      {cap.p1}
                    </p>
                    <p className="text-xs sm:text-sm text-[#0f1d07]/70 leading-relaxed font-normal">
                      {cap.p2}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. HEALTHCARE APPOINTMENT SCHEDULING AUTOMATION */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiCalendar className="w-3.5 h-3.5 text-[#A880F0]" />
              SCHEDULING WORKFLOWS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Healthcare Appointment Scheduling Automation
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Appointment scheduling is one of the most important administrative processes in healthcare. Practices must coordinate patient requests, provider availability and appointment changes while maintaining clear communication. Healthcare appointment scheduling automation can help organize these activities and reduce repetitive manual work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedulingPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * idx }}
                className="p-8 rounded-3xl bg-[#f3f2eb] border border-black/[0.08] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-black text-white inline-block mb-5">
                    {pillar.num}
                  </span>
                  <h3
                    className="text-xl font-medium text-[#0f1d07] mb-3 tracking-tight"
                    style={{
                      fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0f1d07]/80 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. AUTOMATED PATIENT FOLLOW-UPS AND REMINDERS */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiRepeat className="w-3.5 h-3.5 text-[#0891b2]" />
              PROACTIVE PATIENT ENGAGEMENT
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Automated Patient Follow-Ups and Reminders
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Patient communication does not end when an appointment is requested or scheduled. Healthcare practices may also need to send reminders, confirm appointments and maintain communication through planned follow-up activities. AI-powered communication workflows can help organize these recurring administrative responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {followUpFeatures.map((item, idx) => {
              const Icon = item.icon;
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
                    <div className="w-10 h-10 rounded-xl bg-black/[0.04] text-[#0f1d07] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-medium text-[#0f1d07] mb-3 tracking-tight"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. CUSTOM EHR AND EMR INTEGRATIONS FOR HEALTHCARE */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] font-mono">
                <FiDatabase className="w-3.5 h-3.5 text-[#06b6d4]" />
                CUSTOM API &amp; SYSTEM INTEGRATIONS
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07]"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                Custom EHR and EMR Integrations for Healthcare
              </h2>
              <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
                Healthcare organizations often rely on electronic health records (EHR) and electronic medical records (EMR) systems to manage important patient and operational information.
              </p>
              <p className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal">
                An AI voice agent becomes more useful when its workflows can interact appropriately with the software already used by a healthcare organization. Byte Operator develops custom API integrations to connect AI voice solutions with supported healthcare systems and existing business workflows.
              </p>
              <div className="p-6 rounded-2xl bg-[#f3f2eb] border border-black/[0.08]">
                <h4 className="text-base font-medium text-[#0f1d07] mb-2 font-mono">
                  Custom Healthcare API Integrations
                </h4>
                <p className="text-xs sm:text-sm text-[#0f1d07]/75 leading-relaxed font-normal">
                  Custom API development can help connect different applications and support the exchange of information required by an agreed workflow. Rather than assuming every healthcare organization uses the same systems, Byte Operator approaches integrations according to the client’s technical environment and operational needs.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#f3f2eb] border border-black/[0.08]">
                <h3
                  className="text-xl sm:text-2xl font-medium text-[#0f1d07] mb-3 tracking-tight"
                  style={{
                    fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Integration Around Your Practice&apos;s Requirements
                </h3>
                <p className="text-sm sm:text-base text-[#0f1d07]/80 leading-relaxed font-normal mb-6">
                  Every healthcare organization has different processes and software requirements. Our custom integration approach considers:
                </p>

                <div className="space-y-3">
                  {integrationPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-black/[0.06] flex items-center gap-3 text-xs sm:text-sm font-medium text-[#0f1d07]"
                    >
                      <FiCheckCircle className="w-4 h-4 text-[#06b6d4] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#0f1d07]/70 leading-relaxed font-normal mt-6 italic">
                  The result is an integration plan based on the systems and requirements that are actually supported.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. HOW OUR AI HEALTHCARE VOICE AGENT WORKS */}
      {/* ============================================================== */}
      <section id="workflow" className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiLayers className="w-3.5 h-3.5 text-[#06b6d4]" />
              STAGE-BY-STAGE IMPLEMENTATION
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              How Our AI Healthcare Voice Agent Works
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              An AI healthcare receptionist combines voice interaction with configured workflows to help manage routine patient communication. The implementation process depends on the organization’s requirements, but a typical workflow can be organized into the following stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * idx }}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between relative group hover:border-black/25 transition-colors"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-[#06b6d4] mb-4 block">
                    {step.step}
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
      {/* 8. AI VOICE SOLUTIONS FOR DIFFERENT HEALTHCARE PRACTICES */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 bg-white border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiSliders className="w-3.5 h-3.5 text-[#ec4899]" />
              SOLUTIONS BY SPECIALTY
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              AI Voice Solutions for Different Healthcare Practices
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Healthcare specialties have different patient communication requirements. A dental practice may have different appointment workflows from a dermatology clinic, while primary care providers may manage a wider range of routine patient inquiries. Byte Operator develops configurable AI voice solutions that can be planned around the operational requirements of different healthcare organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {specialties.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 * idx }}
                  className="p-8 rounded-3xl bg-[#f3f2eb] border border-black/[0.08] hover:border-black/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-xl font-medium text-[#0f1d07] mb-3 tracking-tight"
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0f1d07]/80 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. MANAGED AI SOLUTIONS AND CUSTOM DEVELOPMENT */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 border-b border-black/[0.08]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] mb-3 font-mono">
              <FiCpu className="w-3.5 h-3.5 text-[#06b6d4]" />
              FLEXIBLE DELIVERY MODELS
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-[#0f1d07] mb-4"
              style={{
                fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                fontWeight: 500,
              }}
            >
              Managed AI Solutions and Custom Development
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal">
              Healthcare organizations have different technical resources, operational requirements and implementation preferences. Byte Operator offers both managed AI solution delivery and custom-built development approaches, allowing organizations to explore an implementation model that aligns with their needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Model 1: Managed AI Voice Agent Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="px-3 py-1 rounded-full bg-[#06b6d4]/10 text-[#0891b2] font-mono text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                  Option 01
                </span>
                <h3
                  className="text-2xl font-medium text-[#0f1d07] mb-4 tracking-tight"
                  style={{
                    fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Managed AI Voice Agent Solutions
                </h3>
                <p className="text-sm sm:text-base text-[#0f1d07]/80 leading-relaxed font-normal mb-4">
                  For organizations seeking a managed implementation, Byte Operator can work with the client to define the required workflows, configure the solution and plan its integration with supported systems.
                </p>
                <p className="text-xs sm:text-sm text-[#0f1d07]/70 leading-relaxed font-normal">
                  The scope of ongoing management and support is established according to the agreed service arrangement.
                </p>
              </div>
            </motion.div>

            {/* Model 2: Custom-Built AI Voice Agent Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="px-3 py-1 rounded-full bg-[#A880F0]/10 text-[#A880F0] font-mono text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                  Option 02
                </span>
                <h3
                  className="text-2xl font-medium text-[#0f1d07] mb-4 tracking-tight"
                  style={{
                    fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Custom-Built AI Voice Agent Development
                </h3>
                <p className="text-sm sm:text-base text-[#0f1d07]/80 leading-relaxed font-normal mb-4">
                  Some healthcare organizations require a more tailored approach. Custom development allows the voice-agent solution to be planned around specific communication requirements, business processes and available software integrations.
                </p>
                <p className="text-xs sm:text-sm text-[#0f1d07]/70 leading-relaxed font-normal">
                  This approach is suitable for organizations that need more control over how their AI voice solution fits into their existing technology environment.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="p-8 rounded-3xl bg-black/[0.03] border border-black/[0.08]">
            <h4
              className="text-lg font-medium text-[#0f1d07] mb-2 tracking-tight"
              style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 500 }}
            >
              Designed Around Your Healthcare Technology
            </h4>
            <p className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal">
              Whether the preferred approach is managed delivery or custom development, implementation should begin with a clear understanding of the organization’s existing systems and operational requirements. Byte Operator evaluates these factors to help define a practical development and integration approach.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. PATIENT PRIVACY, SECURITY AND HUMAN OVERSIGHT */}
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
              Patient Privacy, Security and Human Oversight
            </h2>
            <p className="text-base sm:text-lg text-[#0f1d07]/80 leading-relaxed font-normal mb-4">
              Healthcare technology must be planned with appropriate attention to patient privacy, information security and the responsible handling of sensitive information. AI voice-agent implementations should consider what information is collected, how it is processed, which systems receive it and who is authorized to access it.
            </p>
            <p className="text-sm sm:text-base text-[#0f1d07]/75 leading-relaxed font-normal">
              Byte Operator considers these requirements during solution planning and integration design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-lg font-medium text-[#0f1d07] mb-4 font-mono">
                Important Considerations Include:
              </h3>
              {securityChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#f3f2eb] border border-black/[0.06] flex items-center gap-3 text-sm font-medium text-[#0f1d07]"
                >
                  <FiLock className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-amber-500/[0.06] border border-amber-500/20 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-amber-700 font-medium text-sm">
                <FiAlertCircle className="w-4 h-4" />
                <span>Important Clinical &amp; Compliance Boundary</span>
              </div>
              <p className="text-xs sm:text-sm text-[#0f1d07]/80 leading-relaxed font-normal">
                Healthcare organizations should also evaluate applicable regulatory requirements, contractual arrangements and technical safeguards before deploying AI systems that process protected health information.
              </p>
              <p className="text-xs sm:text-sm text-[#0f1d07]/90 leading-relaxed font-semibold">
                AI voice agents should support administrative communication, not replace medical professionals or independently make clinical decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 border-b border-black/[0.08]">
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
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0f1d07] font-mono"
                  >
                    <FiHelpCircle className="w-3.5 h-3.5 text-[#06b6d4]" />
                    QUESTIONS &amp; ANSWERS
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
                    text="Frequently Asked Questions About AI Healthcare Receptionists"
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
                  Find clear answers to common questions about implementing AI voice agents, phone system integrations, appointment booking workflows, and clinical safeguards.
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
                  Need to discuss your phone system or EHR?
                </h3>
                <p
                  className="text-xs sm:text-sm text-[#0f1d07]/70 leading-relaxed font-normal"
                  style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 400 }}
                >
                  Our engineers evaluate your existing phone numbers, scheduling software, and administrative requirements.
                </p>
                <Link
                  href="/contact"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#0f1d07] hover:text-black underline underline-offset-4 mt-1 transition-colors group"
                  style={{ fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif', fontWeight: 500 }}
                >
                  <span>Book a technical discovery session</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Interactive Elevated FAQ Cards */}
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
                        ? 'bg-white border-black/15 shadow-sm'
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
      {/* 12. FINAL CALL TO ACTION */}
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
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#06b6d4]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-white/90 mb-4 font-mono">
                <FiPhoneCall className="w-3.5 h-3.5 text-[#06b6d4]" />
                LET&apos;S BUILD TOGETHER
              </span>

              <h2
                className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.08] text-white mb-6"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                }}
              >
                Build a Smarter Healthcare Communication System With Byte Operator
              </h2>

              <p
                className="text-base sm:text-lg text-white/80 leading-relaxed font-normal mb-4"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 400,
                }}
              >
                Healthcare communication can become difficult to manage when patient calls, appointment requests and routine administrative tasks compete for staff attention. Byte Operator develops AI voice agents and healthcare receptionist solutions designed around your organization’s communication workflows and technology requirements.
              </p>

              <p
                className="text-sm sm:text-base text-white/70 leading-relaxed font-normal mb-8 sm:mb-10"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 400,
                }}
              >
                From inbound patient call automation and appointment scheduling support to patient follow-up workflows and custom EHR/EMR integrations, we help healthcare organizations explore practical ways to bring AI into their operations. Whether you need a managed AI solution or a custom-built voice-agent system, our team can help assess your requirements and define the right development approach.
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
                  <span>Discuss Your AI Voice Agent Project</span>
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
                  <span>Contact Byte Operator</span>
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 text-xs text-white/60 font-mono">
                <span>Direct Inquiry: info@byteoperator.com</span>
                <span>•</span>
                <span>Global Implementations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
