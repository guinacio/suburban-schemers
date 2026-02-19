import React from 'react';

export const SchemeDiscountSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 100 100" className={`w-full h-full text-charcoal ${className}`} xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50, 60)">
            {/* Grapes */}
            <circle cx="-15" cy="-10" r="10" fill="#2E5266" stroke="currentColor" strokeWidth="2" />
            <circle cx="0" cy="-15" r="10" fill="#2E5266" stroke="currentColor" strokeWidth="2" />
            <circle cx="15" cy="-10" r="10" fill="#2E5266" stroke="currentColor" strokeWidth="2" />
            <circle cx="-8" cy="5" r="10" fill="#2E5266" stroke="currentColor" strokeWidth="2" />
            <circle cx="8" cy="5" r="10" fill="#2E5266" stroke="currentColor" strokeWidth="2" />
            <circle cx="0" cy="20" r="10" fill="#2E5266" stroke="currentColor" strokeWidth="2" />

            <path d="M0 -25 Q10 -35 20 -30" fill="none" stroke="#1f2024" strokeWidth="3" />
        </g>

        {/* Sneaky Hand */}
        <g className="text-offwhite" fill="currentColor" stroke="#1f2024" strokeWidth="2">
            <animateTransform attributeName="transform" type="translate" values="40, -10; 10, 10; 40, -10" dur="2s" repeatCount="indefinite" />
            {/* Arm */}
            <path d="M 60 -20 Q 30 10 20 20 T 0 30" fill="none" strokeWidth="8" />
            {/* Fingers grabbing */}
            <circle cx="0" cy="30" r="5" />
            <path d="M -2 27 Q -10 30 0 35" fill="none" />
            {/* Single grape stolen */}
            <circle cx="-8" cy="35" r="6" fill="#2E5266" stroke="currentColor" strokeWidth="1">
                <animate attributeName="opacity" values="0;0;1;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
        </g>
    </svg>
);
