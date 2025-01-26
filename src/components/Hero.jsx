import React from "react";
import img from '../assets/homeImg.png';
import CV from '../assets/Sahan Kavishka-CV.pdf';
import { Instagram, Github, Linkedin, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/yourprofile",
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram Profile",
      hoverColor: "hover:text-pink-300",
    },
    {
      href: "https://github.com/IT22233530",
      icon: <Github className="w-6 h-6" />,
      label: "GitHub Profile",
      hoverColor: "hover:text-gray-300",
    },
    {
      href: "https://www.linkedin.com/in/sahan-kavishka-62652a288",
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn Profile",
      hoverColor: "hover:text-blue-300",
    },
  ];

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
        bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-500 text-white 
        px-6 py-20 md:px-12 lg:px-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left 
        animate-[fadeIn_1s_ease-in]">
        <div className="space-y-4">
          <span className="inline-block text-sm md:text-base text-blue-200 
            font-medium tracking-wider uppercase">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold 
            tracking-tight leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-white to-blue-200 
              bg-clip-text text-transparent">
              Sahan Kavishka
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Software Engineer | Web Developer
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 
          justify-center md:justify-start">
          <button
            onClick={handleViewWork}
            className="group px-6 py-3 bg-white text-indigo-600 font-semibold 
              rounded-lg shadow-lg hover:bg-indigo-50 transform hover:scale-105 
              transition-all duration-300 flex items-center gap-2 
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 
              focus:ring-offset-indigo-600"
            aria-label="View my work"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={CV}
            download="Sahan-Kavishka-CV.pdf"
            className="group px-6 py-3 bg-indigo-700 text-white font-semibold 
              rounded-lg shadow-lg hover:bg-indigo-800 transform hover:scale-105 
              transition-all duration-300 flex items-center gap-2
              focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 
              focus:ring-offset-indigo-600"
            aria-label="Download CV"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </a>
        </div>

        <div className="flex justify-center md:justify-start gap-6 pt-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform hover:scale-110 transition-all duration-300 
                ${link.hoverColor}`}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mt-12 md:mt-10 flex justify-center 
        animate-[slideIn_1s_ease-out]">
        <img
          src={img}
          alt="Sahan Kavishka - Software Engineer"
          className="rounded-2xl shadow-2xl w-3/4 md:w-full max-w-sm lg:max-w-md
            transform hover:scale-105 transition-transform duration-500
            ring-4 ring-white/10"
        />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full 
          rounded-full 
          blur-3xl transform rotate-12" />
      </div>
    </section>
  );
};

export default Hero;
