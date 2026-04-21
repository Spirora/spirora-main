import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "XenonTech completely redefined our cloud infrastructure. We've seen a 300% increase in performance and zero downtime since launch.",
    author: "Sarah Jenkins",
    role: "CTO, FinEdge",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Their team doesn't just write code, they understand business context. The mobile app they built is stunning and our user retention sky-rocketed.",
    author: "Marcus Alvez",
    role: "Founder, VibeStream",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Working with them feels like having an elite engineering team down the hall. Unparalleled quality and communication.",
    author: "Elena Rossi",
    role: "VP Engineering, Logis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Client <span className="text-brand-purple">Stories</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-brand-primary" />
                <div>
                  <h4 className="text-white font-bold">{t.author}</h4>
                  <p className="text-brand-accent text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
