import React, { useEffect, useState } from "react";
import "./CapacitacionesPage.css";

const capacitaciones = [
  {
    titulo: "Curso de Seguridad Minera",
    duracion: "4 semanas",
    nivel: "Intermedio",
    descripcion: "Aprendé normas y prácticas de seguridad en minería.",
  },
  {
    titulo: "Mantenimiento Industrial",
    duracion: "6 semanas",
    nivel: "Avanzado",
    descripcion: "Optimización y mantenimiento de maquinaria pesada.",
  },
  {
    titulo: "Introducción a la Metalurgia",
    duracion: "3 semanas",
    nivel: "Inicial",
    descripcion: "Conceptos básicos de procesos metalúrgicos.",
  },
];

const CapacitacionesPage = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".cap-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <>
      <section className="capacitaciones">
        <div className="capacitaciones-header">
          <h1>Capacitaciones</h1>
          <span class="eyebrow"> Formate y potenciá tu perfil profesional</span>
          <p>Explora todas nuestras capacitaciones.</p>
        </div>

        <div className="capacitaciones-grid">
          {capacitaciones.map((cap, index) => (
            <div className="cap-card" key={index}>
              <div className="cap-nivel">{cap.nivel}</div>
              <h2>{cap.titulo}</h2>
              <p className="cap-duracion">⏱ {cap.duracion}</p>
              <p className="cap-desc">{cap.descripcion}</p>

              <button
                className="cap-btn"
                onClick={() => setSelected(cap)}
              >
                Inscribirme
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 MODAL GLOBAL (FUERA DE TODO) */}
      {selected && (
  <div
    className="modal-overlay"
    style={{ pointerEvents: "auto" }}  // 👈 CLAVE
    onClick={() => setSelected(null)}
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()}
    >
      <h2>{selected.titulo}</h2>

      <p><strong>Nivel:</strong> {selected.nivel}</p>
      <p><strong>Duración:</strong> {selected.duracion}</p>

      <p>{selected.descripcion}</p>

      <button
        className="cap-btn"
        onClick={() => setSelected(null)}
      >
        Confirmar inscripción
      </button>
    </div>
  </div>
)}
    </>
  );
};

export default CapacitacionesPage;