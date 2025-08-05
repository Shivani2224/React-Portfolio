import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "React Tic-Tac-Toe",
    description: `This project showcases your ability to implement game logic using React. The user-friendly interface features a 3x3 grid where players alternate between "X" and "O". It includes win condition checks, reset functionality, and smooth UI interactions.`,
    tech: ["React", "JavaScript", "CSS"],
    live: "https://your-live-link.com",
    code: "https://github.com/your-repo",
  },
  {
    title: "To-Do List",
    description:
      "A task management app that allows users to add, complete, and delete tasks dynamically. Clean interface, fast performance, and responsive design make it a practical productivity tool.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "https://github.com/Shivani2224/React-Portfolio",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-12">
        Projects
      </h2>

      <motion.div
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 text-left"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-teal-700 mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1  text-teal-700 text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition text-sm font-medium"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition text-sm font-medium"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
