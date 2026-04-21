import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cloud, Code2, CreditCard } from 'lucide-react';

const services = [
  {
    title: 'Web and App Development',
    description: 'High-performance, responsive web applications built with modern frameworks and Cross-platform native experiences for iOS and Android',
    icon: Monitor,
    color: 'text-blue-400',
  },
  {
    title: 'SaaS Product Development',
    description: 'End-to-end scalable SaaS solutions with secure multi-tenant architectures and fast go-to-market.',
    icon: Cloud,
    color: 'text-cyan-400',
  },
  {
    title: 'Software Solutions',
    description: 'Custom enterprise software to automate workflows, manage data, and boost operational efficiency.',
    icon: Code2,
    color: 'text-indigo-400',
  },
  {
    title: 'POS Systems',
    description: 'Integrated POS and retail commerce solutions to modernize your checkout and sales experience.',
    icon: CreditCard,
    color: 'text-emerald-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Digital <span className="text-glow text-brand-accent">Excellence</span> Delivered
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            We provide specialized technology services to accelerate your digital transformation and build products users love.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
              className="glass-card p-8 group cursor-pointer"
              style={{ perspective: 1000 }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-6 overflow-hidden relative`}>
                <div className={`absolute inset-0 bg-current opacity-20 blur-xl group-hover:opacity-40 transition-opacity ${service.color}`} />
                <service.icon className={`w-7 h-7 relative z-10 ${service.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
