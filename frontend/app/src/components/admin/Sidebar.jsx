import { FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Sidebar({ isAdmin }) {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col gap-4 shadow-lg">
      {/* Opción Especialistas */}
      <NavLink
        to={isAdmin ? "/admin" : "/viewer"}
        end
        className={({ isActive }) =>
          `flex items-center gap-2 p-3 rounded-lg transition ${
            isActive ? "bg-gray-200" : "hover:bg-gray-300 text-gray-800"
          }`
        }
      >
        <FaUserDoctor className="text-xl" />
        <span className="font-medium">Especialistas</span>
      </NavLink>

      {/* Opción Servicios */}
      <NavLink
        to={isAdmin ? "/admin/services" : "/viewer/services"}
        className={({ isActive }) =>
          `flex items-center gap-2 p-3 rounded-lg transition ${
            isActive ? "bg-gray-200" : "hover:bg-gray-200 text-gray-800"
          }`
        }
      >
        <FaThLarge className="text-xl" />
        <span className="font-medium">Servicios</span>
      </NavLink>
    </div>
  );
}

export default Sidebar;
