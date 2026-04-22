import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Target, title: 'Precision Engineering', text: 'Architected for scale and zero downtime.' },
  { icon: Zap, title: 'Hyper Performance', text: 'Optimized response times across the globe.' },
  { icon: ShieldCheck, title: 'Enterprise Security', text: 'Bank-grade encryption and compliance built-in.' }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] w-full rounded-3xl glass-card overflow-hidden flex items-center justify-center border border-brand-primary/20"
        >
          {/* Abstract Interface 3D Illusion */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-primary/20 z-0"/>
          
          <motion.div 
            animate={{ rotateY: 360, rotateX: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-48 h-48 border-2 border-brand-accent/30 rounded-full absolute z-10"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div 
            animate={{ rotateY: -360, rotateZ: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="w-64 h-64 border border-brand-primary/40 rounded-full absolute z-10"
            style={{ transformStyle: 'preserve-3d' }}
          />
          
          {/* Floating Glass Panels */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-20 w-48 h-32 glass bg-white/5 border-white/10 rounded-xl shadow-2xl backdrop-blur-md -ml-20 -mt-10"
          >
            <div className="p-4 space-y-2">
              <div className="h-2 w-1/2 bg-brand-accent/50 rounded-full" />
              <div className="h-2 w-5/6 bg-white/20 rounded-full" />
              <div className="h-2 w-4/6 bg-white/20 rounded-full" />
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-30 w-56 h-40 glass bg-brand-primary/10 border-brand-primary/30 rounded-xl shadow-[0_0_30px_rgba(79,70,229,0.2)] backdrop-blur-lg ml-10 mt-20 flex flex-col justify-end p-4"
          >
               <div className="h-8 w-8 rounded-full bg-brand-accent mb-2 shadow-[0_0_15px_#06b6d4]" />
               <div className="h-2 w-full bg-white/20 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Text Content Side */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Engineering the <span className="text-glow text-brand-accent">Edge</span> of Innovation
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-4">
              <span className="text-glow text-brand-accent font-bold">Spirora</span> is not just an agency; we are your strategic technical partner. 
              We blend futuristic design with robust, scalable architectures to build software 
              that leads the market.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Our team delivers measurable results through tight collaboration, transparent roadmaps, and high-velocity product launches that scale to enterprise demands.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-brand-primary/15 text-brand-primary border border-brand-primary/30">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-slate-400 text-sm">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
