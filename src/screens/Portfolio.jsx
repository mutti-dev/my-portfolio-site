import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Menu, X, Brain, Code, Database, Smartphone } from 'lucide-react';
import { skills, projects, experiences } from '../data/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import bizwithLogo from "../assets/bizwithmutti_logo.png";
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


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



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header
        activeSection={activeSection}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      {/* <section id="experience" className="py-20">
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
      </section> */}

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
            <a href="mailto:contact@bizwithmutti.online" className="group bg-slate-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Mail className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">contact@bizwithmutti.online</p>
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
      <Footer />

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