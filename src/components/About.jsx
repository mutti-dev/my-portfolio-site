import React, { useState, useEffect, useRef } from "react";
import { Brain, Code, Database, Smartphone, Target, Zap, Users, Award } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
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

  const skills = [
    {
      icon: Brain,
      title: "AI & ML Expert",
      subtitle: "Computer Vision, Deep Learning, Neural Networks",
      gradient: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
      titleColor: "text-cyan-300",
      details: ["TensorFlow & PyTorch", "Computer Vision", "NLP & LLMs", "Deep Learning"]
    },
    {
      icon: Code,
      title: "Full Stack Dev",
      subtitle: "React, Django, Node.js, Mobile Apps",
      gradient: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
      titleColor: "text-purple-300",
      details: ["React & Next.js", "Django & FastAPI", "Node.js & Express", "RESTful APIs"]
    },
    {
      icon: Database,
      title: "Data Solutions",
      subtitle: "PostgreSQL, Analytics, ETL Processes",
      gradient: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
      titleColor: "text-green-300",
      details: ["PostgreSQL & MongoDB", "Data Analytics", "ETL Pipelines", "Cloud Databases"]
    },
    {
      icon: Smartphone,
      title: "Mobile Expert",
      subtitle: "React Native, Cross-platform, UI/UX",
      gradient: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400",
      titleColor: "text-orange-300",
      details: ["React Native", "Cross-platform", "Mobile UI/UX", "App Store Deploy"]
    }
  ];

  const stats = [
    { value: "2+", label: "Years Experience", icon: Target, color: "text-cyan-400" },
    { value: "90%", label: "ML Model Accuracy", icon: Zap, color: "text-purple-400" },
    { value: "500+", label: "Concurrent Users", icon: Users, color: "text-green-400" },
    { value: "15+", label: "Projects Delivered", icon: Award, color: "text-orange-400" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - About Text */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Main description with glassmorphism */}
            <div className="relative p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
              <div className="relative space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Results-driven <span className="text-cyan-400 font-semibold">AI Engineer</span> with expertise in 
                  <span className="text-purple-400 font-semibold"> Enterprise AI Solutions</span>. I specialize in building 
                  scalable applications that solve real-world problems using cutting-edge technology.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  My experience spans from training machine learning models with 
                  <span className="text-green-400 font-semibold"> 90% accuracy</span> to developing mobile applications supporting 
                  <span className="text-orange-400 font-semibold"> 500+ concurrent users</span>. I'm passionate about leveraging AI to create 
                  meaningful impact in healthcare, agriculture, and enterprise solutions.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className={`group relative p-6 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <IconComponent size={24} className={`${stat.color} group-hover:scale-110 transition-transform`} />
                      <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                const isActive = activeCard === index;
                
                return (
                  <div 
                    key={index}
                    className={`group relative p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 cursor-pointer hover:scale-105 ${
                      isActive 
                        ? `bg-gradient-to-br ${skill.gradient} ${skill.borderColor} border-opacity-60` 
                        : `bg-gradient-to-br ${skill.gradient} ${skill.borderColor} border-opacity-30 hover:border-opacity-50`
                    }`}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                    
                    <div className="relative">
                      <IconComponent 
                        className={`${skill.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`} 
                        size={48} 
                      />
                      
                      <h3 className={`text-xl font-bold mb-2 ${skill.titleColor} group-hover:text-white transition-colors`}>
                        {skill.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                        {skill.subtitle}
                      </p>

                      {/* Expandable details */}
                      <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pt-3 border-t border-white/10">
                          <div className="flex flex-wrap gap-2">
                            {skill.details.map((detail, detailIndex) => (
                              <span 
                                key={detailIndex}
                                className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/10"
                              >
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Floating particles */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/30 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-100"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;