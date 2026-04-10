import "./sectioncompliance.css";

function SectionCompliance(){
    return <section className="adhered-section">
      <div className="adhered-container">
        <div className="adhered-text">
          <span className="badge">Certificación</span>
          <h2>
            Organización adherida a <span className="highlight">[organización]</span>
          </h2>
          <p>
            Cumplimos con estándares de calidad y buenas prácticas respaldadas por
            entidades reconocidas. Este compromiso garantiza transparencia,
            confianza y excelencia en cada uno de nuestros procesos.
          </p>
        </div>

        <div className="adhered-image">
          <div className="image-wrapper">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Logo organización"
            />
          </div>
        </div>
      </div>
    </section>
}

export default SectionCompliance;