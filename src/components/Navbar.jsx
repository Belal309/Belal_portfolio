import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="logo" className="h-16 w-auto" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <a href="https://www.linkedin.com/in/belal-essam-7625a3217/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/Belal309" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-500 transition duration-300" />
        </a>
        <a href="https://www.instagram.com/belal_essam123/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition duration-300" />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
