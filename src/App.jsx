import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import BackgroundMesh from './components/BackgroundMesh';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxShowcase from './components/ParallaxShowcase';
import Services from './components/Services';
import Works from './components/Works';
import EnquiryForm from './components/EnquiryForm';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import BrandPartners from './components/BrandPartners';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen selection:bg-brand-primary/30 selection:text-brand-accent overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <CustomCursor />
        <BackgroundMesh />
        <Navbar />
        
        <main>
          <Hero />
          <ParallaxShowcase />
          <Services />
          <section id="works-section" className="py-20">
            <Works />
          </section>
          <section className="py-20 bg-slate-100/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <EnquiryForm />
            </div>
          </section>
          <About />
          <Portfolio />
          {/* <BrandPartners /> */}
          <Process />
          {/* <Testimonials /> */}
          <CtaSection />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}

export default App;

