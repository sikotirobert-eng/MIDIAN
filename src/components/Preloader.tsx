import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

export const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white overflow-hidden"
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-gradient-to-b from-transparent via-emerald-500 to-transparent h-20 w-full animate-scanline" />
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative mb-12"
      >
        <div className="absolute inset-0 animate-pulse-slow bg-emerald-500/20 blur-3xl" />
        <motion.div
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 border border-emerald-500/20 rounded-full"
        />
        <Shield size={80} className="relative text-emerald-400 animate-glitch" />
      </motion.div>
      
      <div className="w-64 space-y-4 text-center z-20">
        <h2 className="font-display text-xl font-bold tracking-widest text-emerald-400 uppercase animate-glitch">
          Protocol Sync
        </h2>
        <div className="h-1 w-full overflow-hidden rounded-full bg-slate-800 relative">
          <motion.div 
            className="h-full bg-emerald-500 relative z-10"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
          {/* Pulsing glow behind the progress bar */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-sm animate-pulse" />
        </div>
        <p className="font-mono text-[10px] text-slate-500 uppercase tracking-tighter opacity-70">
          <span className="inline-block animate-pulse">Byte stream active:</span> {Math.floor(progress * 1024)} KB/s
        </p>
      </div>
    </motion.div>
  );
};
