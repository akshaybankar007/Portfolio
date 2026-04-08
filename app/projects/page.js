export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <h2 className="section-title">Research &amp; <span>Projects</span></h2>
        <div className="projects-grid">

          <div className="project-card">
            <div className="project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h3>Multimodal Deep Learning for Autoimmune Hepatitis Diagnosis</h3>
            <p>Diagnostic support system achieving 90%+ accuracy in classification using fused clinical and imaging data. Developed the frontend interface and collaborated on model architecture.</p>
            <div className="project-pub">Published · IRJET Vol. 12, Issue 10, October 2025</div>
            <div className="project-tags">
              <span>Python</span><span>Deep Learning</span><span>Multimodal AI</span><span>HTML/CSS</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253" />
              </svg>
            </div>
            <h3>High-Concurrency Distributed Web Crawler</h3>
            <p>Distributed crawler in Go that indexes 2M+ pages daily using goroutines for maximum CPU concurrency. Bloom filter on the URL frontier cuts RAM consumption by 55%.</p>
            <div className="project-pub">2M+ pages/day · 55% RAM reduction</div>
            <div className="project-tags">
              <span>Go</span><span>Goroutines</span><span>Bloom Filter</span><span>Distributed Systems</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}