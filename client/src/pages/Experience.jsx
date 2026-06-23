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
        console.error('Failed to fetch experiences:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section section-alt" id="experience">
      <div className="section-inner">
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        
        {loading ? (
          <p style={{ color: 'white', textAlign: 'center' }}>Loading your corporate servitude history...</p>
        ) : (
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience._id}>
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
                    {experience.points.map((point, i) => (
                      <li key={i}>{point}</li>
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