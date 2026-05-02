import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: "Robert Sikoti",
    role: "Local Customer",
    text: "Good customer service. They were very helpful and explained how to take my medication correctly.",
    stars: 5,
    date: "A few weeks ago"
  },
  {
    name: "Devis Mukanya",
    role: "Local Guide",
    text: "Very professional staff. I noticed they were discussing how to improve accessibility for wheelchair users, which shows they care about the community.",
    stars: 5,
    date: "10 months ago",
    note: "Team response: We are currently renovating our entrance to be fully inclusive."
  },
  {
    name: "Tatenda M.",
    role: "Regular Patient",
    text: "The quickest service in Mufakose. They always have the essentials in stock and the AI assistant on the site is brilliant!",
    stars: 5,
    date: "1 month ago"
  }
];

export const Reviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({ name: '', text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;
    
    // In a real app, this would hit an API
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: '', text: '' });
      setRating(5);
    }, 3000);
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
          <div>
            <h2 className="font-display text-5xl font-black text-slate-900 mb-6">Community Conversations</h2>
            <p className="text-slate-500 font-medium max-w-xl leading-relaxed">
              Serving our neighbors in Harare with transparency and heart. Read what the community says about Midian Pharmacy.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 px-8 py-6 rounded-[2.5rem] border border-slate-100 shadow-sm relative group">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
              <ShieldCheck size={18} />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-5xl font-display font-black text-slate-900 leading-none mb-1">5.0</div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none">Rating</p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-slate-200" />
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex gap-0.5 justify-center sm:justify-start">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">35+ Reviews</p>
            </div>
            <div className="sm:ml-4 flex flex-col gap-2">
              <a 
                href="https://www.google.com/maps/place/Midian+Pharmacy/@-17.8549309,30.9328221,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-900 px-5 py-2.5 rounded-2xl text-xs font-bold hover:bg-slate-100 transition-all shadow-sm group"
              >
                Review on Google
                <Star size={12} className="text-yellow-400 group-hover:scale-110 transition-transform" />
              </a>
              <button 
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-2xl text-xs font-bold hover:bg-emerald-600 transition-all shadow-md active:scale-95"
              >
                Direct Submission
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-16 overflow-hidden"
            >
              <div className="bg-slate-50 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-emerald-100 relative max-w-3xl mx-auto shadow-inner">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10"
                  >
                    <CheckCircle2 size={60} className="text-emerald-500 mb-4" />
                    <h3 className="font-display text-2xl font-black text-slate-900 mb-2">Review Transmitted!</h3>
                    <p className="text-slate-500 font-medium">Thank you for strengthening our community.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                      <div className="w-full md:w-1/2 space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Rating Score</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setRating(i)}
                              onMouseEnter={() => setHoveredRating(i)}
                              onMouseLeave={() => setHoveredRating(0)}
                              className="focus:outline-none transition-transform hover:scale-125"
                            >
                              <Star
                                size={32}
                                className={`transition-colors ${(hoveredRating || rating) >= i ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Your Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John D."
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-emerald-500 outline-none transition-all font-medium text-slate-900"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Testimonial Buffer</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                        placeholder="Sharing your experience helps others find care..."
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-emerald-500 outline-none transition-all font-medium text-slate-900 resize-none"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors shadow-xl"
                    >
                      <Send size={18} />
                      Post Review
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 optimize-gpu"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative group"
            >
              <Quote className="absolute top-10 right-10 text-emerald-100 group-hover:text-emerald-200 transition-colors" size={60} />
              <div className="relative">
                <div className="flex gap-0.5 mb-6 text-yellow-400">
                  {Array.from({ length: review.stars }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 font-medium mb-8 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 leading-none mb-1">{review.name}</h4>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.1em]">{review.role}</p>
                  </div>
                </div>
                {review.note && (
                  <div className="mt-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <p className="text-xs text-emerald-800 font-bold leading-relaxed">{review.note}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
