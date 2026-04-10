import { Link, Outlet } from "react-router-dom";
import "./admin.css";

function AdminLayout() {
  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>

        <nav>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/eventos">Eventos</Link>
          <Link to="/admin/proveedores">Proveedores</Link>
          <Link to="/admin/servicios">Servicios</Link>
          <Link to="/admin/categorias">Categorías</Link>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="content">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;