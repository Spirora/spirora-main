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

  const links = [
    { label: 'About Us',   href: '#about' },
    { label: 'Works',      href: '#works-section' },
    { label: 'Portfolio',  href: '#portfolio' },
    { label: 'Contact Us', href: '#enquiry' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
          isScrolled
            ? 'py-4  backdrop-blur-md'
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">

          {/* Logo & brand */}
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-[3px] cursor-pointer hover:scale-105 transition-transform">
              <div className="w-2 h-6 bg-white/60 rounded-full" />
              <div className="w-3 h-8 bg-white rounded-full relative -top-0.5 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
              <div className="w-2 h-6 bg-white/60 rounded-full" />
            </div>
            <span className="hidden sm:block text-white font-semibold text-[15px] tracking-wide">
              Spirora<span className="text-brand-accent">Innovations</span>
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white/80 text-sm font-medium hover:text-white transition-colors relative group tracking-wide"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-accent rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#enquiry"
              className="px-6 py-2.5 rounded-full bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary/80 hover:scale-105 transition-all shadow-[0_0_20px_rgba(31,105,255,0.35)]"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white p-2 -mr-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile bottom-sheet overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Scrim */}
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sheet — slides up from bottom to ~50vh */}
            <motion.div
              key="sheet"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 40 }}
              className="fixed bottom-0 left-0 right-0 z-[70] rounded-t-[2rem] overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #0c1f55 0%, #060d1f 100%)', border: '1px solid rgba(31,105,255,0.25)' }}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-4 pb-2">
                <div className="w-12 h-1.5 rounded-full bg-white/25" />
              </div>

              {/* Close button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-5 text-white/60 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>

              {/* Links */}
              <div className="flex flex-col items-center gap-1 px-6 pt-4 pb-10">
                {links.map(({ label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-4 text-xl font-semibold text-white/90 hover:text-white tracking-wide hover:text-brand-accent transition-colors"
                  >
                    {label}
                  </motion.a>
                ))}

                <motion.a
                  href="#enquiry"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + links.length * 0.07 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 w-full text-center py-4 rounded-2xl bg-brand-primary text-white text-lg font-bold shadow-[0_0_24px_rgba(31,105,255,0.45)] hover:bg-brand-primary/80 transition-colors"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
