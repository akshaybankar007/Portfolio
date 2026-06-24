import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks.jsx';
import { profile } from '../data/portfolio.js';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden group" 
      id="home"
    >
      {/* Dynamic Ambient Glow */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none z-0"
        style={{ background: `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.04), transparent 50%)` }}
      />

      {/* Grid wrapper splits layout on md screens and up */}
      <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative mt-20 md:mt-0">
        
        {/* Left Side: Content Column */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
          <p className="text-cyan-500 font-bold tracking-widest uppercase mb-4 pl-1">System Override // Initiated</p>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-6">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              THE FUTURE.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mb-10 leading-relaxed">
            I architect distributed systems and engineer high-concurrency web applications. Zero bloat. Maximum performance.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/projects" className="px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)] relative z-20">
              Execute Portfolio
            </Link>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold uppercase tracking-wider hover:border-cyan-500 hover:text-cyan-400 transition-all relative z-20">
              Parse Resume_
            </a>
          </div>

          <div className="pt-16 relative z-20">
            <SocialLinks />
          </div>
        </div>

        {/* Right Side: Photo Column */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <div className="relative group/img max-w-[320px] md:max-w-full w-full aspect-square border border-gray-800 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            {/* Corner Decorative Tech Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500 z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500 z-20 pointer-events-none"></div>
            
            {/* Interactive cyan overlay filter */}
            <div className="absolute inset-0 bg-cyan-500/10 mix-blend-color group-hover/img:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
            
            <img 
              src="/profile.jpg" 
              alt="Akshay Bankar" 
              className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}