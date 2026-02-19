import React from 'react';

export const SchemeOpenHouseSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 100 100" className={`w-full h-full text-charcoal ${className}`} xmlns="http://www.w3.org/2000/svg">
        {/* Welcome sign */}
        <path d="M35 25 L35 85" stroke="#1F2024" strokeWidth="3" />
        <rect x="20" y="15" width="30" height="20" fill="#2E5266" stroke="#1F2024" strokeWidth="2" />
        <text x="25" y="27" fontSize="5" fill="#F2E9E4" fontWeight="bold">OPEN</text>
        <text x="24" y="32" fontSize="4" fill="#F2E9E4" fontWeight="bold">HOUSE</text>
        <circle cx="35" cy="15" r="4" fill="#FFB703" stroke="#1f2024" strokeWidth="1" />

        {/* Buffet Table */}
        <rect x="50" y="60" width="50" height="8" fill="#F2E9E4" stroke="#1F2024" strokeWidth="2" />
        <path d="M55 68 L55 85 M95 68 L95 85" stroke="#1F2024" strokeWidth="2" />

        {/* Tray and Shrimp */}
        <rect x="55" y="55" width="40" height="5" fill="#1F2024" rx="2" />
        <path d="M 60 55 C 65 45, 75 58, 65 52 Z" fill="#E85D04" stroke="#1F2024" strokeWidth="1" />
        <path d="M 75 55 C 80 45, 90 58, 80 52 Z" fill="#E85D04" stroke="#1F2024" strokeWidth="1" />

        {/* Sneaky Hand taking shrimp */}
        <g>
            <animateTransform attributeName="transform" type="translate" values="40, -40; -5, 10; 40, -40" dur="3s" repeatCount="indefinite" />
            {/* Arm */}
            <path d="M 90 10 Q 95 30 85 45" fill="none" stroke="#FFB703" strokeWidth="6" strokeLinecap="round" />
            <circle cx="85" cy="45" r="3" fill="#FFB703" />
            {/* Stolen Shrimp */}
            <path d="M 83 45 C 90 35, 100 48, 90 42 Z" fill="#E85D04" stroke="#1F2024" strokeWidth="1">
                <animate attributeName="opacity" values="0;0;1;1;0" dur="3s" repeatCount="indefinite" />
            </path>
        </g>
    </svg>
);
