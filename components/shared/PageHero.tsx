import React from 'react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';

export type HeroPoint = {
  number: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  points?: HeroPoint[];
};

export const PageHero = ({ eyebrow, title, intro, points }: PageHeroProps) => {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <AnimatedText text={eyebrow} className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]"
            style={{ letterSpacing: '-0.03em' }}
          >
            {title}
          </h1>
        </div>
        <div className="lg:col-span-4">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#6E6E6E]">
            {intro}
          </p>
        </div>
      </div>
      {points && points.length > 0 && (
        <div className="mt-16 border-t border-[#111111]/10">
          {points.map((point) => (
            <div
              key={point.number}
              className="grid gap-6 border-b border-[#111111]/10 py-10 md:grid-cols-[80px_1fr]"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-30">
                {point.number}
              </span>
              <h2 className="text-2xl font-bold">{point.label}</h2>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};
