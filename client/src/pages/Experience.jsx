import React, { useState, useEffect } from 'react';

const ExperienceCard = ({ exp }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030303] bg-gray-900 group-hover:bg-cyan-500 text-cyan-500 group-hover:text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-20">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      
      <div 
        onMouseMove={handleMouseMove}
        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0a0a0a] p-6 border border-gray-800 group-hover:border-cyan-500/50 transition-colors relative overflow-hidden rounded-xl z-10"
      >
        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{ background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.1), transparent 40%)` }}
        />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="font-bold text-white text-lg">{exp.title}</h3>
            <time className="font-mono text-cyan-500 text-xs">{exp.date}</time>
          </div>
          <div className="text-gray-500 text-sm font-semibold mb-4 uppercase tracking-wider">{exp.company} // {exp.location}</div>
          <ul className="list-disc list-outside ml-4 text-gray-400 text-sm space-y-2">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio/experiences')
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load experience modules:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-32 px-6 md:px-12" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-l-4 border-cyan-500 pl-6">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Runtime History
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center"><div className="animate-spin h-8 w-8 border-2 border-cyan-500 border-t-transparent"></div></div>
        ) : (
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp._id || index} exp={exp} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}