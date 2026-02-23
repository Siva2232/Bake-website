import React, { useRef, useState, useEffect } from 'react';
import { ShoppingCart, ArrowRight, Plus } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

// Constants already provided in your snippet
export const CATEGORIES = [
  { name: "All", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400" },
  { name: "Cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" },
  { name: "Specialties", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { name: "Cupcakes", img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=400" },
  { name: "Pastries", img: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=80&w=400" },
  { name: "Boulangerie", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400" }
];

export const PRODUCTS = [
  { id: 1, name: "Noir Chocolate Ganache", category: "Cakes", price: "₹499", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=90&w=800" },
  { id: 2, name: "Wild Strawberry Chantilly", category: "Specialties", price: "₹599", image: "https://images.unsplash.com/photo-1464347744102-11db6282f854?q=90&w=800" },
  { id: 3, name: "Madagascar Vanilla Bean", category: "Cupcakes", price: "₹299", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=90&w=800" },
  { id: 4, name: "Pistachio Rose Macarons", category: "Pastries", price: "₹199", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=90&w=800" },
  { id: 5, name: "Golden Honey Croissants", category: "Boulangerie", price: "₹149", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=90&w=800" },
  { id: 6, name: "Velvet Red Raspberry", category: "Cakes", price: "₹549", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=90&w=800" },
];

export const Products = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = (productName) => {
    const message = encodeURIComponent(`Bonjour! I would like to inquire about the ${productName}.`);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank');
  };

  const filtered = activeTab === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section id="products" ref={sectionRef} className="bg-[#FAF9F6] py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- LUXURY HEADER --- */}
        <div className={`mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl">
            <span className="text-[#C5A358] text-[11px] font-bold tracking-[0.5em] uppercase mb-6 block">Our Craft</span>
            <h2 className="text-6xl md:text-8xl font-serif text-[#1a1a1a] leading-[0.85]">
              The <span className="italic font-light">Fine</span> <br /> 
              <span className="ml-0 md:ml-20">Patisserie</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-zinc-500 font-light max-w-xs md:ml-auto leading-relaxed">
              Every creation is a balance of seasonal ingredients and time-honored techniques.
            </p>
          </div>
        </div>

        {/* --- PREMIUM CATEGORY FILTER --- */}
        <div className="flex gap-4 md:gap-8 mb-24 overflow-x-auto pb-6 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className="flex-shrink-0 group"
            >
              <div className={`px-8 py-3 rounded-full border transition-all duration-500 flex items-center gap-3 ${
                activeTab === cat.name ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white' : 'bg-transparent border-zinc-200 text-zinc-500 hover:border-[#1a1a1a]'
              }`}>
                <span className="text-[10px] font-bold tracking-widest uppercase">{cat.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* --- PRODUCT GRID --- */}
        {/* two columns even on smallest devices */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 lg:gap-x-10 gap-y-24">
          {filtered.map((product, idx) => (
            <div
              key={product.id}
              className={`group flex flex-col h-full justify-between transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-zinc-200 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                
                {/* FLOATING ACTION */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                   <button 
                    onClick={() => handleWhatsApp(product.name)}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] shadow-2xl hover:bg-[#C5A358] hover:text-white transition-colors"
                   >
                     <FaWhatsapp size={20} strokeWidth={1.5} />
                   </button>
                </div>

                {/* OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* PRODUCT INFO */}
              <div className="space-y-3 flex flex-col flex-grow justify-between">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A358] uppercase">
                    {product.category}
                  </span>
                  <span className="text-sm font-light text-zinc-400 font-mono italic">
                    {product.price}
                  </span>
                </div>
                
                <h3 className="text-3xl font-serif text-[#1a1a1a] group-hover:text-[#C5A358] transition-colors duration-300">
                  {product.name}
                </h3>
                
                <button 
                  onClick={() => handleWhatsApp(product.name)}
                  className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-zinc-400 group-hover:text-[#1a1a1a] transition-all pt-4"
                >
                  <FaWhatsapp size={14} className="text-green-600" />
                  Request Bespoke Order
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- LUXURY FOOTER BUTTON --- */}
        <div className="mt-40 border-t border-zinc-200 pt-20 text-center">
            <button className="group relative overflow-hidden">
                <span className="text-6xl md:text-9xl font-serif italic text-zinc-200 group-hover:text-[#1a1a1a] transition-colors duration-700">
                  View Full Menu
                </span>
                <div className="h-1 w-0 bg-[#C5A358] mx-auto group-hover:w-full transition-all duration-700" />
            </button>
        </div>
      </div>
    </section>
  );
};