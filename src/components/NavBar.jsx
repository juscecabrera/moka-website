import "../stylesheets/main.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import MokaLogo from "../images/MokaLogo.png";
import GoogleLogo from "../images/googlelogo.svg";
import FBLogo from "../images/fblogo.svg";
import IGLogo from "../images/iglogo.svg";
import Home from "../pages/home.js";
import Designs from "../pages/designs.js";
import HamburgerLogo from "../images/hamburger-navbar.svg"
import Services from "../pages/services.js";
import Contact from "../pages/contact.js";

function NavBar() {
    return (
      <>
      <Router>
        <div className="navbar-background">
          <div className="navbar-wrapper">
            <div className="navbar-top-wrapper">
              <img className="navbar-img" src={MokaLogo}/>
              <a target="blank" href="https://www.google.com"><img className="navbar-hamburger-logo" src={HamburgerLogo}/></a>
              </div>
              <button type="submit" formMethod="get" className="navbar-reservation-button"><a target="blank" href="https://api.whatsapp.com/message/BREEXDFHEFX2C1?autoload=1&app_absent=0">Reserva tu Cita</a></button>
              <div className="navbar-text-wrapper">
                <ul>
                  <Link to = "/" target="blank" className="navbar-text-link">
                    <li>Inicio</li>
                    </Link>
                  <Link to = "/designs" target="blank" className="navbar-text-link">
                    <li>Diseños</li>
                    </Link>
                  <Link to = "/services" target="blank" className="navbar-text-link">
                    <li>
                    <select>
                      {/* creo que aqui tambien tengo que usar links */}
                      {/* tambien tengo que arreglar el select */}
                      <option value={"0"}>Servicios</option>
                      <option value={"1"}>Lista de precios</option>
                      <option value={"2"}>Manicura</option>
                      <option value={"3"}>Extensiones</option>
                    </select>
                  </li>
                  </Link>
                  <Link to = "/contact" target="blank" className="navbar-text-link">
                    <li>Contáctanos</li>
                  </Link>
                </ul>
              </div>
            <div className="navbar-search-wrapper">
              <input type="text" placeholder="Buscar..."></input>
              <a href="https://api.whatsapp.com/message/BREEXDFHEFX2C1?autoload=1&app_absent=0" target="blank" className="navbar-search-number">WhatsApp: (+51) 984 907 847</a>
              <a target="blank" href="https://www.google.com/maps/place/Moka+Nails+%7C+Manicure,+Pedicure+y+U%C3%B1as+acr%C3%ADlicas/@-12.1384772,-77.0199119,14z/data=!4m6!3m5!1s0x9105b778f4742e77:0x9f890b24292959fe!8m2!3d-12.1381879!4d-77.0222876!16s%2Fg%2F11tjzjm181?hl=es&entry=tts&shorturl=1" ><img className="navbar-search-logo-google" src={GoogleLogo} /></a>
              <a target="blank" href="https://www.facebook.com/MokaNails.pe"><img className="navbar-search-logo" src={FBLogo}></img></a>
              <a target="blank" href="https://www.instagram.com/mokanails.pe/"><img className="navbar-search-logo" src={IGLogo}></img></a>
            </div>
          </div>
        </div>
        <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/designs" element={<Designs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>  
        </Router>
      </>
    )
}

export default NavBar;