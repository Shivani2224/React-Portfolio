import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-teal bg-clip-text text-transparent">Shivani</h3>
              <p className="text-gray-400 mt-2">Front-End Developer & UX/UI Designer</p>
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className="text-gray-300 no-underline transition-colors hover:text-primary-light"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-gray-300 no-underline transition-colors hover:text-primary-light"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={(e) => handleSmoothScroll(e, '#skills')}
                className="text-gray-300 no-underline transition-colors hover:text-primary-light"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="text-gray-300 no-underline transition-colors hover:text-primary-light"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="text-gray-300 no-underline transition-colors hover:text-primary-light"
              >
                Contact
              </a>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white text-xl no-underline transition-all duration-300 hover:bg-primary"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white text-xl no-underline transition-all duration-300 hover:bg-primary"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white text-xl no-underline transition-all duration-300 hover:bg-primary"
              >
                <FaTwitter />
              </motion.a>
            </div>

            <div className="text-center pt-8 border-t border-white/10 w-full">
              <p className="text-gray-400">
                © {currentYear} Shivani Patel. All rights reserved.
              </p>
              <p className="text-gray-400 mt-2 flex items-center justify-center">
                Made with <FaHeart className="text-red-500 mx-1" /> and React
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;