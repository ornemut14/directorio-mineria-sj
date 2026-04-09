import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Bienvenido</h2>
        <p className="subtitle">Ingresa tus credenciales para continuar</p>

        <form className="login-form">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="tu@correo.com" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="********" />

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