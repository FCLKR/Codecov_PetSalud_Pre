import { FaThLarge } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SidebarClient ({ isClient }) {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col gap-4 shadow-lg">
      {/* Opción para visualizar citas */}
      <NavLink
        to={isClient ? "/client" : "/viewer"}
        end
        className={({ isActive }) =>
          `flex items-center gap-2 p-3 rounded-lg transition ${
            isActive ? "bg-gray-200" : "hover:bg-gray-300 text-gray-800"
          }`
        }
      >
        <FaThLarge className="text-xl" />
        <span className="font-medium">Citas Agendadas</span>
      </NavLink>
    </div>
  );
}

export default SidebarClient;
