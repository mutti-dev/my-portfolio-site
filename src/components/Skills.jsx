import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code, Brain, Database, Smartphone, Cloud, Palette, ChevronRight, Star, Zap, Target } from "lucide-react";
import { skills } from "../data/data";


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const sectionRef = useRef(null);


  
  const categoryIcons = {
    "AI & Machine Learning": Brain,
    "Programming Languages": Code,

    "Mobile Development": Smartphone,
    "Databases & Cloud": Cloud,
    "Tools & Others": Palette
  };

  const categoryColors = {
    "AI & Machine Learning": { bg: "from-cyan-600/20 to-blue-600/20", border: "border-cyan-500/30", text: "text-cyan-400" },
    "Programming Languages": { bg: "from-purple-600/20 to-pink-600/20", border: "border-purple-500/30", text: "text-purple-400" },
    "Web Development": { bg: "from-green-600/20 to-emerald-600/20", border: "border-green-500/30", text: "text-green-400" },
    "Mobile Development": { bg: "from-orange-600/20 to-red-600/20", border: "border-orange-500/30", text: "text-orange-400" },
    "Databases & Cloud": { bg: "from-blue-600/20 to-indigo-600/20", border: "border-blue-500/30", text: "text-blue-400" },
    "Tools & Others": { bg: "from-pink-600/20 to-rose-600/20", border: "border-pink-500/30", text: "text-pink-400" }
  };

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

  return (
    <section ref={sectionRef} id="skills" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => {
            const IconComponent = categoryIcons[category] || Code;
            const colors = categoryColors[category];
            const isHovered = hoveredCategory === index;
            
            return (
              <div
                key={category}
                className={`group relative p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                  isHovered 
                    ? `bg-gradient-to-br ${colors.bg} ${colors.border} border-opacity-60` 
                    : `bg-gradient-to-br ${colors.bg} ${colors.border} border-opacity-30 hover:border-opacity-50`
                } ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.bg} rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border backdrop-blur-sm`}>
                      <IconComponent className={`${colors.text} group-hover:scale-110 transition-transform duration-300`} size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.text} group-hover:text-white transition-colors`}>
                        {category}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className={`w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                        <span className="text-gray-400 text-sm">{skillList.length} technologies</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills grid */}
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`group/skill relative px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${
                          isVisible ? 'animate-slideUp' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${index * 200 + skillIndex * 50}ms` }}
                      >
                        <span className="relative z-10 text-gray-300 group-hover/skill:text-white transition-colors">
                          {skill}
                        </span>
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity`}></div>
                        
                        {/* Hover particles */}
                        <div className="absolute -top-1 -right-1 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover/skill:opacity-100 animate-ping"></div>
                      </span>
                    ))}
                  </div>

                  {/* Category stats */}
                  <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Target size={16} className={colors.text} />
                      <span>Proficiency Level: Expert</span>
                    </div>
                    <ChevronRight className={`${colors.text} group-hover:translate-x-1 transition-transform`} size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Skills;