import React, { useState, useEffect } from 'react';
import { 
  Code2, FileCode, Database, Server, Globe, 
  Triangle, Boxes, Layout, Github, 
  Store, Cpu, Palette, Languages
} from 'lucide-react';

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const skills = [
    { 
      name: "Frontend Development",
      icon: <Layout className="w-8 h-8" />,
      level: 90,
      color: "text-blue-500",
      description: "HTML5, CSS3, JavaScript",
      details: "Creating responsive and interactive user interfaces"
    },
    {
      name: "React",
      icon: <Code2 className="w-8 h-8" />,
      level: 85,
      color: "text-cyan-500",
      description: "React.js, Redux, Hooks",
      details: "Building modern web applications"
    },
    {
      name: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      level: 80,
      color: "text-green-500",
      description: "Node.js, PHP, Java",
      details: "Developing server-side applications"
    },
    {
      name: "Databases",
      icon: <Database className="w-8 h-8" />,
      level: 75,
      color: "text-indigo-500",
      description: "MySQL, MongoDB, Oracle",
      details: "Database design and management"
    },
    {
      name: "Mobile Development",
      icon: <Cpu className="w-8 h-8" />,
      level: 70,
      color: "text-purple-500",
      description: "Flutter, Kotlin",
      details: "Cross-platform mobile app development"
    },
    {
      name: "CSS Frameworks",
      icon: <Palette className="w-8 h-8" />,
      level: 85,
      color: "text-pink-500",
      description: "Tailwind CSS, Bootstrap",
      details: "Responsive design and styling"
    }
  ];

  const itemsPerSlide = {
    sm: 1,
    md: 2,
    lg: 3
  };

  const totalSlides = Math.ceil(skills.length / itemsPerSlide.lg);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const CircularProgress = ({ value, color }) => (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-gray-200"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        {/* Progress circle */}
        <circle
          className={`${color} transition-all duration-1000 ease-out`}
          strokeWidth="10"
          strokeDasharray={251.2}
          strokeDashoffset={251.2 - (251.2 * value) / 100}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-gray-700">{value}%</span>
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6"
      aria-label="Skills section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
            Expertise
          </h2>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            My Skills
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Technologies and tools I work with
          </p>
        </div>

        <div className="relative">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 rounded-lg ${skill.color} bg-opacity-10`}>
                    {skill.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {skill.description}
                    </p>
                  </div>

                  <CircularProgress value={skill.level} color={skill.color} />

                  <p className="text-sm text-gray-600">
                    {skill.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${currentSlide === index 
                    ? 'bg-indigo-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;