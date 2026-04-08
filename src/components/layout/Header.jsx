import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo */}
        <div className="logo">
          <span className="logo-top">DIRECTORIO DE MINERÍA</span>
          <span className="logo-bottom">SAN JUAN</span>
        </div>

        {/* Navegación */}
        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Categorías</a>
          <a href="#">Eventos</a>
          <a href="#">Capacitaciones</a>
          <a href="#">Contacto</a>
        </nav>

        {/* Botón */}
        <button className="btn-register">Forma Parte</button>

      </div>
    </header>
  );
}

export default Header;