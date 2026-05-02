import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Shield } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200"
          >
            <Shield size={24} />
          </motion.div>
          <div>
            <h1 className="font-display font-black text-xl tracking-tight leading-none text-slate-900">MIDIAN</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 leading-none mt-1">Pharmacy</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors">Home</a>
          <a href="#portfolio" className="text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors">Portfolio</a>
          <a href="#contact" className="text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="tel:0783755431"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-bold text-sm"
          >
            <Phone size={16} />
            Call Us
          </a>
          <a 
            href="https://wa.me/263783755431"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 font-bold text-sm"
          >
            <MessageCircle size={18} />
            <span className="hidden xs:inline">WhatsApp Support</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
