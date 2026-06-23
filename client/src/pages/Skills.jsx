import React, { useState, useEffect } from 'react';

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
              <div key={skillGroup._id || index} className="bg-[#0a0a0a] border border-gray-800 p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all group">
                <h3 className="text-cyan-500 font-mono text-sm uppercase mb-4 pb-2 border-b border-gray-800 group-hover:border-cyan-500/30 transition-colors">
                  ./{skillGroup.label.toLowerCase().replace(/ /g, '_')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.split(',').map((skill, i) => (
                    <span key={i} className="text-gray-300 text-sm bg-gray-900 px-3 py-1 border border-gray-800 group-hover:border-cyan-900 transition-colors">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}