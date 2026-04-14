export default function ToggleSwitch({
  label,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="toggle-row">
      <div className="toggle-info">
        <strong>{label}</strong>
        {description && <span>{description}</span>}
      </div>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider-sw" />
      </label>
    </div>
  );
}
