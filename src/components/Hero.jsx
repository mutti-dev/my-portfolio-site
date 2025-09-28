import React, { useState, useEffect } from "react";
import { Mail, ExternalLink, ChevronDown, Cpu, Code, Brain } from "lucide-react";
import BizzWithlogo from "../assets/bizWithLogoNoBG.png";


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="mt-20 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900"
      style={{
        backgroundImage: `
          radial-gradient(circle at ${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at ${mousePosition.x * 0.2}px ${mousePosition.y * 0.2}px, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
        `
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Animated tech lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
        {/* Left content */}
        <div className={`text-center md:text-left max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Name with enhanced typography */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Mutti Qureshi
            </span>
            {/* Subtle glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl -z-10"></div>
          </h1>

          {/* Subheadline with glassmorphism */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg"></div>
            <p className="relative text-2xl md:text-3xl font-semibold text-white/90 py-3 px-6 border border-white/10 rounded-lg backdrop-blur-sm bg-white/5">
              AI Engineer & Full Stack Developer
            </p>
          </div>

          {/* Enhanced tagline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            Building <span className="text-cyan-400 font-semibold">intelligent</span> and 
            <span className="text-purple-400 font-semibold"> scalable</span> applications with cutting-edge 
            AI/ML, computer vision, and enterprise-grade solutions.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <button
              onClick={() => window.open('mailto:mutti.ullah@bizwithmutti.online', '_blank')}
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-100 group-hover:opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              <Mail size={20} className="relative z-10" />
              <span className="relative z-10 font-semibold">Get In Touch</span>
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden border border-gray-500/30 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:scale-105 hover:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <ExternalLink size={20} className="relative z-10 text-purple-400" />
              <span className="relative z-10 font-semibold text-white">View Projects</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("about")}
              className="group flex flex-col items-center gap-2 text-cyan-400/70 hover:text-cyan-300 transition-all duration-300 focus:outline-none"
              aria-label="Scroll to About section"
            >
              <span className="text-sm font-medium opacity-70 group-hover:opacity-100">Scroll Down</span>
              <ChevronDown size={24} className="animate-bounce" />
            </button>
          </div>
        </div>

        {/* Right content - 3D AI Tech Illustration */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          
          {/* Main container with enhanced glassmorphism */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-2xl animate-pulse"></div>
            
            {/* Main circular container */}
            <div className="relative w-full h-full rounded-full border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] shadow-2xl overflow-hidden">
              
              {/* Inner tech elements */}
              <div className="absolute inset-8 rounded-full border border-cyan-400/20 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full border border-purple-400/20 flex items-center justify-center">
                  
                  {/* Central AI brain icon */}
                  <div className="relative">
                    {/* <Brain size={64} className="text-cyan-400 animate-pulse" /> */}
                    <img src={BizzWithlogo} alt="BizWithMutti Logo" className="w-86 h-86 object-contain animate-pulse" />
                    <div className="absolute -inset-4 bg-cyan-400/20 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Orbiting tech icons */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    <Cpu size={32} className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-purple-400" />
                    <Code size={32} className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-400" />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-pink-400 rounded rotate-45"></div>
                  </div>
                </div>
              </div>
              
              {/* Animated particles */}
              <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute top-32 right-16 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
              <div className="absolute bottom-24 left-16 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
              <div className="absolute bottom-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
              
              {/* Data flow lines */}
              <div className="absolute top-1/2 left-4 w-16 h-px bg-gradient-to-r from-transparent to-cyan-400/50 animate-pulse"></div>
              <div className="absolute top-1/2 right-4 w-16 h-px bg-gradient-to-l from-transparent to-purple-400/50 animate-pulse delay-1000"></div>
              <div className="absolute left-1/2 top-4 h-16 w-px bg-gradient-to-b from-transparent to-blue-400/50 animate-pulse delay-500"></div>
              <div className="absolute left-1/2 bottom-4 h-16 w-px bg-gradient-to-t from-transparent to-pink-400/50 animate-pulse delay-1500"></div>
            </div>
            
            {/* Floating info cards */}
            <div className="absolute -top-4 -left-8 bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg px-3 py-1.5 transform rotate-12">
              <span className="text-xs text-cyan-300 font-medium">AI/ML</span>
            </div>
            <div className="absolute -bottom-4 -right-8 bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 rounded-lg px-3 py-1.5 transform -rotate-12">
              <span className="text-xs text-purple-300 font-medium">Full Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;