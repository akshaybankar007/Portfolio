export const profile = {
  name: 'Akshay Bankar',
  role: 'MERN Stack Developer',
  email: 'akshaybankar076@gmail.com',
  phone: '+91 8552919882',
  location: 'Nagpur, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/akshay--bankar',
  instagram: 'https://instagram.com/akshayy__07_',
  github: 'https://github.com/akshaybankar007',
  resume: '/Akshay_Bankar_Resume.pdf',
};

export const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'NVIDIA',
    date: 'Jun 2025 - Aug 2025',
    location: 'Bangalore, Karnataka',
    points: [
      'Optimized GPU-accelerated backend libraries in C++, improving data throughput by 22% for parallel processing workloads.',
      'Developed high-concurrency diagnostic tools to monitor kernel-level performance bottlenecks across distributed GPU clusters.',
      'Integrated automated testing frameworks using Python to validate hardware-abstraction layers, reducing regression bugs by 30%.',
    ],
  },
  {
    title: 'Backend Development Intern',
    company: 'Persistent Systems',
    date: 'Jan 2024 - May 2024',
    location: 'Nagpur, Maharashtra',
    points: [
      'Architected scalable backend microservices in Java for a distributed enterprise healthcare platform, handling 50,000+ concurrent user requests.',
      'Optimized SQL query execution and database indexing, reducing data retrieval latency by 25% for high-traffic modules.',
      'Integrated a Redis-based caching layer, improving system responsiveness and reducing server load by 15%.',
    ],
  },
  {
    title: 'Full Stack Web Development Intern',
    company: 'Anishree Technologies LLP',
    date: 'May 2025 - Jun 2025',
    location: 'Nagpur, Maharashtra',
    points: [
      'Engineered responsive frontend modules using HTML5 and CSS3, contributing to full-stack web application development workflow.',
      'Optimised static UI components, gaining end-to-end SDLC exposure across project structure, version control, and deployment practices.',
    ],
  },
  {
    title: 'Computer Networking & Web Development Intern',
    company: 'Supersys Services',
    date: 'Jan 2024 - Feb 2024',
    location: 'Nagpur, Maharashtra',
    points: [
      'Developed static frontend web components using HTML and CSS; completed hands-on training in computer networking fundamentals.',
      'Analysed basic client-server architecture and network protocols, strengthening understanding of infrastructure and problem-solving in networked systems.',
    ],
  },
];

export const projects = [
  {
    title: 'Multimodal Deep Learning for Autoimmune Hepatitis Diagnosis',
    description:
      'Diagnostic support system achieving 90%+ accuracy in classification using fused clinical and imaging data. Developed the frontend interface and collaborated on model architecture.',
    highlight: 'Published - IRJET Vol. 12, Issue 10, October 2025',
    tags: ['Python', 'Deep Learning', 'Multimodal AI', 'HTML/CSS'],
  },
  {
    title: 'High-Concurrency Distributed Web Crawler',
    description:
      'Distributed crawler in Go that indexes 2M+ pages daily using goroutines for maximum CPU concurrency. Bloom filter on the URL frontier cuts RAM consumption by 55%.',
    highlight: '2M+ pages/day - 55% RAM reduction',
    tags: ['Go', 'Goroutines', 'Bloom Filter', 'Distributed Systems'],
  },
];

export const skills = [
  { label: 'Languages', items: 'Java, Go, JavaScript, TypeScript, SQL' },
  {
    label: 'MERN Stack',
    items: 'MongoDB, Express.js, React.js, Node.js, REST APIs',
  },
  {
    label: 'Backend & Infrastructure',
    items: 'Distributed Systems, High-Concurrency APIs, Microservices, Spring Boot',
  },
  {
    label: 'Cloud & DevOps',
    items: 'AWS, Docker, Kubernetes, CI/CD Pipelines, Linux',
  },
  { label: 'Frontend & Web', items: 'React.js, HTML5, CSS3, Tailwind' },
  { label: 'Tools', items: 'Git, GitHub, Postman, Figma, Jira' },
];
