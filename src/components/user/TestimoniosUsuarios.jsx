import React from "react";
import "./TestimoniosUsuarios.css";

const testimonios = [
  {
    nombre: "Carlos Méndez",
    cargo: "Gerente de Compras",
    empresa: "Minera Austral",
    mensaje:
      "Gracias al Directorio encontré proveedores confiables y mejoré la logística de mi empresa. ¡Totalmente recomendado!",
  },
  {
    nombre: "María López",
    cargo: "Responsable de Suministros",
    empresa: "Exploraciones Patagónicas",
    mensaje:
      "La plataforma es muy intuitiva y facilita la conexión directa con proveedores especializados en minería.",
  },

  {
    nombre: "Carlos Méndez",
    cargo: "Gerente de Compras",
    empresa: "Minera Austral",
    mensaje:
      "Gracias al Directorio encontré proveedores confiables y mejoré la logística de mi empresa. ¡Totalmente recomendado!",
  },
  {
    nombre: "María López",
    cargo: "Responsable de Suministros",
    empresa: "Exploraciones Patagónicas",
    mensaje:
      "La plataforma es muy intuitiva y facilita la conexión directa con proveedores especializados en minería.",
  },
  {
    nombre: "Juan Pérez",
    cargo: "Coordinador de Operaciones",
    empresa: "Servicios Industriales SRL",
    mensaje:
      "Excelente herramienta para optimizar procesos y encontrar soluciones rápidas y efectivas para nuestra operación.",
  },
];

// función para sacar iniciales
const getIniciales = (nombre) => {
  return nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);
};

const TestimoniosUsuarios = () => {
  return (
    <section className="testimonios-usuarios">
      <h2>Lo que dicen nuestros usuarios</h2>
      <p className="subtitle">
        Historias de éxito y experiencias reales de empresas que usan nuestro Directorio.
      </p>

      <div className="testimonios-grid">
        {testimonios.map((t, index) => (
          <div key={index} className="testimonio-card">

            {/* ⭐ estrellas */}
            <div className="estrellas">★★★★★</div>

            {/* 💬 mensaje */}
            <p className="mensaje">{t.mensaje}</p>

            {/* 👤 usuario */}
            <div className="usuario-info">

              {/* avatar con iniciales */}
              <div className="avatar">
                {getIniciales(t.nombre)}
              </div>

              <div>
                <div className="nombre">{t.nombre}</div>
                <div className="cargo">
                  {t.cargo} - {t.empresa}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimoniosUsuarios;