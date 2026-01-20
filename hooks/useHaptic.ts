'use client';

import { useCallback } from 'react';

export const useHaptic = () => {
    const triggerHaptic = useCallback((pattern: number | number[] = 10) => {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            // Vibrate if supported
            // Use small value (10ms) for light feedback (like hover)
            // Use array like [50, 50, 50] for complex patterns
            try {
                navigator.vibrate(pattern);
            } catch (e) {
                // Ignore errors (some browsers restrict vibration audio/context)
            }
        }
    }, []);

    return { triggerHaptic };
};
