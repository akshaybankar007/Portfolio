import React, { useState } from 'react';

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="py-32 px-6 md:px-12 min-h-screen flex items-center relative overflow-hidden" id="about">
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto w-full z-10">
        <div className="mb-12 border-l-4 border-cyan-500 pl-6">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            About Me<span className="text-cyan-500">_</span>
          </h2>
        </div>

        <div 
          onMouseMove={handleMouseMove}
          className="bg-[#0a0a0a] border border-gray-800 p-8 md:p-12 hover:border-cyan-500/50 transition-colors relative group rounded-xl overflow-hidden"
        >
          {/* Spotlight Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            style={{ background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.08), transparent 40%)` }}
          />

          <div className="text-gray-400 text-sm md:text-base leading-loose font-mono relative z-10">
            <p className="mb-6 border-b border-gray-800 pb-4">
              <span className="text-cyan-500 font-bold uppercase tracking-wider">Name:</span> <span className="text-white">Akshay Yogeshwar Bankar</span><br />
              <span className="text-cyan-500 font-bold uppercase tracking-wider">Base:</span> <span className="text-white">Nagpur, Maharashtra</span><br />
              <span className="text-cyan-500 font-bold uppercase tracking-wider">Education:</span> <span className="text-white">B.Tech in CSE, GNIET (2022-2026)</span>
            </p>
            
            <p className="mb-4">
              I am a Software Engineering student heavily focused on transitioning into full-stack architecture. My current active loop involves mastering JavaScript mechanics before fully deploying into the MERN stack (MongoDB, Express.js, React, Node.js).
            </p>
            <p className="mb-4">
              Beyond standard web interfaces, I build data-driven solutions like LuminaDx, an AI-assisted multimodal diagnostic framework. 
            </p>
            <p className="mt-8 text-white font-bold">
              Current Objective: Secure a high-impact Software Engineer role to build scalable systems that don't crash.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}