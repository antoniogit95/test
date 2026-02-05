import SocialIcons from './SocialIcons'

export default function Hero() {
  return (
    <section className="hero">
      <img
        src=""
        alt="Magno Edil Vargas Tellez"
        className="hero-img"
      />

      <h1>MGR. MAGNO EDIL VARGAS TELLEZ</h1>
      <h2>ABOGADO</h2>

      <p className="hero-text">
        Más de 15 años de experiencia, con capacidad de ayudarte
        en el área jurídica que necesites
      </p>

      <div className="stars">★★★★★</div>

      <SocialIcons />
    </section>
  )
}