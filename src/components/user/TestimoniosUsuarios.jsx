// TestimoniosUsuarios.jsx
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
    nombre: "Juan Pérez",
    cargo: "Coordinador de Operaciones",
    empresa: "Servicios Industriales SRL",
    mensaje:
      "Excelente herramienta para optimizar procesos y encontrar soluciones rápidas y efectivas para nuestra operación.",
  },
];

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
            <p className="mensaje">"{t.mensaje}"</p>
            <div className="usuario-info">
              <h4 className="nombre">{t.nombre}</h4>
              <p className="cargo">{t.cargo} - {t.empresa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimoniosUsuarios;