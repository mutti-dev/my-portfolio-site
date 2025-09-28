import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, MapPin, Clock, Send, MessageCircle, Calendar, Globe, Zap, Target, Star } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
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

    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      observer.disconnect();
      clearInterval(timeInterval);
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Drop me a line",
      value: "contact@bizwithmutti.online",
      href: "mailto:contact@bizwithmutti.online",
      color: { bg: "from-cyan-600/20 to-blue-600/20", border: "border-cyan-500/30", text: "text-cyan-400", hover: "hover:border-cyan-500/60" },
      description: "Best for detailed project discussions"
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "Let's talk directly",
      value: "+92 320 5004945",
      href: "tel:+923205004945",
      color: { bg: "from-purple-600/20 to-pink-600/20", border: "border-purple-500/30", text: "text-purple-400", hover: "hover:border-purple-500/60" },
      description: "Available 9 AM - 6 PM PKT"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Professional network",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/mutti-qureshi",
      color: { bg: "from-blue-600/20 to-indigo-600/20", border: "border-blue-500/30", text: "text-blue-400", hover: "hover:border-blue-500/60" },
      description: "View my professional journey"
    }
  ];

  const availability = {
    status: "Available",
    location: "Rawalpindi, Pakistan",
    timezone: "PKT (UTC+5)",
    workingHours: "9 AM - 6 PM",
    responseTime: "< 24 hours"
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'Asia/Karachi',
      hour12: true 
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
      style={{
        backgroundImage: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 0.8}px, rgba(147, 51, 234, 0.03) 0%, transparent 50%)
        `
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Animated connection lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on <span className="text-cyan-400 font-semibold">AI-driven solutions</span> or 
            <span className="text-purple-400 font-semibold"> full-stack applications</span>? 
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Contact methods */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                const isHovered = hoveredCard === index;
                
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`group relative p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] ${
                      isHovered 
                        ? `bg-gradient-to-br ${method.color.bg} ${method.color.border} border-opacity-60` 
                        : `bg-gradient-to-br ${method.color.bg} ${method.color.border} border-opacity-30 ${method.color.hover}`
                    } ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.color.bg} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    
                    <div className="relative text-center">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`inline-flex p-4 rounded-2xl ${method.color.bg} ${method.color.border} border backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`${method.color.text}`} size={32} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                        {method.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors">
                        {method.subtitle}
                      </p>
                      
                      <p className={`${method.color.text} font-medium mb-4 group-hover:text-white transition-colors`}>
                        {method.value}
                      </p>
                      
                      <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                        {method.description}
                      </p>

                      {/* Hover particles */}
                      {isHovered && (
                        <>
                          <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                          <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
                        </>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability sidebar */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] h-fit">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Currently Available</h3>
              </div>

              {/* Availability info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-cyan-400" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-xs text-gray-400">{availability.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Clock size={18} className="text-purple-400" />
                  <div>
                    <p className="text-sm font-medium">Local Time</p>
                    <p className="text-xs text-gray-400">{formatTime(currentTime)} {availability.timezone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <MessageCircle size={18} className="text-green-400" />
                  <div>
                    <p className="text-sm font-medium">Response Time</p>
                    <p className="text-xs text-gray-400">{availability.responseTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Globe size={18} className="text-blue-400" />
                  <div>
                    <p className="text-sm font-medium">Open to</p>
                    <p className="text-xs text-gray-400">Remote & On-site work</p>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-cyan-400">24h</div>
                    <div className="text-xs text-gray-400">Response</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-400">100%</div>
                    <div className="text-xs text-gray-400">Delivery</div>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-6">
                <a
                  href="mailto:contact@bizwithmutti.online"
                  className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-90 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                  <Send size={20} className="relative z-10" />
                  <span className="relative z-10 font-semibold">Start a Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] max-w-4xl mx-auto">
            
            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Target size={20} className="text-green-400" />
                <h3 className="text-xl font-bold text-white">Open to Opportunities</h3>
              </div>
              
              <p className="text-gray-300 mb-4 text-lg">
                Available for immediate opportunities in <span className="text-cyan-400 font-semibold">AI Engineering</span>, 
                <span className="text-purple-400 font-semibold"> Full Stack Development</span>, and 
                <span className="text-pink-400 font-semibold"> Software Engineering</span> roles.
              </p>
              
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Remote-first</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-cyan-400" />
                  <span>Full-time preferred</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-purple-400" />
                  <span>Immediate start</span>
                </div>
              </div>
            </div>
          </div>
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

export default Contact;