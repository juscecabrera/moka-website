import "../../stylesheets/main.css";
import HeroImgLeft from "../../images/heroimg1.png";
import HeroImgRight from "../../images/heroimg2.png"

function Hero () {
    return (
        <>
          <div className="hero-wrapper">
            <h1 className="hero-h1">MOKA NAILS</h1>
            <h2 className="hero-h2">Manicure | Pedicure | Uñas Acrílicas y Polygel</h2>
            <h2 className="hero-h2">Salón de Uñas en Lima, Perú.</h2>
            <button className="hero-cta">Reserva tu cita!</button>
            <div className="hero-img-text-wrapper">
              <img className="hero-img-left" src={HeroImgLeft} />
              <div className="hero-text-wrapper"><p>Vive una experiencia personalizada para tus uñas!</p>
              <p>Atención solo con cita previa.</p>
              <p>Al agendar una cita:</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut vitae deleniti nostrum sapiente molestias vero consectetur nemo non mollitia, nihil ex odio recusandae, hic ducimus nisi suscipit repellendus. Eaque!</p></div>
              <img className="hero-img-right" src={HeroImgRight} />
            </div>
            
          </div>
        </>
    )
};

export default Hero;