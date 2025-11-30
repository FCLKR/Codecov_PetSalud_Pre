import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

function ListServices({ isAdmin = true }) {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:8000/services/");
        const data = await response.json();

        setServices(
          data.tipeServices.map((ts) => ({
            id: ts.id,
            name: ts.name_service,
          }))
        );
      } catch (error) {
        console.error("Error cargando los tipos de servicio:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="p-4">
      {isAdmin && (
        <div className="flex justify-start mb-4">
          <button
            className="bg-[#29B6F6] font-semibold text-white px-4 py-2 rounded-lg hover:bg-[#0288D1]"
            onClick={() => navigate("/admin/services/registerTipeService")}
          >
            Agregar servicio
          </button>
        </div>
      )}

      <table className="w-full border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left border-b border-gray-300">Servicio</th>
            <th className="p-3 text-right border-b border-gray-300">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="border-b border-gray-300">
              <td className="p-3">{service.name}</td>

              {/* Ícono directo para editar */}
              <td className="p-3 text-right">
                <button
                  className="text-blue-500 hover:text-blue-700 text-xl"
                  onClick={() => navigate(`/admin/services/edit/${service.id}`)}
                >
                  <FaEdit />
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListServices;
