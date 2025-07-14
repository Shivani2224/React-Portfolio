import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      style={{
        background:
          "linear-gradient(360deg, hsla(176, 61%, 87%, 1) 40%, hsla(175, 100%, 29%, 1) 100%)",
      }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-gray-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-5xl font-bold mb-4 text-teal-800">Hi, I'm Shivani</h1>
      <p className="text-xl mb-6 max-w-xl">
        I’m a front-end developer who builds clean, responsive, and accessible
        web experiences using React, Tailwind, and modern JavaScript.
      </p>

      <motion.a
        href="#projects"
        className="bg-teal-700 text-white px-8 py-3 rounded shadow hover:bg-teal-800 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Projects
      </motion.a>
    </motion.section>
  );
};

export default Home;
