import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-gray-700 text-sm">
        <div className="mb-4 sm:mb-0">
          © 2024 Shivani Patel. All rights reserved.
        </div>

        <div className="flex gap-4 text-gray-600">
          <a
            href="https://www.linkedin.com/in/shivani-patel-aa2846178/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-teal-600 transition"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/shivani2224"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-teal-600 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
