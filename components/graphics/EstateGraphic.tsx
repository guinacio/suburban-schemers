import React from 'react';

export const EstateGraphic: React.FC = () => {
    return (
        <div className="relative w-full max-w-md aspect-square">
            {/* Circle background */}
            <div className="absolute inset-0 bg-teal/10 rounded-full border-dashed border-2 border-teal animate-spin-slow" style={{ animationDuration: '30s' }}></div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 shadow-polaroid transform rotate-3 hover:rotate-6 transition-transform duration-500 w-64 md:w-72">
                    <div className="bg-charcoal/10 w-full h-48 mb-4 flex items-center justify-center overflow-hidden relative border border-charcoal/5">
                        <div className="w-full h-full bg-offwhite relative p-2">

                            <svg viewBox="0 0 200 150" className="w-full h-full text-charcoal" xmlns="http://www.w3.org/2000/svg">
                                {/* Sun setting */}
                                <circle cx="150" cy="50" r="25" className="text-tomato opacity-80" fill="currentColor">
                                    <animate attributeName="cy" values="50;80;50" dur="6s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="6s" repeatCount="indefinite" />
                                </circle>

                                {/* Suburbia silhouette - very minimal */}
                                <path d="M10 130 L40 90 L80 130 L10 130 Z" fill="#2E5266" opacity="0.5" />
                                <path d="M120 130 L160 80 L200 130 L120 130 Z" fill="#2E5266" opacity="0.3" />

                                {/* The House */}
                                <rect x="60" y="60" width="80" height="70" className="text-charcoal" fill="currentColor" stroke="#fff" strokeWidth="2" />
                                <polygon points="50,60 100,20 150,60" className="text-charcoal" fill="currentColor" stroke="#fff" strokeWidth="2" />

                                {/* Unfinished pool / Hole */}
                                <ellipse cx="100" cy="140" rx="30" ry="8" className="text-mustard" fill="currentColor" stroke="#1f2024" />
                                <path d="M80 140 Q100 150 120 140" fill="none" stroke="#1f2024" />

                                {/* Moving moving-boxes */}
                                <g className="text-tomato" fill="currentColor" stroke="#fff">
                                    <rect x="40" y="110" width="20" height="20">
                                        <animateTransform attributeName="transform" type="translate" values="0,0; -50,0" dur="4s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="50" y="95" width="15" height="15">
                                        <animateTransform attributeName="transform" type="translate" values="0,0; -60,0" dur="4s" repeatCount="indefinite" />
                                    </rect>
                                </g>
                            </svg>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-24 bg-tomato border-2 border-white text-white flex items-center justify-center text-center font-display text-2xl transform rotate-12 shadow-lg z-10 animate-pulse" style={{ animationDuration: '2s' }}>
                                SOLD<br /><span className="text-sm font-sans">(Kinda)</span>
                            </div>
                        </div>
                    </div>
                    <p className="font-handwriting text-center text-charcoal font-bold text-xl rotate-1">The "Estate"</p>
                </div>
            </div>

            {/* Sticker */}
            <div className="absolute bottom-10 right-10 bg-mustard text-charcoal px-4 py-2 font-bold transform -rotate-6 border-2 border-charcoal shadow-sm z-20 font-handwriting text-lg hover:-rotate-12 transition-transform cursor-default">
                Notice of Eviction?
            </div>
        </div>
    );
};
