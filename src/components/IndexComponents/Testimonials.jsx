import "../../stylesheets/main.css";
import TestimonialsCard from "./TestimonialsCard";
import TestimonialCardImg1 from "../../images/TestimonialCardImg1.png";
import TestimonialCardImg2 from "../../images/TestimonialCardImg2.png";
import TestimonialCardImg3 from "../../images/TestimonialCardImg3.png";

function Testimonials () {
    return (
        <>
        <div className="testimonials-wrapper">
          <h2>RESEÑAS</h2>
          <p className="testimonials-subtitle">¿Qué opinan nuestras clientas?</p>
          <div className="testimonials-cards-wrapper">
            <TestimonialsCard 
              img = {TestimonialCardImg1}
              text ={["¡Excelente atención!", <br />, <br />, " Ana se fija en cada detalle para dejar las uñas increíbles tal y como las quieres."]
                 }
              client = "Cielo Huerta"
              service = "Uñas Acrílicas con Diseño"
            />
            <TestimonialsCard 
              img = {TestimonialCardImg2}
              text = {["Excelente atención y cuidado a las uñas!", <br />, <br />, "Una capa Ana, gracias por la delicadeza y detalle a tu trabajo."]}
              client = "Alicia Carranza"
              service = "Polygel + Manicura Francesa"
            />
            <TestimonialsCard 
              img = {TestimonialCardImg3}
              text = {["Muy buena atención.", <br />, <br />, "El lugar es luminoso y limpio, y el trabajo muy prolijo.", <br />, <br />, "Lo recomiendo!" ]}
              client = "Vanessa Nicole"
              service = "Uñas Acrílicas con Diseño"
            />
          </div>
          <button>LEER MÁS RESEÑAS EN GOOGLE MAPS</button>
        </div>
        </>
    )
};

export default Testimonials;