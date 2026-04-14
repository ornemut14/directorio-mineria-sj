const FEATURES = [
  "Panel de control personalizable",
  "Colaboración en tiempo real",
  "Analíticas avanzadas",
  "Soporte prioritario 24/7",
  "Integraciones con más de 50 apps",
];

export default function Sidebar() {
  return (
    <div className="side">
      <div className="brand">
        <div className="brand-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="brand-name">Nexora</span>
      </div>

      <div className="side-headline">
        <h2>
          Comienza tu <span>experiencia</span> hoy.
        </h2>
        <p>
          Crea tu cuenta gratuita y accede a todas las herramientas diseñadas
          para impulsar tu productividad.
        </p>
      </div>

      <div className="features">
        {FEATURES.map((feat) => (
          <div className="feat" key={feat}>
            <div className="feat-dot" />
            {feat}
          </div>
        ))}
      </div>
    </div>
  );
}
