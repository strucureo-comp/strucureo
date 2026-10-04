'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

type NumberedRowProps = {
  index: number;
  id?: string;
  icon?: React.ReactNode;
  title: string;
  titleTag?: 'h2' | 'h3';
  desc?: React.ReactNode;
  extra?: React.ReactNode;
  size?: 'lg' | 'sm';
};

export const NumberedRow = ({ index, id, icon, title, titleTag = 'h3', desc, extra, size = 'lg' }: NumberedRowProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const TitleTag = titleTag;

  if (size === 'sm') {
    return (
      <div
        ref={ref}
        id={id}
        className="grid gap-6 border-b border-[#111111]/10 py-10 md:grid-cols-[80px_1fr]"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-30">
          0{index + 1}
        </span>
        <div>
          <TitleTag className="mb-3 text-2xl font-bold">{title}</TitleTag>          {desc && <div className="max-w-xl leading-relaxed text-[#6E6E6E]">{desc}</div>}
          {extra}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      id={id}
      className={`py-24 border-t border-[#111111]/10 first:border-t-0 flex flex-col md:flex-row gap-8 md:gap-16 items-start transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-20 blur-sm translate-x-4'}`}
    >
      <div className="flex-shrink-0 mt-2">
        <span className="text-sm font-mono tracking-widest text-[#111111]">0{index + 1}</span>
      </div>
      <div>
        {icon && (
          <div className="mb-6">
            {icon}
          </div>
        )}
        <TitleTag className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-none">{title}</TitleTag>
        {typeof desc === 'string' ? (
          <p className="text-xl leading-relaxed text-[#6E6E6E] max-w-lg">{desc}</p>
        ) : (
          desc
        )}
        {extra}
      </div>
    </div>
  );
};
