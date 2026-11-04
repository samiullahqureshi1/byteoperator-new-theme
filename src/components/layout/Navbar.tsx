'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useSound } from '@/components/layout/SoundProvider';
import { expertiseMenuGroups } from '@/components/layout/ExpertiseIcons';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { playHover, playClick } = useSound();
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setExpertiseOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpertiseOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // If on /work/[slug], let the case study view render its own floating nav and close button
  if (pathname.startsWith('/work/')) {
    return null;
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Expertise', href: '/expertise', isDropdown: true },
    { name: 'Thinking', href: '/thinking' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Backdrop overlay when Expertise panel is open */}
      <AnimatePresence>
        {expertiseOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              playClick();
              setExpertiseOpen(false);
            }}
            className="fixed inset-0 z-30 bg-black/15 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-40 py-3.5 sm:py-4 px-6 sm:px-10 lg:px-12 transition-all duration-300 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between pointer-events-auto relative">
          {/* Left: Brand Logo (Fades out when scrolled) */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0 : 1,
              x: isScrolled ? -15 : 0,
              pointerEvents: isScrolled ? 'none' : 'auto',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Link
              href="/"
              onMouseEnter={playHover}
              onClick={playClick}
              className="flex items-center focus:outline-none group"
            >
              <span
                className="text-2xl sm:text-[1.75rem] group-hover:opacity-80 transition-opacity tracking-wider inline-flex items-center"
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
              >
                <span
                  style={{
                    color: pathname === '/contact' ? '#ffffff' : 'rgb(15, 29, 7)',
                  }}
                >
                  Byte
                </span>
                <span
                  style={{
                    color:
                      pathname === '/contact'
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'rgba(15, 29, 7, 0.45)',
                  }}
                >
                  operator
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Center: Floating Navigation / Expanded Expertise Card Modal */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 flex items-center justify-center">
            {expertiseOpen ? (
              /* Expanded White Card matching reference image */
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -6 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.18)] border border-black/[0.06] w-[1140px] max-w-[96vw] max-h-[88vh] overflow-y-auto select-none"
              >
                {/* Top Pill Nav Bar inside the White Card */}
                <div className="flex justify-center pt-3 sm:pt-3.5 pb-2 sticky top-0 bg-white/95 backdrop-blur-sm z-10 border-b border-black/[0.03]">
                  <nav className="flex items-center gap-1">
                    {navLinks.map((item, idx) => {
                      const isActive =
                        item.href === '/'
                          ? pathname === '/'
                          : pathname.startsWith(item.href) && item.href !== '/';

                      if (item.isDropdown) {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              playClick();
                              setExpertiseOpen(false);
                            }}
                            onMouseEnter={playHover}
                            style={{
                              fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                              fontSize: '15px',
                              fontWeight: 500,
                              lineHeight: '15px',
                              color: 'rgb(15, 29, 7)',
                            }}
                            className="px-4 py-2 rounded-full transition-all duration-200 bg-[#ebe9e1] text-[rgb(15,29,7)]"
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          onMouseEnter={playHover}
                          onClick={() => {
                            playClick();
                            setExpertiseOpen(false);
                          }}
                          style={{
                            fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                            fontSize: '15px',
                            fontWeight: 500,
                            lineHeight: '15px',
                            color: isActive ? '#ffffff' : 'rgb(15, 29, 7)',
                          }}
                          className={`px-4 py-2 rounded-full transition-all duration-200 ${
                            isActive
                              ? 'bg-[rgb(15,29,7)] text-white shadow-sm'
                              : 'hover:bg-black/5'
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* 3 Columns of Expertise Items matching reference design */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-10 lg:px-12 pt-8 sm:pt-10 pb-10 sm:pb-12 text-[rgb(15,29,7)]">
                  {expertiseMenuGroups.map((group, gIdx) => (
                    <div key={gIdx} className="flex flex-col min-w-0">
                      <h4
                        className="text-[19px] sm:text-[21px] font-semibold tracking-tight text-[#0c1024] mb-6 sm:mb-7 select-none whitespace-nowrap"
                        style={{
                          fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        }}
                      >
                        {group.title}
                      </h4>
                      <ul className="flex flex-col gap-4 sm:gap-4.5">
                        {group.items.map((service, sIdx) => {
                          const IconComp = service.icon;
                          return (
                            <li key={sIdx}>
                              <Link
                                href={service.href}
                                onMouseEnter={playHover}
                                onClick={() => {
                                  playClick();
                                  setExpertiseOpen(false);
                                }}
                                style={{
                                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                                  fontSize: '15px',
                                  fontWeight: 500,
                                }}
                                className="flex items-center gap-3 text-[#2d3748] hover:text-black transition-colors group cursor-pointer whitespace-nowrap"
                              >
                                <span
                                  className="shrink-0 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center w-4 h-4"
                                  style={{ color: service.color }}
                                >
                                  <IconComp className="w-4 h-4" />
                                </span>
                                <span className="whitespace-nowrap group-hover:translate-x-0.5 transition-transform duration-150">
                                  {service.label}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Compact Pill Navigation Bar when Expertise is closed */
              <nav className="hidden md:flex items-center gap-1 bg-white/95 backdrop-blur-md px-1.5 py-1 rounded-full border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                {navLinks.map((item, idx) => {
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href) && item.href !== '/';

                  if (item.isDropdown) {
                    return (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          playClick();
                          setExpertiseOpen(true);
                        }}
                        onMouseEnter={playHover}
                        style={{
                          fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                          fontSize: '15px',
                          fontWeight: 500,
                          lineHeight: '15px',
                          color: pathname.startsWith('/expertise') ? '#ffffff' : 'rgb(15, 29, 7)',
                        }}
                        className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                          pathname.startsWith('/expertise')
                            ? 'bg-[rgb(15,29,7)] text-white shadow-sm'
                            : 'hover:bg-black/5'
                        }`}
                      >
                        <span>{item.name}</span>
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onMouseEnter={playHover}
                      onClick={playClick}
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                        fontSize: '15px',
                        fontWeight: 500,
                        lineHeight: '15px',
                        color: isActive ? '#ffffff' : 'rgb(15, 29, 7)',
                      }}
                      className={`px-4 py-2 rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-[rgb(15,29,7)] text-white shadow-sm'
                          : 'hover:bg-black/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>

          {/* Right: Green Smiling Face Icon (Fades out when scrolled) */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0 : 1,
              x: isScrolled ? 15 : 0,
              pointerEvents: isScrolled ? 'none' : 'auto',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center gap-3 ml-auto"
          >
            <button
              onClick={playClick}
              className={`p-1 transition-colors focus:outline-none cursor-pointer ${
                pathname === '/about'
                  ? 'text-[#82d7ff] hover:text-[#58c6f5]'
                  : pathname === '/contact'
                  ? 'text-[#FFD9B6] hover:text-[#ffe4cb]'
                  : 'text-[#48c774] hover:text-[#38b363]'
              }`}
              title="Byte Operator Spirit"
              aria-label="Byte Operator Spirit"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 sm:w-8 sm:h-8"
              >
                <circle cx="9" cy="11" r="2.2" fill="currentColor" />
                <circle cx="23" cy="11" r="2.2" fill="currentColor" />
                <path
                  d="M17 7V17H12"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 23C13.5 25.5 18.5 25.5 21 23"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </motion.div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-full bg-white border border-black/10 text-black shadow-sm ml-auto cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden bg-[#f3f2eb]/98 backdrop-blur-xl pt-24 px-8 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((item, idx) => (
                <div key={idx}>
                  {item.isDropdown ? (
                    <div className="py-2 border-b border-black/5">
                      <span className="text-3xl font-bold text-[rgb(15,29,7)] block mb-3">
                        {item.name}
                      </span>
                      <div className="grid grid-cols-2 gap-3 pl-2">
                        {expertiseMenuGroups.flatMap((g) => g.items).slice(0, 8).map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={() => {
                              playClick();
                              setMobileMenuOpen(false);
                            }}
                            className="text-sm font-medium text-zinc-600 hover:text-black py-1"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => {
                        playClick();
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                      }}
                      className="text-3xl font-bold text-[rgb(15,29,7)] hover:text-[#48c774] transition-colors py-2 border-b border-black/5 block"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="pt-6 border-t border-black/10 flex flex-col gap-2 text-sm text-zinc-600 mt-6">
              <a href="mailto:info@byteoperator.com" className="hover:text-black transition-colors font-medium">info@byteoperator.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
