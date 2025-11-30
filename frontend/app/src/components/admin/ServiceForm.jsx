import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ServiceForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo servicio con un ID único
    const newService = { id: Date.now(), ...formData };

    // Obtener la lista actual de servicios desde localStorage
    const storedServices = JSON.parse(localStorage.getItem("services")) || [];

    // Agregar el nuevo servicio a la lista
    const updatedServices = [...storedServices, newService];

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("services", JSON.stringify(updatedServices));

    // Redirigir a la lista de servicios
    navigate("/admin/services");
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h2 className="text-xl font-bold text-center mb-4">Agregar Servicio</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Servicio */}
          <input
            type="text"
            name="name"
            placeholder="Nombre del servicio"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-200 p-3 rounded-lg text-gray-700"
            required
          />

          {/* Descripción */}
          <textarea
            name="description"
            placeholder="Descripción del servicio"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-gray-200 p-3 rounded-lg text-gray-700 h-24 resize-none"
            required
          />

          {/* Botón Guardar */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceForm;
