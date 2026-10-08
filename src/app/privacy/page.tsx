import React from 'react';
import { Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { TextSplit } from '@/components/ui/TextSplit';

export default function PrivacyPage() {
  return (
    <div className="pt-36 sm:pt-48 pb-32">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400 mb-8">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Legal & Integrity</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-12">
          Privacy Policy &amp; AI Ethics
        </h1>

        <div className="flex flex-col gap-10 text-zinc-300 leading-relaxed pt-8 border-t border-white/10 text-base sm:text-lg">
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">1. Our Commitment to Privacy</h2>
            <p>
              Wahid Solutions is dedicated to protecting the privacy and confidentiality of our clients, website visitors, and partner organizations. We collect and process data in strict accordance with global standards including GDPR, CCPA, and the Australian Privacy Principles.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">2. Wahid Solutions &amp; AI Governance</h2>
            <p>
              We believe artificial intelligence should augment human creativity, not replace thoughtful craftsmanship. When deploying intelligent models or automated workflows in client products:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 text-sm sm:text-base">
              <li>Client proprietary data and IP are strictly isolated and never used for unauthorized foundational model training.</li>
              <li>Every algorithmic output undergoes rigorous human-in-the-loop review for security, bias, and performance.</li>
              <li>We prioritize ethical, open architectures that provide transparency and user control.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">3. Data Security &amp; Infrastructure</h2>
            <p>
              Our hosting architectures leverage top-tier edge CDN networks with end-to-end encryption (TLS 1.3), continuous vulnerability scanning, and strict zero-trust access policies.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">4. Contact Privacy Officer</h2>
            <p>
              For any questions regarding data practices or to request data removal, please contact <a href="mailto:privacy@wahidsolutions.com" className="text-sky-400 hover:underline">privacy@wahidsolutions.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
