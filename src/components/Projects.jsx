import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'React Tic-Tac-Toe',
      description: 'An interactive game showcasing React state management and game logic. Features include player turns, win detection, game history tracking, and move undo functionality.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'JavaScript', 'CSS', 'Game Logic'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'To-Do List App',
      description: 'A full-featured task management application with add, complete, delete, and filter functionality. Includes local storage persistence and a clean, responsive interface.',
      image: '/api/placeholder/400/250',
      tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce application with product browsing, filtering, shopping cart, and checkout. Built with React and styled with Tailwind CSS for a seamless shopping experience.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'TailwindCSS', 'Redux', 'API Integration'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed weather metrics. Features beautiful data visualization and responsive design.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'API', 'Charts.js', 'Geolocation'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, responsive design, and optimized performance. Built with React and enhanced with Framer Motion.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Framer Motion', 'CSS3', 'SEO'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-5 text-primary-dark font-bold">
            Projects
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Some of my recent work and personal projects
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer border-2 border-transparent hover:shadow-xl hover:border-primary-light group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-light to-primary relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-white text-2xl p-3 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-white text-2xl p-3 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                  <h3 className="text-white text-2xl font-bold text-center px-5">
                    {project.title}
                  </h3>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-teal-50 text-primary px-3 py-1 rounded-full text-sm font-medium border border-teal-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;