import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, ExternalLink, Edit3, Star } from 'lucide-react';

const medications = [
  { url: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800", title: "Laboratory Grade", tag: "Certified" },
  { url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800", title: "Essential Meds", tag: "In Stock" },
  { url: "https://images.unsplash.com/photo-1631549916768-4119b295f78b?auto=format&fit=crop&q=80&w=800", title: "Medical Supplies", tag: "Quality" },
  { url: "https://images.unsplash.com/photo-1505751172107-573225a9627e?auto=format&fit=crop&q=80&w=800", title: "Professional Tools", tag: "Advanced" }
];

export const MedicationGallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotate: 2 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-5xl font-black text-slate-900 mb-6">Our Portfolio</h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Explore our range of high-quality health solutions and medicinal products. 
              Each item in our portfolio represents our commitment to pharmaceutical excellence.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="flex gap-4"
          >
            <a 
              href="https://www.google.com/maps/place/Midian+Pharmacy/@-17.8549309,30.9328221,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-bold shadow-sm hover:bg-slate-100 transition-all"
            >
              <ExternalLink size={16} />
              Visit Google Page
            </a>
            <a 
              href="https://www.google.com/maps/search/Midian+Pharmacy+Harare+Suggest+Edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white text-sm font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all"
            >
              <Edit3 size={16} />
              Suggest an Edit
            </a>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 optimize-gpu"
        >
          {medications.map((med, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative h-96 rounded-[2.5rem] overflow-hidden shadow-lg"
            >
              <img 
                src={med.url} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={med.title} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-x-8 bottom-8">
                <div className="bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full w-fit text-[10px] font-black uppercase tracking-widest text-white mb-3">
                  {med.tag}
                </div>
                <h3 className="font-display font-bold text-xl text-white">{med.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 glass py-10 px-8 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 border-emerald-100"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0">
              <ImageIcon size={32} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900">Need specific photos?</h4>
              <p className="text-slate-500 text-sm font-medium">Ask our team for direct photos of any available stock via WhatsApp.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/263783755431?text=Hi!%20I'd%20like%20to%20see%20photos%20of%20available%20medical%20supplies."
            className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all flex items-center gap-2 shadow-lg shadow-emerald-100"
          >
            Request Photos
            <Star size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
