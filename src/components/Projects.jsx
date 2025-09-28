import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code, Brain, Database, Smartphone, Cloud, Palette, ChevronRight, Star, Zap, Target } from "lucide-react";
import { projects } from "../data/data";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      "AI/ML": { bg: "from-cyan-600/20 to-blue-600/20", border: "border-cyan-500/30", text: "text-cyan-400" },
      "Mobile App": { bg: "from-orange-600/20 to-red-600/20", border: "border-orange-500/30", text: "text-orange-400" },
      "IoT/AI": { bg: "from-green-600/20 to-emerald-600/20", border: "border-green-500/30", text: "text-green-400" },
      "Web App": { bg: "from-purple-600/20 to-pink-600/20", border: "border-purple-500/30", text: "text-purple-400" },
      "NLP/AI": { bg: "from-blue-600/20 to-indigo-600/20", border: "border-blue-500/30", text: "text-blue-400" },
      "Blockchain": { bg: "from-amber-600/20 to-yellow-600/20", border: "border-amber-500/30", text: "text-amber-400" }
    };
    return colors[category] || colors["Web App"];
  };

  return (
    <section ref={sectionRef} id="projects" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = getCategoryColor(project.category);
            const isHovered = hoveredProject === index;
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] cursor-pointer ${
                  isHovered 
                    ? `bg-gradient-to-br ${colors.bg} ${colors.border} border-opacity-60` 
                    : `bg-gradient-to-br ${colors.bg} ${colors.border} border-opacity-30 hover:border-opacity-50`
                } ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.bg} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  {/* Header badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium border ${colors.border}`}>
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-400">Featured</span>
                    </div>
                  </div>

                  {/* Metrics badge */}
                  <div className="mb-4">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium text-white">
                      📊 {project.metrics}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Impact metric */}
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <Zap size={16} className={colors.text} />
                    <span className="text-gray-400">Impact: </span>
                    <span className={colors.text + " font-medium"}>{project.impact}</span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className={`px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300 hover:bg-white/20 transition-all duration-200 ${
                          isVisible ? 'animate-slideUp' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${index * 150 + techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-105">
                      <ExternalLink size={16} />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-105">
                      <Github size={16} />
                      Code
                    </button>
                  </div>

                  {/* Floating particles */}
                  {isHovered && (
                    <>
                      <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};


export default Projects;