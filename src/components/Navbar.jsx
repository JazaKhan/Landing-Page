import logo from "../assets/JazaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
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
      <div className="flex gap-3">
        <button 
          onClick={() => scrollToSection('hero')}
          className="px-3 py-2 hover:text-purple-500 transition-colors duration-300 cursor-pointer border-2 border-purple-700 rounded-lg text-neutral-300"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('technologies')}
          className="px-3 py-2 hover:text-purple-500 transition-colors duration-300 cursor-pointer border-2 border-purple-700 rounded-lg text-neutral-300"
        >
          Tech
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className="px-3 py-2 hover:text-purple-500 transition-colors duration-300 cursor-pointer border-2 border-purple-700 rounded-lg text-neutral-300"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('education')}
          className="px-3 py-2 hover:text-purple-500 transition-colors duration-300 cursor-pointer border-2 border-purple-700 rounded-lg text-neutral-300"
        >
          Education
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="px-3 py-2 hover:text-purple-500 transition-colors duration-300 cursor-pointer border-2 border-purple-700 rounded-lg text-neutral-300"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-3 py-2 hover:text-purple-500 transition-colors duration-300 cursor-pointer border-2 border-purple-700 rounded-lg text-neutral-300"
        >
          Contact
        </button>
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
