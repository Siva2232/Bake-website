import React from 'react';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  { id: 1, name: "Priya S.", role: "Event Curator", quote: "The attention to detail is staggering. The Noir Ganache was the centerpiece of the evening." },
  { id: 2, name: "Arjun R.", role: "Local Foodie", quote: "A masterclass in texture. Fresh, light, and ethereal." },
  { id: 3, name: "Sarah J.", role: "Lifestyle Blogger", quote: "The croissants transported me back to a small boulangerie in Paris. Truly authentic." },
  { id: 4, name: "Vikram M.", role: "Chef", quote: "As a chef, I'm picky about crumb structure. MyBake hits it out of the park." },
  { id: 5, name: "Ananya K.", role: "Wedding Planner", quote: "They are my go-to for luxury weddings. Reliable, professional, and absolutely delicious." },
  { id: 6, name: "Leo G.", role: "Pastry Enthusiast", quote: "The Madagascar Vanilla bean quality is evident in every single bite. Pure luxury." }
];

export const Testimonials = () => {
  const marqueeItems = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section className="py-40 bg-[#FAF9F6] overflow-hidden relative">
      
      {/* --- SECTION HEADER --- */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#C5A358]" />
              <span className="text-[11px] font-bold tracking-[0.5em] text-[#C5A358] uppercase">The Commendations</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-serif text-[#1a1a1a] leading-[0.8]">
              Client <br />
              <span className="italic font-light text-zinc-300 ml-0 md:ml-32">Voices</span>
            </h2>
          </div>
          <div className="md:text-right">
            <Quote className="text-[#C5A358] mb-6 md:ml-auto" size={40} strokeWidth={1} />
            <p className="text-zinc-500 font-light text-xl max-w-xs leading-relaxed">
              "An uncompromising commitment to the architecture of flavor."
            </p>
          </div>
        </div>
      </div>

      {/* --- INFINITE MARQUEE --- */}
      <div className="relative cursor-none group">
        {/* Gradient Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#FAF9F6] to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#FAF9F6] to-transparent z-20" />

        <div className="flex gap-8 animate-marquee whitespace-nowrap py-10 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((review, index) => (
            <div 
              key={`${review.id}-${index}`} 
              className="w-[450px] md:w-[600px] shrink-0 bg-white p-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A358] opacity-20 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex gap-2 mb-10">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rotate-45 bg-[#C5A358]" />
                ))}
              </div>

              <p className="text-2xl md:text-3xl font-serif text-[#1a1a1a] leading-snug mb-12 whitespace-normal italic">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-6 pt-10 border-t border-zinc-100">
                <div className="w-14 h-14 rounded-full bg-zinc-100 overflow-hidden grayscale">
                   <img src={`https://i.pravatar.cc/150?u=${review.name}`} alt={review.name} />
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-[#1a1a1a] tracking-[0.2em] uppercase">{review.name}</h4>
                  <p className="text-[11px] text-[#C5A358] font-light uppercase tracking-widest mt-1">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PREMIUM SOCIAL PROOF --- */}
      <div className="mt-40 flex flex-col items-center px-6">
        <div className="flex items-center gap-8 py-10 px-12 border border-zinc-200 rounded-full hover:border-[#1a1a1a] transition-colors duration-500">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map(i => (
              <img 
                key={i} 
                className="w-10 h-10 rounded-full border-2 border-white grayscale" 
                src={`https://i.pravatar.cc/100?img=${i+10}`} 
                alt="Member" 
              />
            ))}
          </div>
          <div className="h-8 w-[1px] bg-zinc-200" />
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#1a1a1a] uppercase">
            Over <span className="text-[#C5A358]">2,400</span> Bespoke Orders Fulfilled
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}} />
    </section>
  );
};