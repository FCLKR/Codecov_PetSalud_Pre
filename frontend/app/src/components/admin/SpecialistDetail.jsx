import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SpecialistDetail() {
  const { id } = useParams();
  const [specialist, setSpecialist] = useState(null);

  useEffect(() => {
    // Obtener los especialistas desde localStorage
    const storedSpecialists = JSON.parse(localStorage.getItem("specialists")) || [];

    // Buscar el especialista por ID
    const foundSpecialist = storedSpecialists.find((s) => s.id === parseInt(id));

    // Actualizar el estado
    setSpecialist(foundSpecialist);
  }, [id]);

  if (!specialist) return <p>Cargando...</p>;

  return (
    <>
      <h2 className="text-xl font-semibold text-center mb-4">Información del especialista</h2>

      <div className="p-4 max-w-2xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="p-4  rounded-lg">
          <p>
            <strong>Nombre:</strong> {specialist.name}
          </p>
          <p>
            <strong>Teléfono:</strong> {specialist.phone}
          </p>
          <p>
            <strong>Especialidad:</strong> {specialist.specialty}
          </p>
          <h3 className="font-semibold mt-4 text-center">Presentación</h3>
          <p>{specialist.description}</p>
        </div>
      </div>
    </>
  );
}

export default SpecialistDetail;
