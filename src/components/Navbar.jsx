import React from "react";
import logo from "../assets/JazaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-20"
          src={logo}
          alt="logo"
          width={100}
          height={50}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a
          href="https://www.linkedin.com/in/jaza-khan-8001a127b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/JazaKhan"  
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
