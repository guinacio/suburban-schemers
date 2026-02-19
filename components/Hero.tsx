import React from 'react';
import { ArrowRight, Briefcase, ShoppingBag } from 'lucide-react';

import { HeroGraphic } from './graphics/HeroGraphic';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-mustard border-b-4 border-charcoal">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2E5266 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block bg-teal text-white px-3 py-1 font-bold text-xs uppercase tracking-widest transform -rotate-2 mb-4 shadow-sm">
            Inspired by True-ish Events
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-charcoal mb-4">
            When life shuts <br /> the door, <span className="text-white drop-shadow-[4px_4px_0_rgba(31,32,36,1)]">pick the lock.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-charcoal/80 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Meet the delightfully desperate duo turning suburban boredom into petty larceny. A cheeky look at two everyday schemers who won't go quietly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="bg-tomato text-white px-8 py-4 font-display text-xl rounded shadow-retro hover:translate-y-1 hover:shadow-retro-sm transition-all border-2 border-charcoal flex items-center justify-center gap-2 group">
              See the Schemes
              <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </button>
            <button className="bg-offwhite text-charcoal px-8 py-4 font-bold text-lg rounded shadow-retro hover:translate-y-1 hover:shadow-retro-sm transition-all border-2 border-charcoal">
              Watch Trailer
            </button>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">

          {/* Dotted Chaos Line (Overflowing container) */}
          <div className="absolute inset-x-0 bottom-0 top-1/2 pointer-events-none z-0 overflow-visible">
            <svg className="w-full h-full text-green-500 overflow-visible" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 15">
                <path d="M 200 150 Q 250 120 350 160 T 450 140">
                  <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
                </path>
              </g>
            </svg>
          </div>

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};