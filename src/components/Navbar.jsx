import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, X, Heart, User, Home, Instagram } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from './Products';
// whatsapp icon must be a named export, not default
import { FaWhatsapp } from 'react-icons/fa';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState(''); // for newsletter input

  const navLinks = [
    'HOME',
    'COLLECTIONS',
    ...CATEGORIES.filter(c => c.name !== 'All').map(c => c.name.toUpperCase()),
  ];

  const handleNav = (category) => {
    if (category === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const cat = category === 'COLLECTIONS' ? 'All' : category;
    const event = new CustomEvent('selectCategory', { detail: cat });
    window.dispatchEvent(event);
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: real submission logic (API call, toast, etc.)
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-700 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md py-2 sm:py-3 shadow-sm'
            : 'bg-[#fdfcfb] py-4 sm:py-6'
        }`}
      >
        {/* TOP BAR - unchanged except minor cleanup */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-5 sm:gap-7 lg:gap-8 flex-1">
            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase"
            >
              <div className="relative w-5 sm:w-6 h-4 sm:h-5 flex flex-col justify-between overflow-hidden">
                <span className={`h-[1.5px] w-full bg-black transition-transform duration-500 ${isOpen ? 'translate-x-10' : ''}`} />
                <span className="h-[1.5px] w-2/3 bg-black transition-all duration-500" />
                <span className="h-[1.5px] w-full bg-black" />
              </div>
              <span className="hidden sm:block">Menu</span>
            </button>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer group px-3 sm:px-4"
            onClick={() => handleNav('HOME')}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-3.5xl lg:text-4xl font-serif tracking-tight text-[#1a1a1a] flex flex-col items-center leading-none">
              <span className="italic font-light text-lg xs:text-xl sm:text-2xl lg:text-3xl">The</span>
              <span className="font-bold uppercase tracking-[0.08em] xs:tracking-[0.1em] mt-0.5 text-base xs:text-xl sm:text-2xl lg:text-3xl">
                Artisan Bake
              </span>
            </h1>
          </div>

          <div className="flex items-center justify-end gap-4 sm:gap-6 lg:gap-8 flex-1">
            <button
              onClick={() => setShowSearch(true)}
              className="flex md:hidden text-zinc-600 hover:text-black transition-colors"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button
              onClick={() => setShowSearch(true)}
              className="hidden md:flex items-center gap-2 text-zinc-500 hover:text-black transition-colors"
            >
              <Search size={18} strokeWidth={1.5} />
              <span className="hidden lg:inline text-[10px] font-bold tracking-[0.2em] uppercase">Search</span>
            </button>

            {/* WhatsApp desktop icon/link replaces cart */}
            <a
              href="https://wa.me/919876543210" // ← update with real number/country code
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-1.5 sm:p-2 hidden md:flex"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} strokeWidth={1.2} className="text-zinc-700 hover:text-black transition-colors" />
            </a>
          </div>
        </div>

        {/* Desktop secondary nav */}
        <div
          className={`hidden lg:block transition-all duration-500 overflow-hidden ${
            isScrolled ? 'h-0 opacity-0' : 'h-10 xl:h-12 opacity-100 mt-1 lg:mt-3'
          }`}
        >
          <div className="flex justify-center items-center gap-5 xl:gap-8 2xl:gap-10 px-4">
            {navLinks.slice(0, 7).map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className="text-[10.5px] xl:text-[11px] 2xl:text-xs font-bold tracking-[0.18em] xl:tracking-[0.22em] 2xl:tracking-[0.25em] text-zinc-600 hover:text-amber-800 transition-all relative group whitespace-nowrap"
              >
                {link}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-amber-800 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── MOBILE BOTTOM BAR ──────────────────────────────────────── */}
    <footer className="fixed bottom-0 left-0 right-0 z-[90] md:hidden bg-white/95 backdrop-blur-lg border-t border-zinc-200 shadow-lg safe-area-inset-bottom">
  <div className="mx-auto flex max-w-[1600px] items-center justify-around px-4 py-3 sm:px-6">

    {/* Home */}
    <button
      onClick={() => handleNav('HOME')}
      className="flex flex-col items-center gap-1 text-zinc-700 hover:text-amber-800 active:text-amber-900 transition-colors touch-manipulation min-w-[60px]"
      aria-label="Home"
    >
      <Home size={26} strokeWidth={1.5} />
      <span className="text-[10px] font-medium xs:text-[11px]">Home</span>
    </button>

    {/* Search */}
    <button
      onClick={() => setShowSearch(true)}
      className="flex flex-col items-center gap-1 text-zinc-700 hover:text-amber-800 active:text-amber-900 transition-colors touch-manipulation min-w-[60px]"
      aria-label="Search"
    >
      <Search size={26} strokeWidth={1.5} />
      <span className="text-[10px] font-medium xs:text-[11px]">Search</span>
    </button>

          {/* All products - scroll to products section */}
    <button
      onClick={() => handleNav('COLLECTIONS')}
      className="flex flex-col items-center gap-1 text-zinc-700 hover:text-amber-800 active:text-amber-900 transition-colors touch-manipulation min-w-[60px]"
      aria-label="All products"
    >
      <span className="text-[22px] font-bold">🍰</span>
      <span className="text-[10px] font-medium xs:text-[11px]">All Products</span>
    </button>
          
    {/* Instagram */}
    <a
      href="https://instagram.com/yourprofile" // ← change to your actual profile
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1 text-zinc-700 hover:text-amber-800 active:text-amber-900 transition-colors touch-manipulation min-w-[60px]"
      aria-label="Instagram"
    >
      <Instagram size={26} strokeWidth={1.5} />
      <span className="text-[10px] font-medium xs:text-[11px]">Instagram</span>
    </a>



  </div>
</footer>
      {/* Search overlay */}
      {showSearch && (
        <div className="fixed inset-0 z-[200] bg-white/98 flex flex-col items-center pt-20 sm:pt-32 px-5 sm:px-6 animate-in fade-in duration-500">
          <button
            onClick={() => setShowSearch(false)}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 p-3 sm:p-4 hover:rotate-90 transition-transform duration-300"
          >
            <X size={28} strokeWidth={1} />
          </button>
          <div className="w-full max-w-xl sm:max-w-2xl mt-8 sm:mt-0">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-amber-800 mb-6 sm:mb-8 text-center uppercase">
              What are you looking for?
            </p>
            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-zinc-300 py-5 sm:py-6 text-3xl sm:text-5xl md:text-6xl font-serif italic outline-none text-center placeholder:text-zinc-200"
              placeholder="Sourdough, Croissants..."
            />
          </div>
        </div>
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm transition-opacity duration-700 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-[85vw] md:w-[420px] lg:w-[450px] z-[130] bg-[#fdfcfb] transition-transform duration-[800ms] cubic-bezier(0.16,1,0.3,1) ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-6 sm:p-8 lg:p-12 flex flex-col h-full">
          <button onClick={() => setIsOpen(false)} className="self-end p-2.5 sm:p-3 border border-black/5 rounded-full">
            <X size={24} strokeWidth={1} />
          </button>

          <div className="mt-12 sm:mt-16 space-y-8 lg:space-y-10">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-zinc-400 uppercase">Navigation</p>
            <nav className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => { handleNav(item); setIsOpen(false); }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif hover:italic hover:translate-x-3 sm:hover:translate-x-4 transition-all duration-300 text-left leading-tight"
                >
                  {item.toLowerCase()}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto border-t border-zinc-100 pt-8 sm:pt-10">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 text-[10px] sm:text-[11px] font-bold tracking-widest text-zinc-400">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-black uppercase">Visit Us</p>
                <p className="leading-relaxed uppercase">
                  123 Boulangerie Ave
                  <br />
                  Paris, France
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-black uppercase">Follow</p>
                <p className="cursor-pointer hover:text-amber-800 transition-colors uppercase">Instagram</p>
                <p className="cursor-pointer hover:text-amber-800 transition-colors uppercase">Pinterest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};