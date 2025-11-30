import React from "react";
import contactBanner from '../utils/images/contact-banner.png';

function Contact() {
  return <div>
      {/* Sección de Contacto */}
      <section className="relative">
        <div className="bg-cover bg-center h-60 flex items-center justify-center text-white text-4xl font-bold"
          style={{ backgroundImage: `url(${contactBanner})` }}>
        </div>
        <div className="container mx-auto p-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-5">
            <h2 className="text-3xl text-[#4B4B4B] font-bold mb-4">Contáctanos</h2>
            <p className="mt-4 text-[#4B4B4B] font-semibold">
              Nos alegra saber de ti. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
          <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6 border border-[#EBEBEB]">
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input type="text" placeholder="Nombre completo"
                  className="w-1/2 p-3 placeholder-[#4B4B4B] placeholder:font-semibold rounded-md bg-[#EBEBEB]" />
                <input type="email" placeholder="Correo electrónico"
                  className="w-1/2 p-3 placeholder-[#4B4B4B] placeholder:font-semibold rounded-md bg-[#EBEBEB]" />
              </div>
              <input type="text" placeholder="Asunto"
                className="w-full p-3 placeholder-[#4B4B4B] placeholder:font-semibold rounded-md bg-[#EBEBEB]" />
              <textarea placeholder="Mensaje" rows="4"
                className="w-full p-3 placeholder-[#4B4B4B] placeholder:font-semibold rounded-md bg-[#EBEBEB]"></textarea>
              <button type="submit" className="w-full bg-[#37474F] text-white py-3 rounded-md font-semibold">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
  </div>;
}

export default Contact;
