import axios from "axios";
import { useEffect, useState } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/usuarios")
      .then(res => setUsuarios(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      {usuarios.map((u) => (
        <p key={u.id}>{u.nombre} - {u.email}</p>
      ))}
    </div>
  );
}

export default Usuarios;