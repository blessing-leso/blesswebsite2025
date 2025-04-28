import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';

const PortfolioPage = () => {
  const categories = ["All", "Web", "Mobile"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Content Creator App",
      category: "Web",
      image: "/pictures/AIapp.png",
      description: "Content Creator AI is a web application built to assist individuals and businesses in generating high-quality social media content with ease. Users input a topic, theme, or target audience, and the app leverages OpenAI’s language models to instantly create engaging captions, post ideas, and creative marketing copy.",
      technologies: ["React", "Tailwind CSS", "TypeScript","Node.js", "Express.js", "MongoDB", "OpenAI API"],
      codeUrl: "https://github.com/blessing-leso/PostMuse-AI"
    },
    {
      id: 2,
      title: "CRM Company Dashboard",
      category: "Web",
      image: "/pictures/crm.png",
      description: "TgeNeo Breed CRM Dashboard is an enterprise management platform designed to give businesses real-time insights into revenue, employee performance, client management, and sales analytics. With a clean UI and intuitive navigation, users can track company performance, manage leads and clients, oversee employee activity, monitor sales, and stay updated through alerts and notifications — all from one central dashboard.",
      technologies: ["Next.js", "Tailwind", "Vite", "MongoDB", "Express.js","Node.js", "REST API"],
      codeUrl: "https://github.com/blessing-leso/Neo-Breed-frontend-dashboard"
    },
    {
      id: 3,
      title: "PetPal.co Mobile App",
      category: "Mobile",
      image: "/pictures/Doggie.jpg",
      description: "PetPal AI is a virtual veterinary assistant web app designed to help pet owners easily assess their pets’ health, nutrition, and training needs. Users can describe symptoms or upload images, and the app uses OpenAI’s GPT-4 Vision and language models to analyze the input and provide detailed, AI-generated feedback. PetPal AI combines natural language understanding with image recognition to offer quick advice, potential diagnoses, and care recommendations.",
      technologies: ["React", "Tailwind CSS", "TypeScript","Node.js", "Express.js", "MongoDB", "OpenAI API", "Lucide-react"],
      codeUrl: "https://github.com/blessing-leso/PetPal.co"
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">My Portfolio</h1>
          <div className="w-24 h-1 bg-cyan mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a collection of my most recent and notable projects.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category 
                  ? 'bg-magenta text-white' 
                  : 'bg-light-cyan text-navy hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Maximized Project View */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <div className="w-full h-auto mb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain rounded"
                />
              </div>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map(tech => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-navy text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.codeUrl}
                className="text-magenta hover:text-navy flex items-center"
              >
                <Github size={16} className="mr-1" />
                View Code
              </a>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:border-cyan transition-all hover:-translate-y-2 duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="h-48 bg-light-cyan flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-navy">{project.title}</h3>
                  <span className="bg-light-cyan text-navy text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 text-navy text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between">
                  <a 
                    href={project.codeUrl}
                    className="flex items-center text-magenta hover:text-navy transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
