import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./eventos.css";

function EventosList() {
  const [eventos, setEventos] = useState([]);

  // 🔥 función para traer eventos
  const obtenerEventos = () => {
    axios.get("http://localhost:3001/eventos")
      .then(res => {
        setEventos(res.data);
      })
      .catch(err => {
        console.log(err);
        alert("Error al cargar eventos ❌");
      });
  };

  // 🔄 cargar al iniciar
  useEffect(() => {
    obtenerEventos();
  }, []);

  // 🗑 eliminar evento
  const eliminar = (id) => {
    if (!window.confirm("¿Seguro que querés eliminar este evento?")) return;

    axios.delete(`http://localhost:3001/eventos/${id}`)
      .then(() => {
        obtenerEventos(); // 🔥 refresca desde DB
      })
      .catch(err => {
        console.log(err);
        alert("Error al eliminar ❌");
      });
  };

  return (
    <div className="eventos-container">

      <div className="eventos-header">
        <h1>Eventos</h1>

        <Link to="/admin/eventos/nuevo">
          <button className="btn-primary">+ Crear evento</button>
        </Link>
      </div>

      <div className="eventos-table-card">
        <table className="eventos-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Fecha</th>
              <th>Descripcion</th>
              <th className="acciones">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {eventos.length > 0 ? (
              eventos.map(e => (
                <tr key={e.id}>
                  <td className="titulo">{e.titulo}</td>

                  {/* 🔥 formateo de fecha */}
                  <td>
                    {new Date(e.fecha).toLocaleDateString()}
                  </td>
                  
                    <td>
                      {e.descripcion}
                    </td>
                  <td className="acciones">

                    <Link to={`/admin/eventos/editar/${e.id}`}>
                      <button className="btn-edit">Editar</button>
                    </Link>

                    <button 
                      className="btn-delete"
                      onClick={() => eliminar(e.id)}
                    >
                      Eliminar
                    </button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center", padding: "20px" }}>
                  No hay eventos cargados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default EventosList;