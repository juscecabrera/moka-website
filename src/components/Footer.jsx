import "../stylesheets/main.css";

function Footer () {
    return (
        <>
        <div className="footer-wrapper">
          <div className="footer-left-wrapper">
            <h4>Moka Nails | Estudio de Uñas</h4>
            <a>IG Logo</a>
            <a>Google Logo</a>
            {/* aqui seria bueno agregar el logo de FB */}
          </div>
          <div className="footer-center-wrapper">
            <h4>Contáctanos:</h4>
            <a>WhatsApp: 984 907 847</a> 
            {/* El link debe mandar al Wsp api */}
            <p>Surco: Av. Benavides 3663, Oficina 11</p>
          </div>
          <div className="footer-right-wrapper">
            <h4>Horario de atención:</h4>
            <p>Lun – Vie: 10am – 8pm</p>
            <p>Sáb: 10am – 6pm</p>
          </div>
        </div>
        </>
    )
};

export default Footer;