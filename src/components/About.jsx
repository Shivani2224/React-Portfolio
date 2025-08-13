import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-teal-50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-5 bg-gradient-teal bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-light to-primary mx-auto flex items-center justify-center text-white text-5xl font-bold">
              SP
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl mb-5 text-primary-dark">
              Hello! I'm Shivani
            </h3>

            <p className="text-lg leading-relaxed text-slate-600 mb-5">
              I'm a passionate Front-End Developer and UX/UI enthusiast based in
              Ontario, Canada. I enjoy turning creative ideas into interactive,
              user-friendly experiences using HTML, CSS, JavaScript, React, and
              Tailwind CSS.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 mb-5">
              With a background in healthcare and tech support, I bring a unique
              blend of problem-solving, precision, and empathy into every
              project I work on. I love crafting clean, responsive interfaces
              and designing intuitive user journeys that prioritize both
              functionality and aesthetics.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 mb-5">
              I'm always excited to take on new challenges and opportunities to
              learn, grow, and contribute meaningfully as a developer.
            </p>

            <div className="mt-8">
              <h4 className="text-xl mb-4 text-primary-dark font-semibold">
                Quick Facts:
              </h4>
              <ul className="list-none p-0 space-y-3">
                <li className="text-base text-slate-600">
                  📍 Location: Ontario, Canada
                </li>
                <li className="text-base text-slate-600">
                  🎓 Education: BCA (Bachelor of Computer Applications)
                </li>
                <li className="text-base text-slate-600">
                  💼 Background: Healthcare & Tech Support
                </li>
                <li className="text-base text-slate-600">
                  ⚡ Passion: Always excited to learn, grow, and contribute
                  meaningfully
                </li>
              </ul>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
