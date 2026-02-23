import React, { useRef, useState, useEffect } from 'react';
import { ShoppingCart, ArrowRight, } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export const CATEGORIES = [
  { 
    name: "All", 
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Cakes", 
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Specialties", 
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Cupcakes", 
    img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Pastries", 
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Boulangerie", 
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" 
  }
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

  useEffect(() => {
    const handler = (e) => {
      setActiveTab(e.detail);
    };
    window.addEventListener('selectCategory', handler);
    return () => window.removeEventListener('selectCategory', handler);
  }, []);
  
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
    const message = encodeURIComponent(`Hi, I'm interested in ordering the ${productName}. Could you provide more details?`);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank');
  };

  const filtered = activeTab === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section id="products" ref={sectionRef} className="bg-white py-32 px-6 lg:px-12 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- STARK B&W HEADER --- */}
        <div className={`mb-24 transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-black" />
            <span className="text-[11px] font-black tracking-[0.5em] text-black uppercase">Established Excellence</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-black leading-none mb-4">
            The <span className="italic font-light">Curated</span> <br />
            <span className="font-bold">Collection</span>
          </h2>
        </div>

        {/* --- MINIMALIST CATEGORY CIRCLES - SWIPEABLE ON MOBILE --- */}
        <div className="flex flex-nowrap gap-8 md:gap-14 mb-24 overflow-x-auto pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory md:flex-wrap md:overflow-visible">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className="group flex flex-col items-center gap-4 flex-shrink-0 snap-center outline-none"
            >
              <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full transition-all duration-500 p-1 border ${
                activeTab === cat.name ? 'border-black' : 'border-transparent group-hover:border-black/20'
              }`}>
                <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                </div>
              </div>
              <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors whitespace-nowrap ${
                activeTab === cat.name ? 'text-black' : 'text-zinc-400 group-hover:text-black'
              }`}>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* --- PRODUCT GRID - 2 CARDS PER ROW ON MOBILE (PERFECT ALIGNMENT) --- */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 md:gap-x-12 md:gap-y-28">
          {filtered.map((product, idx) => (
            <div
              id={`product-${product.id}`}
              key={product.id}
              className={`group flex flex-col h-full transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* IMAGE AREA - FIXED ASPECT */}
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 mb-8 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
               
                {/* WHATSAPP FLOATING BUTTON */}
                <button
                  onClick={() => handleWhatsApp(product.name)}
                  className="absolute top-6 right-6 z-30 p-4 bg-white/90 backdrop-blur-md text-black rounded-full shadow-xl hover:bg-black hover:text-white transition-all duration-300 transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  title="Inquiry on WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </button>

                {/* BOTTOM OVERLAY BUTTON */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <button className="w-full py-4 bg-black text-white text-[10px] font-black tracking-[0.3em] uppercase hover:bg-zinc-800 transition-colors">
                        Add to Order — {product.price}
                    </button>
                </div>
              </div>

              {/* TEXT CONTENT - NOW PUSHES BUTTON TO BOTTOM */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-[9px] font-bold text-zinc-400 tracking-widest uppercase mb-1">{product.category}</p>
                    <h3 className="text-2xl font-serif text-black group-hover:italic transition-all duration-300 leading-tight">
                        {product.name}
                    </h3>
                  </div>
                  <div className="h-[1px] w-8 bg-black/10 mt-6 flex-shrink-0" />
                </div>

                {/* WhatsApp Button pushed to bottom */}
                <div className="mt-auto pt-8">
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="w-full flex items-center justify-center gap-3 py-3.5 border-2 border-green-600 hover:bg-green-50 hover:border-green-700 text-green-700 font-medium text-sm rounded-2xl transition-all active:scale-[0.985]"
                  >
                    <FaWhatsapp size={20} />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- STARK FOOTER --- */}
        <div className="mt-40 text-center">
            <button className="group relative px-15 py-6 bg-black text-white text-[11px] font-black tracking-[0.5em] uppercase overflow-hidden">
                <span className="relative z-10">View All Products</span>
                <div className="absolute inset-0 bg-zinc-800 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
        </div>
      </div>
    </section>
  );
};