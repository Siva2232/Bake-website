import React, { useState, useEffect } from 'react';

const LoadingPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const cakeImages = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1535141192574-5d4897c825a0?auto=format&fit=crop&q=80&w=600"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) return 100;
        const remaining = 100 - oldProgress;
        const diff = Math.max(Math.random() * (remaining * 0.2), 1.5);
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const newIndex = Math.floor((progress / 100) * (cakeImages.length - 1));
    if (newIndex !== imageIndex) setImageIndex(newIndex);
  }, [progress, imageIndex]);

  useEffect(() => {
    if (progress === 100 && typeof onComplete === 'function') {
      const timeout = setTimeout(onComplete, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white overflow-hidden">
      
      {/* Reduced Background P */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className={`text-[30vw] font-serif font-black text-black/[0.02] transition-transform duration-[4000ms] ${progress === 100 ? 'scale-125' : 'scale-100'}`}>
          P
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Scaled Down Image Circle */}
        <div className="relative mb-8">
          <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] -rotate-90">
            <circle cx="50%" cy="50%" r="48%" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-zinc-100" />
            <circle
              cx="50%" cy="50%" r="48%" stroke="currentColor" strokeWidth="1.5" fill="transparent"
              strokeDasharray="251" 
              strokeDashoffset={251 - (251 * progress) / 100}
              strokeLinecap="round"
              className="text-black transition-all duration-700 ease-out"
            />
          </svg>

          {/* Circle Image - Grayscale Removed */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-black/5 shadow-2xl relative">
            {cakeImages.map((img, idx) => (
              <img
                key={idx} 
                src={img} 
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  imageIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="mb-2 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-tighter text-black tabular-nums">
            {Math.round(progress)}<span className="text-sm align-top mt-4 ml-0.5 opacity-30">%</span>
          </h2>
        </div>

        {/* Labels */}
        <div className="w-48 md:w-56 space-y-3">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[7px] font-black text-black tracking-[0.3em] uppercase">Status</span>
              <span className="text-[9px] font-serif italic text-zinc-400">
                {progress < 40 ? 'Sourcing...' : progress < 80 ? 'Perfecting...' : 'Curating...'}
              </span>
            </div>
            <span className="text-[8px] font-black text-black tracking-widest uppercase opacity-40 italic">© 2026</span>
          </div>
          
          <div className="h-[1px] w-full bg-zinc-100 relative overflow-hidden">
             <div 
               className="absolute left-0 top-0 h-full bg-black transition-all duration-700 ease-out"
               style={{ width: `${progress}%` }}
             />
          </div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-10 flex flex-col items-center transition-all duration-1000" style={{ opacity: progress > 95 ? 0 : 1 }}>
        <h3 className="text-[8px] font-black tracking-[0.5em] text-black uppercase">
          PURRFECTLY <span className="italic font-light text-zinc-400">Yours</span>
        </h3>
      </div>

      {/* The Reveal Overlay */}
      <div className={`fixed inset-0 bg-black transition-transform duration-[1200ms] ease-[cubic-bezier(0.87,0,0.13,1)] z-[210] ${
          progress === 100 ? 'translate-y-0' : 'translate-y-full'
      }`} />
    </div>
  );
};

export default LoadingPage;