// EventosPage.jsx
import React, { useEffect } from "react";
import "./EventosPage.css";

const eventos = [
  {
    titulo: "Expo Minera 2026",
    fecha: "12 Abril 2026",
    lugar: "Buenos Aires",
    descripcion: "Evento líder en innovación minera con empresas de toda Latinoamérica.",
    imagen: "https://images.unsplash.com/photo-1581093588401-22f8c7c38c03"
  },
  {
    titulo: "Cumbre Industrial",
    fecha: "25 Mayo 2026",
    lugar: "Córdoba",
    descripcion: "Networking y tendencias en la industria metalúrgica.",
    imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    titulo: "Tech Mining Summit",
    fecha: "10 Junio 2026",
    lugar: "Chile",
    descripcion: "Tecnología aplicada a la minería moderna.",
    imagen: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
  },
];

const EventosPage = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".evento-card");

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
    <section className="eventos">
      <div className="eventos-header">
        <h1>Eventos Destacados</h1>
        <p>Descubrí los eventos más importantes del sector</p>
      </div>

      <div className="eventos-grid">
        {eventos.map((evento, index) => (
          <div
            className="evento-card"
            key={index}
            style={{ backgroundImage: `url(${evento.imagen})` }}
          >
            <div className="overlay"></div>

            <span className="badge">DESTACADO</span>

            <div className="evento-content">
              <div className="evento-fecha">{evento.fecha}</div>
              <h2>{evento.titulo}</h2>
              <p className="evento-lugar">📍 {evento.lugar}</p>
              <p className="evento-desc">{evento.descripcion}</p>
              <button className="evento-btn">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventosPage;