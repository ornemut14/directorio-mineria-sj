import "./sectioncompliance.css";

function SectionCompliance() {
  return (
    <section className="adhered-section">
      <div className="adhered-container">

        <div className="adhered-text">

          <span className="badge">Certificación institucional</span>

          <div className="line" />

          <h2 className="title">Organización</h2>

          <p className="subtitle">Adherida a</p>

        </div>

        <div className="adhered-image">
          <div className="image-wrapper">
            <img src="/asociacion.png" alt="Logo organización" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default SectionCompliance;