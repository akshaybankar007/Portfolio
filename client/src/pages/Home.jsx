import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks.jsx';
import { profile } from '../data/portfolio.js';

export default function Home() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6" id="home">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start text-left space-y-6">
          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            Hi, I'm <span className="text-red-500 italic font-serif">Akshay</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            {profile.role.split(' ').map((word, i) => 
              word === 'MERN' || word === 'Developer' ? <span key={i} className="text-red-600">{word} </span> : word + ' '
            )}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Full Stack Developer specializing in React.js, Node.js, MongoDB, and high-concurrency backend systems. I build architectures that survive scale, not just bootcamps.
          </p>

          <SocialLinks />

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/contact" className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:-translate-y-1">
              Inquire
            </Link>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-transparent border-2 border-gray-700 hover:border-red-500 text-white font-bold rounded-lg transition-all hover:bg-red-500/10 hover:-translate-y-1">
              Resume
            </a>
          </div>
        </div>

        {/* Right Column (Photo) */}
        <div className="flex justify-center md:justify-end relative">
          <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-20 rounded-full w-[300px] h-[300px] m-auto"></div>
          <img 
            src="/Photo.png" 
            alt="Akshay Bankar" 
            className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-gray-800 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/350?text=Missing+Photo'; }}
          />
        </div>
        
      </div>
    </section>
  );
}