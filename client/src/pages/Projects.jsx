import React, { useState, useEffect } from 'react';
import { FlaskConical, Network } from 'lucide-react';

const icons = [FlaskConical, Network];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio/projects')
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
    <section className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
          Research &amp; <span className="text-red-600">Projects</span>
        </h2>
        
        {loading ? (
          <div className="flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div></div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = icons[index % icons.length];
              return (
                <article key={project._id} className="group relative bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center bg-red-600/10 border border-red-600/20 text-red-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                    {project.highlight && <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-6">{project.highlight}</div>}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-[#141414] border border-gray-800 rounded-full text-xs font-semibold text-gray-300 group-hover:border-gray-700 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}