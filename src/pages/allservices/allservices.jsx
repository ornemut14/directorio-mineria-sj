import { useEffect, useState } from "react";
import "./allservices.css";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/backbutton/backbutton";

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
  {
    categoria: "Construcción e Infraestructura",
    nombre: "Constructora Austral SRL",
    descripcion:
      "Constructora Austral SRL ejecuta obras civiles, viales e industriales en la Patagonia.",
  },
  {
    categoria: "Energía",
    nombre: "Electrosur Ingeniería",
    descripcion:
      "Electrosur Ingeniería provee soluciones eléctricas industriales y mantenimiento.",
  },
];

const Allservices = () => {
  const [listsh, setListsh] = useState([]);
  const [searchword, setSearchword] = useState("");
  const [categorias, setCategorias] = useState("Todas las categorias");
  const [listacategorias, setListacategorias] = useState([
    "Todas las categorias",
  ]);

  const navigator = useNavigate();

  // ✅ CARGA INICIAL
  useEffect(() => {
    setListsh(servicios);
  }, []);

  // ✅ CATEGORÍAS SIN DUPLICADOS
  useEffect(() => {
    const categoriasUnicas = [
      "Todas las categorias",
      ...new Set(servicios.map((s) => s.categoria)),
    ];
    setListacategorias(categoriasUnicas);
  }, []);

  // ✅ FILTRO POR CATEGORÍA
  const filterbycategory = (lista) => {
    if (categorias === "Todas las categorias") return lista;
    return lista.filter((item) => item.categoria === categorias);
  };

  // ✅ BUSCADOR
  const handleSearch = (event) => {
    setSearchword(event.target.value.toLowerCase());
  };

  // ✅ FILTRADO COMPLETO
  useEffect(() => {
    let templist = servicios;

    // filtro por texto (nombre + categoria + descripcion)
    if (searchword !== "") {
      templist = templist.filter((item) => {
        const text = (
          item.nombre +
          item.categoria +
          item.descripcion
        )
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        return text.includes(searchword);
      });
    }

    // filtro por categoria
    templist = filterbycategory(templist);

    setListsh(templist);
  }, [searchword, categorias]);

  return (
    <div className="all-services-servicios-destacados">
      <div className="all-services-backbutton-container">
        <BackButton onClick={() => navigator("/")}>Volver</BackButton>
      </div>

      <h2>Servicios</h2>
      <p className="all-services-subtitle">
        Descubrí los principales proveedores de todos los rubros y conectá
        directamente con ellos.
      </p>

      {/* 🔎 BUSCADOR */}
      <div className="allservices-searchbar">
        <div className="allservices-searchbar-group">
          <p>buscar</p>
          <input
            className="allservices-searchword"
            type="text"
            placeholder="Buscar por nombre..."
            onChange={handleSearch}
          />
        </div>

        <div className="allservices-searchbar-group">
          <p>Seleccionar categoria</p>
          <select
            className="allservices-categories"
            value={categorias}
            onChange={(e) => setCategorias(e.target.value)}
          >
            {listacategorias.map((obj, index) => (
              <option key={index}>{obj}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 📦 GRID */}
      <div className="all-services-servicios-grid">
        {listsh.map((servicio, index) => (
          <div key={index} className="all-services-servicio-card">
            <h4 className="all-services-categoria">
              {servicio.categoria}
            </h4>
            <h3 className="all-services-nombre">{servicio.nombre}</h3>
            <p className="all-services-descripcion">
              {servicio.descripcion}
            </p>
            <button className="all-services-btn-ver-mas">
              Ver más →
            </button>
          </div>
        ))}
      </div>

      {/* 🚨 SIN RESULTADOS */}
      {listsh.length === 0 && (
        <p style={{ color: "#cbd5f5", marginTop: "2rem" }}>
          No se encontraron resultados 😕
        </p>
      )}
    </div>
  );
};

export default Allservices;