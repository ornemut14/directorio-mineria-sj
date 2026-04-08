import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      
      {/* Overlay oscuro */}
      <div className="overlay"></div>

      {/* Contenido */}
      <div className="hero-content">
        <h1>
          DIRECTORIO DE ENERGÍA Y MINERÍA <br />
          SAN JUAN
        </h1>

        <p>
          Encuentra los mejores proveedores para la industria minera y metalúrgica de Argentina.
          Más de 500 empresas verificadas.
        </p>

        {/* Buscador */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar proveedores por nombre, rubro o ubicación..."
          />
          <button>Buscar</button>
        </div>
      </div>

    </section>
  );
}

export default Hero;