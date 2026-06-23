import React, { useState, useEffect } from 'react';

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
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 px-6 bg-[#050505]" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
          Work <span className="text-red-600">Experience</span>
        </h2>
        
        {loading ? (
          <div className="flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div></div>
        ) : (
          <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp) => (
              <article key={exp._id} className="relative pl-8 md:pl-12 group">
                <div className="absolute w-4 h-4 bg-black border-2 border-red-600 rounded-full -left-[9px] top-1.5 group-hover:bg-red-600 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all duration-300"></div>
                <div className="bg-[#0a0a0a] border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-gray-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="text-red-500 font-semibold tracking-wide">{exp.company}</span>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="block text-sm text-gray-500 font-medium">{exp.date}</span>
                      <span className="block text-xs text-gray-600 mt-1">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-700 before:rounded-full group-hover:before:bg-red-500/50 before:transition-colors">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}