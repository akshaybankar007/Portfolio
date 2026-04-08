export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="section-inner">
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>Software Engineering Intern</h3>
                  <span className="timeline-company">NVIDIA</span>
                </div>
                <span className="timeline-date">Jun 2025 – Aug 2025</span>
              </div>
              <p className="timeline-location">Bangalore, Karnataka</p>
              <ul className="timeline-points">
                <li>Optimized GPU-accelerated backend libraries in C++, improving data throughput by 22% for parallel processing workloads.</li>
                <li>Developed high-concurrency diagnostic tools to monitor kernel-level performance bottlenecks across distributed GPU clusters.</li>
                <li>Integrated automated testing frameworks using Python to validate hardware-abstraction layers, reducing regression bugs by 30%.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>Backend Development Intern</h3>
                  <span className="timeline-company">Persistent Systems</span>
                </div>
                <span className="timeline-date">Jan 2024 – May 2024</span>
              </div>
              <p className="timeline-location">Nagpur, Maharashtra</p>
              <ul className="timeline-points">
                <li>Architected scalable backend microservices in Java for a distributed enterprise healthcare platform, handling 50,000+ concurrent user requests.</li>
                <li>Optimized SQL query execution and database indexing, reducing data retrieval latency by 25% for high-traffic modules.</li>
                <li>Integrated a Redis-based caching layer, improving system responsiveness and reducing server load by 15%.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>Full Stack Web Development Intern</h3>
                  <span className="timeline-company">Anishree Technologies LLP</span>
                </div>
                <span className="timeline-date">May 2025 – Jun 2025</span>
              </div>
              <p className="timeline-location">Nagpur, Maharashtra</p>
              <ul className="timeline-points">
                <li>Engineered responsive frontend modules using HTML5 and CSS3, contributing to full-stack web application development workflow.</li>
                <li>Optimised static UI components, gaining end-to-end SDLC exposure across project structure, version control, and deployment practices.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>Computer Networking & Web Development Intern</h3>
                  <span className="timeline-company">Supersys Services</span>
                </div>
                <span className="timeline-date">Jan 2024 – Feb 2024</span>
              </div>
              <p className="timeline-location">Nagpur, Maharashtra</p>
              <ul className="timeline-points">
                <li>Developed static frontend web components using HTML and CSS; completed hands-on training in computer networking fundamentals.</li>
                <li>Analysed basic client-server architecture and network protocols, strengthening understanding of infrastructure and problem-solving in networked systems.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}