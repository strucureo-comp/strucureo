'use client';

import { useCallback } from 'react';

export const useHaptic = () => {
    const triggerHaptic = useCallback((pattern: number | number[] = 10) => {
        if (
            typeof window !== 'undefined' &&
            typeof navigator !== 'undefined' &&
            navigator.vibrate &&
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            try {
                navigator.vibrate(pattern);
            } catch (e) {
                // Ignore errors (some browsers restrict vibration audio/context)
            }
        }
    }, []);

    return { triggerHaptic };
};
