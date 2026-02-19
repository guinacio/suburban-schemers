import React from 'react';

export const JanePortrait: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 200 250" className={`w-full h-full ${className}`} preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
        {/* Background color */}
        <rect width="100%" height="100%" fill="#E85D04" opacity="0.9" />

        <g transform="translate(100, 250) scale(0.65)">
            <g>
                <animateTransform attributeName="transform" type="rotate" values="2; -2; 2" dur="3s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="translate" values="0, -1; 0, 1; 0, -1" dur="1s" repeatCount="indefinite" additive="sum" />

                {/* Body */}
                <path d="M-50 0 C-50 -70 -35 -110 0 -110 C35 -110 50 -70 50 0 Z" fill="#1F2024" />

                {/* Neck */}
                <rect x="-12" y="-135" width="24" height="30" fill="#1F2024" />

                {/* Head */}
                <g>
                    <animateTransform attributeName="transform" type="rotate" values="1; -1; 1" dur="2s" repeatCount="indefinite" />
                    <ellipse cx="0" cy="-160" rx="30" ry="40" fill="#1F2024" />

                    {/* Hair (messy bun / wild hair) */}
                    <path d="M-30 -160 C-50 -200 0 -220 0 -200" fill="#1F2024" />
                    <path d="M30 -160 C50 -200 0 -220 0 -200" fill="#1F2024" />
                    {/* Bun */}
                    <circle cx="0" cy="-210" r="25" fill="#1F2024" />

                    {/* Hair sticks / pencils in bun */}
                    <path d="M-20 -230 L20 -190" stroke="#FFB703" strokeWidth="4" strokeLinecap="round" />

                    {/* Eye reflection / smirk hint */}
                    <path d="M10 -160 Q15 -165 20 -160" fill="none" stroke="#F2E9E4" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Crowbar strapped to back */}
                <path d="M30 -80 L60 -150 L65 -145 L35 -75 Z" fill="#2E5266" />
            </g>
        </g>

        {/* The Badge */}
        <g transform="translate(40, 50)">
            <animateTransform attributeName="transform" type="translate" values="0, -5; 0, 5; 0, -5" dur="4s" repeatCount="indefinite" />
            <circle cx="0" cy="0" r="20" fill="#F2E9E4" stroke="#1F2024" strokeWidth="3" />
            {/* Smiley */}
            <circle cx="-6" cy="-4" r="2" fill="#1F2024" />
            <circle cx="6" cy="-4" r="2" fill="#1F2024" />
            <path d="M-8 6 Q0 12 8 6" fill="none" stroke="#1F2024" strokeWidth="3" strokeLinecap="round" />
        </g>
    </svg>
);
