import { useRef, useState, Suspense } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Monitor, Cloud, Code2, CreditCard, ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Slide data
───────────────────────────────────────────────────────────── */
const slides = [
  {
    tag: 'SERVICES',
    subtitle: 'What We Build',
    title: 'DIGITAL\nEXCELLENCE\nDELIVERED',
    desc: 'Web & App Development, SaaS, Enterprise Software and POS — engineered for scale, speed and reliability.',
    anchor: '#services',
    cta: 'Explore Services',
    accent: '#1f69ff',
    shape: 'helix',
  },
  {
    tag: 'OUR WORK',
    subtitle: 'Case Studies',
    title: 'AWARD\nWINNING\nPROJECTS',
    desc: 'From FinTech dashboards to blockchain voting systems — we have shipped 50+ high-impact products worldwide.',
    anchor: '#works-section',
    cta: 'View All Work',
    accent: '#06b6d4',
    shape: 'grid',
  },
  {
    tag: 'PORTFOLIO',
    subtitle: 'Featured Projects',
    title: 'PRODUCTS\nTHAT\nSCOPE',
    desc: 'Nexus AI, FinTech Mobile, Global Supply Chain — explore how we turn complex problems into elegant solutions.',
    anchor: '#portfolio',
    cta: 'See Portfolio',
    accent: '#8b5cf6',
    shape: 'dna',
  },
  {
    tag: 'ABOUT US',
    subtitle: 'Who We Are',
    title: 'ENGINEERING\nTHE\nEDGE',
    desc: 'Spirora Innovations — precision engineers, experience designers and your strategic technology partners.',
    anchor: '#about',
    cta: 'Meet the Team',
    accent: '#f59e0b',
    shape: 'torus',
  },
];

/* ─────────────────────────────────────────────────────────────
   3-D Objects (one per slide shape)
───────────────────────────────────────────────────────────── */

/** HELIX – interconnected spheres for Services */
function HelixObject({ progress }) {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.4 + progress.get() * Math.PI * 1.5;
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.15;
    }
  });
  const count = 8;
  return (
    <group ref={groupRef} scale={1.1}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const y = (i / count) * 4 - 2;
        const x = Math.cos(angle) * 1.5;
        const z = Math.sin(angle) * 1.5;
        return (
          <group key={i}>
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color="#1f69ff" roughness={0.2} metalness={0.3} />
            </mesh>
            {i < count - 1 && (
              <mesh position={[
                Math.cos(((i + 0.5) / count) * Math.PI * 2) * 1.5,
                ((i + 0.5) / count) * 4 - 2,
                Math.sin(((i + 0.5) / count) * Math.PI * 2) * 1.5,
              ]}>
                <sphereGeometry args={[0.14, 16, 16]} />
                <meshStandardMaterial color="#88bdfc" roughness={0.3} metalness={0.2} transparent opacity={0.6} />
              </mesh>
            )}
          </group>
        );
      })}
      {/* Center pillar */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 4.5, 16]} />
        <meshStandardMaterial color="#88bdfc" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

/** GRID – floating cubes for Works */
function GridObject({ progress }) {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3 + progress.get() * Math.PI;
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
      groupRef.current.position.y = Math.sin(t * 1.1) * 0.12;
    }
  });
  const positions = [
    [-1.4, 1.4, 0], [0, 1.4, 0], [1.4, 1.4, 0],
    [-1.4, 0, 0],               [1.4, 0, 0],
    [-1.4, -1.4, 0], [0, -1.4, 0], [1.4, -1.4, 0],
  ];
  const blues = ['#06b6d4', '#0ea5e9', '#38bdf8', '#7dd3fc', '#06b6d4', '#0284c7', '#0ea5e9', '#38bdf8'];
  return (
    <group ref={groupRef} scale={1.0}>
      {positions.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[0.4, 0.4, 0]}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color={blues[i]} roughness={0.2} metalness={0.15} transparent opacity={0.85} />
        </mesh>
      ))}
      {/* Center highlight */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.85, 0.85, 0.85]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.4} transparent opacity={0.15} wireframe />
      </mesh>
      {/* Podium */}
      <mesh position={[0, -2.5, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.6, 64]} />
        <meshStandardMaterial color="#0369a1" roughness={0.3} />
      </mesh>
    </group>
  );
}

/** DNA strand – for Portfolio */
function DNAObject({ progress }) {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.35 + progress.get() * Math.PI * 2;
      groupRef.current.position.y = Math.sin(t * 1.3) * 0.12;
    }
  });
  const steps = 12;
  return (
    <group ref={groupRef} scale={0.9}>
      {Array.from({ length: steps }).map((_, i) => {
        const frac = i / steps;
        const angle = frac * Math.PI * 4;
        const y = frac * 5 - 2.5;
        // Two strands
        const x1 = Math.cos(angle) * 1.2;
        const z1 = Math.sin(angle) * 1.2;
        const x2 = Math.cos(angle + Math.PI) * 1.2;
        const z2 = Math.sin(angle + Math.PI) * 1.2;
        return (
          <group key={i}>
            <mesh position={[x1, y, z1]}>
              <sphereGeometry args={[0.22, 24, 24]} />
              <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.2} />
            </mesh>
            <mesh position={[x2, y, z2]}>
              <sphereGeometry args={[0.22, 24, 24]} />
              <meshStandardMaterial color="#a78bfa" roughness={0.2} metalness={0.2} />
            </mesh>
            {/* rung connecting both strands */}
            {i % 2 === 0 && (
              <mesh position={[0, y, 0]} rotation={[0, angle, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 2.4, 8]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#c4b5fd" transparent opacity={0.4} />
              </mesh>
            )}
          </group>
        );
      })}
      {/* Podium */}
      <mesh position={[0, -3, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.6, 64]} />
        <meshStandardMaterial color="#4c1d95" roughness={0.3} />
      </mesh>
    </group>
  );
}

/** Torus knot – for About */
function TorusObject({ progress }) {
  const meshRef = useRef();
  const ringRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.4;
      meshRef.current.rotation.y = t * 0.3 + progress.get() * Math.PI * 2;
      meshRef.current.position.y = Math.sin(t * 1.1) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.6;
      ringRef.current.rotation.y = t * 0.2;
    }
  });
  return (
    <group scale={1.0}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.1, 0.35, 128, 32]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.15} metalness={0.3} />
      </mesh>
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#fcd34d" transparent opacity={0.4} />
      </mesh>
      {/* Podium */}
      <mesh position={[0, -2.6, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.6, 64]} />
        <meshStandardMaterial color="#78350f" roughness={0.3} />
      </mesh>
    </group>
  );
}

function SceneForSlide({ shape, smoothProgress }) {
  const lightColors = {
    helix: ['#1f69ff', '#88bdfc'],
    grid: ['#06b6d4', '#0ea5e9'],
    dna: ['#8b5cf6', '#a78bfa'],
    torus: ['#f59e0b', '#fcd34d'],
  };
  const [c1, c2] = lightColors[shape] ?? ['#ffffff', '#ffffff'];

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={45} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} enableRotate />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 8]} intensity={1.8} color="#ffffff" castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={1.2} color={c2} />
      <pointLight position={[0, -2, 4]} intensity={0.6} color={c1} />
      {shape === 'helix' && <HelixObject progress={smoothProgress} />}
      {shape === 'grid' && <GridObject progress={smoothProgress} />}
      {shape === 'dna' && <DNAObject progress={smoothProgress} />}
      {shape === 'torus' && <TorusObject progress={smoothProgress} />}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────── */
export default function ParallaxShowcase() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });

  const [activeSlide, setActiveSlide] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * slides.length), slides.length - 1);
    setActiveSlide(idx);
  });

  const handleDotClick = (i) => {
    if (!containerRef.current) return;
    const vh = window.innerHeight;
    const top = containerRef.current.offsetTop;
    // Each slide occupies (totalVh / slides.length) of scroll
    const slotVh = (slides.length * 150); // 150 vh per slide × n slides = total 600vh
    window.scrollTo({ top: top + i * slotVh * (vh / 100), behavior: 'smooth' });
  };

  // Interpolated gradient background per slide
  const bgGradients = [
    'from-[#1b6bff] to-[#0d34de]',
    'from-[#0284c7] to-[#0d34de]',
    'from-[#4f46e5] to-[#1d1575]',
    'from-[#b45309] to-[#0d34de]',
  ];

  const slide = slides[activeSlide];

  return (
    /* 600vh total — 150 vh per slide */
    <div ref={containerRef} className="h-[600vh] relative w-full z-10">
      <section
        className={`sticky top-0 h-screen w-full flex items-center justify-center pt-20 pb-10 overflow-hidden bg-gradient-to-br transition-all duration-700 ${bgGradients[activeSlide]}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center relative z-10 w-full min-h-[70vh]">

          {/* ── LEFT  TEXT ── */}
          <div className="w-full lg:w-[30%] order-2 lg:order-1 z-20 mt-8 lg:mt-0 text-center lg:text-left min-h-[160px] lg:min-h-auto flex flex-col justify-center gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${activeSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="space-y-3"
              >
                <p className="text-white/60 text-sm font-semibold tracking-[0.25em] uppercase">
                  {slide.subtitle}
                </p>
                <h2
                  className="text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] xl:text-[5.5rem] font-black text-white leading-[0.88] tracking-tighter whitespace-pre-line"
                >
                  {slide.title}
                </h2>
                <a
                  href={slide.anchor}
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-white/15 text-white text-sm font-semibold border border-white/20 hover:bg-white/25 transition-colors group"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── CENTER 3D ── */}
          <div className="w-full lg:w-[40%] h-[350px] sm:h-[440px] lg:h-[680px] relative order-1 lg:order-2 z-10">
            <Suspense
              fallback={
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              }
            >
              <Canvas
                shadows
                style={{ background: 'transparent' }}
                gl={{ antialias: true }}
              >
                <AnimatePresence mode="wait">
                  <SceneForSlide
                    key={`scene-${activeSlide}`}
                    shape={slide.shape}
                    smoothProgress={smoothProgress}
                  />
                </AnimatePresence>
              </Canvas>
            </Suspense>
          </div>

          {/* ── RIGHT  CONTENT ── */}
          <div className="w-full lg:w-[30%] order-3 z-20 mt-10 lg:mt-0 flex flex-col items-center lg:items-end text-center lg:text-right gap-6 h-full justify-center">

            <div className="min-h-[80px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${activeSlide}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="text-white/80 text-sm lg:text-[14px] max-w-[240px] leading-relaxed font-light"
                >
                  {slide.desc}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className="flex lg:flex-col gap-4 items-center">
              {slides.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to ${slides[i].tag}`}
                  className={`rounded-full transition-all duration-300 ${
                    activeSlide === i
                      ? 'w-3 h-3 bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)] scale-110'
                      : 'w-2 h-2 bg-white/25 hover:bg-white/60 hover:scale-125 cursor-pointer'
                  }`}
                />
              ))}
            </div>

            {/* Tag */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`tag-${activeSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase"
              >
                {slide.tag}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
