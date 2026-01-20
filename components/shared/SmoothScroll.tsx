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
            // Trigger haptic feedback every 50px of scrolling
            if (Math.abs(e.scroll - lastVibrationPos) > 50) {
                if (typeof navigator !== 'undefined' && navigator.vibrate) {
                    try {
                        // Stronger tick
                        navigator.vibrate(20);
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
