import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Permite acceso desde fuera del contenedor
    port: 3000,      // Cambia el puerto al que quieres usar
    strictPort: true // Si el puerto está ocupado, no cambia automáticamente
  }
});