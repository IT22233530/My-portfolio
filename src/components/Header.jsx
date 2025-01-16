import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', offset: 0 },
    { name: 'About', offset: -70 },
    { name: 'Skills', offset: -70 },
    { name: 'Projects', offset: -70 },
    { name: 'Contact', offset: -70 }
  ];

  const scrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white/90'
      }`}
      role="banner"
    >
      <nav 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 
              bg-clip-text text-transparent hover:from-indigo-500 hover:to-blue-400 
              transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            WSK
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase(), item.offset)}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 
                  hover:bg-indigo-50 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-indigo-50 
              transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-indigo-600" />
            ) : (
              <Menu className="w-6 h-6 text-indigo-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="py-2 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase(), item.offset)}
                className="w-full text-left px-4 py-2 text-base rounded-lg text-gray-700 
                  hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;