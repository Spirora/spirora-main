import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Detect if the primary input is touch-only (phones/tablets without mouse)
function isTouchOnlyDevice() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches &&
    !window.matchMedia('(pointer: fine)').matches
  );
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  // Hide the cursor on pure touch devices — the OS provides its own touch feedback.
  const [hidden] = useState(() => isTouchOnlyDevice());

  useEffect(() => {
    if (hidden) return;

    // --- Mouse tracking ---
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // --- Touch tracking (for mixed-input / hybrid devices) ---
    // Use `touchmove` so the cursor follows the finger continuously during a scroll,
    // not just when a tap starts or ends.
    const handleTouchMove = (e) => {
      const touch = e.changedTouches[0];
      if (touch) {
        setMousePosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    const handleTouchStart = (e) => {
      const touch = e.changedTouches[0];
      if (touch) {
        setMousePosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    // passive: true is important for touchmove — avoids blocking scroll
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [hidden]);

  // Don't render anything on touch-only devices
  if (hidden) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-brand-accent rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-brand-primary/20 rounded-full pointer-events-none z-40 blur-2xl"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
      />
    </>
  );
}
