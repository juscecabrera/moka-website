import "../../stylesheets/main.css";
import SedesInfoImg from "../../images/sedesinfoimg.jpg"

function Sedes () {
    return (
        <>
        <div className="sedes-wrapper">
          <div className="sedes-info-wrapper">
            <h2 className="sedes-info-h2">SEDES</h2>
            <p className="sedes-info-p-1">Santiago de Surco</p>
            <p className="sedes-info-p-2">Av. Benavides 3663, Oficina 11</p>
          </div>
          <div className="sedes-img-maps-wrapper">
            <img className="sedes-info-img" src={SedesInfoImg} />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.190113466739!2d-76.99804093040096!3d-12.128535788087348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f7dfca8c39%3A0x85ab74b09d0980c1!2sOficina%2011%2C%20Av.%20Alfredo%20Benavides%203663%2C%20Lima%2015038%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1710084476151!5m2!1ses!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        </>
    )
};

export default Sedes;