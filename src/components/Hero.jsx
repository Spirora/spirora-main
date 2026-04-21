import { useRef, useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, PerspectiveCamera, Html } from '@react-three/drei';
import { ArrowRight, ChevronRight } from 'lucide-react';

// Skeleton Loader Component
function SkeletonLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <div className="animate-pulse flex space-x-4 w-1/2">
          <div className="rounded-full bg-slate-700/50 h-12 w-12 border border-brand-primary/20"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-3 bg-slate-700/50 rounded w-3/4"></div>
            <div className="h-3 bg-slate-700/50 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// IT Consulting 3D Visualization
function ITConsultingVisualization() {
  const groupRef = useRef();
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scale = windowWidth < 768 ? 0.7 : 0.8;

  const techStack = [
    { pos: [4.5, 3, 0], color: '#0ea5e9', label: 'React' },
    { pos: [-4.5, 3, 0], color: '#3b82f6', label: 'TypeScript' },
    { pos: [4.5, -3, 0], color: '#06b6d4', label: 'APIs' },
    { pos: [-4.5, -3, 0], color: '#0284c7', label: 'Cloud' },
    { pos: [0, 0, 4.5], color: '#0369a1', label: 'Database' },
    { pos: [0, 0, -4.5], color: '#075985', label: 'Security' },
  ];

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* Center connection point */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial color="#0ea5e9" />
      </mesh>

      {/* Connection lines to tech nodes */}
      {techStack.map((tech, idx) => (
        <line key={`line-${idx}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, tech.pos[0], tech.pos[1], tech.pos[2]])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={tech.color} linewidth={1} transparent opacity={0.3} />
        </line>
      ))}

      {/* Tech Stack Nodes */}
      {techStack.map((tech, idx) => (
        <group key={`tech-${idx}`} position={tech.pos}>
          {/* Glowing sphere */}
          <mesh>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshBasicMaterial color={tech.color} transparent opacity={0.8} />
          </mesh>

          {/* Wireframe sphere */}
          <mesh>
            <sphereGeometry args={[0.7, 32, 32]} />
            <meshBasicMaterial color={tech.color} wireframe transparent opacity={0.4} />
          </mesh>

          {/* Outer pulse ring */}
          <mesh>
            <torusGeometry args={[0.95, 0.05, 16, 100]} />
            <meshBasicMaterial color={tech.color} transparent opacity={0.6} />
          </mesh>

          {/* Text label */}
          <Text position={[0, -1, 0]} fontSize={0.4} color={tech.color} anchorY="top">
            {tech.label}
          </Text>
        </group>
      ))}

      {/* Ambient glow particles */}
      {[...Array(15)].map((_, i) => {
        const x = (Math.random() - 0.5) * 8;
        const y = (Math.random() - 0.5) * 8;
        const z = (Math.random() - 0.5) * 8;
        const size = Math.random() * 0.08;
        const color = ['#0ea5e9', '#3b82f6', '#06b6d4', '#0284c7'][Math.floor(Math.random() * 4)];

        return (
          <mesh key={`particle-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[size, 8, 8]} />
            <meshBasicMaterial color={color} transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full">
        
        {/* Text Content */}
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-brand-accent text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            Spirora Innovations
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans tracking-tight leading-tight text-white"
          >
            Building the Future with <span className="text-glow text-brand-accent">Spirora</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base lg:text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            We engineer premium, performant, and secure digital architectures to help modern businesses scale faster and operate smarter. From SaaS to Enterprise Web Apps.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-6 lg:px-8 py-3 lg:py-4 rounded-full bg-brand-primary text-white font-medium flex items-center justify-center gap-2 group hover:scale-105 transition-transform shadow-[0_0_20px_rgba(79,70,229,0.4)] text-sm lg:text-base">
              Get Started
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                // Scroll to works section or show works modal
                const worksSection = document.getElementById('works-section');
                if (worksSection) {
                  worksSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 lg:px-8 py-3 lg:py-4 rounded-full glass text-white font-medium flex items-center justify-center gap-2 group hover:bg-white/10 transition-colors text-sm lg:text-base"
            >
              View Our Work
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[700px] w-full relative order-2 lg:order-2"
        >
          <Suspense fallback={<SkeletonLoader />}>
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ background: 'transparent' }}>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} enableRotate={true} />
              <ITConsultingVisualization />
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
              <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />
            </Canvas>
          </Suspense>
        </motion.div>
        
      </div>
    </section>
  );
}

export default Hero;
