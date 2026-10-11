import React from 'react';

/**
 * Structure3D — the hero's decorative background.
 *
 * Previously a Three.js/WebGL canvas: it looked right but shipped ~200KB of
 * unused JavaScript, was the LCP element (~4s), and put animated pixels behind
 * the hero text (which tripped the contrast audit). This version reproduces the
 * same subtle wireframe-icosahedron + soft-gradient aesthetic with pure CSS/SVG:
 * zero JavaScript, instant paint, and a solid enough backdrop for the text.
 *
 * Respects prefers-reduced-motion by staying fully static.
 */
export const Structure3D = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            {/* Soft radial glows — the "depth" the fog used to give */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(circle at 70% 35%, rgba(17,17,17,0.08), transparent 35%), radial-gradient(circle at 25% 65%, rgba(17,17,17,0.05), transparent 30%)',
                }}
            />
            {/* Wireframe icosahedron motif — static SVG, same line-art feel as the old mesh */}
            <svg
                className="absolute right-[8%] top-[18%] w-[280px] h-[280px] md:w-[420px] md:h-[420px] opacity-[0.12] motion-safe:animate-[spin_90s_linear_infinite]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g stroke="#111111" strokeWidth="0.6">
                    {/* icosahedron edge projection */}
                    <polygon points="100,10 178,70 148,160 52,160 22,70" />
                    <polygon points="100,10 100,100 52,160" />
                    <polygon points="100,10 100,100 148,160" />
                    <polygon points="22,70 100,100 52,160" />
                    <polygon points="178,70 100,100 148,160" />
                    <line x1="100" y1="10" x2="100" y2="100" />
                    <line x1="22" y1="70" x2="100" y2="100" />
                    <line x1="178" y1="70" x2="100" y2="100" />
                    <line x1="52" y1="160" x2="100" y2="100" />
                    <line x1="148" y1="160" x2="100" y2="100" />
                    {/* inner triangle for the faceted look */}
                    <polygon points="100,45 138,92 62,92" />
                </g>
            </svg>
            {/* Fade the motif into the page */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>
    );
};
