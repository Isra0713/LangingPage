import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaImages,
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import ImageJuni01 from "../assets/images/juni01.jpg";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 w-64 h-screen flex flex-col p-4 items-center">
      <div className="rounded-full overflow-hidden w-28 h-28 mb-4">
        <img
          src={ImageJuni01}
          alt="Israel Gomez"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-white text-center font-bold font-mono mb-8">
        Israel Gomez
      </p>
      <nav className="flex flex-col space-y-4 w-full">
        <Link
          to="/"
          className="text-white text-center hover:text-blue-400 font-semibold font-mono flex items-center justify-center"
        >
          <FaHome className="mr-2" /> Home
        </Link>
        <Link
          to="/about"
          className="text-white text-center hover:text-blue-400 font-semibold font-mono flex items-center justify-center"
        >
          <FaUser className="mr-2" /> Sobre mi
        </Link>
        <Link
          to="/skills"
          className="text-white text-center hover:text-blue-400 font-semibold font-mono flex items-center justify-center"
        >
          <FaProjectDiagram className="mr-2" /> Habilidades
        </Link>
        <Link
          to="/gallery"
          className="text-white text-center hover:text-blue-400 font-semibold font-mono flex items-center justify-center"
        >
          <FaImages className="mr-2" /> Galería
        </Link>
        <Link
          to="/contact"
          className="text-white text-center hover:text-blue-400 font-semibold font-mono flex items-center justify-center"
        >
          <FaEnvelope className="mr-2" /> Contacto
        </Link>
      </nav>
      <div className="flex space-x-4 mt-8">
        <a
          href="#"
          className="text-white bg-gray-700 p-3 rounded-full hover:bg-blue-400"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="#"
          className="text-white bg-gray-700 p-3 rounded-full hover:bg-blue-400"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="#"
          className="text-white bg-gray-700 p-3 rounded-full hover:bg-blue-400"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          className="text-white bg-gray-700 p-3 rounded-full hover:bg-blue-400"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
