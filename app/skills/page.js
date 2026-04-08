export const metadata = {
  title: 'Skills | Akshay Bankar',
  description: 'Technical skills and expertise in Software Engineering.',
};

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="section-inner">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>
        
        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-label">Languages</span>
            <p className="skill-items">Java, Go, JavaScript, TypeScript, SQL</p>
          </div>
          
          <div className="skill-card">
            <span className="skill-label">Backend & Infrastructure</span>
            <p className="skill-items">Distributed Systems, High-Concurrency APIs, Microservices, Spring Boot, Node.js</p>
          </div>
          
          <div className="skill-card">
            <span className="skill-label">Cloud & DevOps</span>
            <p className="skill-items">AWS, Docker, Kubernetes, CI/CD Pipelines, Linux</p>
          </div>
          
          <div className="skill-card">
            <span className="skill-label">Frontend & Web</span>
            <p className="skill-items">React.js, Next.js, HTML5, CSS3, Tailwind</p>
          </div>

          <div className="skill-card">
            <span className="skill-label">AI & Data</span>
            <p className="skill-items">Scalable AI Solutions, Vector Databases, Python, REST/gRPC</p>
          </div>

          <div className="skill-card">
            <span className="skill-label">Tools</span>
            <p className="skill-items">Git, GitHub, Postman, Figma, Jira</p>
          </div>
        </div>
      </div>
    </section>
  );
}