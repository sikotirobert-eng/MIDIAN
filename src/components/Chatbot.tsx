import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, MessageCircle, Phone, Pill, X, Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { askPharmacist } from '../lib/gemini';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'hub' | 'chat'>('hub');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Hello! I am your Midian AI pharmacist. How can I help you today? You can ask about medicine availability or location.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askPharmacist(userMsg);
    setMessages(prev => [...prev, { role: 'bot', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[400px] max-w-[90vw] h-[600px] max-h-[80vh] flex flex-col futuristic-card shadow-2xl border-emerald-100"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between border-b border-white/5 optimize-gpu">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-emerald-500 rounded-2xl flex items-center justify-center relative shadow-lg shadow-emerald-500/20">
                  <Bot size={26} className="text-white" />
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-none mb-1 text-white">Midian AI</h3>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-[0.2em] leading-none opacity-80">Online Concierge</p>
                </div>
              </div>
              <motion.button 
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/50 hover:text-white"
                aria-label="Close Chat"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100 p-2 gap-2 bg-slate-50/50 backdrop-blur-sm">
              <button 
                onClick={() => setActiveTab('hub')}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300",
                  activeTab === 'hub' ? "bg-white text-slate-900 shadow-xl shadow-slate-200/50 border border-slate-100" : "text-slate-400 hover:text-slate-600 hover:bg-white/50"
                )}
              >
                <Sparkles size={14} /> Service Hub
              </button>
              <button 
                onClick={() => setActiveTab('chat')}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300",
                  activeTab === 'chat' ? "bg-white text-emerald-600 shadow-xl shadow-emerald-100/50 border border-emerald-50" : "text-slate-400 hover:text-slate-600 hover:bg-white/50"
                )}
              >
                <MessageSquare size={14} /> AI Pharmacist
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden relative flex flex-col">
              {activeTab === 'hub' ? (
                <div className="p-8 space-y-6 overflow-y-auto">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Quick Actions</p>
                    <div className="grid gap-3">
                      <motion.a 
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://wa.me/263783755431?text=I%20need%20a%20prescription%20refill" 
                        target="_blank"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 group transition-all"
                      >
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                          <Pill size={22} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-900">WhatsApp Prescription</p>
                          <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Instant Refill Request</p>
                        </div>
                      </motion.a>
                      
                      {[
                        { icon: MessageCircle, title: "Direct Chat", sub: "Speak with Team", link: "https://wa.me/263783755431", color: "bg-slate-900" },
                        { icon: Phone, title: "Emergency Call", sub: "Immediate Assistance", link: "tel:0783755431", color: "bg-teal-600" }
                      ].map((action, i) => (
                        <motion.a 
                          key={i}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          href={action.link}
                          target={action.link.startsWith('http') ? "_blank" : undefined}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all shadow-sm"
                        >
                          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", action.color)}>
                            <action.icon size={22} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-slate-900">{action.title}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{action.sub}</p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Pharmacy Hours</p>
                    <div className="flex justify-between text-xs font-bold text-slate-600">
                      <span>Monday - Saturday</span>
                      <span className="text-slate-900">08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 mt-2">
                      <span>Sunday</span>
                      <span className="text-emerald-600">08:00 - 13:00</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
                    <div className="space-y-6">
                      <AnimatePresence mode="popLayout" initial={false}>
                        {messages.map((msg, i) => (
                          <motion.div 
                            key={`msg-${i}`}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 400, 
                              damping: 30,
                              delay: msg.role === 'bot' ? 0.3 : 0
                            }}
                            className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}
                          >
                            <div className={cn(
                              "max-w-[88%] p-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm perspective-1000 optimize-gpu",
                              msg.role === 'user' 
                                ? "bg-emerald-500 text-white rounded-br-none shadow-emerald-200/50" 
                                : "bg-white border border-slate-100 text-slate-700 rounded-bl-none shadow-slate-200/50"
                            )}>
                              {msg.content}
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                    {isLoading && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white border border-slate-100 p-4 rounded-[1.25rem] rounded-bl-none flex items-center gap-2">
                          <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="p-5 border-t border-slate-100 bg-white/80 backdrop-blur-md">
                    <div className="relative group">
                      <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask your pharmacist..."
                        className="w-full pl-6 pr-14 py-4 rounded-[1.5rem] bg-slate-50 border border-slate-100 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-50/50 transition-all text-sm font-medium placeholder:text-slate-400 shadow-inner"
                      />
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSend}
                        className="absolute right-2 top-2 p-3 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:shadow-none"
                        aria-label="Send Message"
                      >
                        <Send size={18} />
                      </motion.button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-200 flex items-center justify-center relative group"
        aria-label="Toggle Support Hub"
      >
        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-y-0.5">
          Support Hub
        </span>
      </motion.button>
    </div>
  );
};
