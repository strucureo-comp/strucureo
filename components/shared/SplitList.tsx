import React from 'react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';

type SplitListProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export const SplitList = ({ eyebrow, title, intro, children }: SplitListProps) => {
  return (
    <Section className="relative bg-white pb-0">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-32">
            <AnimatedText text={eyebrow} className="text-xs uppercase tracking-[0.2em] mb-8 block opacity-50" />
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter mb-8">
              {title}
            </h2>
            {intro && (
              <p className="text-lg text-[#6E6E6E] max-w-sm leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        </div>

        <div className="lg:w-2/3 pb-24">
          {children}
        </div>
      </div>
    </Section>
  );
};
