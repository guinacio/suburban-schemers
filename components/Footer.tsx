import React from 'react';
import { DollarSign, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-offwhite pt-16 pb-8 border-t-8 border-mustard">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl text-mustard">Don't miss the next caper.</h3>
            <p className="text-offwhite/60">Sign up for tips on how to save money (or accidentally rob a bank).</p>
            <form className="flex gap-2 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your alibi (email)" 
                className="flex-1 bg-charcoal border-2 border-offwhite/20 p-3 text-offwhite placeholder:text-offwhite/30 focus:border-mustard outline-none transition-colors rounded-sm"
              />
              <button className="bg-mustard text-charcoal px-6 font-bold hover:bg-white transition-colors">
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-end justify-center space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-tomato rounded-full flex items-center justify-center text-white">
                    <DollarSign size={16} strokeWidth={3} />
                </div>
                <span className="font-display text-xl text-offwhite tracking-wide">Suburban<span className="text-teal">Schemers</span></span>
             </div>
             <div className="flex gap-6 text-sm font-bold text-offwhite/60 uppercase tracking-wider">
                <a href="#" className="hover:text-mustard transition-colors">The Legal Stuff</a>
                <a href="#" className="hover:text-mustard transition-colors">Our Lawyer</a>
                <a href="#" className="hover:text-mustard transition-colors">Contact Feds</a>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-offwhite/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-offwhite/30">
          <p>© 2024 Suburban Schemers LLC. No actual crimes were committed in the making of this site.</p>
          <p>Designed with panic & mustard.</p>
        </div>
      </div>
    </footer>
  );
};