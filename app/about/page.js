export const metadata = {
  title: 'About | Akshay Bankar',
  description: 'Software Engineer specializing in backend systems, distributed computing, and AI-integrated solutions.',
};

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
              I am a Software Engineer specializing in high-concurrency backend infrastructure, 
              distributed systems, and scalable AI solutions. I architect and build systems 
              designed to handle massive scale and strict performance requirements.
            </p>
            <p>
              My engineering track record spans developing GPU-accelerated C++ libraries at NVIDIA 
              and architecting enterprise-grade Java microservices at Persistent Systems. Beyond 
              core infrastructure, my independent research in multimodal deep learning has been 
              published in IRJET.
            </p>
            <p>
              With expertise across the development lifecycle—anchored by deep backend proficiency—I 
              deliver robust, production-ready architecture that prioritizes zero-downtime deployments, 
              fault tolerance, and optimized execution.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <span className="skill-label">Academic Foundation</span>
              <h3 className="detail-title">B.Tech in Computer Science</h3>
              <p className="detail-institution">Gurunanak Institute of Engineering and Technology, Nagpur</p>
              <p className="detail-meta">RTMNU · Class of 2026</p>
            </div>

            <div className="detail-item">
              <span className="skill-label">Engineering Focus</span>
              <p className="about-text-small">
                Designing and deploying high-performance, fault-tolerant backend systems for 
                enterprise environments. Leveraging deep expertise in Java, Go, and Distributed 
                Computing to resolve complex infrastructural bottlenecks and drive technical 
                excellence at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}