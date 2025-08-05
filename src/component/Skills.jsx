import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-600 text-4xl" />,
    description: "Semantic markup and accessibility",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
    description: "Responsive styling & animations",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-4xl" />,
    description: "DOM manipulation & ES6+ features",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    description: "Component-based architecture",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-500 text-4xl" />,
    description: "Utility-first responsive design",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-4xl" />,
    description: "Strong typing & safer JS code",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-4xl" />,
    description: "Version control & collaboration",
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-pink-500 text-4xl" />,
    description: "Wireframing & UI prototyping",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-600">
          Skills & Tools
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="w-full max-w-[250px] bg-white p-5 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {skill.description || "—"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
