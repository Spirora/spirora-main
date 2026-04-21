import CustomCursor from './components/CustomCursor';
import BackgroundMesh from './components/BackgroundMesh';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary/30 selection:text-brand-accent">
      <CustomCursor />
      <BackgroundMesh />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <section id="works-section" className="py-20">
          <Works />
        </section>
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <EnquiryForm />
          </div>
        </section>
        <About />
        <Portfolio />
        {/* <BrandPartners /> */}
        <Process />
        <Testimonials />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
