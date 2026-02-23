import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-serif mb-6 leading-tight">
              Join our <span className="italic text-pink-500">Privilege Club</span> for seasonal launches and secret recipes.
            </h3>
            <form className="relative max-w-md group">
              <input 
                type="email" 
                placeholder="email@luxury.com" 
                className="w-full bg-transparent border-b border-slate-700 py-4 outline-none focus:border-pink-500 transition-colors font-light text-sm"
              />
              <button className="absolute right-0 bottom-4 text-[10px] font-bold tracking-[0.3em] uppercase text-pink-500 hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-6">Explore</h4>
              <ul className="space-y-4 text-sm font-light text-slate-300">
                <li className="hover:text-pink-500 transition-colors"><a href="#products">Signature Menu</a></li>
                <li className="hover:text-pink-500 transition-colors"><a href="#about">Our Heritage</a></li>
                <li className="hover:text-pink-500 transition-colors"><a href="#">Bespoke Cakes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-light text-slate-300">
                <li className="hover:text-pink-500 transition-colors"><a href="#">Shipping Policy</a></li>
                <li className="hover:text-pink-500 transition-colors"><a href="#">Terms of Service</a></li>
                <li className="hover:text-pink-500 transition-colors"><a href="#contact">Wholesale</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-6">Follow</h4>
              <div className="flex gap-6">
                {['Instagram', 'Pinterest', 'Facebook'].map((social) => (
                  <a key={social} href="#" className="text-sm font-light hover:text-pink-500 transition-all hover:-translate-y-1 block">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Large Statement Logo */}
        <div className="border-t border-slate-800 py-12 text-center">
          <h1 className="text-[12vw] font-serif font-black text-slate-800/50 leading-none select-none tracking-tighter">
            SweetCrumbs
          </h1>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:row justify-between items-center gap-6 pt-8 border-t border-slate-800/50 text-[10px] tracking-widest text-slate-500 uppercase">
          <p>© {new Date().getFullYear()} SweetCrumbs Artisanal Bakery.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};