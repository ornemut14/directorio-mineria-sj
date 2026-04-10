import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EventosForm() {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const navigate = useNavigate();

  const guardar = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/eventos", {
      titulo,
      fecha,
      descripcion
    }).then(() => {
      navigate("/admin/eventos");
    });
  };

  return (
    <div>
      <h1>Crear Evento</h1>

      <form onSubmit={guardar}>
        <input
          placeholder="Título"
          onChange={(e) => setTitulo(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setFecha(e.target.value)}
        />

        <textarea
          placeholder="Descripción"
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default EventosForm;