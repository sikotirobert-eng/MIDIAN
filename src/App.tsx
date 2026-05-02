import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { MapPin, Navigation, Clock, Shield, ArrowRight } from 'lucide-react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { MedicationGallery } from './components/MedicationGallery';
import { Contact } from './components/Contact';
import { Reviews } from './components/Reviews';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-500/30 font-body">
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000 block'}>
        <Navbar />
        <main>
          <Hero />
          
          <Services />

          {/* About Section - Heartwarming & Futuristic */}
          <section id="about" className="py-32 relative overflow-hidden bg-slate-900 text-white">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 -z-0" />
            
            {/* Background Wave Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-[200%] h-64 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] animate-wave wave-bg" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="mb-12 flex items-center gap-4">
                <div className="h-px w-12 bg-emerald-500/50" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-400 animate-glitch">
                  System Status: Protocol Sync Active
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 80,
                    damping: 15
                  }}
                >
                  <h2 className="font-display text-5xl font-black mb-8 leading-tight">
                    Beyond the Counter:<br />
                    <span className="text-emerald-400 italic underline decoration-emerald-500/30 underline-offset-8">Our Heart, Our Promise.</span>
                  </h2>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed mb-8">
                    At Midian Pharmacy, we believe medicine is more than just chemistry—it's a commitment to your wellbeing. 
                    From the streets of Mufakose to our laboratory-grade stores, our team provides "Healing Hands, Pure Medicine" to every neighbor who walks through our doors.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1 uppercase tracking-wider text-emerald-400">Rapid Response</h4>
                        <p className="text-xs text-slate-400 font-medium">Wait times reduced by 40% through digital queueing.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                        <Shield size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1 uppercase tracking-wider text-emerald-400">Pure Protocol</h4>
                        <p className="text-xs text-slate-400 font-medium">Double-verified dispensing to ensure absolute safety.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Futuristic Location Hub */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5, filter: 'blur(20px)' }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1,
                    type: "spring",
                    stiffness: 60,
                    damping: 12,
                    delay: 0.2
                  }}
                  className="relative"
                >
                  <div className="futuristic-card bg-slate-800 border-slate-700 p-1 rounded-[4rem] group overflow-hidden">
                    <div className="relative h-80 rounded-[3rem] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=1200" 
                        alt="Midian Pharmacy Sign"
                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-900/40" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                        <motion.div 
                          initial={{ y: 0 }}
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center mb-6 relative shadow-2xl shadow-emerald-500/50 rotate-12"
                        >
                          <div className="absolute inset-0 bg-emerald-500 rounded-[2rem] animate-ping opacity-20" />
                          <MapPin size={40} className="-rotate-12" />
                        </motion.div>
                        <h3 className="font-display font-black text-3xl mb-4 tracking-tight">Visit Our Store</h3>
                        <p className="text-sm font-medium text-slate-300 max-w-xs mb-8">
                          Located at 9510, Mufakose OK Shopping Centre, Harare.
                        </p>
                        <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <img 
                            src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=200" 
                            alt="Sign"
                            className="w-20 h-20 rounded-full object-cover border-4 border-emerald-500 shadow-lg"
                          />
                        </div>
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=Midian+Pharmacy+Mufakose+Harare"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 rounded-2xl bg-emerald-500 text-slate-900 font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
                        >
                          <Navigation size={18} />
                          Navigate Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <MedicationGallery />

          <Reviews />

          <Contact />
        </main>

        <footer className="bg-white py-12 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                <Shield size={18} />
              </div>
              <p className="font-display font-bold text-slate-900">Midian Pharmacy</p>
            </div>
            
            <p className="text-xs text-slate-400 font-medium">
              &copy; 2026 Midian Pharmacy Health Systems. All rights reserved. 
              <span className="mx-2">|</span>
              Healing Hands, Pure Medicine.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors">Privacy</a>
              <a href="#" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors">Terms</a>
            </div>
          </div>
        </footer>

        <Chatbot />
      </div>
    </div>
  );
}
