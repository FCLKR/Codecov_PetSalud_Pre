import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendario({ formData, setFormData, ocupados }) {
  const isDayDisabled = (date) => {
    const formato = date.toISOString().split("T")[0];
    return ocupados.includes(formato);
  };

  return (
    <div className="mb-6 flex gap-6">
      <div className="w-1/2">
        <label className="mb-2 block text-sm font-medium text-gray-600">Fecha del servicio</label>
        <DatePicker
          selected={formData.fecha ? new Date(formData.fecha) : null} //controlado
          onChange={(date) => {
            const fechaFormateada = date.toISOString().split("T")[0];
            setFormData({ ...formData, fecha: fechaFormateada });
          }}
          dateFormat="yyyy-MM-dd"
          filterDate={(date) => !isDayDisabled(date)} //bloquea días ocupados
          minDate={new Date()}
          className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 focus:border-[#0288D1] focus:ring-1 focus:ring-[#0288D1] focus:outline-none"
          placeholderText="Seleccione la fecha"
          name="fecha"
        />
      </div>
      <div className="w-1/2">
        <label className="mb-2 block text-sm font-medium text-gray-600">Hora del servicio</label>
        <DatePicker
          selected={
            formData.hora
              ? new Date(`1970-01-01T${formData.hora}`)
              : null
          } //controlado
          onChange={(date) => {
            const horaFormateada = date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false
            });
            setFormData({ ...formData, hora: horaFormateada });
          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Hora"
          dateFormat="HH:mm"
          minTime={new Date().setHours(9, 0)}
          maxTime={new Date().setHours(18, 0)}
          className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 focus:border-[#0288D1] focus:ring-1 focus:ring-[#0288D1] focus:outline-none"
          placeholderText="Seleccione la hora"
          name="hora"
        />
      </div>
    </div>  
  );
}

export default Calendario;