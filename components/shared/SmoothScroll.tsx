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

        lenis.on('scroll', (e: any) => {
            // Trigger haptic feedback every 40px of scrolling
            // Throttled to prevent overlapping vibrations which can cancel each other out
            if (Math.abs(e.scroll - lastVibrationPos) > 40) {
                if (typeof navigator !== 'undefined' && navigator.vibrate) {
                    try {
                        // Short, crisp tick (10ms) is better for scroll feedback
                        const now = Date.now();
                        // Only vibrate if enough time has passed (e.g., 50ms) effectively debouncing high-speed scrolls
                        // But since we track position, we just update position and fire if user is moving.
                        // We rely on browser to handle rapid calls, but using a shorter duration helps.
                        navigator.vibrate(10);
                    } catch (err) {
                        // Ignore blockage
                    }
                }
                lastVibrationPos = e.scroll;
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
