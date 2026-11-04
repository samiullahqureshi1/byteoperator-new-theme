import type { Metadata } from 'next';
import './globals.css';
import { SoundProvider } from '@/components/layout/SoundProvider';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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
  authors: [{ name: 'Byte Operator' }],
  openGraph: {
    title: 'Healthcare AI Solutions & Software Development | Byte Operator',
    description:
      'Build smarter healthcare operations with AI voice agents, workflow automation, custom software and system integrations from Byte Operator.',
    url: 'https://byteoperator.com',
    siteName: 'Byte Operator',
    images: [
      {
        url: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/showreel_placeholder-285656_LfmLPCH6O.png?tr=w-1200,h-630',
        width: 1200,
        height: 630,
        alt: 'Byte Operator Healthcare AI Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare AI Solutions & Software Development | Byte Operator',
    description:
      'Build smarter healthcare operations with AI voice agents, workflow automation, custom software and system integrations from Byte Operator.',
    images: ['https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/showreel_placeholder-285656_LfmLPCH6O.png?tr=w-1200,h-630'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090a0d] text-[#f3f4f8] antialiased selection:bg-sky-400 selection:text-black">
        <SoundProvider>
          <CustomCursor />
          <Navbar />
          <main id="page-content" className="relative min-h-screen">
            {children}
          </main>
          <Footer />
        </SoundProvider>
      </body>
    </html>
  );
}
