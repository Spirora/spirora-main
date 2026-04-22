import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Initial loading duration
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation to finish before calling onComplete
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isExiting ? 0 : 1,
        y: isExiting ? '-100%' : '0'
      }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Bar Logo */}
        <div className="flex items-end gap-2 mb-8 h-20">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '60%' }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.1
            }}
            className="w-3 bg-brand-primary/40 rounded-full"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0
            }}
            className="w-4 bg-brand-primary rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)]"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '60%' }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2
            }}
            className="w-3 bg-brand-primary/40 rounded-full"
          />
        </div>

        {/* Brand Name Text */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Spirora<span className="text-brand-accent">Innovations</span>
          </motion.h1>
        </div>

        {/* Progress Line */}
        <div className="mt-8 w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-brand-accent to-transparent"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4 text-slate-400 text-xs tracking-[0.3em] uppercase"
        >
          Transforming Ideas
        </motion.p>
      </div>

      {/* Decorative floating particles or subtle lines could go here */}
    </motion.div>
  );
}
