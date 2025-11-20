import React from 'react';
import { ArrowRight, Briefcase, ShoppingBag } from 'lucide-react';

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
            When life shuts <br/> the door, <span className="text-white drop-shadow-[4px_4px_0_rgba(31,32,36,1)]">pick the lock.</span>
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
           {/* Abstract House/Suburbs Graphic */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 bg-offwhite rounded-full border-4 border-charcoal flex items-center justify-center overflow-hidden shadow-retro">
                 {/* Silhouette placeholders */}
                 <div className="absolute bottom-0 left-10 w-32 h-56 bg-teal rounded-t-full border-2 border-charcoal transform -rotate-6 flex items-center justify-center">
                    <Briefcase className="text-mustard w-12 h-12 mb-12" />
                 </div>
                 <div className="absolute bottom-0 right-10 w-32 h-48 bg-tomato rounded-t-full border-2 border-charcoal transform rotate-3 flex items-center justify-center">
                    <ShoppingBag className="text-white w-12 h-12 mb-12" />
                 </div>
                 {/* Money/Leaves falling */}
                 <div className="absolute top-10 left-20 w-8 h-4 bg-mustard border border-charcoal animate-float opacity-80"></div>
                 <div className="absolute top-20 right-24 w-8 h-4 bg-green-500 border border-charcoal animate-float delay-700 opacity-80"></div>
              </div>
              
              {/* Decor elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 shadow-retro border-2 border-charcoal transform rotate-6">
                <p className="font-display text-2xl text-tomato">CHAOS!</p>
              </div>
              <div className="absolute bottom-10 -left-8 bg-charcoal text-mustard px-4 py-2 font-bold transform -rotate-3 shadow-retro-sm">
                #CoupleGoals
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};