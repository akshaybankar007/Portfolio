import React from 'react';

export default function About() {
  return (
    <section className="py-24 px-6 bg-black" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
          About <span className="text-red-600">Me</span>
        </h2>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              I am a Software Engineer specializing in high-concurrency backend infrastructure, distributed systems, and scalable MERN stack applications.
            </p>
            <p>
              My engineering track record spans developing GPU-accelerated C++ libraries at NVIDIA and architecting enterprise-grade Java microservices at Persistent Systems. I also build production-ready web applications with MongoDB, Express, React, and Node.js.
            </p>
            <p>
              With expertise across the development lifecycle, I deliver robust architecture that prioritizes performance, clean APIs, and maintainable user experiences.
            </p>
          </div>

          <div className="md:col-span-5 space-y-6">
            <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-red-600/30 transition-colors">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest mb-2 block">Academic Foundation</span>
              <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Computer Science</h3>
              <p className="text-gray-400 font-medium mb-4">
                Gurunanak Institute of Engineering and Technology, Nagpur
              </p>
              <div className="inline-block px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-sm font-bold text-red-500">
                RTMNU - Class of 2026
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-red-600/30 transition-colors">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest mb-2 block">Engineering Focus</span>
              <p className="text-gray-300 leading-relaxed">
                Designing high-performance backend systems, REST APIs, and database-backed web products with strong frontend usability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}