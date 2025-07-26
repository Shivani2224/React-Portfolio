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
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500 text-4xl" /> },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss className="text-blue-500 text-4xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-4xl" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6 sm:space-x-10 px-2 py-4 w-max">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="min-w-[120px] flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                {skill.icon}
                <p className="mt-2 text-gray-700 font-medium text-sm">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
