import React, { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import BizzWithlogo from "../assets/bizWithLogoNoBG.png";

const Header = ({ activeSection, isScrolled, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredSection, setHoveredSection] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePosition({ 
                x: e.clientX - rect.left, 
                y: e.clientY - rect.top 
            });
        };

        const nav = document.querySelector('nav');
        if (nav) {
            nav.addEventListener('mousemove', handleMouseMove);
            return () => nav.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const navigationSections = [
        { id: "home", label: "Home", icon: "" },
        { id: "about", label: "About", icon: "" },
        { id: "skills", label: "Skills", icon: "" },
        { id: "projects", label: "Projects", icon: "" },
        // { id: "experience", label: "Experience", icon: "💼" },
        { id: "contact", label: "Contact", icon: "" }
    ];

    const handleNavClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled 
                    ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-500/10" 
                    : "bg-transparent"
            }`}
            style={{
                backgroundImage: isScrolled ? `
                    radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 0.8}px, rgba(147, 51, 234, 0.03) 0%, transparent 50%)
                ` : 'none'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center py-6">
                    
                    {/* Enhanced Logo + Brand */}
                    <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollToSection('home')}>
                        {/* Logo container with glow effect */}
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            <div className="relative w-12 h-12 rounded-full border-2 border-cyan-400/50 backdrop-blur-sm bg-white/10 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-all duration-300">
                                {/* Placeholder for logo - using icon since we don't have access to the image */}
                                {/* <Zap size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" /> */}
                                <img src={BizzWithlogo} alt="BizWithMutti Logo" className="w-10 h-10 object-contain" />
                            </div>
                        </div>
                        
                        {/* Brand text with enhanced styling */}
                        <div className="hidden sm:block">
                            <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                                BizWith
                            </div>
                            <div className="text-xs text-cyan-400/70 font-medium -mt-1 group-hover:text-cyan-400 transition-colors">
                                Mutti Qureshi
                            </div>
                        </div>
                        
                        <span className="sr-only">BizWithMutti - Navigate to Home</span>
                    </div>

                    {/* Enhanced Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navigationSections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => handleNavClick(section.id)}
                                onMouseEnter={() => setHoveredSection(section.id)}
                                onMouseLeave={() => setHoveredSection(null)}
                                className={`group relative px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                                    activeSection === section.id
                                        ? "text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50"
                                        : "text-gray-300 hover:text-white border border-transparent hover:border-white/20"
                                }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Background glow effect */}
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 ${activeSection === section.id ? 'opacity-50' : ''}`}></div>
                                
                                {/* Content */}
                                <div className="relative flex items-center gap-2 font-medium">
                                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                        {section.icon}
                                    </span>
                                    {section.label}
                                </div>

                                {/* Active indicator */}
                                {activeSection === section.id && (
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                                )}

                                {/* Hover particles */}
                                {hoveredSection === section.id && (
                                    <>
                                        <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                                        <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
                                    </>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Enhanced Mobile Menu Button */}
                    <button 
                        className="md:hidden group relative p-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative">
                            {isMenuOpen ? (
                                <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-300" />
                            ) : (
                                <Menu size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                            )}
                        </div>
                    </button>
                </div>
            </div>

            {/* Enhanced Mobile Navigation */}
            <div className={`md:hidden transition-all duration-500 ${
                isMenuOpen 
                    ? "max-h-96 opacity-100" 
                    : "max-h-0 opacity-0 overflow-hidden"
            }`}>
                <div className="bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
                    <div className="px-6 py-6 space-y-2">
                        {navigationSections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => handleNavClick(section.id)}
                                className={`group relative w-full text-left px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                                    activeSection === section.id
                                        ? "text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30"
                                        : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                                }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Background glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                {/* Content */}
                                <div className="relative flex items-center gap-4">
                                    <span className="text-xl group-hover:scale-110 transition-transform">
                                        {section.icon}
                                    </span>
                                    <span className="font-medium text-lg">{section.label}</span>
                                    
                                    {activeSection === section.id && (
                                        <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                    )}
                                </div>

                                {/* Hover effect line */}
                                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating nav indicator for desktop */}
            <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        </nav>
    );
};

export default Header;