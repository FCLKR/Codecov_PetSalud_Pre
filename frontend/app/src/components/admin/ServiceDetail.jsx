import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // Obtener los servicios desde localStorage
    const storedServices = JSON.parse(localStorage.getItem("services")) || [];

    // Buscar el servicio por ID
    const foundService = storedServices.find((s) => s.id === parseInt(id));

    // Actualizar el estado
    setService(foundService);
  }, [id]);

  if (!service) return <p>Cargando...</p>;

  return (
    <>
      <h2 className="text-xl font-semibold text-center mb-4">Información del servicio</h2>

      <div className="p-4 max-w-2xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="p-4 rounded-lg">
          <p>
            <strong>Servicio:</strong> {service.name}
          </p>
          <h3 className="font-semibold mt-4 text-center">Descripción</h3>
          <p>{service.description}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
