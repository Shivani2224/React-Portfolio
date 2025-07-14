import React from "react";
const projects = [
  {
    title: "QR Code Generator",
    description: "A simple app to generate QR codes from URLs using React.",
    link: "https://github.com/shivani2224/qr-code-generator",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A Tic-Tac-Toe game that allows two players to compete, track moves, and edit player names. Built using React, JavaScript, HTML, and CSS, the app features a clean, responsive design for seamless play across devices. It provides instant feedback by detecting wins or draws, displaying the winner’s name, and supporting quick rematches.",
    link: "https://github.com/Shivani2224/Tic-Tac-Toe-React",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-teal-100 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-teal-600">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-left"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-teal-600 font-medium hover:underline"
            >
              view on Github →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
