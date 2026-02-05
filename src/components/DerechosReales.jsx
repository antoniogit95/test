import Toggle from "./Toggle";

export default function DerechosReales() {
  return (
    <section className="derechos">
      <h2>REQUISITOS – DERECHOS REALES</h2>

      <Toggle
        title="Corrección de datos de identidad"
        items={[
          "Folio real en original",
          "Registro en PROREVI (prorevi.ftob.bo)",
          "Certificado SEGIP original",
          "Certificados de nacimiento, matrimonio o defunción",
          "Fotocopia de escritura pública",
          "Minuta de rectificación unilateral",
          "Autorización del acreedor (si existe gravamen)"
        ]}
      />

      <Toggle
        title="Corrección de datos técnicos"
        items={[
          "Folio real en original",
          "Registro en PROREVI",
          "Certificado catastral",
          "Plano aprobado",
          "Impuesto anual última gestión",
          "Minuta de rectificación protocolizada"
        ]}
      />

      <Toggle
        title="Inscripción de propiedad"
        items={[
          "Escritura pública de compra venta",
          "Impuesto anual última gestión",
          "Plano aprobado o certificado catastral",
          "Cédula de identidad de comprador y vendedor"
        ]}
      />

      {/* y así continúas */}
    </section>
  );
}