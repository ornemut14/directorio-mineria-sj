import FormField from "./FormField.jsx";
import RangeSlider from "./RangeSlider.jsx";

const ROLES = [
  { value: "dev", label: "Desarrollador/a" },
  { value: "design", label: "Diseñador/a" },
  { value: "pm", label: "Product Manager" },
  { value: "other", label: "Otro" },
];

export default function Step2({ data, onChange }) {
  const set = (field) => (value) => onChange(field, value);
  const setFromEvent = (field) => (e) => onChange(field, e.target.value);

  return (
    <>
      {/* País, ciudad, código postal */}
      <div className="row three">
        <FormField label="País" required>
          <select value={data.pais} onChange={setFromEvent("pais")}>
            <option value="" disabled>
              Seleccionar
            </option>
            {[
              "Argentina",
              "Chile",
              "Uruguay",
              "Brasil",
              "México",
              "Colombia",
              "España",
              "Otro",
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Ciudad">
          <input
            type="text"
            placeholder="Ej. Buenos Aires"
            value={data.ciudad}
            onChange={setFromEvent("ciudad")}
          />
        </FormField>
        <FormField label="Código postal">
          <input
            type="text"
            placeholder="Ej. 1001"
            value={data.cp}
            onChange={setFromEvent("cp")}
          />
        </FormField>
      </div>

      {/* Fecha de nacimiento y género */}
      <div className="row two">
        <FormField label="Fecha de nacimiento" required>
          <input
            type="date"
            value={data.nacimiento}
            onChange={setFromEvent("nacimiento")}
          />
        </FormField>
        <FormField label="Género">
          <select value={data.genero} onChange={setFromEvent("genero")}>
            <option value="" disabled>
              Seleccionar
            </option>
            {["Masculino", "Femenino", "No binario", "Prefiero no indicar"].map(
              (g) => (
                <option key={g}>{g}</option>
              ),
            )}
          </select>
        </FormField>
      </div>

      {/* Rol profesional */}
      <div className="row one">
        <FormField label="Rol profesional">
          <div className="radio-group">
            {ROLES.map(({ value, label }) => (
              <label className="radio-item" key={value}>
                <input
                  type="radio"
                  name="rol"
                  value={value}
                  checked={data.rol === value}
                  onChange={() => onChange("rol", value)}
                />
                {label}
              </label>
            ))}
          </div>
        </FormField>
      </div>

      {/* Años de experiencia */}
      <div className="row one">
        <RangeSlider
          label="Años de experiencia"
          value={data.experiencia}
          onChange={set("experiencia")}
        />
      </div>

      {/* Sitio web */}
      <div className="row one">
        <FormField label="Sitio web o portfolio">
          <input
            type="url"
            placeholder="https://tuportfolio.com"
            value={data.web}
            onChange={setFromEvent("web")}
          />
        </FormField>
      </div>

      {/* Bio */}
      <div className="row one">
        <FormField label="Sobre mí">
          <textarea
            placeholder="Contanos brevemente quién sos y qué hacés..."
            value={data.bio}
            onChange={setFromEvent("bio")}
          />
        </FormField>
      </div>
    </>
  );
}
