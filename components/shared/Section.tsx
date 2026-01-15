import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section className={`px-6 md:px-12 lg:px-24 py-16 md:py-32 border-b border-[#111111]/10 last:border-0 relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
};
