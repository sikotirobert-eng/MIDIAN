import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Let's Start a<br />
              <span className="text-emerald-500">Heal Conversation.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl mx-auto">
              Whether it's a prescription query, health advice, or business partnership, our team is ready to respond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            {Object.entries([
              { icon: Phone, title: "Phone Support", info: "+263 (024) 221...", sub: "Mon-Sat, 8am - 8pm", link: "tel:+26324221122" },
              { icon: MapPin, title: "Physical Hub", info: "9510, Mufakose OK Centre", sub: "Harare, Zimbabwe", link: "https://www.google.com/maps" }
            ]).map(([idxStr, item]) => {
              const idx = parseInt(idxStr);
              return (
                <motion.a 
                  key={idx}
                  href={item.link}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.1 + idx * 0.1,
                    type: "spring",
                    stiffness: 80,
                    damping: 12
                  }}
                  className="flex flex-col items-center p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 mb-6 md:mb-8">
                    <item.icon size={28} className="md:w-8 md:h-8" />
                  </div>
                  <h4 className="font-bold text-slate-400 uppercase tracking-widest text-[10px] md:text-xs mb-2 md:mb-3">{item.title}</h4>
                  <p className="font-display font-bold text-xl md:text-2xl text-slate-900 group-hover:text-emerald-600 transition-colors mb-1 md:mb-2 text-center">{item.info}</p>
                  <p className="text-xs md:text-sm text-slate-400 font-medium text-center">{item.sub}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
