import React from 'react'

const About = () => {
  return (
    <div>
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
            passionate Front-End Developer based in Ontario, Canada. I love
            turning ideas into interactive, user-friendly web experiences using
            technologies like{" "}
            <span className="font-medium text-teal-600">
              HTML, CSS, JavaScript, React, and Tailwind CSS
            </span>
            .
          </p>

          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            With a background in healthcare and tech support, I bring strong
            attention to detail, problem-solving skills, and a love for clean,
            responsive design. I'm currently open to new opportunities where I
            can contribute and grow as a developer.
          </p>

          <a
            href="/Shivani_Resume.pdf"
            download
            className="inline-block mt-6 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default About
