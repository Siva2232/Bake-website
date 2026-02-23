import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white text-black pt-32 pb-12 px-6 lg:px-12 border-t border-black">
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- TOP: BRAND & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-6 space-y-10">
            <div className="flex items-center gap-4">
               <div className="h-[2px] w-12 bg-black" />
               <span className="text-[11px] font-black tracking-[0.5em] uppercase">Join The Inner Circle</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter">
              Bespoke updates <br />
              <span className="italic font-light text-zinc-400">delivered to your inbox.</span>
            </h3>
            
            <form className="relative max-w-md group overflow-hidden">
              <input 
                type="email" 
                placeholder="EMAIL@ADDRESS.COM" 
                className="w-full bg-transparent border-b-2 border-black py-6 outline-none text-sm font-bold tracking-widest placeholder:text-zinc-300"
              />
              <button className="absolute right-0 bottom-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                <ArrowUpRight size={28} strokeWidth={1.5} />
              </button>
            </form>
          </div>

          {/* --- LINKS NAVIGATION --- */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-20">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400">Sitemap</h4>
              <ul className="space-y-4 text-sm font-bold tracking-tight">
                <li className="hover:italic transition-all"><a href="#">Shop All</a></li>
                <li className="hover:italic transition-all"><a href="#">Apparel</a></li>
                <li className="hover:italic transition-all"><a href="#">The Vault</a></li>
                <li className="hover:italic transition-all"><a href="#">Heritage</a></li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400">Service</h4>
              <ul className="space-y-4 text-sm font-bold tracking-tight">
                <li className="hover:italic transition-all"><a href="#">Wholesale</a></li>
                <li className="hover:italic transition-all"><a href="#">Shipping</a></li>
                <li className="hover:italic transition-all"><a href="#">Returns</a></li>
                <li className="hover:italic transition-all"><a href="#">Care Guide</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400">Social</h4>
              <div className="flex flex-col gap-4 text-sm font-bold">
                <a href="#" className="flex items-center gap-2 hover:text-zinc-400 transition-colors">
                  <Instagram size={14} /> INSTAGRAM
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-zinc-400 transition-colors">
                  <Twitter size={14} /> TWITTER
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-zinc-400 transition-colors">
                  <Mail size={14} /> EMAIL US
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- STATEMENT LOGO (THE MONUMENT) --- */}
        <div className="py-20 border-t border-black/10 overflow-hidden">
          <h1 className="text-[18vw] font-serif font-black text-black leading-none select-none tracking-tighter text-center">
            My Bake Company
          </h1>
        </div>

        {/* --- BOTTOM: LEGAL STARKNESS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-black">
          <div className="text-[10px] font-black tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} My Bake Company.
          </div>
          
          <div className="flex gap-12 text-[10px] font-black tracking-[0.3em] uppercase">
            <a href="#" className="hover:line-through transition-all">Privacy</a>
            <a href="#" className="hover:line-through transition-all">Terms</a>
            <a href="#" className="hover:line-through transition-all">Accessibility</a>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase group"
          >
            Back to Top
            <div className="p-2 border border-black group-hover:bg-black group-hover:text-white transition-all">
              <ArrowUpRight size={14} className="-rotate-45" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};