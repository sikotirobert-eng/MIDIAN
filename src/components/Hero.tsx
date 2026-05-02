import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ArrowUpRight, Shield } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -z-10 rounded-l-[5rem]" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 -left-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ 
            duration: 1, 
            delay: 0.1,
            type: "spring",
            stiffness: 70,
            damping: 20
          }}
          className="optimize-gpu"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live in Mufakose
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
            Healing Hands,<br />
            <span className="text-emerald-500">Pure Medicine.</span>
          </h1>
          
          <p className="text-lg text-slate-500 max-w-lg mb-10 font-medium leading-relaxed">
            Experience the future of pharmaceutical care. We combine advanced health tech with a personal promise of recovery.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/263783755431?text=Hi!%20I'd%20like%20to%20ask%20for%20a%20prescription."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-[2rem] font-italian font-black text-3xl shadow-2xl shadow-slate-300 hover:bg-slate-800 transition-all overflow-hidden"
            >
              <span className="relative z-10">Ask for Prescription</span>
              <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a 
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-[2rem] border-2 border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-all"
            >
              Our Services
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-sm font-bold text-slate-900">35+ Google Reviews <span className="text-slate-400 font-medium">(5.0/5.0)</span></p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: "spring",
            stiffness: 50,
            damping: 15
          }}
          className="relative optimize-gpu"
        >
          <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] -z-10 rounded-full animate-pulse-slow" />
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200" 
              alt="Midian Pharmacy Modern Facility"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">Certified Quality</h3>
                  <p className="text-xs text-slate-500 font-medium">All medications are 100% verified</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 border-emerald-100"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-black uppercase tracking-widest text-slate-700">Now Open</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
