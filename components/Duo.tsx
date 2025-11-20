import React from 'react';

export const Duo: React.FC = () => {
  return (
    <section id="duo" className="py-20 bg-offwhite overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="font-display text-5xl md:text-6xl text-charcoal">Partners in <span className="text-teal line-through decoration-tomato decoration-4">Crime</span> Time</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Dick */}
          <div className="group">
            <div className="relative h-[400px] bg-charcoal rounded-t-[100px] border-4 border-charcoal shadow-retro flex items-end justify-center overflow-hidden transform group-hover:rotate-1 transition-transform duration-300">
                {/* Background for silhouette */}
                <div className="absolute inset-0 bg-teal opacity-90"></div>
                {/* Silhouette Placeholder - Male */}
                <div className="w-48 h-64 bg-charcoal rounded-t-full relative mb-[-20px]">
                    <div className="absolute top-[-20px] left-4 w-40 h-12 bg-charcoal rounded-full"></div> {/* Hair */}
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 bg-mustard rounded-full flex items-center justify-center border-2 border-charcoal animate-wiggle">
                    <span className="font-display text-2xl">#!?</span>
                </div>
            </div>
            <div className="bg-white border-4 border-t-0 border-charcoal p-6 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-mustard px-6 py-1 border-2 border-charcoal shadow-sm font-bold uppercase tracking-wider text-sm">
                    The "Brains"
                </div>
                <h3 className="font-display text-3xl text-charcoal text-center mt-4">Dick</h3>
                <p className="text-center text-charcoal/70 mt-2 italic">"I used to manage acquisitions. Now I manage anxiety."</p>
                <ul className="mt-4 space-y-2 text-sm font-bold text-charcoal/80">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-tomato rounded-full"></span> Strong suit: Spreadsheets
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-tomato rounded-full"></span> Weakness: Ski masks
                    </li>
                </ul>
            </div>
          </div>

          {/* Jane */}
          <div className="group md:mt-12">
             <div className="relative h-[400px] bg-charcoal rounded-t-[100px] border-4 border-charcoal shadow-retro flex items-end justify-center overflow-hidden transform group-hover:-rotate-1 transition-transform duration-300">
                {/* Background for silhouette */}
                <div className="absolute inset-0 bg-tomato opacity-90"></div>
                {/* Silhouette Placeholder - Female */}
                <div className="w-40 h-60 bg-charcoal rounded-t-full relative mb-[-20px]">
                    <div className="absolute top-[-10px] -left-4 w-48 h-20 bg-charcoal rounded-full transform rotate-12"></div> {/* Hair */}
                </div>
                <div className="absolute top-12 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-charcoal">
                    <span className="font-display text-xl">:)</span>
                </div>
            </div>
            <div className="bg-white border-4 border-t-0 border-charcoal p-6 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-teal text-white px-6 py-1 border-2 border-charcoal shadow-sm font-bold uppercase tracking-wider text-sm">
                    The Muscle
                </div>
                <h3 className="font-display text-3xl text-charcoal text-center mt-4">Jane</h3>
                <p className="text-center text-charcoal/70 mt-2 italic">"I thought you said the getaway car was a hybrid?"</p>
                <ul className="mt-4 space-y-2 text-sm font-bold text-charcoal/80">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-mustard rounded-full"></span> Strong suit: Improvisation
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-mustard rounded-full"></span> Weakness: Expensive rugs
                    </li>
                </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};