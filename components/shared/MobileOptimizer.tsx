'use client';

import { useEffect } from 'react';

/**
 * MobileOptimizer
 * 
 * This component handles the initialization of mobile-specific features that require
 * explicit user interaction to activate, such as DeviceOrientation (Gyroscope)
 * and Vibration (Haptics).
 * 
 * It attaches a one-time 'click'/'touchstart' listener to the document.
 */
export const MobileOptimizer = () => {
    useEffect(() => {
        const enableMobileFeatures = async () => {
            // 1. Initialize Haptics (Android: "wakes up" the vibration engine)
            if (typeof navigator !== 'undefined' && navigator.vibrate) {
                try {
                    navigator.vibrate(1); // Tiny tick to unlock the API
                } catch (e) {
                    // Ignore
                }
            }

            // 2. Request Accelerometer/Gyro Permission (iOS 13+)
            // This MUST be done in a user-gesture handler (click/touch).
            if (
                typeof window !== 'undefined' &&
                typeof (window as any).DeviceOrientationEvent !== 'undefined' &&
                typeof ((window as any).DeviceOrientationEvent as any).requestPermission === 'function'
            ) {
                try {
                    const permissionState = await (window as any).DeviceOrientationEvent.requestPermission();
                    if (permissionState === 'granted') {
                        // Permission granted, reload or just let the event listeners attach naturally
                        // Since components re-mount or listen to the window event, they should pick it up.
                        // But we might need to manually trigger a re-mount or state update if they failed initially.
                        // For now, we assume the listeners in Structure3D are already active or will activate.
                    }
                } catch (e) {
                    console.error("Gyro permission failed/rejected", e);
                }
            }
        };

        // Attach passive listeners to capture the first interaction
        window.addEventListener('click', enableMobileFeatures, { once: true, capture: true });
        window.addEventListener('touchstart', enableMobileFeatures, { once: true, capture: true });

        return () => {
            window.removeEventListener('click', enableMobileFeatures);
            window.removeEventListener('touchstart', enableMobileFeatures);
        };
    }, []);

    return null;
};
