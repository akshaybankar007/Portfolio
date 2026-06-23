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
        console.error('Failed to fetch skills:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section section-alt" id="skills">
      <div className="section-inner">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        {loading ? (
          <p style={{ color: 'white', textAlign: 'center' }}>Loading buzzwords...</p>
        ) : (
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill._id}>
                <span className="skill-label">{skill.label}</span>
                <p className="skill-items">{skill.items}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}