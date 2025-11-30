import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavbarClient from "../components/client/NavbarClient";
import SidebarClient from "../components/client/SidebarClient";

function Client({ isClient = true }) {
  const location = useLocation();
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Oculta el scroll

    return () => {
      document.body.style.overflow = ""; // Restaura el scroll cuando salga de client
    };
  }, [location]);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <NavbarClient />

      {/* Contenedor principal con Sidebar y contenido dinámico */}
      <div className="flex flex-1">
        <SidebarClient isClient={isClient} />
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet /> {/* Aquí se renderizan los componentes de cada ruta */}
        </main>
      </div>
    </div>
  );
}

export default Client;
