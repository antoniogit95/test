export default function FindUs() {
  return (
    <section className="find-us">
      <h2>Encuéntranos en Google</h2>

      <div className="map-wrapper">
        <a
          href="https://www.google.com/maps?q=NOTARIA+DE+FE+PUBLICA+Nº+7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iframe
            title="Ubicación Estudio Jurídico"
            src="https://www.google.com/maps?q=NOTARIA+DE+FE+PUBLICA+Nº+7"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="map-overlay">
            Ver en Google Maps
          </div>
        </a>
      </div>
    </section>
  );
}