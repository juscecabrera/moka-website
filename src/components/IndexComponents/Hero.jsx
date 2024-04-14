import "../../stylesheets/main.css";
import HeroImgLeft from "../../images/heroimg1.png";
import HeroImgRight from "../../images/heroimg2.png"

function Hero () {
    return (
        <>
          <div className="hero-wrapper">
            <h1 className="hero-h1">MOKA <br></br>NAILS</h1>
            <h2 className="hero-h2">Manicure | Pedicure | Uñas Acrílicas y Polygel</h2>
            <h2 className="hero-h2">Salón de Uñas en Lima, Perú.</h2>
            <button className="hero-button">Reserva tu cita!</button>
            <div className="hero-img-text-wrapper">
              <img className="hero-img-left" src={HeroImgLeft} />
              <div className="hero-text-wrapper">
                <h4 className="hero-text-title">Vive una experiencia personalizada para tus uñas!</h4>
                <p className="hero-text-subtitle">Atención solo con cita previa.</p>
                <p className="hero-text-1">Al agendar una cita:</p>
                <ul>
                  <li><p className="hero-text-bold">Evitas tiempo de espera</p> innecesario</li>
                  <li><p className="hero-text-bold">Preparamos el ambiente y esterilizamos las herramientas</p> para darte la mejor experiencia.</li>
                  <li>Tendrás la <p className="hero-text-bold">atención de nuestras profesionales solo para tí.</p></li>
                </ul>
                <p className="hero-text-2">Nuestras profesionales conocen las técnicas más modernas que te pueden recomendar según el estado de tus uñas y el acabado que buscas lograr. Siempre priorizamos el cuidado y preservación de tus uñas naturales ♥.</p>
                <p className="hero-text-3">En nuestro estudio privado de uñas en Barranco o Surco podrás encontrar la mejor atención y comodidad para expresarte libremente con la belleza de tus manos.</p>
                </div>
              <img className="hero-img-right" src={HeroImgRight} />
            
            </div>
          </div>
        </>
    )
};

export default Hero;