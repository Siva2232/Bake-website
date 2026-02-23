import React from 'react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#FDFCFB] overflow-hidden flex items-center">
      
      {/* 1. Large Background Typography - Subtle Fade & Scale In */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none animate-[fade-in-scale_2s_ease-out]">
        <h1 className="text-[20vw] font-serif italic text-pink-50/40 leading-none">
          Artisan
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7">
          {/* Tagline Reveal */}
          <div className="flex items-center gap-3 mb-6 animate-[slide-right_1s_ease-out_forwards]">
            <div className="h-[1px] w-12 bg-pink-300"></div>
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-pink-500">
              Est. 2024 • Paris & London
            </span>
          </div>

          {/* Main Heading with Masked Reveal (The "Text-Up" Effect) */}
          <h2 className="text-7xl md:text-9xl font-serif text-slate-900 leading-[0.9] mb-8 tracking-tight overflow-hidden">
            <span className="block animate-[slide-up_1.2s_ease-out_0.2s_both]">The Art of</span>
            <span className="block italic text-pink-600 font-light animate-[slide-up_1.2s_ease-out_0.4s_both]">Fine Crumb</span>
          </h2>

          {/* Description Fade Up */}
          <p className="text-lg md:text-xl text-slate-500 max-w-lg mb-12 font-light leading-relaxed border-l-2 border-pink-100 pl-6 animate-[fade-in-up_1s_ease-out_0.8s_both]">
            We don't just bake; we curate moments. Discover our seasonal collection of 
            hand-painted macarons and 72-hour fermented sourdough.
          </p>

          {/* Buttons Fade Up */}
          <div className="flex flex-wrap items-center gap-8 animate-[fade-in-up_1s_ease-out_1s_both]">
            <button className="relative group px-12 py-5 bg-slate-900 rounded-sm overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95">
              <span className="relative z-10 text-white font-bold tracking-widest text-xs">
                SHOP THE COLLECTION
              </span>
              <div className="absolute inset-0 bg-pink-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </button>

            <a href="#about" className="group flex flex-col pt-2">
              <span className="text-xs font-bold tracking-widest text-slate-900">OUR STORY</span>
              <div className="h-[2px] w-full bg-slate-200 mt-1 overflow-hidden">
                <div className="h-full w-full bg-pink-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase - Reveal with Clip-Path or Scale */}
        <div className="lg:col-span-5 relative flex justify-end animate-[fade-in-scale_1.5s_ease-out_0.5s_both]">
          <div className="relative w-full aspect-[4/5] bg-pink-50 rounded-t-[200px] border-[12px] border-white shadow-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1000" 
              alt="Artisan Chocolate Cake"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-60"></div>

            {/* Badge with floating animation */}
            <div className="absolute bottom-8 -left-8 bg-white p-6 shadow-xl rounded-full animate-[bounce_4s_infinite_ease-in-out] z-20">
              <div className="w-16 h-16 border-2 border-dashed border-pink-200 rounded-full flex items-center justify-center text-center leading-none">
                <span className="text-[10px] font-bold text-pink-500 uppercase tracking-tighter">
                  100%<br/>Organic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Staggered Reveal */}
      <div className="hidden xl:flex absolute left-8 bottom-12 flex-col gap-6 items-center animate-[fade-in_1s_ease-out_1.5s_both]">
        <div className="h-24 w-[1px] bg-slate-200 origin-bottom animate-[scale-y_1s_ease-out_1.5s_both]"></div>
        {['IG', 'TW', 'FB'].map((social, i) => (
          <span key={social} className="text-[10px] font-bold text-slate-400 hover:text-pink-600 cursor-pointer transition-colors vertical-text uppercase tracking-widest">
            {social}
          </span>
        ))}
      </div>
    </section>
  );
};