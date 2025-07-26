import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-gray-900 bg-[linear-gradient(180deg,_#0d9488,_#f9fafb)] "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-5xl font-bold mb-4 text-teal-800">Hi, I'm Shivani</h1>
      <p className="text-xl mb-6 max-w-xl">A developer and UX designer</p>

    
    </motion.section>
  );
};

export default Home;
