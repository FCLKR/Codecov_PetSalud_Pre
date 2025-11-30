import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      alert("Inicio de sesión exitoso");
      onLogin(user); // redireccionar según rol
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 text-center">Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        className="w-full mb-3 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full mb-4 p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded w-full">
        Iniciar sesión
      </button>
    </form>
  );
}
