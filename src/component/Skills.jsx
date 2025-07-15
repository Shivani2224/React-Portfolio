import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiTypescript,
  SiJest,
  SiWebpack,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-cyan-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 text-gray-900">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
        Skills
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">
              {group.category}
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {group.items.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-md hover:text-teal-600 transition"
                >
                  <span className="text-3xl">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
