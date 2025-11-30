import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import Calendario from "./Calendario";
import { getCookie } from "./csrftoken";

function RegisterService() {
  const initialFormData = {
    fecha: "",
    hora: "",
    servicio: "",
    descripcion: "",
    petName: "",
    tipesServices: [],
    allDays: []
  };

  const [formData, setFormData] = useState(initialFormData);
  const [ocupados, setOcupados] = useState([]); // ✅ días ocupados
  const csrfToken = getCookie("csrftoken");

  //Función para consultar días ocupados
  const fetchOcupados = () => {
    fetch("http://localhost:8000/all-dates")
      .then((res) => res.json())
      .then((data) => setOcupados(data)) // data = ["2025-11-20", "2025-11-22"]
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchOcupados(); //consulta inicial
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/tipe-services")
      .then((res) => res.json())
      .then((data) => {
        setFormData((prev) => ({
          ...prev,
          tipesServices: data.tipeServices || []
        }));
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/registerService/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Respuesta:", data);

        //Alerta SweetAlert2
        Swal.fire({
          title: "¡Servicio Registrado!",
          icon: "success",
          draggable: true
        });

        //Limpiar campos (manteniendo opciones)
        setFormData((prev) => ({
          ...prev,
          fecha: "",
          hora: "",
          servicio: "",
          descripcion: "",
          petName: ""
        }));

        //Volver a consultar días ocupados
        fetchOcupados();
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al enviar el formulario",
          icon: "error"
        });
      });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="w-full max-w-xl rounded-lg bg-white p-10 shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Agendar cita</h2>
            <p className="mt-2 text-sm text-gray-600">Agende la cita que desea solicitar para su mascota.</p>
          </div>

          <div className="mb-6 flex gap-6">
            <div className="w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-600">Nombre Mascota</label>
              <input 
                value={formData.petName} //controlado
                type="text" 
                name="petName" 
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 focus:border-[#0288D1] focus:ring-1 focus:ring-[#0288D1] focus:outline-none" 
                onChange={(e) =>
                  setFormData({ ...formData, petName: e.target.value })
                }
              />
            </div>
            <div className="w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-600">Tipo de Servicio</label>
              <select
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 focus:border-[#0288D1] focus:ring-1 focus:ring-[#0288D1] focus:outline-none" 
                name="tipeService"
                value={formData.servicio} //controlado
                onChange={(e) =>
                  setFormData({ ...formData, servicio: e.target.value })
                }
              >
                <option value="" disabled>
                  -- Seleccione el servicio --
                </option>
                {formData.tipesServices.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name_service} - COP {(item.price_service).toLocaleString('es-CO')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Calendario formData={formData} setFormData={setFormData} ocupados={ocupados} />

          <div className="mb-6 flex gap-6">
            <div className="w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-600">Descripción</label>
              <textarea 
                name="descripcion" 
                onChange={(e) =>
                  setFormData({ ...formData, descripcion: e.target.value })
                } 
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 focus:border-[#0288D1] focus:ring-1 focus:ring-[#0288D1] focus:outline-none" 
                value={formData.descripcion} //controlado
              />
            </div>
          </div>    
          
          <button type="submit" className="focus:ring-opacity-50 w-full rounded-md bg-[#0288D1] px-6 py-3 font-medium text-white transition duration-300 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none">Registrar</button>

        </form>
      </div>
    </div>
  );
}

export default RegisterService;