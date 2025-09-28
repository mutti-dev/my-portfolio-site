import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Heart, Zap, Code, Coffee, Rocket } from "lucide-react";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [currentYear] = useState(new Date().getFullYear());
  const [animatedIcons, setAnimatedIcons] = useState([]);

  useEffect(() => {
    // Create floating animation icons
    const icons = [Code, Coffee, Rocket, Zap];
    const positions = [];
    for (let i = 0; i < 8; i++) {
      positions.push({
        Icon: icons[Math.floor(Math.random() * icons.length)],
        left: Math.random() * 100,
        delay: Math.random() * 3000,
        duration: 3000 + Math.random() * 2000
      });
    }
    setAnimatedIcons(positions);
  }, []);

  const socialLinks = [
    {
      href: "mailto:contact@bizwithmutti.online",
      icon: Mail,
      label: "Email",
      color: "hover:text-cyan-400",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "hover:border-cyan-400/50"
    },
    {
      href: "https://www.linkedin.com/in/mutti-qureshi",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgGradient: "from-blue-500/20 to-blue-600/20",
      borderColor: "hover:border-blue-400/50"
    },
    {
      href: "https://github.com/mutti-source",
      icon: Github,
      label: "GitHub",
      color: "hover:text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "hover:border-purple-400/50"
    }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-4 left-20 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-8 right-32 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        {/* Animated floating icons */}
        {animatedIcons.map((item, index) => (
          <div
            key={index}
            className="absolute opacity-10 pointer-events-none"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}ms`,
              animationDuration: `${item.duration}ms`
            }}
          >
            <item.Icon size={20} className="text-cyan-400 animate-bounce" />
          </div>
        ))}
        
        {/* Top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-12">
        
        {/* Main content container */}
        <div className="text-center space-y-8">
          
          {/* Social links section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                const isHovered = hoveredSocial === index;
                
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.borderColor} focus:outline-none focus:ring-2 focus:ring-cyan-400/50`}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={`Connect on ${social.label}`}
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${social.bgGradient} rounded-2xl blur opacity-0 group-hover:opacity-60 transition-all duration-300`}></div>
                    
                    {/* Icon container */}
                    <div className="relative">
                      <IconComponent 
                        size={28} 
                        className={`text-gray-400 ${social.color} group-hover:scale-110 transition-all duration-300`}
                      />
                      
                      {/* Floating particles on hover */}
                      {isHovered && (
                        <>
                          <div className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                          <div className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
                        </>
                      )}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      {social.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800/90 rotate-45 border-r border-b border-white/20"></div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Divider with animation */}
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-cyan-400/50"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-400/50"></div>
          </div>

          {/* Copyright section with enhanced styling */}
          <div className="space-y-4">
            {/* Logo and copyright */}
            <div className="flex items-center justify-center gap-3 text-gray-400">
              {/* Logo container */}
              <div className="relative">
                <div className="w-8 h-8 rounded-full border-2 border-cyan-400/50 backdrop-blur-sm bg-white/10 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                  <Zap size={16} className="text-cyan-400" />
                </div>
                <div className="absolute -inset-1 bg-cyan-400/20 rounded-full blur opacity-50 animate-pulse"></div>
              </div>
              
              <span className="text-sm font-medium">
                © {currentYear} Mutti Ullah. Built with 
                <Heart size={16} className="inline mx-1 text-red-400 animate-pulse" />
                and lots of
                <Coffee size={16} className="inline mx-1 text-amber-400" />
              </span>
            </div>

            {/* Tech stack indicator */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Code size={14} className="text-cyan-400/70" />
              <span>Powered by React & TailwindCSS</span>
              <Rocket size={14} className="text-purple-400/70" />
            </div>

            {/* Status indicator */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-8 flex justify-center space-x-8">
          <div className="w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
          <div className="w-px h-6 bg-gradient-to-b from-purple-400/50 to-transparent"></div>
          <div className="w-px h-4 bg-gradient-to-b from-pink-400/50 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;