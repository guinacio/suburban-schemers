import React from 'react';

export const HeroGraphic: React.FC = () => {
    return (
        <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-offwhite rounded-full border-4 border-charcoal overflow-hidden shadow-retro">
                <svg viewBox="0 0 400 400" className="w-full h-full text-charcoal" xmlns="http://www.w3.org/2000/svg">
                    {/* Background pattern */}
                    <defs>
                        <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" className="text-charcoal opacity-20" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#gridPattern)" />

                    {/* Sun / Moon */}
                    <circle cx="280" cy="110" r="45" className="text-mustard" fill="currentColor" stroke="currentColor" strokeWidth="4">
                        <animate attributeName="cy" values="110;95;110" dur="5s" repeatCount="indefinite" ease="ease-in-out" />
                    </circle>

                    {/* House silhouette background */}
                    {/* Roof */}
                    <path d="M50 200 L200 80 L350 200 Z" className="text-teal" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                    {/* Main Building */}
                    <rect x="70" y="200" width="260" height="200" className="text-teal" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />

                    {/* Chimney */}
                    <rect x="250" y="70" width="40" height="80" className="text-teal" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                    {/* Smoke */}
                    <path d="M260 50 Q280 30 250 10 T270 -20" fill="none" stroke="#1f2024" strokeWidth="4" strokeLinecap="round">
                        <animate attributeName="stroke-dashoffset" values="40;0" dur="3s" repeatCount="indefinite" />
                    </path>

                    {/* Door */}
                    <rect x="180" y="270" width="40" height="130" className="text-tomato" fill="currentColor" stroke="#1f2024" strokeWidth="6" />
                    <circle cx="210" cy="330" r="4" fill="#1f2024" />

                    {/* Windows with blinking light effect */}
                    <rect x="100" y="250" width="50" height="50" className="text-offwhite" fill="currentColor" stroke="#1f2024" strokeWidth="6">
                        <animate attributeName="opacity" values="1;0.5;1;1;1" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <line x1="125" y1="250" x2="125" y2="300" stroke="#1f2024" strokeWidth="4" />
                    <line x1="100" y1="275" x2="150" y2="275" stroke="#1f2024" strokeWidth="4" />

                    <rect x="250" y="250" width="50" height="50" className="text-mustard" fill="currentColor" stroke="#1f2024" strokeWidth="6">
                        <animate attributeName="fill" values="#FFB703;#1F2024;#FFB703" dur="4s" repeatCount="indefinite" />
                    </rect>
                    <line x1="275" y1="250" x2="275" y2="300" stroke="#1f2024" strokeWidth="4" />
                    <line x1="250" y1="275" x2="300" y2="275" stroke="#1f2024" strokeWidth="4" />

                    {/* Schemers silhouettes running out */}
                    <g transform="translate(185, 315)" className="text-charcoal" fill="currentColor">
                        {/* Dick (Taller, wearing glasses) */}
                        <g>
                            <g>
                                <animateTransform attributeName="transform" type="rotate" values="-5 0 80;5 0 80;-5 0 80" dur="0.8s" repeatCount="indefinite" />
                                <animateTransform attributeName="transform" type="translate" values="0, 0; -10, -2; 0, 0" dur="2s" repeatCount="indefinite" additive="sum" />
                                <circle cx="-10" cy="5" r="14" />
                                <rect x="-15" y="2" width="10" height="6" fill="none" stroke="#F2E9E4" strokeWidth="2" /> {/* Glasses outline */}
                                <path d="M-25 20 Q-10 15 5 20 L0 60 L-20 60 Z" /> {/* Body */}
                                {/* Legs running */}
                                <path d="M-15 60 L-20 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                                    <animateTransform attributeName="transform" type="rotate" values="-20 -15 60; 20 -15 60; -20 -15 60" dur="0.4s" repeatCount="indefinite" />
                                </path>
                                <path d="M-5 60 L0 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                                    <animateTransform attributeName="transform" type="rotate" values="20 -5 60; -20 -5 60; 20 -5 60" dur="0.4s" repeatCount="indefinite" />
                                </path>
                                {/* Briefcase */}
                                <rect x="-40" y="45" width="20" height="15" className="text-mustard" fill="currentColor" stroke="#1f2024" strokeWidth="2" rx="2" />
                                <path d="M-35 45 L-35 40 L-25 40 L-25 45" fill="none" stroke="#1f2024" strokeWidth="2" />
                            </g>
                        </g>
                        {/* Jane (Slightly shorter, messy hair) */}
                        <g transform="translate(35, 15)">
                            <g>
                                <animateTransform attributeName="transform" type="rotate" values="5 5 75;-5 5 75;5 5 75" dur="0.9s" repeatCount="indefinite" />
                                <animateTransform attributeName="transform" type="translate" values="0, -2; -10, 0; 0, -2" dur="2.1s" repeatCount="indefinite" additive="sum" />
                                <path d="M0,0 C-15,-10 15,-10 20,5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /> {/* Hair */}
                                <circle cx="5" cy="10" r="12" />
                                <path d="M-5 20 Q5 15 15 20 L10 55 L0 55 Z" /> {/* Body */}
                                {/* Legs running */}
                                <path d="M0 55 L-5 75" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
                                    <animateTransform attributeName="transform" type="rotate" values="-25 0 55; 25 0 55; -25 0 55" dur="0.45s" repeatCount="indefinite" />
                                </path>
                                <path d="M10 55 L15 75" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
                                    <animateTransform attributeName="transform" type="rotate" values="25 10 55; -25 10 55; 25 10 55" dur="0.45s" repeatCount="indefinite" />
                                </path>
                                {/* Shopping bag */}
                                <path d="M15,35 L35,35 L40,65 L10,65 Z" className="text-tomato" fill="currentColor" stroke="#1f2024" strokeWidth="2" />
                                <path d="M20,35 Q25,25 30,35" fill="none" className="text-tomato" stroke="currentColor" strokeWidth="2" />
                            </g>
                        </g>
                    </g>

                    {/* Money / Leaves falling out of chaos */}
                    <g className="text-green-500" fill="currentColor" stroke="#1f2024" strokeWidth="2">
                        <rect x="90" y="-30" width="20" height="10">
                            <animateTransform attributeName="transform" type="translate" values="0,-50; -30,450" dur="3s" repeatCount="indefinite" additive="sum" />
                            <animateTransform attributeName="transform" type="rotate" values="0;360" dur="3s" repeatCount="indefinite" additive="sum" />
                        </rect>
                        <rect x="250" y="-80" width="24" height="12">
                            <animateTransform attributeName="transform" type="translate" values="0,-100; 50,450" dur="4.2s" repeatCount="indefinite" additive="sum" />
                            <animateTransform attributeName="transform" type="rotate" values="-15;-500" dur="4.2s" repeatCount="indefinite" additive="sum" />
                        </rect>
                        <rect x="180" y="-120" width="16" height="8">
                            <animateTransform attributeName="transform" type="translate" values="0,-150; 0,450" dur="3.5s" repeatCount="indefinite" additive="sum" />
                            <animateTransform attributeName="transform" type="rotate" values="45;200" dur="3.5s" repeatCount="indefinite" additive="sum" />
                        </rect>
                    </g>
                </svg>
            </div>

            {/* Dotted Chaos Line extending outside the circle */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none text-charcoal -z-10" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 20">
                    <path d="M 150 350 C 180 430, 240 450, 280 430 S 380 470, 440 420 S 540 460, 580 390">
                        <animate attributeName="stroke-dashoffset" values="60;0" dur="2s" repeatCount="indefinite" />
                    </path>
                </g>
            </svg>

            {/* Decor elements */}
            <div className="absolute -top-4 -right-4 z-10 bg-white p-4 shadow-retro border-2 border-charcoal transform rotate-6 animate-pulse">
                <p className="font-display text-2xl text-tomato">CHAOS!</p>
            </div>
            <div className="absolute bottom-4 -left-8 z-10 bg-charcoal text-mustard px-4 py-2 font-bold transform -rotate-3 shadow-retro-sm hover:rotate-0 transition-transform">
                #CoupleGoals
            </div>
        </div>
    );
};
