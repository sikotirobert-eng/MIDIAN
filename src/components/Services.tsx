import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, HeartPulse, Stethoscope, Pill, MessageCircle, Phone, Image as ImageIcon } from 'lucide-react';

const services = [
  {
    title: "Prescription Refills",
    desc: "Fast, reliable processing of your medical scripts with digital tracking.",
    icon: Pill,
    link: "https://wa.me/263783755431?text=Script%20Refill%20Request",
    type: "whatsapp"
  },
  {
    title: "Health Consultations",
    desc: "Speak with our certified professionals about your pharmacological needs.",
    icon: Stethoscope,
    link: "tel:0783755431",
    type: "call"
  },
  {
    title: "Chronic Medication",
    desc: "Long-term care plans and management for ongoing health journeys.",
    icon: HeartPulse,
    link: "https://wa.me/263783755431?text=Chronic%20Med%20Enquiry",
    type: "whatsapp"
  },
  {
    title: "Medical Supplies",
    desc: "Quality equipment and first-aid kits for homes and clinics.",
    icon: ShoppingBag,
    link: "#gallery",
    type: "anchor"
  }
];

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: '0em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="font-display text-5xl font-black text-slate-900 mb-6"
          >
            Premium Services
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-emerald-500 mx-auto rounded-full" 
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 optimize-gpu"
        >
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.link}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.96 }}
              className="futuristic-card p-10 group flex flex-col h-full bg-white border-slate-100/80 active:bg-slate-50 transition-colors"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 group-hover:shadow-xl group-hover:shadow-emerald-200 group-hover:rotate-6">
                <service.icon size={32} />
              </div>
              <h3 className="font-display font-black text-2xl text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">{service.title}</h3>
              <p className="text-base text-slate-500 font-medium mb-10 flex-grow leading-relaxed">
                {service.desc}
              </p>
              
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 group-hover:translate-x-1 transition-transform bg-emerald-50/50 w-fit px-4 py-2 rounded-xl">
                {service.type === 'whatsapp' ? (
                  <>
                    <MessageCircle size={16} className="animate-pulse" />
                    Instant WhatsApp
                  </>
                ) : service.type === 'call' ? (
                  <>
                    <Phone size={16} className="animate-pulse" />
                    Call Pharmacist
                  </>
                ) : (
                  <>
                    <ImageIcon size={16} />
                    View Stock
                    <ArrowRight size={14} />
                  </>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
