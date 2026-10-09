'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, EASE_LUXURY } from '@/lib/animations';
import { Magnetic } from '@/components/shared/Magnetic';
import { useSound } from '@/hooks/useSound';

const Structure3D = dynamic(
    () => import('@/components/shared/Structure3D').then((module) => module.Structure3D),
    { ssr: false }
);

export const Hero = () => {
  const { playTick } = useSound();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: 'Build', href: '/services' },
    { label: 'Labs', href: '/labs' },
    { label: 'Industries', href: '/industries' },
    { label: 'UAE', href: '/uae' },
    { label: 'India', href: '/india' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Work', href: 'https://portfolio.strucureo.com' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 py-8 md:py-12 bg-[#ffffff] text-[#111111] relative overflow-hidden">
      <Structure3D />

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="flex justify-between items-start text-xs md:text-sm uppercase tracking-widest font-medium opacity-60 z-10 relative"
      >
        <div className="flex flex-col">
          <span>Strucureo</span>
          <span className="opacity-50">Engineering Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-right opacity-80">
          {navLinks.map((link) => (
            <Magnetic key={link.href} strength={0.2}>
              <a href={link.href} className="transition-opacity hover:opacity-50">
                {link.label}
              </a>
            </Magnetic>
          ))}
          <Magnetic strength={0.2}>
            <a 
              href="#contact" 
              onClick={() => playTick()}
              className="transition-opacity hover:opacity-50"
            >
              Contact
            </a>
          </Magnetic>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 z-20"
        >
          <span className={`block h-[2px] w-full bg-[#111111] transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[2px] w-full bg-[#111111] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-full bg-[#111111] transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#111111]/10 shadow-lg z-30 flex flex-col px-6 py-4 gap-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="uppercase tracking-widest py-1 transition-opacity hover:opacity-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => { playTick(); setMenuOpen(false); }}
                className="uppercase tracking-widest py-1 transition-opacity hover:opacity-50"
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="flex-grow flex flex-col justify-center mt-12 md:mt-0 z-10 pb-24 pointer-events-none"> {/* content wrapper */}
        <div className="pointer-events-auto"> {/* Interactive elements wrapper */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-0 md:space-y-4">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 100, letterSpacing: '-0.05em' },
                visible: {
                  opacity: 1,
                  y: 0,
                  letterSpacing: '-0.03em',
                  transition: { duration: 1.8, ease: EASE_LUXURY }
                }
              }}
              className="block text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-[#111111]"
            >
              <span className="block">Clarity Against</span>
              <span className="block">Complexity.</span>
              <span className="sr-only"> Custom software, AI chatbots, ERP systems and startup MVPs delivered in days for UAE and India.</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: EASE_LUXURY }}
            className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <div className="flex flex-col gap-6">
              <p className="text-xl md:text-2xl font-light text-[#6E6E6E] max-w-2xl leading-relaxed">
                Strucureo is an engineering studio with three arms: Build for client software delivered in days, Labs for research, and Industries for ready-made industry products.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <Magnetic strength={0.15}>
                  <a 
                    href="#contact" 
                    onClick={() => playTick()}
                    className="px-8 py-4 bg-[#111111] text-white font-bold tracking-widest text-sm hover:bg-black/80 transition-colors uppercase"
                  >
                    Free Consultation
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
