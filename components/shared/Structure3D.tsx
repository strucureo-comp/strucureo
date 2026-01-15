'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CubeFace = ({ transform, className = '' }: { transform: string; className?: string }) => (
  <div
    className={`absolute w-full h-full border border-[#111111]/20 backface-hidden ${className}`}
    style={{ transform }}
  />
);

export const Structure3D = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 800], [0, 90]);
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <div className="absolute right-[-10%] md:right-[5%] top-[20%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] opacity-40 pointer-events-none perspective-[1000px] z-0 block">
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d', rotate: rotate, y: y }}
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        <CubeFace transform="translateZ(250px)" />
        <CubeFace transform="rotateY(180deg) translateZ(250px)" />
        <CubeFace transform="rotateY(90deg) translateZ(250px)" />
        <CubeFace transform="rotateY(-90deg) translateZ(250px)" />
        <CubeFace transform="rotateX(90deg) translateZ(250px)" />
        <CubeFace transform="rotateX(-90deg) translateZ(250px)" />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[60%] h-[60%] -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          <CubeFace transform="translateZ(150px)" className="border-[#111111]/40" />
          <CubeFace transform="rotateY(180deg) translateZ(150px)" className="border-[#111111]/40" />
          <CubeFace transform="rotateY(90deg) translateZ(150px)" className="border-[#111111]/40" />
          <CubeFace transform="rotateY(-90deg) translateZ(150px)" className="border-[#111111]/40" />
          <CubeFace transform="rotateX(90deg) translateZ(150px)" className="border-[#111111]/40" />
          <CubeFace transform="rotateX(-90deg) translateZ(150px)" className="border-[#111111]/40" />
        </motion.div>
      </motion.div>
    </div>
  );
};
