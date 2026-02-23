import React from 'react';
import { Quote } from 'lucide-react';

const REVIEWS = [
  { id: 1, name: "Priya S.", role: "Event Curator", quote: "The attention to detail is staggering. The Noir Ganache was the centerpiece of the evening." },
  { id: 2, name: "Arjun R.", role: "Local Foodie", quote: "A masterclass in texture. Fresh, light, and ethereal." },
  { id: 3, name: "Sarah J.", role: "Lifestyle Blogger", quote: "The croissants transported me back to a small boulangerie in Paris. Truly authentic." },
  { id: 4, name: "Vikram M.", role: "Chef", quote: "As a chef, I'm picky about crumb structure. SweetCrumbs hits it out of the park." },
  { id: 5, name: "Ananya K.", role: "Wedding Planner", quote: "They are my go-to for luxury weddings. Reliable, professional, and absolutely delicious." },
  { id: 6, name: "Leo G.", role: "Pastry Enthusiast", quote: "The Madagascar Vanilla bean quality is evident in every single bite. Pure luxury." }
];

export const Testimonials = () => {
  // Triple the array for an ultra-smooth infinite loop
  const marqueeItems = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section className="py-32 bg-white overflow-hidden relative border-t border-black/5">
      
      {/* --- SECTION HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-black" />
              <span className="text-[10px] font-black tracking-[0.5em] text-black uppercase">Testimonials</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif text-black leading-none">
              The <span className="italic font-light text-zinc-400">Word</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-serif italic text-lg max-w-xs">
            "An uncompromising commitment to the art of the crumb."
          </p>
        </div>
      </div>

      {/* --- MARQUEE WITH GRADIENT FADES --- */}
      <div className="relative">
        {/* Left & Right Fading Edges for Luxury Look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] py-4">
          {marqueeItems.map((review, index) => (
            <div 
              key={`${review.id}-${index}`} 
              className="w-[400px] md:w-[500px] shrink-0 bg-white p-12 border border-black/5 hover:border-black transition-colors duration-500 group"
            >
              <Quote className="text-zinc-200 group-hover:text-black transition-colors duration-500 mb-8" size={32} strokeWidth={1} />
              
              <p className="text-xl md:text-2xl font-serif text-black leading-relaxed mb-10 whitespace-normal">
                "{review.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-black/5 pt-8">
                <div>
                  <h4 className="text-[11px] font-black text-black tracking-[0.2em] uppercase">{review.name}</h4>
                  <p className="text-[10px] text-zinc-400 font-serif italic">{review.role}</p>
                </div>
                {/* 5-Star Indicator (Minimalist dots instead of icons) */}
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-black" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- STARK SOCIAL PROOF --- */}
      <div className="mt-32 flex flex-col items-center">
        <div className="group cursor-default">
          <div className="flex -space-x-3 mb-6 transition-transform group-hover:scale-110 duration-500">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-100 overflow-hidden grayscale hover:grayscale-0 transition-all">
                <img src={`https://i.pravatar.cc/150?u=luxury${i}`} alt="client" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-black flex items-center justify-center text-[10px] text-white font-bold">
              +500
            </div>
          </div>
          <p className="text-[10px] font-black tracking-[0.4em] text-black uppercase text-center">
            Trusted by the city's most discerning palates
          </p>
        </div>
      </div>

      {/* CSS For Tailwind Config (Add this to your styles) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}} />
    </section>
  );
};