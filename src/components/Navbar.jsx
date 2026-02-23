import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Search, Menu, X, Heart, User, ArrowRight } from 'lucide-react';
import { debounce } from '../utils/helper';
import { PRODUCTS, CATEGORIES } from './Products';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [hoverCategory, setHoverCategory] = useState('');

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const navLinks = [
    'HOME',
    'SHOP ALL',
    ...CATEGORIES.filter(c => c.name !== 'All').map(c => c.name),
  ];

  const handleNav = (category) => {
    if (category === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const cat = category === 'SHOP ALL' ? 'All' : category;
    const event = new CustomEvent('selectCategory', { detail: cat });
    window.dispatchEvent(event);
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProductClick = (product) => {
    setHoverCategory('');
    const el = document.getElementById(`product-${product.id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const dropdownItems = hoverCategory && hoverCategory !== 'HOME'
    ? (hoverCategory === 'SHOP ALL' ? PRODUCTS : PRODUCTS.filter(p => p.category === hoverCategory))
    : [];

  const runSearch = (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    const lower = query.toLowerCase();
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(lower));
    setSuggestions(matches.slice(0, 5));
  };
  const debouncedSearch = useRef(debounce(runSearch, 250)).current;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
        setSuggestions([]);
        setSearchQuery('');
      }
    };

    if (showSearch) {
      document.addEventListener('mousedown', handleOutsideClick);
      setTimeout(() => inputRef.current?.focus(), 50);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [showSearch]);

  return (
    <>
      <nav 
        className={`fixed w-full z-[100] transition-all duration-500 bg-white border-b border-transparent ${
          isScrolled 
            ? 'py-0 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-black/5' 
            : 'py-3'
        }`}
      >
        {/* UPPER TIER - Fully Responsive */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 flex items-center h-14 md:h-16 lg:h-20">
          {/* LEFT: Logo + Mobile Menu */}
          <div className="flex items-center flex-1 gap-3 sm:gap-4">
            <button 
              onClick={() => setIsOpen(true)} 
              className="md:hidden p-2 -ml-1 sm:-ml-2 text-black hover:bg-black/5 rounded-full transition-colors"
            >
              <Menu size={22} strokeWidth={1.8} />
            </button>

            <div className="flex-shrink-0 flex flex-col items-start cursor-pointer group">
              <h1 className="text-2xl sm:text-3xl md:text-[34px] font-serif tracking-[-1.5px] text-black leading-none flex items-baseline gap-1">
                <span className="font-black">My Bake</span>
                <span className="font-light text-zinc-400 group-hover:text-rose-400 transition-colors duration-500">Company</span>
              </h1>
              <div className="h-px w-0 group-hover:w-11 bg-gradient-to-r from-black to-rose-400 transition-all duration-700 mt-1" />
            </div>
          </div>

          {/* CENTER: Search Bar - Mobile Friendly */}
          <div className="flex justify-center flex-1">
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => {
                  setShowSearch(!showSearch);
                  setSearchQuery('');
                  setSuggestions([]);
                }}
                className="group flex items-center gap-2 sm:gap-3 px-4 py-2.5 md:px-6 md:py-3 rounded-full border border-zinc-200 hover:border-zinc-400 hover:shadow-sm bg-white transition-all active:scale-[0.985]"
              >
                <Search size={19} strokeWidth={2} className="text-zinc-500 group-hover:text-black transition-colors" />
                <span className="text-sm font-medium text-zinc-500 group-hover:text-black hidden md:block">Search the collection</span>
              </button>

              {showSearch && (
                <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[92vw] max-w-[420px] bg-white border border-zinc-100 shadow-2xl shadow-black/10 rounded-3xl overflow-hidden z-[999]">
                  {/* Input Area */}
                  <div className="relative border-b border-zinc-100">
                    <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        debouncedSearch(e.target.value);
                      }}
                      placeholder="FIND A PIECE..."
                      className="w-full pl-14 pr-6 py-5 text-base outline-none placeholder:text-zinc-400 bg-transparent"
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') setShowSearch(false);
                      }}
                    />
                  </div>

                  {/* Results Area */}
                  <div className="max-h-[360px] overflow-y-auto custom-scrollbar">
                    {suggestions.length > 0 ? (
                      <div className="py-1">
                        {suggestions.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => {
                              setSearchQuery(item.name);
                              setShowSearch(false);
                              setSuggestions([]);
                            }}
                            className="group flex items-center gap-5 px-6 py-4 hover:bg-zinc-50 active:bg-zinc-100 transition-all cursor-pointer border-b border-zinc-100 last:border-none"
                          >
                            <div className="relative w-12 h-12 overflow-hidden rounded-2xl border border-transparent group-hover:border-zinc-200 transition-all">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">{item.name}</p>
                              <p className="text-xs text-zinc-400 font-serif italic mt-0.5">{item.category}</p>
                            </div>

                            <div className="text-right">
                              <p className="font-bold text-sm text-rose-600 tabular-nums">{item.price}</p>
                            </div>

                            <ArrowRight 
                              size={18} 
                              className="text-zinc-300 group-hover:text-black transition-all" 
                            />
                          </div>
                        ))}
                      </div>
                    ) : searchQuery.length > 0 ? (
                      <div className="px-8 py-20 text-center">
                        <div className="mx-auto w-11 h-11 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
                          <Search size={22} className="text-zinc-400" />
                        </div>
                        <p className="text-sm font-medium text-zinc-400">No matches found</p>
                        <p className="text-xs text-zinc-300 mt-1">Try broadening your search</p>
                      </div>
                    ) : (
                      <div className="p-8">
                        <div className="text-[9px] font-black tracking-[0.125em] text-zinc-400 mb-4">QUICK LINKS</div>
                        <div className="flex flex-wrap gap-2">
                          {['New Arrivals', 'Best Sellers', 'Sale', 'Limited Editions'].map(link => (
                            <button 
                              key={link} 
                              className="text-xs font-medium border border-zinc-200 hover:border-black hover:text-black px-4 py-2 rounded-full transition-all active:scale-[0.985]"
                            >
                              {link}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Explore Button - Mobile Optimized */}
          <div className="flex items-center justify-end flex-1">
            <button
              onClick={() => handleNav('SHOP ALL')}
              className="px-5 py-2.5 md:px-8 md:py-3 bg-black hover:bg-zinc-900 text-white text-[10px] md:text-xs font-black tracking-[0.125em] rounded-2xl transition-all active:scale-[0.985]"
            >
              EXPLORE
            </button>
          </div>
        </div>

        {/* LOWER TIER - Desktop Only (unchanged) */}
        <div className="hidden md:block border-t border-black/5 bg-white/80 backdrop-blur-md">
          <div className="max-w-[1440px] mx-auto">
            <ul className="flex items-center justify-center gap-x-12 h-14">
              {navLinks.map((item) => (
                <li key={item} className="h-full">
                  <button
                    onClick={() => handleNav(item)}
                    onMouseEnter={() => setHoverCategory(item)}
                    onMouseLeave={() => setHoverCategory('')}
                    className="relative h-full flex items-center text-xs font-black tracking-[0.125em] text-zinc-500 hover:text-black transition-colors px-2 group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-black group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {dropdownItems.length > 0 && (
            <div
              onMouseEnter={() => setHoverCategory(hoverCategory)}
              onMouseLeave={() => setHoverCategory('')}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-black/5 z-40 py-8"
            >
              <div className="max-w-[1440px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {dropdownItems.slice(0, 8).map(p => (
                    <button
                      key={p.id}
                      onClick={() => handleProductClick(p)}
                      className="group flex gap-5 items-start text-left hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-2xl border border-transparent group-hover:border-zinc-200">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm leading-tight group-hover:text-black">{p.name}</p>
                        <p className="text-xs text-zinc-400 mt-1 tabular-nums">{p.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* MOBILE DRAWER - Unchanged (already perfect) */}
      <div 
        className={`fixed inset-0 z-[110] bg-black/60 backdrop-blur-xl transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div className={`fixed top-0 left-0 h-full w-[88%] max-w-[380px] z-[120] bg-white shadow-2xl transition-transform duration-500 ease-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <div className="flex flex-col">
              <h1 className="text-3xl font-serif tracking-tight">My Bake</h1>
              <span className="text-xs text-zinc-400 -mt-1">Company</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all"
            >
              <X size={22} strokeWidth={1.8} />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-9">
              {navLinks.map((item, i) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      handleNav(item);
                      setIsOpen(false);
                    }}
                    className="text-4xl font-serif italic tracking-tighter flex items-baseline gap-6 group w-full text-left"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <span className="text-xs font-mono text-zinc-300 tabular-nums">0{i+1}</span>
                    <span className="group-hover:translate-x-6 transition-transform duration-300">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-12 border-t border-zinc-100 space-y-6 text-sm">
            <div>
              <div className="text-xs font-black tracking-widest text-zinc-400 mb-3">SUPPORT</div>
              <p className="font-medium cursor-pointer hover:underline">Contact Us</p>
              <p className="font-medium cursor-pointer hover:underline">Order Tracking</p>
              <p className="font-medium cursor-pointer hover:underline">Returns</p>
            </div>
            
            <div className="flex gap-6 text-zinc-400 pt-4">
              <ShoppingCart size={22} />
              <Heart size={22} />
              <User size={22} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};