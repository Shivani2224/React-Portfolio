import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "React Tic-Tac-Toe",
    description: `This Tic-Tac-Toe-React project demonstrates your ability to implement a simple but interactive game using React and state management. The game logic is based on a 3x3 grid, where users can play as "X" or "O" and track the result. Features like winning condition checks, reset functionality, and simple UI make it a fun and engaging project.`,
    tech: ["React", "JavaScript", "CSS"],
    live: "https://your-live-link.com",
    code: "https://github.com/your-repo",
  },
  {
    title: "To Do list",
    description:
      "A user-friendly task management application designed to help you organize your daily activities. This project allows users to add, mark as completed, or delete tasks dynamically.",
    tech: ["HTML", "CSS", "Javascript"],
    live: "#",
    code: "https://github.com/Shivani2224/React-Portfolio",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-teal-600">
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
            className="border p-6 rounded-lg shadow hover:shadow-lg transition"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-3 text-sm text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-indigo-100 text-teal-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
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
