// ComoFuncionaSuscripcion.jsx
import React, { useEffect } from "react";
import "./ComoFuncionaSuscripcion.css";

const pasos = [
  {
    numero: 1,
    titulo: "Registrate",
    descripcion:
      "Creá tu cuenta en el Directorio de Proveedores para poder acceder a todos los servicios y proveedores disponibles.",
  },
  {
    numero: 2,
    titulo: "Seleccioná tu plan",
    descripcion:
      "Elegí el plan de suscripción que mejor se adapte a tus necesidades y obtené beneficios exclusivos.",
  },
  {
    numero: 3,
    titulo: "Disfrutá de los servicios",
    descripcion:
      "Accedé a los proveedores destacados, promociones y contactá directamente con ellos desde la plataforma.",
  },
];

const ComoFuncionaSuscripcion = () => {

useEffect(() => {
  const grid = document.querySelector(".pasos-grid");
  const cards = document.querySelectorAll(".paso-card");

  let hasAnimated = false;
  let hasScrolled = false;

  // Detecta si el usuario hizo scroll
  const handleScroll = () => {
    hasScrolled = true;
  };

  window.addEventListener("scroll", handleScroll);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !hasAnimated &&
          hasScrolled // 👈 CLAVE: solo si hubo scroll
        ) {
          hasAnimated = true;

          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, index * 400); // efecto en cadena más claro
          });
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (grid) observer.observe(grid);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <section className="como-funciona">
      <div className="como-funciona-div-triangle">
        <h2>¿Cómo funciona la suscripción al Directorio?</h2>
        <p className="subtitle">
          Conocé los pasos para registrarte y empezar a aprovechar todos los beneficios
          del Directorio de Proveedores.
        </p>
      </div>

      <div className="pasos-grid">
        {pasos.map((paso, index) => (
          <div key={paso.numero} className="paso-card">
            
            <div className="numero">{paso.numero}</div>
            <h3 className="titulo">{paso.titulo}</h3>
            <p className="descripcion">{paso.descripcion}</p>

            {/* 🔥 FLECHAS (solo si no es la última card) */}
            {index !== pasos.length - 1 && (
              <>
                <div className="arrow-line"></div>
                <div className="arrow-head"></div>
              </>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default ComoFuncionaSuscripcion;