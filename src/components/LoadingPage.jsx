import React, { useState, useEffect } from 'react';

/**
 * A full‑screen loading animation that simulates a progress bar and
 * a few decorative SVG elements.  The parent can optionally pass an
 * `onComplete` callback which will be invoked once the progress hits
 * 100%.  Typical usage is to render this at the start of the app and
 * hide it afterwards.
 */
const LoadingPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  // Simulate a high-end smooth progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) return 100;
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // notify parent when we're finished
  useEffect(() => {
    if (progress === 100 && typeof onComplete === 'function') {
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFCFB]">
      {/* Background Brand Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[30vw] font-serif italic">S</h1>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Animated Whisk/Mixer SVG */}
        <div className="relative mb-12">
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            className="text-pink-600 animate-[spin_3s_linear_infinite]"
          >
            <path 
              fill="currentColor" 
              d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" 
              className="opacity-20"
            />
            <path 
              fill="currentColor" 
              d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22V20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4V2Z" 
            />
          </svg>
          {/* Subtle heartbeat pulse in center */}
          <div className="absolute inset-0 m-auto w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
        </div>

        {/* Text Reveal Logic */}
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.5em] text-slate-900 uppercase overflow-hidden">
            <span className="block animate-[translate-y_2s_ease-in-out_infinite]">
              Perfecting the <span className="italic font-serif font-light lowercase tracking-normal">rise</span>
            </span>
          </h2>
          
          {/* Minimalist Progress Bar */}
          <div className="w-48 h-[1px] bg-slate-100 relative overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-pink-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-[10px] font-bold text-slate-300 tracking-[0.2em] uppercase">
            {Math.round(progress)}%
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-12 flex items-center gap-3">
        <div className="h-px w-8 bg-slate-200"></div>
        <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">SweetCrumbs Atelier</p>
        <div className="h-px w-8 bg-slate-200"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
