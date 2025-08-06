import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Menu, X, Brain, Code, Database, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  const skills = {
    'AI & Machine Learning': ['Python', 'TensorFlow', 'OpenCV', 'scikit-learn', 'Computer Vision', 'CNN', 'XGBoost', 'Deep Learning'],
    'Frontend Development': ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Mobile UI/UX'],
    'Backend Development': ['Django', 'Node.js', 'Express.js', 'RESTful APIs', 'WebSocket', 'Python'],
    'Database & Cloud': ['PostgreSQL', 'MSSQL', 'Firebase', 'Supabase', 'AWS', 'Google Cloud Platform'],
    'Data Analytics': ['Power BI', 'Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis', 'ETL']
  };

  const projects = [
    {
      title: 'AI-Powered Plant Disease Detection',
      description: 'Advanced Python-Django application using ML and computer vision for automated plant disease identification with 90% accuracy.',
      tech: ['Python', 'Django', 'TensorFlow', 'OpenCV', 'Computer Vision'],
      category: 'AI/ML',
      metrics: '90% Accuracy'
    },
    {
      title: 'AI-Driven TB Detection Mobile App',
      description: 'Mobile application for tuberculosis detection integrating machine learning algorithms optimized for mobile deployment.',
      tech: ['React Native', 'TensorFlow Lite', 'Computer Vision', 'Mobile ML'],
      category: 'AI/Mobile',
      metrics: '85% Detection Accuracy'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Dynamic real-time chat app supporting 500+ concurrent users with instant messaging and scalable architecture.',
      tech: ['Django', 'WebSocket', 'React Native', 'Real-time Systems'],
      category: 'Full Stack',
      metrics: '500+ Concurrent Users'
    },
    {
      title: 'Full-Stack Inventory Management',
      description: 'Comprehensive inventory system with real-time tracking, automated alerts, and optimized performance for large-scale data.',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'RESTful APIs'],
      category: 'Full Stack',
      metrics: 'Enterprise Scale'
    },
    {
      title: 'Automated CRM System',
      description: 'Streamlined CRM system improving data handling for 10,000+ users with automated workflows and third-party integrations.',
      tech: ['Django', 'Python', 'PostgreSQL', 'API Integration'],
      category: 'Enterprise',
      metrics: '10,000+ Users'
    }
  ];

  const experiences = [
    {
      title: 'Full Stack Developer & AI Engineer',
      company: 'Max Remind',
      period: 'September 2024 - May 2024',
      achievements: [
        'Developed high-performance mobile apps with React Native and full-stack web solutions',
        'Trained ML models achieving 85-90% accuracy for healthcare and agriculture applications',
        'Improved application responsiveness by 35% and reduced development cycles by 1 week',
        'Built automated CRM system handling 10,000+ users'
      ]
    },
    {
      title: 'Business Analyst & Forms Team Lead',
      company: 'PlanStreet',
      period: 'January 2023 - Present (Remote)',
      achievements: [
        'Led forms development team and streamlined customer support with AI-driven automation',
        'Reduced response times by 30% and increased user adoption by 40%',
        'Enhanced team productivity by 20% through strategic automation implementation',
        'Accelerated project implementation by 25% through technical requirement analysis'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              MU
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-200 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 px-3 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fadeIn">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-cyan-400">MU</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slideUp">
            Mutti Ullah
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideUp delay-200">
            AI Engineer & Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed animate-slideUp delay-300">
            Building intelligent solutions with 2+ years of experience in AI/ML, full-stack development, and enterprise applications. 
            Specialized in computer vision, mobile apps, and scalable web solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slideUp delay-400">
            <a href="mailto:mutti0738@gmail.com" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-full transition-all duration-200 hover:scale-105">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="https://www.linkedin.com/in/mutti-qureshi" className="flex items-center gap-2 border border-gray-600 hover:border-cyan-400 px-6 py-3 rounded-full transition-all duration-200 hover:scale-105">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Results-driven Software Engineer with expertise in AI Agent Development and Enterprise AI Solutions. 
                I specialize in building scalable applications that solve real-world problems using cutting-edge technology.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My experience spans from training machine learning models with 90% accuracy to developing mobile applications 
                supporting 500+ concurrent users. I'm passionate about leveraging AI to create meaningful impact in healthcare, 
                agriculture, and enterprise solutions.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                  <div className="text-gray-400">ML Model Accuracy</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-6 rounded-xl border border-cyan-500/20">
                <Brain className="text-cyan-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">AI & ML Expert</h3>
                <p className="text-gray-400 text-sm">Computer Vision, Deep Learning, Neural Networks</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/20">
                <Code className="text-purple-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Full Stack Dev</h3>
                <p className="text-gray-400 text-sm">React, Django, Node.js, Mobile Apps</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/20">
                <Database className="text-green-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-green-400">Data Solutions</h3>
                <p className="text-gray-400 text-sm">PostgreSQL, Analytics, ETL Processes</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 rounded-xl border border-orange-500/20">
                <Smartphone className="text-orange-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-orange-400">Full Stack Mobile Expert</h3>
                <p className="text-gray-400 text-sm">React Native, Cross-platform, UI/UX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full text-sm hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-900/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="ml-2 px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-medium">
                    {project.metrics}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{exp.title}</h3>
                      <p className="text-xl text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on AI-driven solutions or full-stack applications? 
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:mutti0738@gmail.com" className="group bg-slate-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Mail className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">mutti0738@gmail.com</p>
            </a>

            <a href="tel:+923205004945" className="group bg-slate-900/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Phone className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 group-hover:text-purple-400 transition-colors">+92 320 5004945</p>
            </a>

            <a href="https://www.linkedin.com/in/mutti-qureshi" className="group bg-slate-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Linkedin className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 group-hover:text-blue-400 transition-colors">Connect with me</p>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Available for immediate opportunities in AI Engineering, Full Stack Development, and Software Engineering roles.
            </p>
            <p className="text-sm text-gray-500">
              Open to both on-site positions in Rawalpindi/Islamabad and remote opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:mutti0738@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mutti-qureshi" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Mutti Ullah. Built with love 💖.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;