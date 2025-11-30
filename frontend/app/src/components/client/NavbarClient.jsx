import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPaw, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

function NavbarClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth"); // Eliminar usuario autenticado
    navigate("/login"); // Redirigir al login
  };

  return (
    <nav className="bg-white px-6 py-3 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaPaw className="text-white text-2xl" />
        <span className="text-black text-xl font-semibold">PetSalud</span>
      </div>

      {/* Usuario */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 text-black font-semibold focus:outline-none cursor-pointer"
        >
          <FaUserCircle className="text-2xl" />
          <span>User Client</span>
        </button>

        {/* Menú desplegable */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100">
            <button className="flex items-center p-2 w-full cursor-pointer " onClick={handleLogout}>
              <FaSignOutAlt className="text-black-500 mr-2" /> Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarClient;
