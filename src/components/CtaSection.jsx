import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-24 relative z-10 w-full overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/5 -skew-y-3 transform origin-bottom-left -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="glass-card p-12 md:p-20 relative overflow-hidden"
        >
          {/* Decorative glowing blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/15 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/15 rounded-full blur-[80px]" />
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 relative z-10">
            Ready to <span className="text-glow text-brand-accent">Scale?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
            Let's build something extraordinary. Get in touch today and discover how XenonTech can accelerate your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="px-10 py-4 rounded-full bg-brand-primary text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(31,105,255,0.5)] hover:shadow-[0_0_50px_rgba(31,105,255,0.7)] border border-brand-accent/30">
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
