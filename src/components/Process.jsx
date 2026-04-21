import { motion } from 'framer-motion';
import { useRef, Suspense } from 'react';
import { ArcTimeline } from './ArcTimeline';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import {
  FaReact, FaNode, FaGitAlt, FaDocker, FaGithub, FaAws,
  FaVuejs, FaGitlab, FaFigma, FaAndroid,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiMongodb, SiPostgresql, SiFlutter, SiTypescript,
  SiKubernetes, SiExpress, SiNginx, SiJest, SiCypress,
  SiFirebase, SiGraphql, SiRedis, SiVite,
} from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';


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

// Tech icons to spread across the sphere
const techIcons = [
  { Icon: FaReact,      color: '#61dafb', label: 'React' },
  { Icon: FaNode,       color: '#68a063', label: 'Node.js' },
  { Icon: DiJavascript1, color: '#f7df1e', label: 'JS' },
  { Icon: SiTypescript,  color: '#3178c6', label: 'TypeScript' },
  { Icon: SiNextdotjs,  color: '#ffffff',  label: 'Next.js' },
  { Icon: FaGitAlt,     color: '#f34f29', label: 'Git' },
  { Icon: FaDocker,     color: '#2496ed', label: 'Docker' },
  { Icon: FaGithub,     color: '#ffffff',  label: 'GitHub' },
  { Icon: FaAws,        color: '#ff9900', label: 'AWS' },
  { Icon: SiMongodb,    color: '#47a248', label: 'MongoDB' },
  { Icon: SiPostgresql, color: '#336791', label: 'PostgreSQL' },
  { Icon: SiFlutter,    color: '#54c5f8', label: 'Flutter' },
  { Icon: FaAndroid,    color: '#3ddc84', label: 'Android' },
  { Icon: SiKubernetes, color: '#326ce5', label: 'Kubernetes' },
  { Icon: SiFirebase,   color: '#ffca28', label: 'Firebase' },
  { Icon: SiGraphql,    color: '#e535ab', label: 'GraphQL' },
  { Icon: SiRedis,      color: '#dc382d', label: 'Redis' },
  { Icon: FaVuejs,      color: '#42b883', label: 'Vue' },
  { Icon: FaGitlab,     color: '#fc6d26', label: 'GitLab' },
  { Icon: SiNginx,      color: '#009900', label: 'Nginx' },
  { Icon: SiExpress,    color: '#ffffff',  label: 'Express' },
  { Icon: SiJest,       color: '#c21325', label: 'Jest' },
  { Icon: SiCypress,    color: '#17202c', label: 'Cypress' },
  { Icon: SiVite,       color: '#646cff', label: 'Vite' },
  { Icon: FaFigma,      color: '#f24e1e', label: 'Figma' },
];

// Compute Fibonacci-sphere positions at radius r
function fibonacciSphere(count, radius) {
  const points = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push([
      radius * r * Math.cos(theta),
      radius * y,
      radius * r * Math.sin(theta),
    ]);
  }
  return points;
}

const iconPositions = fibonacciSphere(techIcons.length, 2.2);

// Animated interactive sphere scene
function InteractiveSphere() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0018; // very slow auto-spin
    }
  });

  return (
    <group ref={groupRef}>
      {/* Transparent wireframe sphere as scaffold */}
      <mesh>
        <sphereGeometry args={[2.1, 48, 48]} />
        <meshStandardMaterial
          color="#38bdf8"
          transparent
          opacity={0.05}
          wireframe
        />
      </mesh>

      {/* Subtle inner solid glass sphere */}
      <mesh>
        <sphereGeometry args={[1.95, 64, 64]} />
        <meshStandardMaterial
          color="#0ea5e9"
          transparent
          opacity={0.07}
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>

      {/* Tech icon HTML overlays at sphere surface positions */}
      {techIcons.map(({ Icon, color, label }, i) => {
        const [x, y, z] = iconPositions[i];
        return (
          <Html
            key={label}
            position={[x, y, z]}
            center
            occlude={false}
            style={{ pointerEvents: 'none' }}
          >
            <div
              title={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                userSelect: 'none',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: 'rgba(15,23,42,0.82)',
                  backdropFilter: 'blur(6px)',
                  border: `1.5px solid ${color}50`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 10px ${color}25`,
                  flexShrink: 0,
                }}
              >
                <Icon style={{ fontSize: 18, color }} />
              </div>
            </div>
          </Html>
        );
      })}
    </group>
  );
}

export default function Process() {
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

          <div className="mt-24 grid lg:grid-cols-2 gap-10 items-center">
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

            {/* Interactive Sphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative h-[340px] sm:h-[420px] lg:h-[540px] w-full max-w-full overflow-hidden flex flex-col items-center justify-center"
            >
              {/* Subtle radial glow behind the sphere */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full bg-brand-accent/10 blur-[80px]" />
              </div>

              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-full">
                    <div className="w-14 h-14 border-4 border-white/20 border-t-white/60 rounded-full animate-spin" />
                  </div>
                }
              >
                <Canvas
                  camera={{ position: [0, 0, 8], fov: 48 }}
                  style={{ width: '100%', height: '100%', background: 'transparent', cursor: 'grab' }}
                  gl={{ antialias: true, alpha: true }}
                >
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 8, 5]} intensity={2} color="#ffffff" />
                  <directionalLight position={[-5, -5, -5]} intensity={1} color="#38bdf8" />
                  <pointLight position={[0, 0, 4]} intensity={0.8} color="#0ea5e9" />

                  <InteractiveSphere />

                  {/* Cursor-interactive orbit controls — auto-rotate at low speed, user can override */}
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.6}
                    enableDamping={true}
                    dampingFactor={0.05}
                    rotateSpeed={0.5}
                  />
                </Canvas>
              </Suspense>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
