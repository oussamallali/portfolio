import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, socialLinks } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="text-blue-400 text-lg font-medium">Hi, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl text-gray-300 mb-8 animate-slide-up animation-delay-200">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-600">
            <Button
              onClick={() => scrollToSection('#projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in animation-delay-800">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#projects')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;