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
  // --- Nuevos registros ---
  {
    categoria: "Construcción e Infraestructura",
    nombre: "Constructora Austral SRL",
    descripcion:
      "Constructora Austral SRL ejecuta obras civiles, viales e industriales en la Patagonia, con amplia experiencia en proyectos mineros y de infraestructura en Santa Cruz.",
  },
  {
    categoria: "Transporte y logística",
    nombre: "Patagonia Express Logística",
    descripcion:
      "Patagonia Express Logística brinda servicios de transporte de carga y personal, distribución y logística de última milla para empresas del sector extractivo en Santa Cruz.",
  },
  {
    categoria: "Suministros Industriales",
    nombre: "Ferretería Industrial del Sur",
    descripcion:
      "Ferretería Industrial del Sur provee herramientas, materiales de construcción y suministros industriales a empresas y contratistas de la región patagónica.",
  },
  {
    categoria: "Medio Ambiente y Sostenibilidad",
    nombre: "EcoSur Servicios Ambientales",
    descripcion:
      "EcoSur Servicios Ambientales ofrece gestión de residuos, estudios de impacto ambiental y consultoría de sostenibilidad para la industria minera y de hidrocarburos en Santa Cruz.",
  },
  {
    categoria: "Salud y Seguridad Ocupacional",
    nombre: "MedPat Salud Laboral",
    descripcion:
      "MedPat Salud Laboral brinda servicios de medicina del trabajo, exámenes preocupacionales y capacitación en seguridad e higiene para empresas de la Patagonia.",
  },
  {
    categoria: "Comunicación y Servicios Digitales",
    nombre: "Sur Digital Agency",
    descripcion:
      "Sur Digital Agency diseña y desarrolla sitios web, aplicaciones y estrategias de marketing digital para empresas industriales y pymes del sur argentino.",
  },
  {
    categoria: "Maquinarias y Equipos",
    nombre: "Técnica Patagónica S.A.",
    descripcion:
      "Técnica Patagónica S.A. comercializa, alquila y repara equipos de perforación, generadores y maquinaria pesada para la industria minera y petrolera de Santa Cruz.",
  },
  {
    categoria: "Construcción e Infraestructura",
    nombre: "Montajes y Estructuras del Sur",
    descripcion:
      "Montajes y Estructuras del Sur realiza montaje industrial, estructuras metálicas y trabajos en altura para plantas, minas e instalaciones en la Patagonia.",
  },
  {
    categoria: "Energía",
    nombre: "Electrosur Ingeniería",
    descripcion:
      "Electrosur Ingeniería provee soluciones eléctricas industriales, instalaciones de media y alta tensión, y mantenimiento preventivo para el sector minero y energético.",
  },
  {
    categoria: "Suministros Industriales",
    nombre: "Lubricantes Patagonia",
    descripcion:
      "Lubricantes Patagonia distribuye aceites, lubricantes y productos de mantenimiento de las principales marcas para flotas vehiculares e industrias del sur argentino.",
  },
  {
    categoria: "Capacitación y Consultoría",
    nombre: "Capacitar Sur",
    descripcion:
      "Capacitar Sur ofrece formación profesional, cursos técnicos y consultoría organizacional orientados a empresas del sector minero, petrolero y de construcción en Santa Cruz.",
  },
  {
    categoria: "Transporte y logística",
    nombre: "Remises y Traslados Austral",
    descripcion:
      "Remises y Traslados Austral brinda servicios de traslado de personal, transfers aeroportuarios y movilidad corporativa para empresas e instituciones en la Patagonia.",
  },
]

const Allservices = () => {
  const [listsh, setListsh] = useState([]);
  const [searchword, setSearchword] = useState("");
  const [categorias, setCategorias] = useState("Todas las categorias");
  const [listacategorias, setListacategorias] = useState([
    "Todas las categorias",
  ]);
  const navigator = useNavigate();

  const filterbycategory = (lista) => {
    if (categorias === "Todas las categorias") {
      return lista;
    } else {
      let templist = [];
      let tam = lista.length;
      let i = 0;
      for (i = 0; i < tam; i++) {
        let tempelement = lista[i];
        if (tempelement.categoria === categorias) {
          templist.push(tempelement);
        }
      }
      return templist;
    }
  };

  const handleSearch = (event) => {
    console.log(event.target.value, "escrito");
    setSearchword(event.target.value.toLowerCase());
  };

  /* Recordar poner en este useEffect la logica para el hook del endpoint */
  /* Hasta ahora solo toma las categorias de los servicios existentes */
  useEffect(() => {
    let tempcat = ["Todas las categorias"];
    let i = 0;
    let tam = servicios.length;
    for (i = 0; i < tam; i++) {
      let tempcat1 = servicios[i].categoria;
      let bool = false;
      let j = 0;
      let tam2 = tempcat.length;
      while (j < tam2 && !bool) {
        if (tempcat[i] === tempcat1) {
          bool = true;
        }
        j = j + 1;
      }

      if (!bool) {
        tempcat.push(tempcat1);
      }
    }
    setListacategorias(tempcat);
  }, []);

  useEffect(() => {
    let templist = [];
    if (searchword === "") {
      templist = templist.concat(servicios);
      templist = filterbycategory(templist);
      setListsh(templist);
    } else {
      let tam = servicios.length;
      let i = 0;
      for (i = 0; i < tam; i++) {
        let tempservice = servicios[i];
        let tempname = tempservice.nombre
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        if (tempname.includes(searchword)) {
          templist.push(tempservice);
        }
      }
      templist = filterbycategory(templist);
      setListsh(templist);
    }
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

      <div className="allservices-searchbar">
        <div className="allservices-searchbar-group">
          <p>buscar</p>
          <input
            className="allservices-searchword"
            type="text"
            placeholder="Buscar por nombre..."
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div className="divider" />
        <div className="allservices-searchbar-group">
          <p>Seleccionar categoria</p>
          <select
            className="allservices-categories"
            value={categorias}
            onChange={(e) => setCategorias(e.target.value)}
          >
            {listacategorias.map((obj, index) => (
              <option className="allservices-categories-options" key={index}>
                {obj}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="all-services-servicios-grid">
        {listsh.map((servicio, index) => (
          <div key={index} className="all-services-servicio-card">
            <h4 className="all-services-categoria">{servicio.categoria}</h4>
            <h3 className="all-services-nombre">{servicio.nombre}</h3>
            <p className="all-services-descripcion">{servicio.descripcion}</p>
            <button className="all-services-btn-ver-mas">Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allservices;
