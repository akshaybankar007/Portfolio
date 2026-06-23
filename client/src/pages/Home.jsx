import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks.jsx';
import { profile } from '../data/portfolio.js';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center px-6 md:px-12 relative overflow-hidden" id="home">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full z-10 mt-20">
        <p className="text-cyan-500 font-bold tracking-widest uppercase mb-4 pl-1">System Override // Initiated</p>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter mb-6">
          BUILDING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            THE FUTURE.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mb-10 leading-relaxed">
          I architect distributed systems and engineer high-concurrency web applications. Zero bloat. Maximum performance.
        </p>
        
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/projects" className="px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            Execute Portfolio
          </Link>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold uppercase tracking-wider hover:border-cyan-500 hover:text-cyan-400 transition-all">
            Parse Resume_
          </a>
        </div>

        <div className="pt-20">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}