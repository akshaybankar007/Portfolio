import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks.jsx';

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
      <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative mt-20 md:mt-0">
        
        {/* Left Side: Content Column */}
        <div className="md:col-span-7 flex flex-col items-start justify-center order-2 md:order-1">
          <p className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Software Engineer</p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter mb-6 whitespace-nowrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">AKSHAY BANKAR</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mb-10 leading-relaxed text-justify">
            Software Engineer experienced in developing full stack web applications, architecting REST APIs, and delivering responsive user experiences using modern JavaScript technologies.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <Link to="/projects" className="px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)] relative z-20 rounded-lg">
              View Projects
            </Link>
            <a href="../public/Akshay_Bankar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold uppercase tracking-wider hover:border-cyan-500 hover:text-cyan-400 transition-all relative z-20 rounded-lg">
              View Resume
            </a>
          </div>

          <div className="relative z-20 w-full flex justify-start">
            <SocialLinks />
          </div>
        </div>

        {/* Right Side: Photo Column */}
        <div className="md:col-span-5 flex justify-center items-end order-1 md:order-2">
          <img
            src="/profile.png"
            alt="Akshay Bankar"
            className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:scale-105 hover:drop-shadow-[0_0_50px_rgba(34,211,238,0.3)] transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}