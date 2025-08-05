import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-gray-900 bg-gradient-to-b from-teal-600 via-teal-500 to-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-6xl font-bold mb-4 text-teal-900 drop-shadow-md">
        Hi, I'm Shivani
      </h1>
      <p className="text-lg sm:text-xl max-w-xl mb-8 text-teal-800">
        A passionate Front-End Developer and UX/UI designer crafting clean,
        interactive, and user-friendly web experiences using React, Tailwind
        CSS, and modern web technologies.
      </p>

      <motion.a
        href="#projects"
        className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg cursor-pointer select-none transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        aria-label="See my portfolio projects"
      >
        See My Work
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </motion.a>
    </motion.section>
  );
};

export default Home;
