'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EASE_LUXURY } from '@/lib/animations';

interface AnimatedTextProps {
  text: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.5, ease: EASE_LUXURY, delay }}
      className={className}
    >
      {text}
    </motion.div>
  );
};
