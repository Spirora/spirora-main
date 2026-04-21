import { useEffect, useState } from 'react';

export default function BackgroundMesh() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-brand-dark">
      <div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 rounded-full blur-[120px] mix-blend-screen animate-blob"
        style={{ transform: `translateY(${offset * 0.12}px)` }}
      />
      <div
        className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-brand-purple/20 rounded-full blur-[100px] mix-blend-screen animate-blob"
        style={{ animationDelay: '2s', transform: `translateY(${offset * 0.08}px)` }}
      />
      <div
        className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen animate-blob"
        style={{ animationDelay: '4s', transform: `translateY(${offset * 0.05}px)` }}
      />
      
      {/* Subtle grid texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-50"></div>
    </div>
  );
}
