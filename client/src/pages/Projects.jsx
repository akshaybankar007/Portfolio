import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/portfolio/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-32 px-6 md:px-12" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 border-l-4 border-cyan-500 pl-6">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Compiled Work
          </h2>
          <p className="text-gray-500 mt-2 font-mono text-sm">Target directory: /usr/local/projects</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center"><div className="animate-spin h-10 w-10 border-4 border-cyan-500 border-t-transparent"></div></div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article key={project._id} className="bg-[#0a0a0a] border border-gray-800 p-8 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/30 transition-all"></div>
                
                <div className="z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{project.description}</p>
                </div>
                
                <div className="mt-8 z-10">
                  {project.highlight && <div className="text-cyan-500 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/30 inline-block px-3 py-1 bg-cyan-500/10">{project.highlight}</div>}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-900 border border-gray-800 text-xs font-mono text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}