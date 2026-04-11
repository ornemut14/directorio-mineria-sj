import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./categoriasForm.css";

function CategoriasForm() {
  const [nombre, setNombre] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  // 🔥 CARGAR SI ES EDICIÓN
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/categorias/${id}`)
        .then((res) => {
          setNombre(res.data.nombre);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  // 💾 GUARDAR (CREATE / UPDATE)
  const guardar = (e) => {
    e.preventDefault();

    const data = { nombre };

    if (id) {
      // ✏️ EDITAR
      axios
        .put(`http://localhost:3001/categorias/${id}`, data)
        .then(() => {
          alert("Categoría actualizada ✅");
          navigate("/admin/categorias");
        })
        .catch((err) => {
          console.log(err);
          alert("Error al actualizar ❌");
        });
    } else {
      // ➕ CREAR
      axios
        .post("http://localhost:3001/categorias", data)
        .then(() => {
          alert("Categoría creada ✅");
          navigate("/admin/categorias");
        })
        .catch((err) => {
          console.log(err);
          alert("Error al crear ❌");
        });
    }
  };

  return (
    <div className="categorias-form-container">

      <div className="form-card">

        <div className="form-header">
          <h1>{id ? "Editar Categoría" : "Crear Categoría"}</h1>
        </div>

        <form onSubmit={guardar} className="form">

          <div className="form-group">
            <label>Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/admin/categorias")}
            >
              Cancelar
            </button>

            <button type="submit" className="btn-primary">
              {id ? "Actualizar" : "Guardar"}
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default CategoriasForm;