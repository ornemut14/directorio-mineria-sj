import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/use-store";
import "./Categories.css";
import { FaTruck, FaTools, FaHardHat, FaCogs } from "react-icons/fa";

function Categories() {
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
  ];

  const {setCategorypersist} = useStore()
  const navigator = useNavigate()
  const handleRedirect = (cate) =>{
    setCategorypersist(cate)
    navigator("/servicios")
  }

  return (
    <section className="categories">
      <h2>Explora nuestras categorías</h2>
      <p>
        Encuentra proveedores según tus necesidades dentro de la industria minera.
      </p>

      <div className="categories-grid">
        {data.map((cat, index) => (
          <div className="card" key={index} onClick={() => handleRedirect(cat.title)}>
            <div className="icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
          </div>
        ))}
      </div>

      {/* Botón ver todas las categorías */}
      <div className="categories-btn">
        <button onClick={() => navigator("/categorias")}>Ver todas las categorías</button>
      </div>
    </section>
  );
}

export default Categories;