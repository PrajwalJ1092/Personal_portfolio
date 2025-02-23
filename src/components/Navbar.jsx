import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About me", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
  ];

  return (
    <div className="flex justify-around chakra-petch-regular p-3 rounded-full mt-2 ml-3 mr-3 cursor-pointer relative">
      <div className="logo  text-4xl  text-[#ade8f4]">
        <img className="h-20 w-20" src="https://i.ibb.co/fzjMbXvF/p-removebg-preview.png"  alt="" /></div>

      <div className="hidden md:block">
        <ul className="flex max-w-lg gap-x-16 text-xl font-semibold text-[#ade8f4] p-4 rounded-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                className="text-[#ade8f4]  hover:text-[#48cae4]"
                href={link.path}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none p-2 mt-3"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
  <div className="fixed top-14 right-3 w-screen text-center mt-5 bg-white shadow-lg rounded-lg z-50">
    <ul className="flex flex-col text-gray-800 text-lg">
      {navLinks.map((link) => (
        <li key={link.name} className="p-3 hover:bg-gray-100">
          <a 
            href={link.path} 
            onClick={() => setIsOpen(false)} // Close menu when clicked
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

      </div>
    </div>
  );
}

export default Navbar;
