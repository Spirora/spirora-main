import { motion } from 'framer-motion';
import { ExternalLink, GitFork } from 'lucide-react';

const projects = [
  {
    title: 'Nexus AI Dashboard',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Python', 'TensorFlow']
  },
  {
    title: 'FinTech Mobile App',
    category: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Global Supply Chain',
    category: 'Enterprise Software',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a71?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Go', 'Kubernetes']
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Featured <span className="text-glow text-brand-accent">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400"
            >
              Explore how we've helped industry leaders redefine their digital presence and operational capabilities.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex px-6 py-3 rounded-full border border-brand-accent/50 text-white font-medium hover:bg-brand-accent/10 transition-colors shrink-0"
          >
            View All Work
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative rounded-2xl overflow-hidden glass border border-white/10 cursor-pointer hover:border-brand-accent/40 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10" />
              
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Floating overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent z-10" />
              </div>

              <div className="p-6 relative z-20 -mt-12">
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-brand-dark/80 text-brand-accent rounded-full border border-brand-accent/20 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                 </div>
                 
                 <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                       <div className="p-2 bg-white/10 rounded-full hover:bg-brand-primary transition-colors">
                         <GitFork className="w-4 h-4 text-white" />
                       </div>
                       <div className="p-2 bg-white/10 rounded-full hover:bg-brand-primary transition-colors">
                         <ExternalLink className="w-4 h-4 text-white" />
                       </div>
                    </div>
                 </div>
                 
                 <p className="text-sm text-slate-400 font-medium tracking-wide">
                   {project.category}
                 </p>
              </div>
              
              {/* Glowing hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-accent/50 rounded-2xl transition-colors duration-500 z-30 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
