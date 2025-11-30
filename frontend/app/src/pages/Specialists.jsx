import React, { useEffect, useState } from "react";

function Specialists() {
  const [specialists, setSpecialists] = useState([]);

  //Ejemplo de cómo obtener los datos.
  useEffect(() => {
    const specialistData = localStorage.getItem("specialists");

    if (specialistData) {
      setSpecialists(JSON.parse(specialistData));
    }
  }, []);

  return (
    <div>
      {/* Sesión banner */}
      <section className="bg-[#4FC3F7] text-white p-10 flex flex-col items-center justify-center text-center rounded-lg">
        <div className="w-full flex justify-center">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestro Equipo</h2>
        </div>
      </section>

      {/* Sesión especialistas */}
      <section className="p-10 text-[#4B4B4B] text-center">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {specialists.map((specialist, index) => (
            <div key={index} className="p-5 border border-[#EBEBEB] rounded-lg shadow-lg flex flex-col items-center">
              {/* Imagen del especialista */}
              <img className="w-32 h-32 rounded-full object-cover" src={specialist.image} />
              <p className="mt-4 font-bold">{specialist.name}</p>
              <h3 className="mt-4 font-semibold">{specialist.specialty}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Specialists;
