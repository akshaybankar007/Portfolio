import React from 'react';

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="section-inner">
        <h2 className="section-title">
          ABOUT <span>ME</span>
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a Software Engineer specializing in high-concurrency backend
              infrastructure, distributed systems, and scalable MERN stack
              applications.
            </p>
            <p>
              My engineering track record spans developing GPU-accelerated C++
              libraries at NVIDIA and architecting enterprise-grade Java
              microservices at Persistent Systems. I also build production-ready
              web applications with MongoDB, Express, React, and Node.js.
            </p>
            <p>
              With expertise across the development lifecycle, I deliver robust
              architecture that prioritizes performance, clean APIs, and
              maintainable user experiences.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <span className="skill-label">Academic Foundation</span>
              <h3 className="detail-title">B.Tech in Computer Science</h3>
              <p className="detail-institution">
                Gurunanak Institute of Engineering and Technology, Nagpur
              </p>
              <p className="detail-meta">RTMNU - Class of 2026</p>
            </div>

            <div className="detail-item">
              <span className="skill-label">Engineering Focus</span>
              <p className="about-text-small">
                Designing high-performance backend systems, REST APIs, and
                database-backed web products with strong frontend usability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
