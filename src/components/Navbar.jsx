import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About Us', 'Works', 'Portfolio', 'Contact Us'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
        isScrolled ? 'py-4 bg-[#0d34de]/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Left Section - Logo & Author */}
        <div className="flex items-center gap-5">
          {/* Custom White Minimal Logo */}
          <div className="flex items-center space-x-[3px] opacity-90 cursor-pointer hover:scale-105 transition-transform relative z-50">
            <div className="w-2 h-6 bg-white/70 rounded-full"></div>
            <div className="w-3 h-8 bg-white rounded-full relative -top-0.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            <div className="w-2 h-6 bg-white/70 rounded-full"></div>
          </div>
          
          {/* Avatar & Text */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                alt="Avatar" 
                className="w-8 h-8 rounded-full border-[1.5px] border-transparent group-hover:border-white/50 transition-all object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-white rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <span className="text-white font-medium text-[15px] tracking-wide">Dora x Minh</span>
          </div>
        </div>

        {/* Right Section - Desktop Links & Button */}
        <div className="hidden md:flex items-center gap-8 md:gap-10">
          <div className="flex items-center gap-8">
            {links.map((link) => (
               <a 
                 key={link} 
                 href={`#${link.toLowerCase().replace(' ', '-')}`} 
                 className="text-white/90 text-sm font-medium hover:text-white transition-colors tracking-wide"
                >
                 {link}
               </a>
            ))}
          </div>
          
          <button className="px-6 py-2.5 rounded-[20px] bg-[#111111] text-white text-xs font-bold tracking-widest hover:bg-black hover:scale-105 transition-all shadow-xl hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer">
            2023
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden relative z-50">
           <button 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
             className="text-white p-2 -mr-2 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
           >
             {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
           </button>
        </div>
        
      </div>

      {/* Mobile Nav Overlay / Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#0d2ca1]/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden"
          >
             <div className="flex flex-col items-center gap-8 py-10 px-6">
                {links.map((link) => (
                   <motion.a 
                     key={`mobile-${link}`} 
                     href={`#${link.toLowerCase().replace(' ', '-')}`}
                     onClick={() => setMobileMenuOpen(false)}
                     whileHover={{ scale: 1.05 }}
                     className="text-white text-xl font-medium tracking-wider"
                   >
                     {link}
                   </motion.a>
                ))}
                <button className="mt-4 w-full max-w-[200px] px-8 py-3.5 rounded-[20px] bg-[#111111] text-white text-sm font-bold tracking-widest shadow-2xl hover:bg-black transition-colors">
                  2023
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
