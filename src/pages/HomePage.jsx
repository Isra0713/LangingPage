import React from "react";
import ImageHero from "../assets/images/imagehero01.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <img
        src={ImageHero}
        alt="Imagen de fondo"
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-2">
        <p className="text-3xl md:text-5xl font-semibold font-mono mb-4 text-right">
          Israel Gomez
        </p>
        <p className="text-lg md:text-2xl text-right max-w-2xl font-semibold font-mono animate-fadeInOut mb-2">
          Soy Programador
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-zinc-100 font-semibold font-mono rounded-md p-1 hover:bg-blue-600"
          onClick={() => navigate("/about")}
        >
          Comencemos
        </button>
      </div>
    </div>
  );
};

export default HomePage;
