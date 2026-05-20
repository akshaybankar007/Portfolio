import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="section-inner">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.label}>
              <span className="skill-label">{skill.label}</span>
              <p className="skill-items">{skill.items}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
