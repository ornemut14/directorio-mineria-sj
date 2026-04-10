import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/login", {
      email,
      password
    })
    .then(res => {
      if (res.data.success) {

        const user = res.data.user;

        // guardar usuario
        localStorage.setItem("user", JSON.stringify(user));

        // redirección según rol
        if (user.rol === "admin") {
          navigate("/admin");
        } else {
          navigate("/proveedor");
        }

      } else {
        alert("Credenciales incorrectas ❌");
      }
    })
    .catch(err => {
      console.log(err);
      alert("Error en el servidor");
    });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Bienvenido</h2>
        <p className="subtitle">Ingresa tus credenciales para continuar</p>

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            placeholder="tu@correo.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-login">Ingresar</button>
        </form>

        <p className="forgot-password">
          ¿Olvidaste tu contraseña? <a href="/forgot-password">Recuperar</a>
        </p>
      </div>
    </div>
  );
};

export default Login;