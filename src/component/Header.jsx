import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md bg-teal-600">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-white tracking-wide">Shivani</h1>

        <ul className="hidden md:flex gap-6 text-base font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-teal-100 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 group focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="w-6 h-0.5 bg-white transition-all group-hover:bg-teal-200" />
          <span className="w-6 h-0.5 bg-white transition-all group-hover:bg-teal-200" />
          <span className="w-6 h-0.5 bg-white transition-all group-hover:bg-teal-200" />
        </button>
      </nav>

      <div
        className={`md:hidden bg-white shadow transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 py-4 text-teal-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block hover:text-teal-500 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
