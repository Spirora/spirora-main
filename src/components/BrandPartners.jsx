import { motion } from 'framer-motion';

const partners = [
  { name: 'Nova Labs', focus: 'AI-driven SaaS platforms' },
  { name: 'Orion Analytics', focus: 'Data intelligence at scale' },
  { name: 'Helix Systems', focus: 'Secure enterprise automation' },
  { name: 'Astra Ventures', focus: 'Growth-stage product launch' },
  { name: 'QuantumPulse', focus: 'Cloud performance engineering' },
  { name: 'Atlas Health', focus: 'Digital health infrastructure' },
];

export default function BrandPartners() {
  return (
    <section id="partners" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Trusted by rapidly growing <span className="text-glow text-brand-accent">Brands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-slate-600"
          >
            We partner with ambitious technology teams to build products, platforms, and experiences that deliver market differentiation, faster time to value, and long-term operational resilience.
          </motion.p>
        </div>

        <div className="items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-slate-600 text-lg leading-relaxed">
                Our brand partnerships are built on trust, transparency, and technology leadership. Each collaboration is guided by product strategy, execution discipline, and measurable outcomes.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass p-6 rounded-3xl border border-white/60 shadow-xl shadow-slate-200/50">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Enterprise-ready teams</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Dedicated squads that act as an extension of your business and deliver end-to-end product excellence.
                  </p>
                </div>
                <div className="glass p-6 rounded-3xl border border-white/60 shadow-xl shadow-slate-200/50">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Modern product stacks</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Fast, resilient, data-driven platforms built on industry-leading frameworks, cloud services, and best practices.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4">
              {partners.map((partner, idx) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="glass p-5 rounded-3xl border border-white/60 shadow-lg shadow-slate-200/50"
                >
                  <span className="text-sm uppercase tracking-[0.3em] text-brand-accent">Partner</span>
                  <h3 className="text-xl font-semibold text-slate-900 mt-3 mb-2">{partner.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{partner.focus}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* <div className="relative rounded-[2.5rem] overflow-hidden glass-card border border-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.15),transparent_40%)] pointer-events-none" />
            <div className="relative h-[480px] p-8" style={{ perspective: 1400 }}>
              <motion.div
                animate={{ rotateY: [0, 15, -15, 0], rotateX: [2, -2, 2, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="relative h-full w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {partners.map((partner, idx) => (
                  <motion.div
                    key={partner.name}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="absolute left-1/2 top-1/2 w-full max-w-[220px] rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.25)]"
                    style={{
                      transform: `translateX(${(idx % 2 === 0 ? -1 : 1) * 80}px) translateY(${(idx - 2) * 40}px) translateZ(${80 - idx * 18}px) rotateY(${idx * 10 - 20}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <p className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-3">{partner.name}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{partner.focus}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
