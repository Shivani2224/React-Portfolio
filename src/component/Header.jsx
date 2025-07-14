import React from "react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-teal-600">Shivani</h1>
        <ul className="md:flex gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-teal-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden flex flex-col justify-center gap-[5px] cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-black group-hover:bg-teal-600"></span>
          <span className="block w-6 h-0.5 bg-black group-hover:bg-teal-600"></span>
          <span className="block w-6 h-0.5 bg-black group-hover:bg-teal-600"></span>
        </div>
      </nav>

      {isOpen && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white shadow">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-teal-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
