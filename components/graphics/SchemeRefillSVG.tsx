import React from 'react';

export const SchemeRefillSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 100 100" className={`w-full h-full text-charcoal ${className}`} xmlns="http://www.w3.org/2000/svg">
        {/* Coffee Machine */}
        <rect x="20" y="15" width="40" height="65" fill="#1F2024" rx="4" />
        <rect x="25" y="20" width="30" height="15" fill="#F2E9E4" />
        <path d="M35 40 L45 40 L45 50 L35 50 Z" fill="#2E5266" />
        {/* Buttons */}
        <circle cx="30" cy="45" r="2" fill="#E85D04" />
        <circle cx="50" cy="45" r="2" fill="#FFB703" />

        {/* Dripping coffee */}
        <path d="M40 50 L40 75" stroke="#E85D04" strokeWidth="2" strokeDasharray="4 2">
            <animate attributeName="stroke-dashoffset" values="6;0" dur="0.2s" repeatCount="indefinite" />
        </path>

        {/* Disguised Cup with Hand */}
        <g>
            <animateTransform attributeName="transform" type="translate" values="40, 20; 0, 0; 40, 20" dur="3s" repeatCount="indefinite" />
            {/* Hand holding it */}
            <path d="M 80 75 Q 60 75 55 65" fill="none" stroke="#1F2024" strokeWidth="5" strokeLinecap="round" />
            <circle cx="55" cy="65" r="3" fill="#1F2024" />
            {/* Old crumpled cup */}
            <path d="M30 65 L50 65 L46 95 L34 95 Z" fill="#F2E9E4" stroke="#1F2024" strokeWidth="2" />
            {/* Wrinkled label on cup */}
            <path d="M33 75 L47 75 M34 80 L46 80 M35 85 L45 85" stroke="#1F2024" strokeWidth="1" strokeDasharray="1 2" />
            {/* Fake mustache on cup (because disguises) */}
            <path d="M36 70 Q40 68 44 70 Q40 75 36 70" fill="#E85D04" />
        </g>
    </svg>
);
