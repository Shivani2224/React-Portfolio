import React from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "React", icon: "fa-brands fa-react" },
      { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
      { name: "jQuery", icon: "fa-brands fa-jsfiddle" },
      { name: "Responsive Design", icon: "fa-solid fa-mobile-screen-button" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "npm", icon: "fa-brands fa-npm" },
      { name: "VS Code", icon: "fa-solid fa-code" },
    ],
  },
  {
    title: "Basics",
    skills: [
      { name: "TypeScript", icon: "fa-solid fa-code" },
      { name: "Node.js", icon: "fa-brands fa-node" },
      { name: "API Integration", icon: "fa-solid fa-plug" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[oklch(70.4%_0.14_182.503)]">
        My Skills
      </h2>

      <div className="max-w-5xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
  {skillCategories.map((category, catIdx) => (
    <div key={catIdx}>
      <h3 className="text-2xl font-semibold mb-6 text-teal-700">{category.title}</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {category.skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-teal-100 text-gray-900 px-5 py-3 rounded-lg shadow-md hover:bg-teal-200 transition duration-300 ease-in-out font-semibold flex items-center gap-3 justify-center min-w-[140px]"
          >
            {skill.icon && <i className={`${skill.icon} text-xl`} aria-hidden="true"></i>}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


    </section>
  );
};

export default Skills;
