import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./categoriasList.css";

function CategoriasList() {
  const [categorias, setCategorias] = useState([]);

  // 📄 traer categorías
  const obtenerCategorias = () => {
    axios.get("http://localhost:3001/categorias")
      .then(res => {
        setCategorias(res.data);
      })
      .catch(err => {
        console.log(err);
        alert("Error al cargar categorías ❌");
      });
  };

  // 🔄 cargar al iniciar
  useEffect(() => {
    obtenerCategorias();
  }, []);

  // 🗑 eliminar categoría
  const eliminar = (id) => {
    if (!window.confirm("¿Seguro que querés eliminar esta categoría?")) return;

    axios.delete(`http://localhost:3001/categorias/${id}`)
      .then(() => {
        obtenerCategorias(); // refrescar desde DB
      })
      .catch(err => {
        console.log(err);
        alert("Error al eliminar ❌");
      });
  };

  return (
    <div className="eventos-container">

      <div className="eventos-header">
        <h1>Categorías</h1>

        <Link to="/admin/categorias/nuevo">
          <button className="btn-primary">+ Crear categoría</button>
        </Link>
      </div>

      <div className="eventos-table-card">
        <table className="eventos-table">

          <thead>
            <tr>
              <th>Nombre</th>
              <th className="acciones">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {categorias.length > 0 ? (
              categorias.map(cat => (
                <tr key={cat.id}>
                  <td className="titulo">{cat.nombre}</td>

                  <td className="acciones">

                    <Link to={`/admin/categorias/editar/${cat.id}`}>
                      <button className="btn-edit">Editar</button>
                    </Link>

                    <button
                      className="btn-delete"
                      onClick={() => eliminar(cat.id)}
                    >
                      Eliminar
                    </button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" style={{ textAlign: "center", padding: "20px" }}>
                  No hay categorías cargadas
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default CategoriasList;