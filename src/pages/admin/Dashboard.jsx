import { Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <Link to="eventos" className="card card-blue">
        <div>
          <h3>Eventos</h3>
          <p>Gestionar eventos</p>
        </div>
      </Link>

      <Link to="proveedores" className="card card-green">
        <div>
          <h3>Proveedores</h3>
          <p>Ver y aprobar</p>
        </div>
      </Link>

      <Link to="servicios" className="card card-red">
        <div>
          <h3>Servicios</h3>
          <p>Publicaciones</p>
        </div>
      </Link>

      <Link to="categorias" className="card card-cyan">
        <div>
          <h3>Categorías</h3>
          <p>Organización</p>
        </div>
      </Link>

    </div>
  );
}

export default Dashboard;