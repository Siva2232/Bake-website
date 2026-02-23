import React from 'react';

export const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Priya S.", role: "Event Curator", quote: "The attention to detail is staggering. The Noir Ganache was the centerpiece of the evening.", stars: 5 },
    { id: 2, name: "Arjun R.", role: "Local Foodie", quote: "A masterclass in texture. Fresh, light, and ethereal.", stars: 5 },
    { id: 3, name: "Sarah J.", role: "Lifestyle Blogger", quote: "The croissants transported me back to a small boulangerie in Paris. Truly authentic.", stars: 5 },
    { id: 4, name: "Vikram M.", role: "Chef", quote: "As a chef, I'm picky about crumb structure. SweetCrumbs hits it out of the park every time.", stars: 5 },
    { id: 5, name: "Ananya K.", role: "Wedding Planner", quote: "They are my go-to for luxury weddings. Reliable, professional, and absolutely delicious.", stars: 5 },
    { id: 6, name: "Leo G.", role: "Pastry Enthusiast", quote: "The Madagascar Vanilla bean quality is evident in every single bite. Pure luxury.", stars: 5 },
    { id: 7, name: "Meera D.", role: "Designer", quote: "Visual perfection matched with incredible flavor. It's edible art.", stars: 5 }
  ];

  // We double the array to create the seamless "loop" effect
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section className="py-32 bg-[#FDFCFB] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-10 left-10 text-[15rem] font-serif text-pink-100/20 leading-none select-none">“</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 text-center">
        <span className="text-[10px] font-bold tracking-[0.5em] text-pink-500 uppercase mb-4 block">The Experience</span>
        <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">
          Voices of <span className="italic font-light text-pink-600">SweetCrumbs</span>
        </h2>
      </div>

      {/* The Marquee Container */}
      <div className="relative flex">
        {/* marquee animation is now defined in tailwind.config.js as "marquee" keyframes
            with class `.animate-marquee` (40s linear infinite). Hovering pauses the scroll.
        */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {marqueeItems.map((review, index) => (
            <div 
              key={`${review.id}-${index}`} 
              className="w-[350px] md:w-[450px] shrink-0 bg-white p-10 border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] rounded-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-pink-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl font-serif text-slate-800 leading-relaxed italic mb-8 whitespace-normal">
                "{review.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-pink-300"></div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-widest uppercase">{review.name}</h4>
                  <p className="text-[10px] text-slate-400 italic font-serif">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Social Proof */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-4 px-6 py-2 bg-white border border-slate-100 rounded-full shadow-sm">
            <span className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" />
                    </div>
                ))}
            </span>
            <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                Loved by 500+ Local connoisseurs
            </p>
        </div>
      </div>
    </section>
  );
};