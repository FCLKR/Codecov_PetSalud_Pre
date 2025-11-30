import { Navigate, Outlet } from "react-router-dom";

//Este componente se creó para proteger las rutas de administrador, visualizador y cliente, asegurando que solo los usuarios con los permisos adecuados puedan acceder a cada sección.
function ProtectedRoute({ allowedRoles }) {
  const userRole = localStorage.getItem("auth");

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace />; // Redirige si no está autorizado
  }

  return <Outlet />; // Renderiza las rutas protegidas
}

export default ProtectedRoute;
