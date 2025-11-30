import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Outlet /> {/* Aquí se renderizan las páginas que no están protegidas */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
