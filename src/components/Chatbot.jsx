import React, { useState, useRef, useEffect } from "react";
import { ChatbotToggle } from "./ChatbotToggle";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour! I'm Chef Moretti's assistant. How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: inputValue }]);
    setInputValue("");
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "I'll check our oven schedule for you. One moment..." },
      ]);
    }, 1000);
  };

  return (
    <>
      <ChatbotToggle isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* 2. The Chat Window */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        <div className={`absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10 pointer-events-none"
        }`}>
        
        {/* Header with Waving Hand Animation */}
        <div className="bg-slate-900 p-6 flex items-center gap-4">
          <div className="relative">
            {/* Hand Image / Avatar */}
            <div className="w-12 h-12 rounded-full border-2 border-pink-500 overflow-hidden bg-white">
              <img 
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=150&h=150&fit=crop" 
                alt="Chef"
                className="w-full h-full object-cover"
              />
            </div>
            {/* The Waving Hand Overlay */}
            <div className="absolute -top-1 -right-2 text-xl animate-[wave_2.5s_infinite_ease-in-out] origin-bottom">
              👋
            </div>
          </div>
          <div>
            <h4 className="text-white font-serif italic text-lg leading-none">Chef's Desk</h4>
            <span className="text-[9px] text-pink-400 uppercase tracking-[0.2em] font-bold">Online & Ready</span>
          </div>
        </div>

        {/* Messages Section */}
        <div className="h-80 overflow-y-auto p-6 bg-[#FDFCFB] space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] ${
                m.from === "user" 
                  ? "bg-pink-600 text-white rounded-br-none" 
                  : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none"
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-50">
          <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1">
            <input
              type="text"
              className="flex-1 bg-transparent border-none py-2 text-sm outline-none text-slate-800"
              placeholder="Ask about today's bakes..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="text-pink-600 hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};