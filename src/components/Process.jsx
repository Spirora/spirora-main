import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { ArcTimeline } from './ArcTimeline';


// Timeline data for ArcTimeline component
const timelineData = [
  {
    time: 'Discovery & Architecture',
    steps: [
      {
        icon: '🎯',
        content: 'We align with your vision and architect a scalable, robust tech stack specifically for your needs.'
      }
    ]
  },
  {
    time: 'Agile Development',
    steps: [
      {
        icon: '⚙️',
        content: 'Iterative sprints, transparent communication, and rapid prototyping ensure we build the right product fast.'
      }
    ]
  },
  {
    time: 'Testing & QA',
    steps: [
      {
        icon: '📝',
        content: 'Rigorous automated and manual testing guarantees a bug-free, performant experience before deployment.'
      }
    ]
  },
  {
    time: 'Deployment & Scale',
    steps: [
      {
        icon: '🚀',
        content: 'Seamless CI/CD pipelines launch your product, while we handle ongoing monitoring and scaling.'
      }
    ]
  }
];

const deliveryNodes = [
  {
    id: 'blueprint',
    icon: '🧭',
    title: 'Blueprint',
    description: 'Strategic architecture aligned to your goals.',
    color: '#0ea5e9',
  },
  {
    id: 'design-sprint',
    icon: '⚡',
    title: 'Design Sprint',
    description: 'Rapid iteration and prototype validation.',
    color: '#3b82f6',
  },
  {
    id: 'launch-plan',
    icon: '🚀',
    title: 'Launch Plan',
    description: 'Deployment readiness with secure release flow.',
    color: '#06b6d4',
  },
  {
    id: 'growth-loop',
    icon: '📈',
    title: 'Growth Loop',
    description: 'Continuous optimization and scale execution.',
    color: '#0284c7',
  },
];

export default function Process() {
  const [deliveryItems] = useState(deliveryNodes);
  const dragAreaRef = useRef(null);

  return (
    <section id="process" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            How We <span className="text-glow text-brand-accent">Operate</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-slate-400"
          >
            A streamlined, battle-tested methodology designed for maximum efficiency and quality.
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated timeline line */}

          

          {/* Arc Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 max-w-6xl mx-auto my-24"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
              Our Process Flow
            </h3>
            <ArcTimeline
              className="[--step-line-active-color:#0ea5e9] [--step-line-inactive-color:#93c5fd] [--icon-active-color:#0284c7] [--time-active-color:#0c4a6e] [--description-color:#334155]"
              data={timelineData}
              defaultActiveStep={{ time: 'Discovery & Architecture', stepIndex: 0 }}
              arcConfig={{
                circleWidth: typeof window !== 'undefined' && window.innerWidth < 768 ? 3600 : 4800,
                angleBetweenMinorSteps: 0.45,
                lineCountFillBetweenSteps: 12,
                boundaryPlaceholderLinesCount: 40,
              }}
            />
          </motion.div>

          <div className="mt-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl font-semibold text-white"
              >
                Dynamic delivery with 3D clarity
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-slate-400 leading-relaxed max-w-2xl"
              >
                Our operation blends strategy, creative product design, and technical execution into a cohesive, high-velocity system. Each phase is designed to be visible, measurable, and engineered for rapid adaptation as your business evolves.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass-card p-6 border border-white/10 shadow-[0_30px_60px_rgba(15,23,42,0.35)]">
                  <h4 className="text-xl font-semibold text-white mb-3">Strategic Clarity</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We build a clearly defined roadmap with product goals, risk mitigation, and speed-focused milestones.
                  </p>
                </div>
                <div className="glass-card p-6 border border-white/10 shadow-[0_30px_60px_rgba(15,23,42,0.35)]">
                  <h4 className="text-xl font-semibold text-white mb-3">Continuous Validation</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Rapid prototyping, real user feedback, and automated testing ensure every release is stable and impactful.
                  </p>
                </div>
                <div className="glass-card p-6 border border-white/10 shadow-[0_30px_60px_rgba(15,23,42,0.35)]">
                  <h4 className="text-xl font-semibold text-white mb-3">Scalable Execution</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    From cloud infrastructure to API strategy, we create systems that grow with your user base and business needs.
                  </p>
                </div>
                <div className="glass-card p-6 border border-white/10 shadow-[0_30px_60px_rgba(15,23,42,0.35)]">
                  <h4 className="text-xl font-semibold text-white mb-3">Measured Impact</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Every decision is tied back to business metrics so you understand the value of each sprint and investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[500px] flex items-center justify-center" style={{ perspective: 1400 }}>
              <div ref={dragAreaRef} className="relative w-full max-w-[780px] h-full overflow-hidden">
                <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-brand-accent/10 border border-brand-accent/20" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-white/5 opacity-40" />

                <div className="relative w-full h-full">
                  {deliveryItems.map((item, idx) => {
                    const angle = (idx / deliveryItems.length) * 360;
                    const radius = 190;
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);

                    return (
                      <motion.div
                        key={item.id}
                        drag
                        dragMomentum={false}
                        dragElastic={0.18}
                        dragConstraints={dragAreaRef}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="absolute left-1/2 top-1/2 w-44 h-44 rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl text-white cursor-grab"
                        initial={{ x, y }}
                        style={{
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl" style={{ color: item.color }}>
                            {item.icon}
                          </div>
                          <div className="text-center">
                            <h4 className="text-base font-semibold">{item.title}</h4>
                            <p className="text-sm text-slate-400">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="absolute left-1/2 top-[90%] -translate-x-1/2 text-center">
                  <p className="text-sm text-slate-400">Drag the delivery icons to reposition the flow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
