'use client';

import { useEffect, useRef, useState } from 'react';
import { useHaptic } from '@/hooks/useHaptic';
import { useSound } from '@/hooks/useSound';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollHaptic = () => {
    const { triggerHaptic } = useHaptic();
    const { playTick } = useSound();
    const lastScrollY = useRef(0);
    const scrollThreshold = 150;
    const [tickActive, setTickActive] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const diff = Math.abs(currentScrollY - lastScrollY.current);

            if (diff >= scrollThreshold) {
                // Double-thump pattern [pulse, pause, pulse] for high tactile value
                triggerHaptic([30, 20, 30]); 
                playTick();
                
                // Visual feedback for the tick
                setTickActive(true);
                setTimeout(() => setTickActive(false), 30);
                
                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [triggerHaptic, playTick]);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed right-0 top-0 bottom-0 w-[2px] bg-[#111111]/10 z-50 origin-top"
                style={{ scaleY }}
            />
            {/* Active Tick Indicator */}
            <motion.div
                className="fixed right-0 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-[#111111] z-50"
                animate={{ 
                    x: tickActive ? 0 : 20,
                    opacity: tickActive ? 1 : 0
                }}
            />
        </>
    );
};
