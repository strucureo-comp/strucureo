'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        let lastVibrationPos = 0;
        let lastVibrationTime = 0;

        lenis.on('scroll', (e: any) => {
            const now = Date.now();
            // Trigger haptic feedback every 30px of scrolling
            // AND ensure at least 40ms has passed between vibrations to create distinct "ticks"
            // rather than a continuous buzz.
            if (Math.abs(e.scroll - lastVibrationPos) > 30) {
                if (now - lastVibrationTime > 40) {
                    if (typeof navigator !== 'undefined' && navigator.vibrate) {
                        try {
                            // 10ms tick
                            navigator.vibrate(10);
                        } catch (err) {
                            // Ignore blockage
                        }
                    }
                    lastVibrationTime = now;
                    // Update position only when we actually vibrate to maintain grid-like feel?
                    // Or always update? If we always update, we might miss distance accum.
                    // Let's update `lastVibrationPos` to current.
                    lastVibrationPos = e.scroll;
                }
            }
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
