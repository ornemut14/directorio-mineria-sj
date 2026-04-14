const STEP_LABELS = [
  "Paso 1 de 3 — Tu cuenta",
  "Paso 2 de 3 — Perfil y ubicación",
  "Paso 3 de 3 — Preferencias",
];

export default function ProgressBar({ currentStep, totalSteps = 3 }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-steps">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`progress-step ${i < currentStep ? "active" : ""}`}
          />
        ))}
      </div>
      <p className="progress-label">{STEP_LABELS[currentStep - 1]}</p>
    </div>
  );
}
