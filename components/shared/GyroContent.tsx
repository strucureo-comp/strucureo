'use client';

import React, { ReactNode } from 'react';
import { useMotion } from '@/hooks/useMotion';
import { useHaptic } from '@/hooks/useHaptic';

interface GyroContentProps {
    children: ReactNode;
    strength?: number;
    className?: string;
}

export const GyroContent = ({ children, strength = 20, className = "" }: GyroContentProps) => {
    const { x, y, isSupported, isPermissionGranted, requestPermission } = useMotion();
    const { triggerHaptic } = useHaptic();

    // Only apply transform if supported and permission granted
    const transform = isPermissionGranted 
        ? `translate3d(${x * strength}px, ${y * strength}px, 0)` 
        : 'none';

    return (
        <div className={`relative ${className}`}>
            <div 
                style={{ 
                    transform,
                    transition: 'transform 0.1s ease-out',
                    willChange: 'transform'
                }}
            >
                {children}
            </div>
            
            {isSupported && !isPermissionGranted && (
                <button
                    onClick={async () => {
                        const granted = await requestPermission();
                        if (granted) triggerHaptic([50, 50, 50]);
                    }}
                    className="fixed bottom-4 right-4 z-[100] rounded-full bg-[#111111] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg md:hidden"
                >
                    Enable Motion
                </button>
            )}
        </div>
    );
};
