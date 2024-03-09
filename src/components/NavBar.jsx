import "../stylesheets/main.css";
import MokaLogo from "../images/MokaLogo.png"

function NavBar() {
    return (
        <>
          <div className="navbar-wrapper">
            <div className="navbar-top-wrapper">
            <div className="navbar-logo-wrapper"><img src={MokaLogo}/></div>
            <div className="navbar-text-wrapper">
              <p>Inicio</p>
              <p>Diseños</p>
              <select name="select">Servicios
                <option value="value1">Lista de precios</option>
                <option><select>Manicura
                  <option value="value2">Manicura Gel</option>
                  <option>Manicura Rubber Gel</option>
                </select></option>
                <option><select>Extensiones
                  <option>Uñas Acrílicas</option>
                  <option>Uñas de Polygel</option>
                </select></option>
              </select>
              <p>Contáctanos</p>
              <button>Reserva tu Cita</button>
            </div>
            </div>
            <div className="navbar-search-wrapper">
              <input type="text" placeholder="Buscar..."></input>
              <a href="https://www.google.com" target="blank">WhatsApp: (+51) 984 907 847</a>
              <a>Google Logo</a>
              <a>FB Logo</a>
              <a>IG Logo</a>
            </div>
          </div>
        </>
    )
}

export default NavBar;