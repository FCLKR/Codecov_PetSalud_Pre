import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black">
      <div className="bg-[#0288D1] text-white flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaPaw className="text-white text-2xl" />
          <span className="text-xl font-semibold">PetSalud</span>
        </div>

        <div className="flex font-semibold gap-6 items-center">
          {/* Links */}
          <div className="flex gap-6 text-sm">
            <Link to="/" className="hover:underline">
              Inicio
            </Link>
            <Link 
            to="#" onClick={(e) => {e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:underline">Servicios</Link>
            <Link 
            to="#" onClick={(e) => {e.preventDefault(); document.getElementById("sede")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:underline">Sede</Link>
            <Link to="/contact" className="hover:underline">
              Contáctanos
            </Link>
            <Link to="/registerService" className="hover:underline">
              Agendar cita
            </Link>
            {/* <Link to="/registerTipeService" className="hover:underline">
              Registrar Tipo Servicio
            </Link> */}
          </div>

          {/* Botón Iniciar Sesión */}
          <Link to="/login">
            <button className="bg-[#29B6F6] font-semibold text-white px-4 py-2 rounded-lg font-medium hover:bg-[#29B6F6]">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
