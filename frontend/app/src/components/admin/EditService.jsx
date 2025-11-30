import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import { getCookie } from "../../pages/csrftoken";

function EditTipeService() {
  const { id } = useParams();
  const navigate = useNavigate();
  const csrfToken = getCookie("csrftoken");

  const [formData, setFormData] = useState({
    nameServicio: "",
    descripcion: "",
    priceService: "",
    specialist: "",
    specialists: []
  });

  // 1. Cargar especialistas
  useEffect(() => {
    fetch("http://localhost:8000/specialists")
      .then((res) => res.json())
      .then((data) => {
        setFormData((prev) => ({
          ...prev,
          specialists: data.specialist || []
        }));
      })
      .catch((err) => console.error(err));
  }, []);

  // 2. Cargar datos actuales del servicio a editar
  useEffect(() => {
    fetch(`http://localhost:8000/services/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setFormData((prev) => ({
          ...prev,
          nameServicio: data.name_service,
          descripcion: data.descripcion_service,
          priceService: data.price_service,
          specialist: data.id_specialist_id
        }));
      })
      .catch((err) => console.error(err));
  }, [id]);

  // 3. Enviar actualización
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/services/${id}/`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken
      },
      body: JSON.stringify({
        name_service: formData.nameServicio,
        descripcion_service: formData.descripcion,
        price_service: formData.priceService,
        id_specialist_id: formData.specialist
      })
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "¡Tipo de Servicio Actualizado!",
          icon: "success"
        });

        navigate("/admin/services");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Error",
          text: "No se pudo actualizar el servicio",
          icon: "error"
        });
      });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="w-full max-w-xl rounded-lg bg-white p-10 shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Editar Tipo de Servicio
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Modifique la información del tipo de servicio seleccionado.
            </p>
          </div>

          <div className="mb-6 flex gap-6">
            <div className="w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Nombre Servicio
              </label>
              <input
                value={formData.nameServicio}
                type="text"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800"
                onChange={(e) =>
                  setFormData({ ...formData, nameServicio: e.target.value })
                }
              />
            </div>

            <div className="w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Especialista
              </label>
              <select
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800"
                value={formData.specialist}
                onChange={(e) =>
                  setFormData({ ...formData, specialist: e.target.value })
                }
              >
                <option value="" disabled>
                  -- Seleccione un especialista --
                </option>

                {formData.specialists.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name_specialist} {item.lastName_specialist} - {item.cc_specialist}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6 flex gap-6">
            <div className="w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Descripción
              </label>
              <textarea
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800"
                value={formData.descripcion}
                onChange={(e) =>
                  setFormData({ ...formData, descripcion: e.target.value })
                }
              />
            </div>

            <div className="w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Precio
              </label>
              <input
                type="number"
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800"
                value={formData.priceService}
                onChange={(e) =>
                  setFormData({ ...formData, priceService: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#0288D1] px-6 py-3 font-medium text-white transition duration-300 hover:bg-indigo-700"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTipeService;
