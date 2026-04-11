import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./eventosForm.css";

function EventosForm() {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const navigate = useNavigate();
  const { id } = useParams(); // 🔥 detecta si estamos editando

  // 🔥 CARGAR DATOS SI ES EDICIÓN
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/eventos/${id}`)
        .then(res => {
          setTitulo(res.data.titulo);
          setFecha(res.data.fecha?.split("T")[0]); // formato input date
          setDescripcion(res.data.descripcion);
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  const guardar = (e) => {
    e.preventDefault();

    const data = { titulo, fecha, descripcion };

    // 🔥 SI HAY ID → EDITAR
    if (id) {
      axios.put(`http://localhost:3001/eventos/${id}`, data)
        .then(() => {
          alert("Evento actualizado ✅");
          navigate("/admin/eventos");
        })
        .catch(err => {
          console.log(err);
          alert("Error al actualizar ❌");
        });
    } else {
      // 🔥 SI NO → CREAR
      axios.post("http://localhost:3001/eventos", data)
        .then(() => {
          alert("Evento creado ✅");
          navigate("/admin/eventos");
        })
        .catch(err => {
          console.log(err);
          alert("Error al crear ❌");
        });
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">

        <div className="form-header">
          <h1>{id ? "Editar Evento" : "Crear Evento"}</h1>
        </div>

        <form onSubmit={guardar} className="form">

          <div className="form-group">
            <label>Título</label>
            <input
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Fecha</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows="4"
            />
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="btn-secondary"
              onClick={() => navigate("/admin/eventos")}
            >
              Cancelar
            </button>

            <button type="submit" className="btn-primary">
              {id ? "Actualizar" : "Guardar Evento"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default EventosForm;