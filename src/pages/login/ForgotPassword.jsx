// src/pages/login/ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar correo de recuperación
    setSent(true);

    // Simula redirección después de 3 segundos
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Recuperar Contraseña</h2>

        {!sent ? (
          <form onSubmit={handleSubmit}>
            <label>Ingresa tu email</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Enviar Link</button>
          </form>
        ) : (
          <div className="message-sent">
            <p>
              Se ha enviado un link a <strong>{email}</strong> para recuperar tu contraseña.
            </p>
            <p>Serás redirigido al login en unos segundos...</p>
          </div>
        )}

        <p className="back-to-login">
          <a href="/login">Volver al Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;