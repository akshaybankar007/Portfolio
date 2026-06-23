import React, { useEffect, useState } from 'react';

export default function IntroScreen({ onComplete }) {
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    // Phase 1: Wait for the letters to snap together
    const timer1 = setTimeout(() => {
      setPhase('moving');
    }, 1500);

    // Phase 2: Wait for it to move to the navbar position, then unmount
    const timer2 = setTimeout(() => {
      onComplete();
    }, 2800);
    
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#030303] flex items-center justify-center overflow-hidden pointer-events-none">
      <h1 
        className={`absolute font-bold text-white transition-all duration-[1200ms] ease-[cubic-bezier(0.87,0,0.13,1)] flex items-center
          ${phase === 'entering' 
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl tracking-[1em] opacity-0 animate-[introFadeIn_1s_ease-out_forwards]' 
            : 'top-[18px] left-[24px] md:left-[calc(50%-576px+24px)] translate-x-0 translate-y-0 text-2xl tracking-widest opacity-100'
          }
        `}
      >
        AKSHAY<span className="text-cyan-500">_</span>
      </h1>

      <style>{`
        @keyframes introFadeIn {
          0% { opacity: 0; filter: blur(20px); transform: translate(-50%, -50%) scale(1.5); }
          100% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
}