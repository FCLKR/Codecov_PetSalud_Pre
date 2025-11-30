import { useState, useEffect } from "react";

function AppointmentsTable() {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await fetch("http://localhost:8000/appointment/");
        const data = await response.json();

        setAppointment(
          data.appointment.map((sp) => ({
            tipe_service: sp.tipe_service,
            id_user: sp.id_user,
            date_register: sp.date_register,
            date_service: sp.date_service,
            is_enable: sp.is_enable,
            hour_service: sp.hour_service,
            name_pet: sp.name_pet,
            descripcion_service: sp.descripcion_service
          }))
        );
      } catch (error) {
        console.error("Error cargando la agenda:", error);
      }
    };

    fetchAppointment();
  }, []);

  return (
    <div className="p-4">
      <table className="w-full border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left border-b">Tipo de servicio</th>
            <th className="p-3 text-left border-b">Fecha de registro</th>
            <th className="p-3 text-left border-b">Fecha del servicio</th>
            <th className="p-3 text-left border-b">Hora del servicio</th>
            <th className="p-3 text-left border-b">Nombre de la mascota</th>
            <th className="p-3 text-left border-b">Descripción del servicio</th>
          </tr>
        </thead>

        <tbody>
          {appointment.map((sp) => (
            <tr key={sp.id} className="border-b border-gray-300">
              <td className="p-3">{sp.tipe_service}</td>
              <td className="p-3">{sp.date_register}</td>
              <td className="p-3">{sp.date_service}</td>
              <td className="p-3">{sp.hour_service}</td>
              <td className="p-3">{sp.name_pet}</td>
              <td className="p-3">{sp.descripcion_service}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsTable;
