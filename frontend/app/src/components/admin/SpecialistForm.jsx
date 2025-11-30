import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SpecialistForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialty: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo especialista con un ID único
    const newSpecialist = { id: Date.now(), ...formData };

    // Obtener la lista actual de especialistas desde localStorage
    const storedSpecialists = JSON.parse(localStorage.getItem("specialists")) || [];

    // Agregar el nuevo especialista a la lista
    const updatedSpecialists = [...storedSpecialists, newSpecialist];

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("specialists", JSON.stringify(updatedSpecialists));

    // Redirigir a la lista de especialistas
    navigate("/admin");
  };

  return (
    <div className="flex flex-col  items-center h-screen">
      <h2 className="text-xl font-bold text-center mb-4">Agregar Especialista</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre y Teléfono */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-200 p-3 rounded-lg text-gray-700"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-200 p-3 rounded-lg text-gray-700"
              required
            />
          </div>

          {/* Especialidad */}
          <input
            type="text"
            name="specialty"
            placeholder="Especialidad"
            value={formData.specialty}
            onChange={handleChange}
            className="w-full bg-gray-200 p-3 rounded-lg text-gray-700"
            required
          />

          {/* Presentación */}
          <textarea
            name="description"
            placeholder="Presentación"
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

export default SpecialistForm;
