import { useEffect, useState } from 'react';

export default function BackgroundMesh() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0a1a4a 60%, #060d1f 100%)' }}>
      {/* Primary deep-blue blob */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full blur-[140px] mix-blend-screen animate-blob"
        style={{ background: 'rgba(31,105,255,0.18)', transform: `translateY(${offset * 0.1}px)` }}
      />
      {/* Sky-blue mid blob */}
      <div
        className="absolute top-[25%] right-[-12%] w-[35%] h-[50%] rounded-full blur-[120px] mix-blend-screen animate-blob"
        style={{ background: 'rgba(56,189,248,0.12)', animationDelay: '2s', transform: `translateY(${offset * 0.07}px)` }}
      />
      {/* Deep navy accent blob */}
      <div
        className="absolute bottom-[-20%] left-[15%] w-[55%] h-[45%] rounded-full blur-[130px] mix-blend-screen animate-blob"
        style={{ background: 'rgba(13,52,222,0.15)', animationDelay: '4s', transform: `translateY(${offset * 0.05}px)` }}
      />
      {/* Subtle grid texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />
    </div>
  );
}
