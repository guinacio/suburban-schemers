import React from 'react';

export const SchemeLawnSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 100 100" className={`w-full h-full text-charcoal ${className}`} xmlns="http://www.w3.org/2000/svg">
        {/* Golf Flag */}
        <path d="M20 20 L20 80" stroke="currentColor" strokeWidth="3" />
        <path d="M20 20 L40 30 L20 40 Z" fill="#E85D04" stroke="currentColor" strokeWidth="2" />

        {/* Ground / Grass Area */}
        <rect x="0" y="70" width="100" height="30" fill="#2E5266" opacity="0.4" />

        {/* Rolled Turf */}
        <g transform="translate(60, 60)">
            <animateTransform attributeName="transform" type="translate" values="70, 60; 40, 60; 70, 60" dur="4s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" values="0; -360; 0" dur="4s" repeatCount="indefinite" additive="sum" />
            <circle cx="0" cy="0" r="15" fill="#2E5266" stroke="currentColor" strokeWidth="2" />
            <path d="M 0 0 Q -8 -8 -15 0" fill="none" stroke="currentColor" strokeWidth="2" />
        </g>

        {/* Silhouette rolling it */}
        <g className="text-charcoal" fill="currentColor">
            <animateTransform attributeName="transform" type="translate" values="85, 30; 55, 30; 85, 30" dur="4s" repeatCount="indefinite" />
            {/* Body */}
            <circle cx="0" cy="0" r="8" />
            <rect x="-5" y="10" width="10" height="20" rx="3" />
            {/* Arms pushing down */}
            <path d="M -5 15 L -15 30" stroke="currentColor" strokeWidth="3" />
        </g>

        {/* Missing grass patch */}
        <rect x="40" y="70" width="80" height="5" fill="#1f2024" opacity="0.8">
            <animate attributeName="width" values="0;60;0" dur="4s" repeatCount="indefinite" />
            <animate attributeName="x" values="100;40;100" dur="4s" repeatCount="indefinite" />
        </rect>
    </svg>
);
