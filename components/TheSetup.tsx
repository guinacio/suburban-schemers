import React from 'react';
import { TrendingDown, XCircle, Siren } from 'lucide-react';

import { EstateGraphic } from './graphics/EstateGraphic';

export const TheSetup: React.FC = () => {
  return (
    <section id="setup" className="py-20 md:py-32 bg-offwhite relative overflow-hidden">
      {/* Decorative torn paper edge at top */}
      <div className="absolute top-0 left-0 w-full h-8 bg-mustard clip-jagged-bottom transform rotate-180 z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 z-10">
            <div className="inline-block bg-charcoal text-mustard px-3 py-1 font-bold text-xs uppercase tracking-widest transform -rotate-1 mb-2">
              Act One
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-none">
              From Upper Management to <span className="text-tomato decoration-wavy underline decoration-4">Underground.</span>
            </h2>
            <p className="text-lg text-charcoal/80 font-medium leading-relaxed">
              It started with a "corporate restructuring" (read: fired) and a lawn that desperately needed mowing. With the pool unfinished and the bills piling up, <strong className="text-teal">Dick and Jane</strong> decided to pivot.
            </p>
            <p className="text-lg text-charcoal/80 font-medium leading-relaxed">
              Forget the resume. They needed cash. Fast. And maybe a little bit of adrenaline to numb the pain of losing the company car.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 border-2 border-charcoal shadow-retro-sm transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <TrendingDown className="w-8 h-8 text-tomato mb-2" />
                <h3 className="font-bold text-charcoal">The Crash</h3>
                <p className="text-sm text-charcoal/60">Stocks plummet. Panic ensues.</p>
              </div>
              <div className="bg-white p-4 border-2 border-charcoal shadow-retro-sm transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <XCircle className="w-8 h-8 text-teal mb-2" />
                <h3 className="font-bold text-charcoal">The Denial</h3>
                <p className="text-sm text-charcoal/60">"We are just simplifying."</p>
              </div>
              <div className="bg-white p-4 border-2 border-charcoal shadow-retro-sm transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <Siren className="w-8 h-8 text-mustard mb-2" />
                <h3 className="font-bold text-charcoal">The Pivot</h3>
                <p className="text-sm text-charcoal/60">Crime pay$. (Sort of.)</p>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="md:w-1/2 relative flex justify-center">
            <EstateGraphic />
          </div>

        </div>
      </div>
    </section>
  );
};