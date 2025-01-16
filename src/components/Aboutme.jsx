import React from 'react';
import img from '../assets/aboutme.jpg'
import { Code, Server, Smartphone, Mail, ArrowRight } from 'lucide-react';

const AboutMe = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern web technologies",
      color: "text-blue-500",
      hoverColor: "group-hover:text-blue-600"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      description: "Building robust server-side applications and RESTful APIs",
      color: "text-green-500",
      hoverColor: "group-hover:text-green-600"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "App Development",
      description: "Developing cross-platform mobile applications",
      color: "text-purple-500",
      hoverColor: "group-hover:text-purple-600"
    }
  ];

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about"
      className="min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-gray-50"
      aria-label="About me section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-20 animate-pulse" />
              <img
                src={img}
                alt="Sahan Kavishka - Software Engineer"
                className="relative w-full rounded-lg shadow-xl 
                  hover:transform hover:scale-[1.02] transition-all duration-500
                  ring-4 ring-white"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Get to know me
                </h2>
                <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  About Me
                </h1>
              </div>

              <div className="prose prose-lg text-gray-600">
                <p>
                  Hello! I'm <span className="font-semibold text-gray-900">Sahan Kavishka</span>, 
                  an undergraduate student at the <span className="font-semibold text-gray-900">
                  Sri Lanka Institute of Information Technology (SLIIT)</span>, pursuing a degree 
                  in Software Engineering.
                </p>
                <p>
                  I have a strong passion for full-stack development and enjoy creating seamless 
                  and efficient digital solutions. Currently, I am seeking an internship opportunity 
                  to further enhance my skills and gain practical industry experience.
                </p>
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Services I Offer
              </h2>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-lg
                      hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`${service.color} ${service.hoverColor} 
                      p-2 rounded-lg bg-white shadow-sm transition-colors`}>
                      {service.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 
                        transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Action Button */}
            <button
              onClick={handleContact}
              className="group inline-flex items-center gap-2 px-6 py-3 
                bg-gradient-to-r from-blue-500 to-blue-600 
                text-white font-semibold rounded-lg shadow-lg 
                hover:from-blue-600 hover:to-blue-700
                transform hover:scale-105 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Contact me"
            >
              <Mail className="w-4 h-4" />
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;