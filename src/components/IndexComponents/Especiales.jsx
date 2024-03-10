import "../../stylesheets/main.css";

function Especiales () {
    return (
        <>
        <div className="especiales-wrapper">
          <p className="especiales-title1">ESPECIALES</p>
          <p className="especiales-title2"> DE </p>
          <p className="especiales-title3">TEMPORADA</p>
          <div className="especiales-servicios-wrapper">
            <p className="especiales-servicios">Manicura Rubber + Gel</p><p className="especiales-precio1">S/. 60</p>
            <p className="especiales-servicios">Uñas Acrílicas (con tips)</p><p className="especiales-precio2">S/. 90</p>
            <p className="especiales-servicios">Uñas Esculpidas (Polygel)</p><p className="especiales-precio3">S/. 110</p>
            <p className="especiales-servicios">Pedicure Gel</p><p className="especiales-precio4">S/. 70</p>
            <p className="especiales-servicios">Manicure + Pedicure Gel</p><p className="especiales-precio5">S/. 110</p>
          </div>
          <button type="button">Agenda tu cita!</button>
        </div>
        </>
    )
};

export default Especiales;