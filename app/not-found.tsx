'use client';

import { Structure3D } from '@/components/shared/Structure3D';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white text-[#111111]">
            <Structure3D />

            {/* Brand Overlay */}
            <div className="absolute top-8 left-8 md:top-12 md:left-24 z-20 opacity-60">
                <div className="flex flex-col text-xs md:text-sm uppercase tracking-widest font-medium">
                    <span>Strucureo</span>
                    <span className="opacity-50">Global Engineering Studio</span>
                </div>
            </div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter opacity-10 select-none">
                    404
                </h1>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">System Glitch.</h2>
                    <p className="text-lg md:text-xl text-[#6E6E6E] mb-12 max-w-md mx-auto">
                        The requested coordinates do not exist in this dimension.
                    </p>

                    <Link
                        href="/"
                        className="group relative px-8 py-4 bg-[#111111] text-white text-sm font-medium tracking-widest uppercase overflow-hidden"
                    >
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                            Back to Reality
                        </span>
                        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                    </Link>
                </div>
            </div>

            {/* Minimal footer */}
            <div className="absolute bottom-12 text-xs uppercase tracking-widest opacity-30">
                Error Code: 404_NOT_FOUND
            </div>
        </div>
    );
}
