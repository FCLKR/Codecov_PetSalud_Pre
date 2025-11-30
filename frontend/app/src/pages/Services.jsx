import React, { useEffect, useState } from "react";

function Services() {
  const [services, setServices] = useState([]);

  //Ejemplo de cómo obtener los datos.
  useEffect(() => {
    const servicesData = localStorage.getItem("services");

    if (servicesData) {
      setServices(JSON.parse(servicesData));
    }
  }, []);

  return (
    <div>
      {services.map((service) => (
        <>
          <p>{service.name}</p>
          <p>{service.description}</p>
        </>
      ))}
    </div>
  );
}

export default Services;
