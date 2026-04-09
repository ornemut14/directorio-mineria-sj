import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/use-store";
import "./categoriespage.css";
import {
  FaTruck, FaTools, FaHardHat, FaCogs,
  FaFlask, FaBolt, FaWater, FaLeaf,
  FaBuilding, FaChartLine
} from "react-icons/fa";
import BackButton from "../../components/backbutton/backbutton";

function CategoriesPage() {
  const data = [
  {
    icon: <FaTruck />,
    title: "Maquinaria Pesada",
    desc: "Equipos y maquinaria para operaciones mineras",
  },
  {
    icon: <FaTools />,
    title: "Repuestos",
    desc: "Piezas y componentes industriales",
  },
  {
    icon: <FaHardHat />,
    title: "Seguridad Industrial",
    desc: "Equipos de protección personal",
  },
  {
    icon: <FaCogs />,
    title: "Servicios",
    desc: "Servicios especializados para minería",
  },
  {
    icon: <FaFlask />,
    title: "Laboratorio",
    desc: "Análisis de muestras y ensayos mineralógicos",
  },
  {
    icon: <FaBolt />,
    title: "Energía y Electricidad",
    desc: "Sistemas eléctricos e infraestructura energética",
  },
  {
    icon: <FaWater />,
    title: "Gestión del Agua",
    desc: "Tratamiento y manejo de recursos hídricos",
  },
  {
    icon: <FaLeaf />,
    title: "Medio Ambiente",
    desc: "Soluciones de remediación y sustentabilidad",
  },
  {
    icon: <FaBuilding />,
    title: "Infraestructura",
    desc: "Construcción y mantenimiento de instalaciones",
  },
  {
    icon: <FaChartLine />,
    title: "Consultoría",
    desc: "Asesoramiento técnico y planificación minera",
  },
]

  const {setCategorypersist} = useStore()
  const navigator = useNavigate()
  const handleRedirect = (cate) =>{
    setCategorypersist(cate)
    navigator("/servicios")
  }

  return (
    <section className="categoriespage">
      <div className="categories-page-backbutton-container">
        <BackButton onClick={() => navigator("/")}>Volver</BackButton>
      </div>
      <h1>Categorias</h1>
      <span class="eyebrow"> Explora todas nuestras categorias disponibles.</span>
      <p>
        Encuentra proveedores según tus necesidades dentro de la industria minera.
      </p>

      <div className="categories-page-grid">
        {data.map((cat, index) => (
          <div className="categories-page-card" style={{ "--card-delay": `${0.3 + index * 0.07}s` }} key={index} onClick={() => handleRedirect(cat.title)}>
            <div className="categories-page-icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesPage;