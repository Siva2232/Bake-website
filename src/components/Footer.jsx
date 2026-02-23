import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] text-[#1a1a1a] pt-40 pb-12 px-6 lg:px-12 border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- TOP: BRAND & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-4">
               <div className="h-[1px] w-12 bg-[#C5A358]" />
               <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-[#C5A358]">The Inner Circle</span>
            </div>
            <h3 className="text-6xl md:text-8xl font-serif leading-[0.85] tracking-tight">
              Bespoke updates <br />
              <span className="italic font-light text-zinc-300">to your inbox.</span>
            </h3>
            
            <form className="relative max-w-xl group">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-zinc-300 py-8 outline-none text-sm font-bold tracking-[0.2em] placeholder:text-zinc-300 focus:border-[#C5A358] transition-colors"
              />
              <button className="absolute right-0 bottom-8 flex items-center gap-3 group-hover:text-[#C5A358] transition-all">
                <span className="text-[10px] font-bold tracking-widest uppercase hidden md:block">Subscribe</span>
                <ArrowUpRight size={24} strokeWidth={1} />
              </button>
            </form>
          </div>

          {/* --- LINKS NAVIGATION --- */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-16 lg:pl-20 pt-10">
            <div className="space-y-10">
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C5A358]">The Company</h4>
              <ul className="space-y-5 text-[13px] font-medium tracking-wide">
                <li><a href="#" className="hover:text-[#C5A358] transition-colors">Boutique Shop</a></li>
                <li><a href="#" className="hover:text-[#C5A358] transition-colors">Our Heritage</a></li>
                <li><a href="#" className="hover:text-[#C5A358] transition-colors">The Bakehouse</a></li>
                <li><a href="#" className="hover:text-[#C5A358] transition-colors">Artisans</a></li>
              </ul>
            </div>
            
            <div className="space-y-10">
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C5A358]">Socials</h4>
              <div className="flex flex-col gap-5 text-[13px] font-medium">
                <a href="#" className="flex items-center gap-3 hover:text-[#C5A358] transition-colors">
                  <Instagram size={16} strokeWidth={1.5} /> INSTAGRAM
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-[#C5A358] transition-colors">
                  <Twitter size={16} strokeWidth={1.5} /> TWITTER
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-[#C5A358] transition-colors">
                  <Mail size={16} strokeWidth={1.5} /> EMAIL US
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- BIG LOGO DISPLAY --- */}
        <div className="relative py-24 border-t border-zinc-200">
          <h1 className="text-[14vw] font-serif italic font-light text-[#1a1a1a] leading-none select-none tracking-tighter text-center opacity-90">
            My Bake Company
          </h1>
          {/* Subtle gold line floating over logo */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#C5A358]/10 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* --- BOTTOM: LEGAL & SCROLL --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-zinc-200">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
            © {new Date().getFullYear()} MBC. Site by <span className="text-[#1a1a1a]">Elite Design</span>
          </div>
          
          <div className="flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
            <a href="#" className="hover:text-[#C5A358] transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-[#C5A358] transition-all">Terms of Service</a>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-500">
              <ArrowUp size={18} strokeWidth={1} />
            </div>
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};