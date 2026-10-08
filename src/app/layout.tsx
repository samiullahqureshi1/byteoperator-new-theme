import type { Metadata } from 'next';
import './globals.css';
import { SoundProvider } from '@/components/layout/SoundProvider';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Wahid Solutions | Websites & Apps | Award-Winning Digital Agency',
  description:
    'Wahid Solutions is an award-winning digital product studio. We design, build and ship world-class websites, mobile apps, and scalable digital platforms for forward-thinking global brands.',
  keywords: [
    'Wahid Solutions',
    'Digital Agency',
    'Web Development',
    'Next.js',
    'Mobile Apps',
    'UI/UX Design',
    'Headless Commerce',
    'AI & Automation',
  ],
  authors: [{ name: 'Wahid Solutions' }],
  openGraph: {
    title: 'Wahid Solutions | Websites & Apps | Award-Winning Digital Agency',
    description:
      'We design, build and ship world-class digital products for forward-thinking brands.',
    url: 'https://wahidsolutions.com',
    siteName: 'Wahid Solutions',
    images: [
      {
        url: 'https://ik.imagekit.io/isclzlt7q/humaan-v6-production/images/showreel_placeholder-285656_LfmLPCH6O.png?tr=w-1200,h-630',
        width: 1200,
        height: 630,
        alt: 'Wahid Solutions Digital Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wahid Solutions | Websites & Apps | Award-Winning Digital Agency',
    description:
      'We design, build and ship world-class digital products for forward-thinking brands.',
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
