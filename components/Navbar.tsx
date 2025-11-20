import React, { useState, useEffect } from 'react';
import { DollarSign, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Setup', href: '#setup' },
    { name: 'The Schemes', href: '#schemes' },
    { name: 'The Duo', href: '#duo' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-offwhite/95 backdrop-blur-sm shadow-retro-sm py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-tomato rounded-full flex items-center justify-center text-white shadow-retro-sm group-hover:animate-wiggle">
            <DollarSign size={24} strokeWidth={3} />
          </div>
          <span className="font-display text-2xl text-charcoal tracking-wide">Suburban<span className="text-teal">Schemers</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-bold text-charcoal hover:text-tomato transition-colors uppercase tracking-wider text-sm"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-charcoal text-mustard px-6 py-2 font-display text-lg rounded shadow-retro-sm hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-charcoal">
            Get Rich Quick
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-mustard border-b-4 border-charcoal p-6 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-2xl text-charcoal hover:text-offwhite text-center"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-tomato text-white w-full py-3 font-display text-xl rounded shadow-retro-sm border-2 border-charcoal mt-2">
            Get Rich Quick
          </button>
        </div>
      )}
    </nav>
  );
};