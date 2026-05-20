import { FlaskConical, Network } from 'lucide-react';
import { projects } from '../data/portfolio.js';

const icons = [FlaskConical, Network];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <h2 className="section-title">
          Research &amp; <span>Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = icons[index] ?? Network;

            return (
              <article className="project-card" key={project.title}>
                <div className="project-icon">
                  <Icon size={26} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-pub">{project.highlight}</div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
