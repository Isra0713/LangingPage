import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center md:justify-between p-8">
      <div className="md:w-1/2 lg:w-1/3">
        <img
          src="https://img.freepik.com/foto-gratis/retrato-hombre-guapo-sobre-fondo-naranja_23-2149020040.jpg?size=626&ext=jpg"
          alt="Profile"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0 text-left md:pl-12">
        <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4">
          Diseñador de interfaz de usuario / UX y desarrollador web.
        </h1>
        <p className="text-lg mb-6 ">
          Soy tecnologo de desarrollo de software, disfruto del proceso de
          aprendizaje y siempre estoy buscando nuevas formas de mejorar, ya sea
          explorando lenguajes de programación o profundizando en áreas como la
          inteligencia artificial, blockchain, y desarrollo web.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <p>
              <span className="font-bold text-blue-400">Cumpleaños: </span>Julio
              13
            </p>
            <p>
              <span className="font-bold text-blue-400">Sitio Web: </span>
              www.juni.com
            </p>
            <p>
              <span className="font-bold text-blue-400">Telefono: </span>
              57+ 3135043449
            </p>
            <p>
              <span className="font-bold text-blue-400">Ciudad: </span>Popayan,
              Cauca
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-blue-400">Edad: </span>33 Años
            </p>
            <p>
              <span className="font-bold text-blue-400">Estudio: </span>
              Tecnólogo
            </p>
            <p>
              <span className="font-bold text-blue-400">Correo: </span>
              amaya261094gomez@gmail.com
            </p>
            <p>
              <span className="font-bold text-blue-400">Freelance: </span>
              Disponible
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
