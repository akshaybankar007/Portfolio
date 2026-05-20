import { experiences } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="section-inner">
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.company}-${experience.title}`}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{experience.title}</h3>
                    <span className="timeline-company">{experience.company}</span>
                  </div>
                  <span className="timeline-date">{experience.date}</span>
                </div>
                <p className="timeline-location">{experience.location}</p>
                <ul className="timeline-points">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
