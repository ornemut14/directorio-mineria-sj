import { useRef } from "react";
import FormField from "./FormField.jsx";

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

export default function AvatarUpload({ preview, onChange }) {
  const inputRef = useRef(null);

  function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onChange(ev.target.result);
    reader.readAsDataURL(file);
  }

  return (
    <FormField label="Foto de perfil">
      <div className="avatar-upload">
        <div className="avatar-preview">
          {preview ? <img src={preview} alt="avatar" /> : <PersonIcon />}
        </div>
        <div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            style={{ display: "none" }}
          />
          <button
            type="button"
            className="avatar-upload-btn"
            onClick={() => inputRef.current.click()}
          >
            Subir imagen
          </button>
          <p className="avatar-hint">JPG, PNG o GIF · Máx. 2 MB</p>
        </div>
      </div>
    </FormField>
  );
}
