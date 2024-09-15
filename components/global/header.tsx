"use client";

import { useState } from 'react';
import { Button } from "./button";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header py-4 relative z-50 w-full">
      <div className="inner-header-container wrap-md mx-auto wrap-px flex items-center justify-between">
        <div className="header-logo--container flex items-center">
          <h1 className="logo mb-0 leading-0 flex">
            <a
              className="font-black text-2xl text-primary hover:text-primary-500 transition duration-500 flex items-center"
              href="/"
            >
              <img
                id="logo-81"
                src="logo-official-v3.png"
                width="125"
                height="125"
                alt="Logo from https://logoipsum.com/"
              />
              <span className="sr-only">bent-o</span>
            </a>
          </h1>
        </div>

        {/* Hamburger menu button for small screens */}
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="hamburger-icon flex flex-col justify-between w-6 h-5 relative">
            <span
              className={`bg-white block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`bg-white block h-0.5 w-full bg-current transition duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`bg-white block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>

        {/* Navigation buttons for medium and larger screens */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            link="#about"
            className="bg-black-500 hover:bg-gray-800 text-white font-bold"
          >
            About
          </Button>
          <Button
            link="https://linkedin.com/in/iftier-rahman/"
            target="_blank"
            className="bg-black-500 hover:bg-gray-800 text-white font-bold"
          >
            Linkedin
          </Button>
          <Button
            link="#contact"
            className="bg-black-500 hover:bg-gray-800 text-white font-bold"
          >
            Contact
          </Button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black-500 shadow-lg z-50 transition-opacity duration-300 ease-in-out ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start p-4 space-y-2">
          <Button
            link="#about"
            className="w-full bg-black hover:bg-gray-800 text-white font-bold text-left"
          >
            About
          </Button>
          <Button
            link="https://linkedin.com/in/iftier-rahman/"
            target="_blank"
            className="w-full bg-black hover:bg-gray-800 text-white font-bold text-left"
          >
            Linkedin
          </Button>
          <Button
            link="#contact"
            target="_blank"
            className="w-full bg-black hover:bg-gray-800 text-white font-bold text-left"
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};
