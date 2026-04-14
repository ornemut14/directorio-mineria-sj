/**
 * FormField — generic label + input wrapper.
 * Accepts any single child as the input element.
 */
export default function FormField({ label, required = false, children }) {
  return (
    <div className="field">
      {label && (
        <label className="field-label">
          {label}
          {required && <span className="req"> *</span>}
        </label>
      )}
      {children}
    </div>
  );
}
