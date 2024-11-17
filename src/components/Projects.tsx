import React from 'react';
import { Github, Code2, Coffee, ExternalLink } from 'lucide-react';
import image_1 from '../assets/image 1.jpg' 
import image_2 from '../assets/image 2.jpg'
import image_3 from '../assets/image 3.jpg'

const projects = [
  {
    id: 'AR sales',
    title: 'Interactive Voice - Enabled Augmented Reality Sales Assistant',
    description: 'An advanced augmented reality interface designed to enhance the sales experience by providing interactive product demonstrations and real-time voice interactions',
    image: image_1,
    tags: ['Unity', 'Flask', 'AKS', 'Python', 'Blender', 'Docker'],
    githubUrl: '',
    icon: Code2,
    features: ['Add Users', 'Update Users', 'Delete Users'],
    techStack: {
      mobile_app: ['Unity'],
      chatbot_model: ['Python', 'Flask'],
      animation: ['Blender'], // Correctly added animation
      database: ['MongoDB'],
    }
  },
  {
    id: 'react-app',
    title: 'User Management System',
    description: 'A React application for managing users using basic CRUD operations. Features both frontend and backend components, allowing administrators to Add, Update, and Delete users efficiently.',
    image: image_2,
    tags: ['React', 'Node.js', 'MongoDB', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/isiwarakumaragama/react-app',
    icon: Code2,
    features: ['Add Users', 'Update Users', 'Delete Users'],
    techStack: {
      frontend: ['React', 'HTML', 'CSS'],
      backend: ['Node.js'],
      database: ['MongoDB']
    }
  },
  {
    id: 'foodie-restaurant',
    title: 'Foodie Restaurant',
    description: 'An E-Commerce website designed for restaurants. Customers must login to order food, with registration available for new users. The database is customizable according to restaurant needs.',
    image: image_3,
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/isiwarakumaragama/foodie-restaurant',
    icon: Coffee,
    features: ['User Login', 'User Registration', 'Shopping Cart'],
    techStack: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      backend: ['PHP'],
      database: ['MySQL']
    }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-[#121212] rounded-xl overflow-hidden hover:bg-[#1A1A1A] transition-all duration-300 transform hover:-translate-y-2 pixel-corners"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  <Icon className="absolute top-4 right-4 w-6 h-6 text-[#36BCF7]" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Tech Stack:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(project.techStack).map(([category, techs]) => (
                        <div key={category} className="space-y-1">
                          <h5 className="text-sm text-[#36BCF7] capitalize">{category}:</h5>
                          <ul className="text-sm text-gray-400">
                            {(Array.isArray(techs) ? techs : []).map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-[#36BCF7]/10 text-[#36BCF7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2A]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#36BCF7] hover:underline"
                    >
                      <Github size={20} />
                      View Source
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-[#36BCF7] hover:underline"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
