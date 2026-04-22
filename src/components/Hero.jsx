import { useRef, useState, Suspense } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const slides = [
  {
    title: "THINK DIGITAL<br />THINK SPIRORA<br />",
    subtitle: "Precision",
    desc: "Engineered digital systems built to perform flawlessly at every scale",
    tag: "2026"
  },
  {
    title: "CREATIVE<br />DIGITAL<br />SOLUTIONS",
    subtitle: "Craft",
    desc: "Refined design experiences shaped with clarity, intent, and quiet detail",
    tag: "GLOBAL"
  },
 {
  title: "FUTURE<br />OF DIGITAL<br />EXPERIENCES",
  subtitle: "Intelligence",
  desc: "Next-generation systems powered by AI, built for seamless and secure interaction",
  tag: "FUTURE"
}
];

function SkeletonLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

function Abstract3DVisualization({ scrollYProgress }) {
  const groupRef = useRef();
  const domeRef = useRef();
  const shellRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating base animation
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.15;
      
      const p = scrollYProgress ? scrollYProgress.get() : 0;
      
      // Dynamic Parallax Rotation
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.1 + (p * Math.PI * 2.5);
      groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.05 + (p * Math.PI * 0.5);
      
      // Explode Effect: parts pull apart and come back together between slides
      const explodeIntensity = Math.abs(Math.sin(p * Math.PI * 2));

      if (domeRef.current) domeRef.current.position.x = 0.6 + explodeIntensity * 1.2;
      if (shellRef.current) shellRef.current.position.x = -0.4 - explodeIntensity * 0.8;
      if (ringRef.current) ringRef.current.position.x = -1.3 - explodeIntensity * 1.5;
    }
  });

  return (
    <group scale={1.2}>
      {/* Podium Base */}
      <mesh position={[0, -2.5, 0]} receiveShadow>
        <cylinderGeometry args={[2.8, 2.8, 0.8, 64]} />
        <meshStandardMaterial color="#0A24A6" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Floating Elements Container */}
      <group ref={groupRef} position={[0, -0.2, 0]}>
        
        {/* Main Solid Dome */}
        <group ref={domeRef} position={[0.6, 0, 0]} rotation={[0, 0, 0]}>
          <mesh rotation={[0, 0, -Math.PI / 2]} castShadow>
            <sphereGeometry args={[1.4, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#1f69ff" roughness={0.2} metalness={0.1} />
          </mesh>
          {/* Back solid cap */}
          <mesh rotation={[0, -Math.PI / 2, 0]} castShadow>
            <circleGeometry args={[1.4, 64]} />
            <meshStandardMaterial color="#1a5add" roughness={0.2} metalness={0.1} />
          </mesh>
        </group>

        {/* Floating Curved Shell */}
        <mesh ref={shellRef} position={[-0.4, -0.1, 0]} rotation={[0, 0, Math.PI / 2.2]} castShadow>
          <sphereGeometry args={[1.15, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#88bdfc" roughness={0.2} metalness={0.1} side={THREE.DoubleSide} />
        </mesh>

        {/* Orange Torus */}
        <mesh ref={ringRef} position={[-1.3, -0.2, 0]} rotation={[Math.PI / 8, Math.PI / 2.2, 0]} castShadow>
          <torusGeometry args={[0.65, 0.08, 32, 64]} />
          <meshStandardMaterial color="#fb923c" roughness={0.2} metalness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  
  // Track scroll progress purely within the 600vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSlide, setActiveSlide] = useState(0);

  // Map scroll progress to the active slide index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) setActiveSlide(0);
    else if (latest < 0.66) setActiveSlide(1);
    else setActiveSlide(2);
  });

  // Programmable navigation to slide positions
  const handleDotClick = (index) => {
    if (containerRef.current) {
       const vh = window.innerHeight;
       const offset = containerRef.current.offsetTop;
       const targetScroll = offset + (index * 2.5 * vh);
       window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="h-[600vh] relative w-full z-10 bg-transparent">
      {/* Sticky actual view fixing the layout on screen while container scrolls */}
      <section className="sticky top-0 h-[100dvh] w-full flex items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center relative z-10 w-full min-h-[70vh]">
          
          {/* Left Content */}
          <div className="w-full lg:w-[30%] flex flex-col justify-center space-y-2 order-2 lg:order-1 z-20 mt-10 lg:mt-0 text-center lg:text-left min-h-[150px] lg:min-h-[auto]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${activeSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="text-slate-500 text-lg tracking-wide font-medium mb-1 lg:mb-4">
                  {slides[activeSlide].subtitle}
                </p>
                <h1 
                  className="text-[3rem] sm:text-[4.5rem] lg:text-[5.2rem] xl:text-[6.2rem] font-black text-slate-900 leading-[0.95] tracking-tighter"
                  dangerouslySetInnerHTML={{ __html: slides[activeSlide].title }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center 3D Object with Scroll Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="w-full lg:w-[40%] h-[350px] sm:h-[450px] lg:h-[700px] relative order-1 lg:order-2 z-10"
          >
            <Suspense fallback={<SkeletonLoader />}>
              <Canvas shadows camera={{ position: [0, 0, 8.5], fov: 45 }} style={{ background: 'transparent' }} gl={{ antialias: true }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={45} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} enableRotate={true} />
                
                <ambientLight intensity={0.5} color="#ffffff" />
                <directionalLight position={[5, 10, 8]} intensity={1.8} color="#ffffff" castShadow shadow-mapSize={[1024, 1024]} />
                <directionalLight position={[-5, 5, -5]} intensity={1.2} color="#88bdfc" />
                <pointLight position={[0, -2, 4]} intensity={0.5} color="#1f69ff" />
                
                <Abstract3DVisualization scrollYProgress={smoothProgress} />
              </Canvas>
            </Suspense>
          </motion.div>

          {/* Right Content */}
          <div className="w-full lg:w-[30%] flex flex-col justify-center items-center lg:items-end order-3 mt-12 lg:mt-0 z-20 text-center lg:text-right h-full pt-4 lg:pt-0">
            <div className="min-h-[60px] lg:min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${activeSlide}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-slate-600 text-sm lg:text-[15px] max-w-[250px] leading-relaxed font-light"
                >
                  {slides[activeSlide].desc}
                </motion.p>
              </AnimatePresence>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex lg:flex-col gap-4 mt-8 lg:mt-16 items-center lg:mb-auto">
               {slides.map((_, i) => (
                  <button 
                    key={`dot-${i}`}
                    onClick={() => handleDotClick(i)}
                    className={`rounded-full transition-all duration-300 ${
                      activeSlide === i 
                        ? 'w-3 h-3 bg-brand-primary shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-110' 
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400 cursor-pointer hover:scale-125'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
               ))}
            </div>
            
            <div className="mt-8 lg:mt-32 w-full flex justify-center lg:justify-end">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`tag-${activeSlide}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-slate-400 font-bold text-sm tracking-widest"
                >
                  {slides[activeSlide].tag}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
