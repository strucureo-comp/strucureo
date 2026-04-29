'use client';

import { useState, useEffect } from 'react';

export type MotionData = {
    x: number;
    y: number;
    isSupported: boolean;
    isPermissionGranted: boolean;
    requestPermission: () => Promise<boolean>;
};

export const useMotion = () => {
    const [motion, setMotion] = useState({ x: 0, y: 0 });
    const [isSupported, setIsSupported] = useState(false);
    const [isPermissionGranted, setIsPermissionGranted] = useState(false);

    useEffect(() => {
        const checkSupport = () => {
            const hasOrientation = typeof window !== 'undefined' && 'DeviceOrientationEvent' in window;
            setIsSupported(hasOrientation);
            
            // On non-iOS devices, permission is usually not required or not requested this way
            if (typeof (window.DeviceOrientationEvent as any)?.requestPermission !== 'function') {
                setIsPermissionGranted(true);
            }
        };

        checkSupport();
    }, []);

    const requestPermission = async () => {
        const DeviceOrientation = (window as any).DeviceOrientationEvent;
        if (DeviceOrientation && typeof DeviceOrientation.requestPermission === 'function') {
            try {
                const permissionState = await DeviceOrientation.requestPermission();
                const granted = permissionState === 'granted';
                setIsPermissionGranted(granted);
                return granted;
            } catch (error) {
                console.error('Error requesting device orientation permission:', error);
                return false;
            }
        }
        setIsPermissionGranted(true);
        return true;
    };

    useEffect(() => {
        if (!isPermissionGranted) return;

        const handleOrientation = (event: DeviceOrientationEvent) => {
            // beta is front-to-back tilt in degrees, [-180,180]
            // gamma is left-to-right tilt in degrees, [-90,90]
            // Normalize values for a subtle movement effect
            const x = (event.gamma || 0) / 30; // Max tilt approx 30 deg
            const y = (event.beta || 0) / 30;
            
            setMotion({
                x: Math.max(-1, Math.min(1, x)),
                y: Math.max(-1, Math.min(1, y)),
            });
        };

        window.addEventListener('deviceorientation', handleOrientation);
        return () => window.removeEventListener('deviceorientation', handleOrientation);
    }, [isPermissionGranted]);

    return { ...motion, isSupported, isPermissionGranted, requestPermission };
};
