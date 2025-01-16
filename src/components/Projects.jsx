import React, { useState } from 'react';
import { Search, Github, ExternalLink, Filter } from 'lucide-react';

// Simple Card components
const Card = ({ className = '', children, ...props }) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ className = '', children, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ className = '', children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ className = '', children, ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Projects = () => {
  // Project data
  const projects = [
    {
      title: "Restaurant Management System",
      category: "Web",
      image: "https://img.freepik.com/free-photo/confident-cafe-owner-writing-register-book_1262-4877.jpg",
      description: "This project has been done by using the MERN stack.",
      link: "https://github.com/Novatech-Nexus"
    },
    {
      title: "Restaurant Management System",
      category: "Web",
      image: "https://img.freepik.com/free-photo/confident-cafe-owner-writing-register-book_1262-4877.jpg",
      description: "This project has been done by using the MERN stack.",
      link: "https://github.com/Novatech-Nexus"
    },
    {
      title: "Train Ticket Reservation System",
      category: "Web",
      image: "https://img.freepik.com/free-photo/transportation-city-speeding-train-railroad-track-generative-ai_188544-9132.jpg",
      description: "This project has been done using JAVA and MySQL Workbench.",
      link: "https://github.com/sahanwijesekara/Train-ticket-reservation-system"
    },
    {
      title: "Customer Service Management System",
      category: "Web",
      image: "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-139687.jpg",
      description: "This project has been done using HTML, CSS, JavaScript, and PHP.",
      link: "https://github.com/sahanwijesekara/Customer-service-Web-App"
    },
    {
      title: "Watch Next - Mobile Application",
      category: "Mobile",
      image: "https://img.freepik.com/free-photo/tablet-some-movie-elements_23-2147775701.jpg",
      description: "This project has been done using Kotlin and SQLite.",
      link: "https://github.com/sahanwijesekara/watch-next"
    }
  ];

  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="projects" 
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4"
      aria-label="Projects Section"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Projects Portfolio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest work across web and mobile development
          </p>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    filter === category 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-pressed={filter === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="search"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                  {project.category}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="px-6 py-4 border-t border-gray-100">
                <div className="flex justify-between items-center w-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  <button
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No projects found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;