'use client';

import { useCallback, useRef } from 'react';

// Shared context to avoid "Too many AudioContexts" error
let sharedContext: AudioContext | null = null;

export const useSound = () => {
    const playTick = useCallback(() => {
        if (typeof window === 'undefined') return;

        try {
            // Initialize context on first use
            if (!sharedContext) {
                sharedContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            }

            // Browsers often suspend audio until a user gesture
            if (sharedContext.state === 'suspended') {
                sharedContext.resume();
                // If still suspended, we can't play yet (needs click/touchstart)
                if (sharedContext.state === 'suspended') return;
            }

            const oscillator = sharedContext.createOscillator();
            const gain = sharedContext.createGain();

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(1500, sharedContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(0.01, sharedContext.currentTime + 0.1);

            gain.gain.setValueAtTime(0.015, sharedContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, sharedContext.currentTime + 0.05);

            oscillator.connect(gain);
            gain.connect(sharedContext.destination);

            oscillator.start();
            oscillator.stop(sharedContext.currentTime + 0.05);
        } catch (e) {
            // Silently fail if audio is blocked or unsupported
            console.warn('Audio feedback blocked or unsupported:', e);
        }
    }, []);

    return { playTick };
};
