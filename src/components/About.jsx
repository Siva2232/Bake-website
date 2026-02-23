import React from 'react';

import { useRef, useState, useEffect } from 'react';

export const About = () => {
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

  return (
    <section
      id="about"
      ref={ref}
      className="py-40 bg-[#FAF9F6] overflow-hidden relative"
    >
      {/* 1. Background Watermark - Slow Drift Animation */}
      <div className={`absolute top-20 right-[-5%] text-[15vw] font-serif italic text-slate-200/40 select-none pointer-events-none ${inView ? 'animate-[drift_20s_linear_infinite]' : ''}`}>
        Heritage
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Visual Composition Column */}
          <div className={`lg:w-1/2 relative ${inView ? 'animate-[fade-in-right_1.5s_ease-out]' : ''}`}>
            <div className="relative w-full max-w-md aspect-[3/4] group">
              {/* Decorative Border Frame */}
              <div className="absolute -inset-4 border border-pink-100 rounded-sm translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
              
              <div className="w-full h-full overflow-hidden shadow-2xl rounded-sm bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
                  alt="The Process" 
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-[1.5s] ease-out hover:scale-110"
                />
              </div>

              {/* Floating Detail Card - Floating Keyframe */}
              <div className={`absolute -bottom-16 -right-12 md:-right-20 w-56 md:w-72 p-4 bg-white shadow-xl rounded-sm hidden sm:block ${inView ? 'animate-[float_6s_ease-in-out_infinite]' : ''}`}>
                <div className="overflow-hidden mb-4 bg-slate-100">
                    <img 
                        src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=600" 
                        alt="Organic Ingredients" 
                        className="w-full h-40 object-cover"
                    />
                </div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-pink-500 uppercase mb-1">The Foundation</p>
                <p className="text-xs font-serif italic text-slate-600">Stone-ground flour & organic vanilla.</p>
              </div>

              {/* Establishment Badge - Pulsing Glow */}
              <div className={`absolute top-10 -left-10 w-24 h-24 bg-slate-900 rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-[#FAF9F6] ${inView ? 'animate-[pulse-subtle_4s_infinite]' : ''}`}>
                <span className="text-[9px] tracking-widest opacity-60 uppercase">Est.</span>
                <span className="text-xl font-serif">2024</span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className={`lg:w-1/2 space-y-12 ${inView ? 'animate-[fade-in-up_1s_ease-out_0.6s_both]' : ''}`}>
            <header className="relative">
              {/* Animated Quote Mark */}
              <div className={`absolute -top-10 -left-6 text-7xl font-serif text-pink-100 opacity-50 select-none ${inView ? 'animate-[bounce-soft_3s_infinite]' : ''}`}>“</div>
              
              <span className={`text-[10px] font-black tracking-[0.6em] text-pink-500 uppercase block mb-6 ${inView ? 'animate-[slide-right_1s_ease-out]' : ''}`}>
                Behind the Crumb
              </span>
              
              {/* Text Reveal Animation */}
              <h2 className="text-6xl md:text-7xl font-serif text-slate-900 leading-[0.95] tracking-tighter overflow-hidden">
                <span className={`block ${inView ? 'animate-[slide-up_1.2s_ease-out_0.2s_both]' : ''}`}>Elegance in</span>
                <span className={`block italic text-pink-600 font-light pr-4 ${inView ? 'animate-[slide-up_1.2s_ease-out_0.4s_both]' : ''}`}>Simplicity.</span>
              </h2>
            </header>

            <div className="relative border-l border-slate-200 pl-8 space-y-8 animate-[fade-in-up_1s_ease-out_0.6s_both]">
              <p className="text-2xl text-slate-800 font-serif leading-relaxed italic opacity-90">
                "Baking is a conversation between the hand and the grain."
              </p>
              
              <div className="space-y-6 text-slate-500 font-light leading-loose text-lg max-w-lg">
                <p>
                  At <span className="text-slate-900 font-medium">SweetCrumbs</span>, our kitchen follows the lunar-like cycle of slow fermentation—a 72-hour ritual.
                </p>
              </div>

              {/* Signature Interaction - Drawing Effect on Hover */}
              <div className="pt-10 flex items-center group cursor-default">
                <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-pink-100 p-1 group-hover:border-pink-500 transition-colors duration-500 overflow-hidden">
                        <img 
                            src="https://i.pravatar.cc/150?u=baker" 
                            alt="Elena" 
                            className="w-full h-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-sm font-bold text-slate-900 tracking-[0.2em] uppercase">Elena Moretti</h4>
                  <p className="text-xs text-pink-500 font-serif italic">Maître Pâtissier</p>
                  
                  {/* Signature SVG with Drawing Animation */}
                  <div className="mt-2 h-8">
                    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" className="text-slate-400">
                        <path 
                          className="animate-[draw_3s_ease-in-out_infinite]"
                          d="M10 20C20 10 40 30 50 15C60 0 80 20 110 5" 
                          stroke="currentColor" 
                          strokeWidth="1" 
                          strokeLinecap="round"
                          strokeDasharray="200"
                          strokeDashoffset="200"
                        />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};