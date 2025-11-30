import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import ListSpecialists from "./components/admin/ListSpecialists";
import ListServices from "./components/admin/ListServices";
import SpecialistDetail from "./components/admin/SpecialistDetail";
import SpecialistForm from "./components/admin/SpecialistForm";
import ServicesDetail from "./components/admin/ServiceDetail";
import ServiceForm from "./components/admin/ServiceForm";
import EditService from "./components/admin/EditService";
import ListQuotes from "./components/client/AppointmentsTable";

import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import RegisterService from "./pages/RegisterService";
import RegisterTipeService from "./pages/RegisterTipeService";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Client from "./pages/Client";
import Admin from "./pages/Admin";
import { useEffect } from "react";
import specialist from "./data/specialists.json";
import users from "./data/users.json";
import services from "./data/services.json";

function App() {
  useEffect(() => {
    // Función para inicializar los datos en localStorage si no existen
    /**Como no se utilizará una base de datos, opté por almacenar los archivos JSON y cargarlos en el localStorage. De esta manera, los datos pueden manipularse fácilmente. La carga de estos datos solo se realiza si no existen previamente en el localStorage. */
    const initializeData = () => {
      const specialistsData = localStorage.getItem("specialists");
      const usersData = localStorage.getItem("users");
      const servicesData = localStorage.getItem("services");

      if (!specialistsData || !usersData || !servicesData) {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("specialists", JSON.stringify(specialist));
        localStorage.setItem("services", JSON.stringify(services));
      }
    };
    initializeData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Register />} />
          <Route path="/registerService" element={<RegisterService />} />
          
        </Route>

        {/* Rutas protegidas según el rol (Administrador, visualizador y cliente) */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<ListSpecialists />} />
            <Route path=":id" element={<SpecialistDetail />} />
            <Route path="new" element={<SpecialistForm />} />
            <Route path="services" element={<ListServices />} />
            <Route path="services/:id" element={<ServicesDetail />} />
            {/*<Route path="services/new" element={<ServiceForm />} />*/}
            <Route path="services/registerTipeService" element={<RegisterTipeService />} />
            <Route path="/admin/services/edit/:id" element={<EditService />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["viewer"]} />}>
          {/**isAdmin es una variable que utilizo para compartir la vista del administrador con el visualizador, ya que ambas son prácticamente iguales. La única diferencia es que el visualizador no puede modificar, agregar ni eliminar datos. De esta manera, controlo los permisos y aseguro que el visualizador solo tenga acceso de lectura. */}
          <Route path="/viewer" element={<Admin isAdmin={false} />}>
            <Route index element={<ListSpecialists isAdmin={false} />} />
            <Route path=":id" element={<SpecialistDetail />} />
            <Route path="services" element={<ListServices isAdmin={false} />} />
            <Route path="services/:id" element={<ServicesDetail />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["client"]} />}>
          <Route path="/client" element={<Client />}>
            <Route path="" element={<ListQuotes />} />
          </Route>
        </Route>
          
      </Routes>
    </>
  );
}

export default App;