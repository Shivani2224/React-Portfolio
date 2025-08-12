import React from "react";
import { motion } from "framer-motion";
import ticTacToeImg from "../assets/Project/React-Tic-Tac-Toe.png";
import todoImg from "../assets/Project/To-Do-List.png";
import ecommerceImg from "../assets/Project/Riri.png";

const projects = [
  {
    title: "React Tic-Tac-Toe",
    description:
      "This project showcases your ability to implement game logic using React. The user-friendly interface features a 3x3 grid where players alternate between X and O. Includes win condition checks, reset functionality, and smooth UI interactions.",
    tech: ["React", "JavaScript", "CSS"],
    code: "https://github.com/Shivani2224/Tic-Tac-Toe-React",
    image: ticTacToeImg,
  },
  {
    title: "To-Do List",
    description:
      "A task management app that allows users to add, complete, and delete tasks dynamically. Clean interface, fast performance, and responsive design make it a practical productivity tool.",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Shivani2224/To-Do-List",
    image: todoImg,
  },
  {
    title: "E-commerce",
    description:
      "An e-commerce website for selling stickers and customizable t-shirts. Includes product filtering, shopping cart, secure checkout, and a responsive design for seamless browsing.",
    tech: ["React", "TailwindCSS", "JavaScript"],
    code: "",
    image: ecommerceImg,
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
            className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >

            {project.image && (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}

       
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>

         
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-700 text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
   

                {project.code ? (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition text-sm font-medium text-center"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="bg-gray-100 text-gray-400 px-4 py-2 rounded text-sm font-medium text-center cursor-not-allowed">
                    Private
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
