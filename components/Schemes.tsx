import React from 'react';

export const Schemes: React.FC = () => {
  // Defined inside component to ensure React elements are created in the correct context
  const schemes = [
    {
      title: "The 'Discount' Shopper",
      description: "Technically, if you taste the grapes before buying them, it's just quality control.",
      image: "/images/scheme_discount_shopper.png",
      color: "bg-teal",
      rotate: "-rotate-2"
    },
    {
      title: "The Lawn Job",
      description: "Stealing turf from the golf course to fix the front yard. It's organic architecture.",
      image: "/images/scheme_lawn_job.png",
      color: "bg-green-600",
      rotate: "rotate-1"
    },
    {
      title: "The Free Refill",
      description: "Walking into a coffee shop with yesterday's cup. A classic high-margin play.",
      image: "/images/scheme_free_refill.png",
      color: "bg-mustard",
      rotate: "-rotate-3"
    },
    {
      title: "Open House Buffet",
      description: "Acting like interested buyers just for the shrimp cocktail and free pens.",
      image: "/images/scheme_open_house.png",
      color: "bg-tomato",
      rotate: "rotate-2"
    }
  ];

  return (
    <section id="schemes" className="py-20 bg-teal border-y-4 border-charcoal relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
          backgroundSize: '24px 24px'
        }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-mustard text-charcoal px-4 py-1 font-bold text-sm uppercase tracking-widest border-2 border-charcoal shadow-retro-sm inline-block mb-4 transform -rotate-1">
            The Portfolio
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-offwhite mb-4 drop-shadow-[4px_4px_0_rgba(31,32,36,1)]">
            Petty Crimes, <br className="md:hidden" /> Premium Effort.
          </h2>
          <p className="text-offwhite/90 max-w-xl mx-auto text-lg font-medium">
            They aren't hardened criminals. They're just soft suburbanites trying to maintain a 401k lifestyle on a 0k income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className={`bg-white p-4 shadow-polaroid transform ${scheme.rotate} hover:scale-105 hover:z-10 hover:rotate-0 transition-all duration-300 cursor-pointer group`}
            >
              <div className={`${scheme.color} w-full aspect-square mb-4 flex items-center justify-center border-2 border-charcoal/10 group-hover:border-charcoal transition-colors relative overflow-hidden`}>
                <img
                  src={scheme.image}
                  alt={scheme.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 grayscale-[20%] group-hover:grayscale-0"
                />
                {/* Inner grain texture overlay via CSS gradient to avoid external deps */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '4px 4px', backgroundPosition: '0 0, 2px 2px' }}></div>
              </div>
              <div className="px-1 pb-2">
                <h3 className="font-display text-xl text-charcoal mb-2 leading-none">{scheme.title}</h3>
                <p className="text-sm text-charcoal/70 font-medium leading-tight">{scheme.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-offwhite/60 text-sm italic font-handwriting text-lg transform -rotate-1">
            *Legal Disclaimer: None of these actually worked well.
          </p>
        </div>
      </div>
    </section>
  );
};