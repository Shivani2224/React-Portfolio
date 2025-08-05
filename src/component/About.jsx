import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-gray-50 text-center"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600">
          About Me
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Hello! I'm{" "}
          <span className="font-semibold text-teal-600">Shivani</span>, a
          passionate Front-End Developer and UX/UI enthusiast based in Ontario,
          Canada. I enjoy turning creative ideas into interactive, user-friendly
          experiences using{" "}
          <span className="font-medium text-teal-600">
            HTML, CSS, JavaScript, React, and Tailwind CSS
          </span>
          .
        </p>

        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          With a background in healthcare and tech support, I bring a unique
          blend of problem-solving, precision, and empathy into every project I
          work on. I love crafting clean, responsive interfaces and designing
          intuitive user journeys that prioritize both functionality and
          aesthetics.
        </p>

        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          I’m always excited to take on new challenges and opportunities to
          learn, grow, and contribute meaningfully as a developer.
        </p>

        <a
          href="/Shivani-patel-junior-front-end-developer.pdf"
          download
          className="inline-block mt-8 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
