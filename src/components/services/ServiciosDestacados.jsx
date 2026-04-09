// ServiciosDestacados.jsx
import React, { useEffect } from "react";
import "./ServiciosDestacados.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const servicios = [
  {
    categoria: "Maquinarias y Equipos",
    nombre: "Áridos Peláez",
    descripcion:
      "Áridos Peláez ofrece venta de áridos, hormigón y alquiler de maquinaria pesada en Puerto Deseado para minería, construcción y obras civiles en Santa Cruz.",
  },
  {
    categoria: "Servicios",
    nombre: "Ganges SRL",
    descripcion:
      "Ganges SRL fabrica ropa de trabajo, uniformes y merchandising para empresas, con soluciones textiles personalizadas y calidad profesional garantizada.",
  },
  {
    categoria: "Transporte y logística",
    nombre: "International Cargo S.A.",
    descripcion:
      "International Cargo S.A. ofrece soluciones logísticas integrales, transporte nacional e internacional y carga de proyecto para minería e industria.",
  },
  {
    categoria: "Comunicación y Servicios Digitales",
    nombre: "PMF Comunicaciones",
    descripcion:
      "PMF Comunicaciones brinda servicios de comunicación estratégica, contenidos y monitoreo de medios para el sector minero en Santa Cruz.",
  },
  {
    categoria: "Servicios",
    nombre: "Suministros Pablo Monte",
    descripcion:
      "Suministros Pablo Monte ofrece venta, reparación y repuestos para instalaciones comerciales y climatización en Río Gallegos, Santa Cruz.",
  },
  {
    categoria: "Servicios",
    nombre: "Puntadas Peritenses SRL",
    descripcion:
      "Puntadas Peritenses produce indumentaria laboral de alto desempeño en Santa Cruz para minería e industria con calidad local y compromiso comunitario.",
  },
  {
    categoria: "Servicios",
    nombre: "PROINSER Insumos Industriales",
    descripcion:
      "PROINSER Insumos Industriales ofrece iluminación, calefacción y mantenimiento para industrias en la zona norte de Santa Cruz.",
  },
  {
    categoria: "Suministros Industriales",
    nombre: "Deseado Seguridad",
    descripcion:
      "Deseado Seguridad brinda venta y recarga de extintores, EPP y soluciones en seguridad industrial desde Puerto Deseado, Santa Cruz.",
  },
];

const ServiciosDestacados = () => {
  const navigator = useNavigate();

  // 🔥 AOS INIT CORRECTO
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="servicios-destacados">
      <h2 data-aos="fade-up">Servicios destacados</h2>

      <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
        Descubrí los principales proveedores de todos los rubros y conectá
        directamente con ellos.
      </p>

      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="servicio-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h4 className="categoria">{servicio.categoria}</h4>
            <h3 className="nombre">{servicio.nombre}</h3>
            <p className="descripcion">{servicio.descripcion}</p>
            <button className="btn-ver-mas">Ver más →</button>
          </div>
        ))}
      </div>

      <button
        className="btn-ver-todos"
        data-aos="fade-up"
        data-aos-delay="200"
        onClick={() => navigator("/servicios")}
      >
        Ver todos
      </button>
    </section>
  );
};

export default ServiciosDestacados;