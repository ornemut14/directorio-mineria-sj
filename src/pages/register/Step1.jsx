import AvatarUpload from "./AvatarUpload.jsx";
import PasswordInput from "./PasswordInput.jsx";
import FormField from "./FormField.jsx";

export default function Step1({ data, onChange }) {
  const set = (field) => (value) => onChange(field, value);
  const setFromEvent = (field) => (e) => onChange(field, e.target.value);

  return (
    <>
      {/* Avatar */}
      <div className="row one">
        <AvatarUpload preview={data.avatar} onChange={set("avatar")} />
      </div>

      {/* Nombre y apellido */}
      <div className="row two">
        <FormField label="Nombre" required>
          <input
            type="text"
            placeholder="Ej. Valentina"
            value={data.nombre}
            onChange={setFromEvent("nombre")}
          />
        </FormField>
        <FormField label="Apellido" required>
          <input
            type="text"
            placeholder="Ej. Torres"
            value={data.apellido}
            onChange={setFromEvent("apellido")}
          />
        </FormField>
      </div>

      {/* Email y teléfono */}
      <div className="row two">
        <FormField label="Correo electrónico" required>
          <input
            type="email"
            placeholder="usuario@email.com"
            value={data.email}
            onChange={setFromEvent("email")}
          />
        </FormField>
        <FormField label="Teléfono">
          <input
            type="tel"
            placeholder="+54 9 11 0000-0000"
            value={data.telefono}
            onChange={setFromEvent("telefono")}
          />
        </FormField>
      </div>

      {/* Contraseña con medidor de fortaleza */}
      <div className="row one">
        <PasswordInput value={data.password} onChange={set("password")} />
      </div>
    </>
  );
}
