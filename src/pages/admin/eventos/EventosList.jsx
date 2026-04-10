import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventosList() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/eventos")
      .then(res => setEventos(res.data))
      .catch(err => console.log(err));
  }, []);

  const eliminar = (id) => {
    axios.delete(`http://localhost:3001/eventos/${id}`)
      .then(() => {
        setEventos(eventos.filter(e => e.id !== id));
      });
  };

  return (
    <div>
      <h1>Eventos</h1>

      <Link to="/admin/eventos/nuevo">
        <button>+ Crear evento</button>
      </Link>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Título</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {eventos.map(e => (
            <tr key={e.id}>
              <td>{e.titulo}</td>
              <td>{e.fecha}</td>
              <td>
                <Link to={`/admin/eventos/editar/${e.id}`}>
                  <button>Editar</button>
                </Link>

                <button onClick={() => eliminar(e.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventosList;