import ToggleSwitch from "./ToggleSwitch.jsx";
import FormField from "./FormField.jsx";

const INTERESTS = [
  "Diseño UI/UX",
  "Inteligencia artificial",
  "Desarrollo web",
  "Marketing digital",
  "Data & Analytics",
  "Startups",
];

export default function Step3({ data, onChange }) {
  function toggleInterest(interest) {
    const current = data.intereses;
    const updated = current.includes(interest)
      ? current.filter((i) => i !== interest)
      : [...current, interest];
    onChange("intereses", updated);
  }

  return (
    <>
      <div className="divider">Notificaciones</div>

      <div className="row one">
        <ToggleSwitch
          label="Notificaciones por email"
          description="Recibí actualizaciones sobre tu cuenta y actividad"
          checked={data.notifEmail}
          onChange={(val) => onChange("notifEmail", val)}
        />
      </div>

      <div className="row one">
        <ToggleSwitch
          label="Perfil público"
          description="Otros usuarios podrán ver tu perfil"
          checked={data.perfilPublico}
          onChange={(val) => onChange("perfilPublico", val)}
        />
      </div>

      <div className="row one">
        <ToggleSwitch
          label="Boletín semanal"
          description="Recibí novedades y recursos seleccionados cada semana"
          checked={data.boletin}
          onChange={(val) => onChange("boletin", val)}
        />
      </div>

      <div className="divider">Intereses</div>

      <div className="row one">
        <FormField label="Seleccioná los temas que te interesan">
          <div className="check-group">
            {INTERESTS.map((interest) => (
              <label className="check-item" key={interest}>
                <input
                  type="checkbox"
                  checked={data.intereses.includes(interest)}
                  onChange={() => toggleInterest(interest)}
                />
                {interest}
              </label>
            ))}
          </div>
        </FormField>
      </div>

      <p className="terms" style={{ marginTop: "28px" }}>
        Al registrarte aceptás nuestros <a href="#">Términos de servicio</a> y
        la <a href="#">Política de privacidad</a>.
      </p>
    </>
  );
}
