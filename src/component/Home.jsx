import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="relative h-[85vh] lg:min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 text-gray-900 bg-gradient-to-b from-teal-600 via-teal-500 to-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <circle
          cx="20%"
          cy="25%"
          r="80"
          fill="rgba(45, 212, 191, 0.15)"
          className="animate-floatSlow"
        />
        <circle
          cx="80%"
          cy="80%"
          r="60"
          fill="rgba(45, 212, 191, 0.2)"
          className="animate-float"
        />
      </svg>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-teal-900 drop-shadow-md justify-items-start">
        Hi, I'm Shivani
      </h1>

      <p className="text-base sm:text-lg lg:text-xl max-w-xl mb-6 text-teal-800">
        A passionate{" "}
        <span className="font-semibold text-teal-900">
          Front-End Developer & UX/UI Designer
        </span>{" "}
        crafting clean, interactive, and user-friendly web experiences using
        React, Tailwind CSS, and modern web technologies.
      </p>

      <motion.a
        href="#projects"
        className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-colors focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-offset-2 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      >
        See My Work
        <motion.svg
          className="ml-2 w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          initial={{ x: 0 }}
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </motion.svg>
      </motion.a>

      {/* Social Media Icons */}
      <div className="flex gap-6 mb-6 text-2xl">
        <a
          href="https://github.com/shivani2224"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-800 hover:text-teal-900 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shivani-patel-aa2846178/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-800 hover:text-teal-900 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:patelshivani1410@gmail.com"
          className="text-teal-800 hover:text-teal-900 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="absolute bottom-6 flex flex-col items-center text-teal-900 animate-bounce">
        <span className="mb-1 font-semibold text-sm">Scroll Down</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <style>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-floatSlow {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-floatSlow {
            animation: none !important;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Home;
