import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigator = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <span className="logo-top">
            <img src="/public/logo.png" alt="Logo" />
          </span>
        </div>

        {/* Navegación */}
        <nav className="nav">
          <a href="/">Inicio</a>
          <a href="/categorias">Categorías</a>
          <a href="/eventos">Eventos</a>
          <a href="/capacitaciones">Capacitaciones</a>
          <a href="#footer">Contacto</a>
        </nav>

        {/* Botón */}
        <div className="header-actions">
          <button
            className="btn-register"
            onClick={() => navigator("/register")}
          >
            Forma Parte
          </button>

          <a href="/login">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="6" r="4" stroke="#ffffff" strokeWidth="1.5" />
              <path
                d="M20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
