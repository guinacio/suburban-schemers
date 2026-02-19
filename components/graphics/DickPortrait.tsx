import React from 'react';

export const DickPortrait: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 200 250" className={`w-full h-full ${className}`} preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
        {/* Background color */}
        <rect width="100%" height="100%" fill="#2E5266" opacity="0.9" />

        <g transform="translate(100, 250) scale(0.65)">
            <g>
                <animateTransform attributeName="transform" type="rotate" values="-2; 2; -2" dur="3s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="translate" values="0, -2; 0, 2; 0, -2" dur="1s" repeatCount="indefinite" additive="sum" />

                {/* Body */}
                <path d="M-60 0 C-60 -80 -40 -120 0 -120 C40 -120 60 -80 60 0 Z" fill="#1F2024" />

                {/* Tie */}
                <path d="M-10 -115 L10 -115 L5 -40 L0 -30 L-5 -40 Z" fill="#E85D04" />

                {/* Neck */}
                <rect x="-15" y="-140" width="30" height="30" fill="#1F2024" />

                {/* Head */}
                <g>
                    <animateTransform attributeName="transform" type="rotate" values="-1; 1; -1" dur="2s" repeatCount="indefinite" />
                    <ellipse cx="0" cy="-170" rx="35" ry="45" fill="#1F2024" />

                    {/* Hair */}
                    <path d="M-30 -195 Q0 -220 20 -190" fill="none" stroke="#2E5266" strokeWidth="4" />
                    <path d="M-20 -205 Q5 -225 10 -200" fill="none" stroke="#2E5266" strokeWidth="4" />

                    {/* Glasses */}
                    <rect x="-25" y="-180" width="20" height="15" fill="none" stroke="#F2E9E4" strokeWidth="3" rx="2" />
                    <rect x="5" y="-180" width="20" height="15" fill="none" stroke="#F2E9E4" strokeWidth="3" rx="2" />
                    <path d="M-5 -175 L5 -175" stroke="#F2E9E4" strokeWidth="3" />

                    {/* Sweat drop reacting to stress */}
                    <g transform="translate(-30, -190)">
                        <animateTransform attributeName="transform" type="translate" values="-30,-190; -30,-170; -30,-190" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                        <path d="M0 0 Q5 5 0 10 Q-5 5 0 0 Z" fill="#89C2D9" />
                    </g>
                </g>
            </g>
        </g>

        {/* The Badge */}
        <g transform="translate(150, 40)">
            <animateTransform attributeName="transform" type="rotate" values="-10; 10; -10" dur="0.5s" repeatCount="indefinite" />
            <circle cx="0" cy="0" r="20" fill="#FFB703" stroke="#1F2024" strokeWidth="3" />
            <text x="-14" y="6" fontSize="18" fontWeight="bold" fill="#1F2024" style={{ fontFamily: 'monospace' }}>#!?</text>
        </g>
    </svg>
);
