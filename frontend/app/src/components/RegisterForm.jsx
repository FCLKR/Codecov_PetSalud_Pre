import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some((user) => user.email === email);
    if (exists) {
      alert("Este correo ya está registrado");
      return;
    }

    const newUser = { name, email, password, role: "cliente" };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 text-center">Registro</h2>
      <input
        type="text"
        placeholder="Nombre"
        className="w-full mb-3 p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
        Registrarse
      </button>
    </form>
  );
}
