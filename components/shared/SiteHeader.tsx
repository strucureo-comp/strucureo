'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from '@/components/shared/Magnetic';
import { useSound } from '@/hooks/useSound';

export const SiteHeader = () => {
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
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="flex justify-between items-start text-xs md:text-sm uppercase tracking-widest font-medium opacity-60 z-10 px-6 md:px-12 lg:px-24 py-8 md:py-12 bg-[#ffffff] text-[#111111] relative"
    >
      <div className="flex flex-col">
        <a href="/" className="transition-opacity hover:opacity-50">
          <span>Strucureo</span>
        </a>
        <span className="opacity-50">Engineering Studio</span>
      </div>

      {/* Desktop nav */}
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
            href="/#contact"
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
        className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 -mr-2 z-20"
      >
        <span
          className={`block h-[2px] w-full bg-[#111111] transition-transform duration-300 ${
            menuOpen ? 'translate-y-[7px] rotate-45' : ''
          }`}
        />
        <span
          className={`block h-[2px] w-full bg-[#111111] transition-opacity duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-[2px] w-full bg-[#111111] transition-transform duration-300 ${
            menuOpen ? '-translate-y-[7px] -rotate-45' : ''
          }`}
        />
      </button>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#111111]/10 shadow-lg z-20 flex flex-col px-6 py-4 gap-4"
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
              href="/#contact"
              onClick={() => {
                playTick();
                setMenuOpen(false);
              }}
              className="uppercase tracking-widest py-1 transition-opacity hover:opacity-50"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
