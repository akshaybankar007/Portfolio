import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const isInteractive = e.target.tagName.toLowerCase() === 'a' ||  e.target.tagName.toLowerCase() === 'button' ||  e.target.closest('a') || e.target.closest('button');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);


  //this is the cursor customisation room
  return (
    <div className="pointer-events-none z-9999 hidden md:block">

      {/* Inner dot */}
      <div 
        className="fixed z-9999 top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(34,211,238,0.8)] pointer-events-none"
        style={{ 
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0) scale(${isHovering ? 0 : 1})`,
          opacity: position.x === -100 ? 0 : 1
        }}
      ></div>

      {/* Outer ring */}
      <div 
        className="fixed z-9999 top-0 left-0 w-4.5 h-4.5 border border-cyan-500 rounded-full transition-all duration-300 ease-out flex items-center justify-center backdrop-invert-[0.1] pointer-events-none"
        style={{ 
          transform: `translate3d(${position.x - 9}px, ${position.y - 9}px, 0) scale(${isHovering ? 1.5 : 1})`,
          opacity: position.x === -100 ? 0 : 1
        }}
      ></div>
    </div>
  );
}