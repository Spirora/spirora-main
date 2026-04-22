import { useEffect, useState } from 'react';

export default function BackgroundMesh() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #e2e8f0 60%, #f8fafc 100%)' }}>
      {/* Primary light-blue blob */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full blur-[140px] mix-blend-multiply animate-blob opacity-40"
        style={{ background: 'rgba(37,99,235,0.2)', transform: `translateY(${offset * 0.1}px)` }}
      />
      {/* Sky-blue mid blob */}
      <div
        className="absolute top-[25%] right-[-12%] w-[35%] h-[50%] rounded-full blur-[120px] mix-blend-multiply animate-blob opacity-40"
        style={{ background: 'rgba(14,165,233,0.15)', animationDelay: '2s', transform: `translateY(${offset * 0.07}px)` }}
      />
      {/* Lavender highlight blob */}
      <div
        className="absolute bottom-[-20%] left-[15%] w-[55%] h-[45%] rounded-full blur-[130px] mix-blend-multiply animate-blob opacity-30"
        style={{ background: 'rgba(139,92,246,0.15)', animationDelay: '4s', transform: `translateY(${offset * 0.05}px)` }}
      />
      {/* Subtle dark grid texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />
    </div>
  );
}
