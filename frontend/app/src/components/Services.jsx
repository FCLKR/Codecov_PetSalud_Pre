import React, { useEffect, useState } from "react";

function Services() {
  const [services, setServices] = useState([]);

  //Ejemplo de cómo obtener los datos.
  useEffect(() => {
    const serviceData = localStorage.getItem("services");

    if (serviceData) {
      setServices(JSON.parse(serviceData));
    }
  }, []);

  return (
    <div>
      <section id="services" className="p-10 text-[#4B4B4B] justify-center">
        <h2 className="text-3xl text-center font-bold">Nuestros servicios</h2>
        <div className="mt-6 grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-5 border border-[#EBEBEB] rounded-lg shadow-lg">
              <p className="text-xl text-center text-[#4FC3F7] font-bold ">{service.name}</p>
              <h3 className="mt-2 font-semibold">{service.description}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;