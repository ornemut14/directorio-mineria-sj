import { useState } from "react";
import "./registro.css";

import Sidebar from "./Sidebar.jsx";
import ProgressBar from "./ProgressBar.jsx";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import SuccessScreen from "./SuccessScreen.jsx";

const TOTAL_STEPS = 3;

const STEP_TITLES = [
  {
    heading: "Crear cuenta",
    sub: (
      <>
        ¿Ya tenés una cuenta? <a href="#">Iniciá sesión</a>
      </>
    ),
  },
  {
    heading: "Tu perfil",
    sub: "Completá tu información personal y profesional.",
  },
  {
    heading: "Casi listo",
    sub: "Configurá tus preferencias para personalizar la experiencia.",
  },
];

const INITIAL_DATA = {
  // Step 1
  avatar: "",
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  password: "",
  // Step 2
  pais: "",
  ciudad: "",
  cp: "",
  nacimiento: "",
  genero: "",
  rol: "dev",
  experiencia: 3,
  web: "",
  bio: "",
  // Step 3
  notifEmail: true,
  perfilPublico: false,
  boletin: false,
  intereses: ["Diseño UI/UX", "Desarrollo web"],
};

export default function Formulario() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState(INITIAL_DATA);

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleNext() {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    else setDone(true);
  }

  function handleBack() {
    if (step > 1) setStep((s) => s - 1);
  }

  const { heading, sub } = STEP_TITLES[step - 1];
  const isLastStep = step === TOTAL_STEPS;

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main">
        <div className="form-card">
          {done ? (
            <SuccessScreen nombre={formData.nombre} />
          ) : (
            <>
              <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

              <div className="form-header">
                <h1>{heading}</h1>
                <p>{sub}</p>
              </div>

              {step === 1 && <Step1 data={formData} onChange={updateField} />}
              {step === 2 && <Step2 data={formData} onChange={updateField} />}
              {step === 3 && <Step3 data={formData} onChange={updateField} />}

              <div className="form-nav">
                {step > 1 && (
                  <button
                    type="button"
                    className="btn-back"
                    onClick={handleBack}
                  >
                    ← Volver
                  </button>
                )}
                <button type="button" className="btn-next" onClick={handleNext}>
                  {isLastStep ? "Crear mi cuenta →" : "Continuar →"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
