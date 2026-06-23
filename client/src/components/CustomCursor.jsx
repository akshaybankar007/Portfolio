import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const isInteractive = e.target.tagName.toLowerCase() === 'a' || 
                            e.target.tagName.toLowerCase() === 'button' || 
                            e.target.closest('a') || 
                            e.target.closest('button');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none z-[9999]">
      {/* Inner precise dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        style={{ 
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isHovering ? 0 : 1})`,
          opacity: position.x === -100 ? 0 : 1
        }}
      ></div>
      {/* Outer ring */}
      <div 
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-500 rounded-full transition-all duration-300 ease-out flex items-center justify-center backdrop-invert-[0.1]"
        style={{ 
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isHovering ? 1.5 : 1})`,
          backgroundColor: isHovering ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
          opacity: position.x === -100 ? 0 : 1
        }}
      ></div>
    </div>
  );
}