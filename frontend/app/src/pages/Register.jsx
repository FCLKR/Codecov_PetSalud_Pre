import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    /**
     *
     *Se implementaron tres botones para facilitar el acceso a las diferentes vistas. La idea es que, una vez que el formulario esté completo, se verifique el rol del usuario y se almacene en localStorage dentro de la clave auth. Como no hay una base de datos, toda la autenticación se gestiona localmente. Para validar el acceso, se puede comparar el usuario ingresado con la lista almacenada en localStorage, simulando un sistema de verificación.
     */
    localStorage.setItem("auth", role); // Guardamos el rol del usuario
    navigate(`/${role}`); // Redirigimos a su vista correspondiente
  };
  return (
    <>
      <div>inicio de sesion</div>
      <div className="flex flex-col items-center mt-10 gap-4">
        <h1 className="text-2xl font-bold">Selecciona un perfil</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => handleLogin("admin")}
        >
          Administrador
        </button>
        <button
          className="px-4 py-2 bg-yellow-600 text-white rounded"
          onClick={() => handleLogin("client")}
        >
          Cliente
        </button>
      </div>
    </>
  );
}

export default Register;