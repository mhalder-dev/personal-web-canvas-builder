import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-dots-white/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">MH</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Mithun Halder
          </h1>
          
          {/* Job Title */}
          <h2 className="text-xl md:text-2xl mb-6 text-blue-100 font-medium animate-fade-in">
            Software Engineer | Backend Developer
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Computer Science professional specializing in backend development, API integration, 
            and machine learning solutions. Passionate about bridging industry practices with academic research.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:mhalder201041@bscse.uiu.ac.bd"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+8801317801458"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mhalder007/"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/mhalder-dev"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Scroll Down Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;