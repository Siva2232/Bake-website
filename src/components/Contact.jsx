import React, { useState, useRef, useState as useStateHook, useEffect } from 'react';

export const Contact = () => {
  const [isFocused, setIsFocused] = useState("");
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
      id="contact"
      ref={ref}
      className="py-40 bg-white px-6 overflow-hidden relative"
    >
      {/* Decorative background element */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Left Side: Animated Narrative */}
          <div className={`lg:col-span-5 ${inView ? 'animate-[fade-in-up_1s_ease-out]' : ''}`}>
            <span className="text-[10px] font-black tracking-[0.6em] text-pink-500 uppercase block mb-6">
              Connect
            </span>
            <h2 className="text-6xl md:text-7xl font-serif text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Let’s bake <br />
              <span className="italic text-pink-600 font-light pr-4">Something New.</span>
            </h2>
            
            <p className="text-slate-500 font-light text-lg leading-relaxed mb-16 max-w-sm">
              Our atelier is open for custom collaborations, from boutique weddings to private events.
            </p>

            <div className="space-y-12">
              {[
                { label: "Our Atelier", content: "124 Baker’s Lane, Mumbai", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" },
                { label: "Direct Line", content: "hello@sweetcrumbs.com", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group cursor-default" style={{ animationDelay: `${0.2 * i}s` }}>
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-full text-pink-500 transition-all duration-500 group-hover:bg-pink-600 group-hover:text-white group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-2">{item.label}</h4>
                    <p className="text-lg font-serif text-slate-800 italic transition-colors group-hover:text-pink-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Animated Minimalist Form */}
          <div className="lg:col-span-7 relative">
            <div className={`${inView ? 'bg-white p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] rounded-sm border border-slate-50 animate-[fade-in-scale_1.2s_ease-out]' : ''}`}> 
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <input
                      type="text"
                      onFocus={() => setIsFocused("name")}
                      onBlur={() => setIsFocused("")}
                      className="peer w-full bg-transparent border-b-2 border-slate-100 py-4 focus:border-pink-500 outline-none transition-all text-slate-900 font-light"
                      placeholder=" "
                    />
                    <label className={`absolute left-0 top-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase transition-all duration-300 pointer-events-none ${isFocused === "name" ? "-translate-y-8 text-pink-500" : ""}`}>
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      onFocus={() => setIsFocused("email")}
                      onBlur={() => setIsFocused("")}
                      className="peer w-full bg-transparent border-b-2 border-slate-100 py-4 focus:border-pink-500 outline-none transition-all text-slate-900 font-light"
                      placeholder=" "
                    />
                    <label className={`absolute left-0 top-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase transition-all duration-300 pointer-events-none ${isFocused === "email" ? "-translate-y-8 text-pink-500" : ""}`}>
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    rows="3"
                    onFocus={() => setIsFocused("message")}
                    onBlur={() => setIsFocused("")}
                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-4 focus:border-pink-500 outline-none transition-all text-slate-900 font-light resize-none"
                    placeholder=" "
                  ></textarea>
                  <label className={`absolute left-0 top-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase transition-all duration-300 pointer-events-none ${isFocused === "message" ? "-translate-y-8 text-pink-500" : ""}`}>
                    How can we help?
                  </label>
                </div>

                <button className="group relative w-full py-6 bg-slate-900 overflow-hidden rounded-sm transition-transform active:scale-[0.98]">
                  <div className="relative z-10 flex items-center justify-center gap-4 text-white font-bold tracking-[0.4em] text-[10px] uppercase">
                    Submit Inquiry
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                </button>
              </form>
            </div>
            
            {/* Artistic Floating Element */}
            {/* <div className="absolute -top-10 -right-10 w-32 h-32 border border-pink-100 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] pointer-events-none">
              <span className="text-[8px] font-bold tracking-widest text-pink-200 uppercase">Artisan • Pure • Quality •</span>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};