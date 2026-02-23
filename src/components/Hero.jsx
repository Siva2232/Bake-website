import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Golden Croissant",
    tag: "SIGNATURE PATISSERIE",
    description: "Flaked to perfection with 72 layers of grass-fed cultured butter.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=95&w=1920",
  },
  {
    id: 2,
    title: "Midnight Macarons",
    tag: "LIMITED COLLECTION",
    description: "Infused with Earl Grey and dark Tanzanian cocoa.",
    img: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=95&w=1920",
  },
  {
    id: 3,
    title: "Ancient Hearth",
    tag: "TRADITIONAL SOURDOUGH",
    description: "Naturally leavened for 48 hours for an unparalleled crust.",
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
    const interval = 6000;
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
    <div className="w-full px-4 md:px-24 pb-24 mt-25">
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-[2rem] bg-[#1a1a1a]">
        
        {/* IMAGES WITH KEN BURNS EFFECT */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img 
              src={slide.img} 
              alt={slide.title} 
              className={`w-full h-full object-cover transition-transform duration-[6000ms] linear ${
                index === current ? 'scale-110' : 'scale-100'
              }`}
              loading="eager"
            />
            {/* Cinematic Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}

        {/* EDITORIAL CONTENT */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-24 max-w-4xl">
          <div className="overflow-hidden">
            <span className="inline-block text-[#C5A358] text-[10px] md:text-[12px] font-bold tracking-[0.5em] uppercase mb-4 animate-in slide-in-from-bottom duration-700">
              {SLIDES[current].tag}
            </span>
          </div>
          
          <h2 className="text-6xl md:text-9xl font-serif italic text-white leading-[0.9] mb-6">
            {SLIDES[current].title.split(' ').map((word, i) => (
               <span key={i} className="block">{word}</span>
            ))}
          </h2>

          <p className="text-white/70 text-lg md:text-xl font-light max-w-md mb-10 leading-relaxed">
            {SLIDES[current].description}
          </p>

          <div className="flex items-center gap-8">
            <button className="group flex items-center gap-6 px-10 py-5 bg-[#C5A358] text-white text-[11px] font-bold tracking-[0.3em] transition-all duration-500 hover:bg-white hover:text-black rounded-full">
              EXPLORE THE COLLECTION
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        {/* REFINED NAVIGATION */}
        <div className="absolute bottom-12 right-12 z-30 flex items-center gap-4">
          <button 
            onClick={prevSlide} 
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black"
          >
            <ChevronLeft size={20} strokeWidth={1} />
          </button>
          <button 
            onClick={nextSlide} 
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black"
          >
            <ChevronRight size={20} strokeWidth={1} />
          </button>
        </div>

        {/* DISCRETE PROGRESS & COUNTER */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-40">
          <div 
            className="h-full bg-[#C5A358] transition-all duration-100 linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="absolute top-12 left-12 flex items-baseline gap-2 text-white/40 font-serif z-20">
          <span className="text-white text-2xl">0{current + 1}</span>
          <span className="text-sm">/ 0{SLIDES.length}</span>
        </div>

      </section>
    </div>
  );
};