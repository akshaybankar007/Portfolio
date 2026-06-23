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
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 px-6 bg-[#020202]" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
          Technical <span className="text-red-600">Skills</span>
        </h2>

        {loading ? (
          <div className="flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div></div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <article key={skill._id} className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-2xl hover:border-red-600/30 hover:bg-[#0f0f0f] transition-all group">
                <span className="block text-xs font-black text-red-600 uppercase tracking-[0.2em] mb-4 group-hover:text-red-500">
                  {skill.label}
                </span>
                <p className="text-gray-300 font-medium leading-relaxed">
                  {skill.items}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}