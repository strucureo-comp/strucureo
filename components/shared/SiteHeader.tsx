'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Magnetic } from '@/components/shared/Magnetic';
import { useSound } from '@/hooks/useSound';

export const SiteHeader = () => {
  const { playTick } = useSound();
  const params = useParams();
  const locale = typeof params?.locale === 'string' ? params.locale : 'en-US';
  const navLinks = [
    { label: 'Build', href: `/${locale}/services` },
    { label: 'Labs', href: `/${locale}/labs` },
    { label: 'Industries', href: `/${locale}/industries` },
    { label: 'Blog', href: `/${locale}/blog` },
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
    </motion.nav>
  );
};
