import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import Sidebar from "../components/admin/Sidebar";

function Admin({ isAdmin = true }) {
  const location = useLocation();
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Oculta el scroll

    return () => {
      document.body.style.overflow = ""; // Restaura el scroll cuando salga de admin
    };
  }, [location]);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <NavbarAdmin />

      {/* Contenedor principal con Sidebar y contenido dinámico */}
      <div className="flex flex-1">
        <Sidebar isAdmin={isAdmin} />
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet /> {/* Aquí se renderizan los componentes de cada ruta */}
        </main>
      </div>
    </div>
  );
}

export default Admin;
