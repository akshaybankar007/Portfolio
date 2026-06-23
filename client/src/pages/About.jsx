import React from 'react';

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 min-h-screen flex items-center relative overflow-hidden" id="about">
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto w-full z-10">
        <div className="mb-12 border-l-4 border-cyan-500 pl-6">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Identity<span className="text-cyan-500">_</span>
          </h2>
          <p className="text-gray-500 mt-2 font-mono text-sm">Target directory: /usr/local/bin/developer</p>
        </div>

        <div className="bg-[#0a0a0a] border border-gray-800 p-8 md:p-12 hover:border-cyan-500/30 transition-colors relative group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="font-mono text-gray-400 text-sm md:text-base leading-loose">
            <p className="text-cyan-400 mb-4">~> ./execute_biography.sh</p>
            <p className="mb-4">
              <span className="text-white">Log [01]:</span> Initializing Software Engineer sequence...<br />
              <span className="text-white">Log [02]:</span> Current phase: Mastering JavaScript mechanics before injecting the MERN stack protocol.<br />
              <span className="text-white">Log [03]:</span> Base parameters set in Nagpur, India.
            </p>
            <p className="mb-4">
              <span className="text-white">Objective:</span> Secure a high-impact engineering node at a software-based entity. I don't just write syntax; I engineer logic that scales, optimizes hardware constraints, and refuses to crash gracefully.
            </p>
            <p className="text-cyan-500 animate-pulse mt-8">_ Status: Awaiting deployment instructions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}