import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" >

      <div className="footer-container" id="footer">

        {/* Columna 1 */}
        <div className="footer-col">
          <h3>ExtremoMinero</h3>
          <p>
            El directorio más completo de proveedores para la industria minera 
            y metalúrgica de Argentina.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="footer-col">
          <h4>Categorías</h4>
          <ul>
            <li>Maquinaria Pesada</li>
            <li>Repuestos</li>
            <li>Seguridad</li>
            <li>Herramientas</li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-col">
          <h4>Útil</h4>
          <ul>
            <li>Eventos</li>
            <li>Capacitaciones</li>
            <li>Noticias</li>
            <li>Contacto</li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>info@extremominero.com.ar</p>
          <p>+54 11 1234-5678</p>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        <p>© 2026 ExtremoMinero. Todos los derechos reservados.</p>
        
      </div>

    </footer>
  );
}

export default Footer;