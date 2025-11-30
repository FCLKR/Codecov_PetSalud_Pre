import { useState, useEffect } from "react";

function ListSpecialist() {
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        const response = await fetch("http://localhost:8000/specialists/");
        const data = await response.json();

        setSpecialists(
          data.specialist.map((sp) => ({
            id: sp.id,
            name: sp.name_specialist,
            lastName: sp.lastName_specialist,
            cc: sp.cc_specialist,
            phone: sp.phone_specialist,
            address: sp.adress_specialist, 
            email: sp.email_specialist,
          }))
        );
      } catch (error) {
        console.error("Error cargando especialistas:", error);
      }
    };

    fetchSpecialists();
  }, []);

  return (
    <div className="p-4">
      <table className="w-full border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left border-b">ID</th>
            <th className="p-3 text-left border-b">Nombre</th>
            <th className="p-3 text-left border-b">Apellido</th>
            <th className="p-3 text-left border-b">CC</th>
            <th className="p-3 text-left border-b">Teléfono</th>
            <th className="p-3 text-left border-b">Dirección</th>
            <th className="p-3 text-left border-b">Email</th>
          </tr>
        </thead>

        <tbody>
          {specialists.map((sp) => (
            <tr key={sp.id} className="border-b border-gray-300">
              <td className="p-3">{sp.id}</td>
              <td className="p-3">{sp.name}</td>
              <td className="p-3">{sp.lastName}</td>
              <td className="p-3">{sp.cc}</td>
              <td className="p-3">{sp.phone}</td>
              <td className="p-3">{sp.address}</td>
              <td className="p-3">{sp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSpecialist;
