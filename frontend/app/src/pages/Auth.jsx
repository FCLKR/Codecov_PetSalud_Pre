import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  const handleLogin = (user) => {
    switch (user.role) {
      case "admin":
        navigate("/admin");
        break;
      case "visualizador":
        navigate("/visualizador");
        break;
      default:
        navigate("/cliente");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <header className="bg-[#841c26] text-white flex justify-between p-4 items-center">
        <div className="font-bold text-xl">🐾 PetSalud</div>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Inicio</a>
          <a href="/servicios" className="hover:underline">Servicios</a>
          <a href="/sede" className="hover:underline">Sede</a>
          <a href="/contacto" className="hover:underline">Contáctanos</a>
          <a href="/auth" className="bg-yellow-400 px-3 py-1 rounded text-black">Iniciar sesión</a>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row justify-center items-start gap-8 p-8">
        <LoginForm onLogin={handleLogin} />
        <RegisterForm />
      </main>

      <footer className="bg-[#841c26] text-white py-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-center md:text-left">
        <div>
          <strong>Pet Salud</strong>
          <p>Cuidamos de tus mascotas con amor y profesionalismo</p>
        </div>
        <div>
          <strong>Contacto</strong>
          <p>contacto@petsalud.com</p>
        </div>
        <div>
          <strong>Redes sociales</strong>
          <p>Facebook<br />Instagram<br />X</p>
        </div>
      </footer>
    </div>
  );
}
