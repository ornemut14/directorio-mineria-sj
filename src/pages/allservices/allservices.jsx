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
];

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
