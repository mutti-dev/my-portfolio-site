const skills = {
  "AI & Machine Learning": [
    "TensorFlow",
    "PyTorch",
    "Computer Vision",
    "NLP",
    "Deep Learning",
    "Neural Networks",
    "Scikit-learn",
    "OpenCV",
  ],
  "Programming Languages": [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "R",
    "SQL",
    "Go",
  ],
  "Web Development": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Django",
    "FastAPI",
    "HTML5",
    "CSS3",
  ],
  "Mobile Development": [
    "React Native",
    "Flutter",
    "iOS Development",
    "Android Development",
    "Cross-platform",
    "Mobile UI/UX",
  ],
  "Databases & Cloud": [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Firebase",
  ],
  "Tools & Others": [
    "Git",
    "CI/CD",
    "Agile",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "Linux",
    "DevOps",
  ],
};

const projects = [
  {
    title: "AI-Powered Plant Disease Detection",
    description:
      "Advanced Python-Django application using ML and computer vision for automated plant disease identification with 90% accuracy.",
    tech: ["Python", "Django", "TensorFlow", "OpenCV", "Computer Vision"],
    category: "AI/ML",
    metrics: "90% Accuracy",
  },
  {
    title: "AI-Driven TB Detection Mobile App",
    description:
      "Mobile application for tuberculosis detection integrating machine learning algorithms optimized for mobile deployment.",
    tech: ["React Native", "TensorFlow Lite", "Computer Vision", "Mobile ML"],
    category: "AI/Mobile",
    metrics: "85% Detection Accuracy",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Dynamic real-time chat app supporting 500+ concurrent users with instant messaging and scalable architecture.",
    tech: ["Django", "WebSocket", "React Native", "Real-time Systems"],
    category: "Full Stack",
    metrics: "500+ Concurrent Users",
  },
  {
    title: "Full-Stack Inventory Management",
    description:
      "Comprehensive inventory system with real-time tracking, automated alerts, and optimized performance for large-scale data.",
    tech: ["React.js", "Node.js", "PostgreSQL", "RESTful APIs"],
    category: "Full Stack",
    metrics: "Enterprise Scale",
  },
  {
    title: "Automated CRM System",
    description:
      "Streamlined CRM system improving data handling for 10,000+ users with automated workflows and third-party integrations.",
    tech: ["Django", "Python", "PostgreSQL", "API Integration"],
    category: "Enterprise",
    metrics: "10,000+ Users",
  },
];

const experiences = [
  {
    title: "Full Stack Developer & AI Engineer",
    company: "Max Remind",
    period: "September 2024 - May 2024",
    achievements: [
      "Developed high-performance mobile apps with React Native and full-stack web solutions",
      "Trained ML models achieving 85-90% accuracy for healthcare and agriculture applications",
      "Improved application responsiveness by 35% and reduced development cycles by 1 week",
      "Built automated CRM system handling 10,000+ users",
    ],
  },
  // {
  //   title: "Forms Developer",
  //   company: "PlanStreet",
  //   period: "January 2023 - Present (Remote)",
  //   achievements: [
  //     "Led forms development team and streamlined customer support with AI-driven automation",
  //     "Reduced response times by 30% and increased user adoption by 40%",
  //     "Enhanced team productivity by 20% through strategic automation implementation",
  //     "Accelerated project implementation by 25% through technical requirement analysis",
  //   ],
  // },
];

export { skills, projects, experiences };
