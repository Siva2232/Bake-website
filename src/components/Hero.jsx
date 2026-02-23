import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "The Golden Croissant",
    tag: "SIGNATURE",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=95&w=1920", // Increased quality param
  },
  {
    id: 2,
    title: "Midnight Macarons",
    tag: "LIMITED",
    img: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=95&w=1920",
  },
  {
    id: 3,
    title: "Ancient Hearth",
    tag: "TRADITIONAL",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=95&w=1920",
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setProgress(0);
  };

  useEffect(() => {
    const interval = 5000;
    const timer = setInterval(nextSlide, interval);
    const step = 100 / (interval / 100);

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [nextSlide, current]);

  return (
    <div className="w-full">
      <section className="relative h-[55vh] min-h-[400px] max-h-[550px] w-full overflow-hidden group rounded-2xl mt-10">
        
        {/* BACKGROUND IMAGES - FIXED CLARITY */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img 
              src={slide.img} 
              alt={slide.title} 
              className="w-full h-full object-cover" 
              loading="eager"
            />
            
            {/* VIGNETTE ONLY - NO CENTER OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </div>
        ))}

        {/* CONTENT - HIGH READABILITY WITHOUT BLUR */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <div className="overflow-hidden mb-4">
            <span className="block text-[#C5A358] text-[11px] font-black tracking-[0.6em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {SLIDES[current].tag}
            </span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-serif italic text-white mb-10 transition-all duration-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {SLIDES[current].title}
          </h2>

          <button className="group relative flex items-center gap-4 px-12 py-4 bg-white text-black text-[10px] font-bold tracking-[0.3em] overflow-hidden transition-all duration-300 hover:bg-[#C5A358] hover:text-white">
            <span className="relative z-10">DISCOVER THE CRAFT</span>
            <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* CONTROLS - REFINED DARK MODE */}
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevSlide} 
            className="p-4 border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button 
            onClick={nextSlide} 
            className="p-4 border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* GOLD PROGRESS - BOTTOM FIXED */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/10 z-40">
          <div 
            className="h-full bg-[#C5A358] shadow-[0_0_10px_#C5A358] transition-all duration-100 linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* COUNTER */}
        <div className="absolute top-10 right-10 text-white font-serif italic text-2xl z-20 drop-shadow-lg">
          0{current + 1}
        </div>

      </section>
    </div>
  );
};