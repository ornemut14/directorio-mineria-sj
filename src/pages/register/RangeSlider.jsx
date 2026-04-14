import FormField from "./FormField.jsx";

function formatLabel(value, max) {
  if (value === max) return `${max}+ años`;
  return value === 1 ? "1 año" : `${value} años`;
}

export default function RangeSlider({
  label,
  value,
  min = 0,
  max = 20,
  step = 1,
  onChange,
}) {
  const pct = ((value - min) / (max - min)) * 100 + "%";

  return (
    <FormField label={label}>
      <div className="range-wrap">
        <p className="range-val">{formatLabel(value, max)}</p>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          style={{ "--pct": pct }}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <div className="range-labels">
          <span>0</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20+</span>
        </div>
      </div>
    </FormField>
  );
}
