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
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with real-time data updates, interactive charts, and customizable widgets. Dark mode support included.',
      image: '/api/placeholder/400/250',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'REST API'],
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
    <section id="projects" style={{
      padding: '80px 0',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#0f766e',
            fontWeight: 'bold'
          }}>Projects</h2>
          <p style={{
            textAlign: 'center',
            color: '#475569',
            marginBottom: '48px',
            fontSize: '1.125rem'
          }}>
            Some of my recent work and personal projects
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(3, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '32px'
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 148, 136, 0.2)';
                  e.currentTarget.style.border = '2px solid #14b8a6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.border = '2px solid transparent';
                }}
              >
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        padding: '12px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0d9488';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        padding: '12px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0d9488';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: '0 20px'
                  }}>{project.title}</h3>
                </div>
                
                <div style={{
                  padding: '24px'
                }}>
                  <p style={{
                    color: '#475569',
                    marginBottom: '16px',
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>{project.description}</p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        background: '#f0fdfa',
                        color: '#0d9488',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        border: '1px solid #ccfbf1'
                      }}>
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