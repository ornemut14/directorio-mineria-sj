import { useState } from "react";
import FormField from "./FormField.jsx";

const STRENGTH_MESSAGES = ["", "Muy débil", "Débil", "Buena", "Excelente"];

function getStrengthScore(value) {
  let score = 0;
  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;
  return score;
}

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function PasswordInput({ value, onChange }) {
  const [visible, setVisible] = useState(false);
  const score = value ? getStrengthScore(value) : 0;

  return (
    <FormField label="Contraseña" required>
      <div className="pass-wrap">
        <input
          type={visible ? "text" : "password"}
          placeholder="Mínimo 8 caracteres"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="button"
          className="pass-toggle"
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>

      <div className={`strength-bar ${score ? `s${score}` : ""}`}>
        <span />
        <span />
        <span />
        <span />
      </div>

      <p className="strength-hint">
        {score
          ? STRENGTH_MESSAGES[score]
          : "Usá letras, números y símbolos para mayor seguridad."}
      </p>
    </FormField>
  );
}
