import React, { useState } from "react";
import imagen from "../utils/images/especialistas 1.png"
import imagenSede from "../utils/images/Pet salud 1.png"
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Sesión banner */}
      <section className="bg-[#4FC3F7] text-white p-10 flex flex-col md:flex-row items-center gap-6 rounded-lg">
        <div className="w-full md:w-1/2">
            <iframe
            title="video"
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/umI5AtvCtm0?si=nmHXQRy4taOljwcs"
            ></iframe>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Cuidamos tus mascotas con amor y profesionalismo</h2>
            <p className="font-semibold text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white font-semibold text-[#4FC3F7] px-4 py-2 rounded-md"> Conoce nuestros servicios </button>
        </div>
      </section>    
      
      {/* Sesión de nosotros */}
      <section className="p-10 flex flex-col justify-center md:flex-row items-center gap-6 rounded-lg">
        <img src={imagen} alt="Equipo veterinario" width="450px" height="900px"/>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl text-[#4B4B4B] font-bold">Nosotros</h2>
          <p className="mt-4 text-[#4B4B4B] font-semibold">En Pet Salud, nos dedicamos con pasión al bienestar y la salud de las mascotas. Somos un equipo de especialistas comprometidos en brindar atención médica veterinaria de calidad, con un enfoque integral y humano.
            <br />
            <br />
          Nuestra misión es ofrecer un servicio de salud preventivo y curativo que garantice la tranquilidad de los dueños y el bienestar de sus mascotas. Para ello, contamos con tecnología de vanguardia, instalaciones modernas y un personal altamente capacitado que trabaja con amor y profesionalismo.
          <br />
          <br />
          En Pet Salud, creemos que cada mascota merece recibir el mejor cuidado, por eso nos esforzamos en proporcionar un ambiente cálido y seguro, donde se sientan protegidas y queridas. Nuestra visión es ser el referente en salud veterinaria, promoviendo una cultura de cuidado y prevención para una vida más saludable y feliz junto a nuestras mascotas.</p>
          <button 
           onClick={() => navigate("/Specialists")}
          className="mt-4 font-semibold text-[#4FC3F7] px-4 py-2 rounded-md border border-[#4FC3F7]"> Conoce más ➝</button>
        </div>
      </section>

      {/* Sesión de nuestros servicios */}
      <Services/>

      {/* Sesión de nuestra sede */}
      <section id="sede" className="bg-[#4FC3F7] text-white p-10 flex flex-col justify-center md:flex-row items-center gap-6 rounded-lg" >
        <div className="w-1/2 p-5">
          <h2 className="text-4xl font-bold">Nuestra sede</h2>
          <p className="mt-4 font-semibold">Nuestra sede Pet Salud es un espacio diseñado especialmente para el bienestar de las mascotas y la tranquilidad de sus dueños. Contamos con modernas instalaciones equipadas con tecnología de punta para ofrecer atención veterinaria de alta calidad</p>
        </div>
        <img src={imagenSede} alt="Equipo veterinario" width="450px" height="900px"/>
      </section>

      {/* Sesión de testimonios */}
      <Testimonials />
    </div>
  );
};
export default Home;