import React, { useEffect, useState } from 'react';

export default function IntroScreen({ onComplete }) {
  const [phase, setPhase] = useState('scattered');
  const text = "AKSHAY BANKAR";

  // Generate fixed random positions for each letter once on mount
  const [randomTransforms] = useState(() =>
    text.split('').map(() => ({
      x: (Math.random() - 0.5) * 1000,
      y: (Math.random() - 0.5) * 1000,
      rot: (Math.random() - 0.5) * 360,
    }))
  );

  useEffect(() => {
    // Phase 1: Snap letters together
    const t1 = setTimeout(() => setPhase('arranged'), 100);
    // Phase 2: Move the assembled text to the Navbar
    const t2 = setTimeout(() => setPhase('moving'), 1800);
    // Phase 3: Unmount
    const t3 = setTimeout(() => onComplete(), 3000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#030303] flex items-center justify-center overflow-hidden pointer-events-none">
      <h1 
        className={`absolute font-bold text-white transition-all duration-[1200ms] ease-[cubic-bezier(0.87,0,0.13,1)] flex items-center whitespace-pre
          ${phase === 'moving' 
            ? 'top-[18px] left-[24px] md:left-[calc(50%-576px+24px)] translate-x-0 translate-y-0 text-2xl tracking-widest' 
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-7xl tracking-widest'
          }
        `}
      >
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="inline-block transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              transform: phase === 'scattered' 
                ? `translate(${randomTransforms[i].x}px, ${randomTransforms[i].y}px) rotate(${randomTransforms[i].rot}deg) scale(0)` 
                : 'translate(0px, 0px) rotate(0deg) scale(1)',
              opacity: phase === 'scattered' ? 0 : 1,
            }}
          >
            {char}
          </span>
        ))}
        <span className={`text-cyan-500 transition-opacity duration-1000 ${phase === 'scattered' ? 'opacity-0' : 'opacity-100'}`}>
          _
        </span>
      </h1>
    </div>
  );
}