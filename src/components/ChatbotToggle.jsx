import React, { useState, useEffect } from "react";

export const ChatbotToggle = ({ isOpen, setIsOpen }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip after a short delay to feel more natural
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-[250] flex flex-col items-end">
      
      {/* 1. CASUAL SPEECH BUBBLE */}
      {!isOpen && (
        <div className={`mb-4 mr-2 transition-all duration-700 transform origin-bottom-right ${
          showTooltip ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75"
        }`}>
          <div className="bg-white px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 relative">
            <p className="text-sm font-medium text-slate-700 whitespace-nowrap">
              Hey! Fresh batch is out... <br/> 
              <span className="text-pink-500 italic">Need a hand with anything?</span>
            </p>
            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45"></div>
          </div>
        </div>
      )}

      {/* 2. THE ARTISAN BUTTON */}
      <button
        onClick={() => {
            setIsOpen((o) => !o);
            setShowTooltip(false); // Hide tooltip when chat opens
        }}
        className="relative group outline-none"
      >
        <div className={`relative w-20 h-20 rounded-full shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform 
          ${isOpen ? "bg-slate-900 rotate-[360deg] scale-90" : "bg-white group-hover:scale-110 group-active:scale-95"}
          border-4 ${isOpen ? "border-slate-800" : "border-white"}`}
        >
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            {isOpen ? (
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <img 
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=200&h=200&fit=crop" 
                alt="Chef Artisan"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            )}
          </div>

          {/* WAVING HAND BADGE */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center animate-[wave_2.5s_infinite_ease-in-out] origin-bottom border border-pink-50 translate-x-1 -translate-y-1">
              <span className="text-lg">👋</span>
            </div>
          )}
        </div>
      </button>

      {/* KEYFRAMES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(20deg); }
          40% { transform: rotate(-10deg); }
          60% { transform: rotate(20deg); }
          80% { transform: rotate(-5deg); }
        }
      `,
        }}
      />
    </div>
  );
};