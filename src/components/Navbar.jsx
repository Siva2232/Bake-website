import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = ['Home', 'About', 'Products', 'Contact'];

  return (
    <>
      <nav 
        className={`fixed w-full z-[60] transition-all duration-500 ${
          isScrolled || isOpen
            ? 'bg-white/90 backdrop-blur-lg py-4 shadow-sm' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="relative z-[70] group cursor-pointer">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
              Sweet<span className="text-pink-600">Crumbs</span>
            </h1>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-[11px] font-bold uppercase tracking-[0.3em] text-slate-700 hover:text-pink-600 transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side: Desktop CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <button className="hidden md:block px-8 py-2.5 bg-slate-900 text-white text-[10px] font-bold tracking-widest rounded-full hover:bg-pink-600 transition-all">
              ORDER NOW
            </button>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[70] md:hidden flex flex-col justify-between w-6 h-4 outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-white transition-all duration-700 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center p-12">
          {/* Background Decor for Mobile */}
          <div className="absolute top-20 left-10 text-[20vw] font-serif italic text-pink-50 select-none -z-10">
            Artisan
          </div>

          <ul className="flex flex-col gap-8 text-center">
            {navLinks.map((item, index) => (
              <li 
                key={item} 
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif text-slate-900 hover:text-pink-600 italic"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className={`mt-16 transition-all duration-1000 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <button className="px-12 py-4 bg-slate-900 text-white font-bold tracking-widest text-xs rounded-full">
              ORDER NOW
            </button>
            <div className="mt-8 flex justify-center gap-6 text-slate-400 font-bold text-[10px] tracking-widest">
              <span>INSTAGRAM</span>
              <span>FACEBOOK</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};