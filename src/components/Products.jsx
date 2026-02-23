import React, { useRef, useState, useEffect } from 'react';

export const Products = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    { id: 1, name: "Noir Chocolate Ganache", category: "Cakes", price: "₹499", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600" },
    { id: 2, name: "Wild Strawberry Chantilly", category: "Specialties", price: "₹599", image: "https://images.unsplash.com/photo-1464347744102-11db6282f854?q=80&w=600" },
    { id: 3, name: "Madagascar Vanilla Bean", category: "Cupcakes", price: "₹299", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=600" },
    { id: 4, name: "Pistachio Rose Macarons", category: "Pastries", price: "₹199", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=600" },
    { id: 5, name: "Golden Honey Croissants", category: "Boulangerie", price: "₹149", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600" },
    { id: 6, name: "Velvet Red Raspberry", category: "Cakes", price: "₹549", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600" },
  ];

  return (
    <section
      id="products"
      ref={ref}
      className="py-32 bg-white px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Slide-In Animation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className={`max-w-xl ${inView ? 'animate-[slide-right_1s_ease-out]' : ''}`}>
            <span className="text-[10px] font-bold tracking-[0.5em] text-pink-500 uppercase block mb-4">
              The Artisan Vault
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight">
              Signature <span className="italic text-pink-600 font-light">Creations</span>
            </h2>
          </div>
          <p className={`text-slate-400 text-sm font-light italic max-w-xs md:text-right ${inView ? 'animate-[fade-in_1.5s_ease-out_0.5s_both]' : ''}`}>
            Hand-selected ingredients meeting world-class craftsmanship.
          </p>
        </div>

        {/* Product Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className={`group cursor-pointer opacity-0 ${inView ? 'animate-[fade-in-up_1s_ease-out_forwards]' : ''}`}
              style={{ animationDelay: inView ? `${index * 0.15}s` : '0s' }} // Staggered delay
            >
              {/* Image Container with Reveal Mask */}
              <div className="relative aspect-[4/5] mb-8 rounded-sm bg-slate-100 overflow-hidden">
                {/* The Reveal Mask Effect */}
                <div className="absolute inset-0 bg-white z-10 animate-[reveal-mask_1.5s_cubic-bezier(0.77,0,0.175,1)_forwards]" 
                     style={{ animationDelay: `${index * 0.15 + 0.3}s` }}></div>
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                
                {/* Glassmorphism Button Overlay */}
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center p-8 z-20">
                  <button className="bg-white/90 backdrop-blur-md text-slate-900 w-full py-4 text-[10px] font-bold tracking-[0.3em] uppercase transform translate-y-12 group-hover:translate-y-0 transition-all duration-500 hover:bg-pink-600 hover:text-white">
                    QUICK VIEW — {item.price}
                  </button>
                </div>
              </div>

              {/* Product Info with Hover Underline */}
              <div className="text-center">
                <h3 className="text-2xl font-serif text-slate-900 mb-2 relative inline-block">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-pink-300 transition-all duration-500 group-hover:w-full"></span>
                </h3>
                <div className="flex items-center justify-center gap-4 mt-3 opacity-60">
                    <div className="h-px w-6 bg-slate-200"></div>
                    <p className="text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase">{item.category}</p>
                    <div className="h-px w-6 bg-slate-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with Pulsing Animation */}
        <div className={`mt-32 text-center ${inView ? 'animate-[fade-in-up_1s_ease-out_1s_both]' : ''}`}>
            <button className="group relative px-20 py-6 border border-slate-200 text-slate-900 text-[10px] font-bold tracking-[0.4em] uppercase overflow-hidden transition-colors duration-500 hover:text-white">
                <span className="relative z-10">View Full Lookbook</span>
                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </button>
        </div>
      </div>
    </section>
  );
};