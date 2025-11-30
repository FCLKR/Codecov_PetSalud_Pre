function Footer() {
  return (
    <footer className="bg-[#0288D1] text-white py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 text-sm text-left">
        {/* Columna 1 - PetSalud */}
        <div>
          <h2 className="font-bold text-lg">Pet Salud</h2>
          <p className="mt-2">Cuidamos de tus mascotas con amor y profesionalismo</p>
        </div>

        {/* Columna 2 - Contacto */}
        <div>
          <h2 className="font-bold text-lg">Contacto</h2>
          <p className="mt-2">contacto@petsalud.com</p>
        </div>

        {/* Columna 3 - Redes sociales */}
        <div>
          <h2 className="font-bold text-lg">Redes sociales</h2>
          <div className="mt-2 space-y-1">
            <a href="#" className="hover:underline block">
              Facebook
            </a>
            <a href="#" className="hover:underline block">
              Instagram
            </a>
            <a href="#" className="hover:underline block">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
