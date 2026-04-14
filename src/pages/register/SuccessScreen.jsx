const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function SuccessScreen({ nombre }) {
  return (
    <div className="success-screen">
      <div className="success-icon">
        <CheckIcon />
      </div>
      <h2>¡Bienvenido/a{nombre ? `, ${nombre}` : ""}!</h2>
      <p>
        Tu cuenta fue creada exitosamente. Ya podés acceder a todos los recursos
        de Nexora y comenzar a trabajar.
      </p>
    </div>
  );
}
