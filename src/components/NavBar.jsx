import "../stylesheets/main.css";
import MokaLogo from "../images/MokaLogo.png";
import GoogleLogo from "../images/googlelogo.svg";
import FBLogo from "../images/fblogo.svg";
import IGLogo from "../images/iglogo.svg";

function NavBar() {
    return (
      <>
        <div className="navbar-background">
          <div className="navbar-wrapper">
            <div className="navbar-top-wrapper">
              <img className="navbar-img" src={MokaLogo}/>
              <div className="navbar-text-wrapper">
                <ul>
                  <li>Inicio</li>
                  <li>Diseños</li>
                  <li>
                    <select>
                      <option value={"0"}>Servicios</option>
                      <option value={"1"}>Lista de precios</option>
                      <option value={"2"}>Manicura</option>
                      <option value={"3"}>Extensiones</option>
                    </select>
                  </li>
                  <li>Contáctanos</li>
                </ul>
                <button type="submit" formMethod="get"><a target="blank" href="https://api.whatsapp.com/message/BREEXDFHEFX2C1?autoload=1&app_absent=0">Reserva tu Cita</a></button>
              </div>
            </div>
            <div className="navbar-search-wrapper">
              <input type="text" placeholder="Buscar..."></input>
              <a href="https://api.whatsapp.com/message/BREEXDFHEFX2C1?autoload=1&app_absent=0" target="blank">WhatsApp: (+51) 984 907 847</a>
              <a target="blank" href="https://www.google.com/maps/place/Moka+Nails+%7C+Manicure,+Pedicure+y+U%C3%B1as+acr%C3%ADlicas/@-12.1384772,-77.0199119,14z/data=!4m6!3m5!1s0x9105b778f4742e77:0x9f890b24292959fe!8m2!3d-12.1381879!4d-77.0222876!16s%2Fg%2F11tjzjm181?hl=es&entry=tts&shorturl=1" ><img className="navbar-search-logo-google" src={GoogleLogo} /></a>
              <a target="blank" href="https://www.facebook.com/MokaNails.pe"><img className="navbar-search-logo" src={FBLogo}></img></a>
              <a target="blank" href="https://www.instagram.com/mokanails.pe/"><img className="navbar-search-logo" src={IGLogo}></img></a>
            </div>
          </div>
        </div>
      </>
    )
}

export default NavBar;