import React, { useState, useEffect } from 'react';

const SkillCard = ({ skillGroup }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="bg-[#0a0a0a] border border-gray-800 p-6 hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden rounded-xl"
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{ background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.12), transparent 40%)` }}
      />

      <div className="relative z-10">
        <h3 className="text-cyan-500 font-mono text-sm uppercase mb-4 pb-2 border-b border-gray-800 group-hover:border-cyan-500/30 transition-colors">
          ./{skillGroup.label.toLowerCase().replace(/ /g, '_')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skillGroup.items.split(',').map((skill, i) => (
            <span key={i} className="text-gray-300 text-sm bg-[#030303] px-3 py-1 border border-gray-800 rounded-sm">
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio/skills')
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load skill matrix:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-32 px-6 md:px-12" id="skills">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 border-l-4 border-cyan-500 pl-6">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            System Arsenal
          </h2>
        </div>

        {loading ? (
           <div className="flex justify-center"><div className="animate-spin h-8 w-8 border-2 border-cyan-500 border-t-transparent"></div></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <SkillCard key={skillGroup._id || index} skillGroup={skillGroup} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}