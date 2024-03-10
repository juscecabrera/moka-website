import "../../stylesheets/main.css";
import TestimonialsCard from "./TestimonialsCard";
import TestimonialCardImg1 from "../../images/TestimonialCardImg1.png";

function Testimonials () {
    return (
        <>
        <div className="testimonials-wrapper">
          <h2>RESEÑAS</h2>
          <p className="testimonials-subtitle">¿Qué opinan nuestras clientas?</p>
          <div className="testimonials-cards-wrapper">
            <TestimonialsCard 
              img = {TestimonialCardImg1}
              text ={["¡Excelente atención!", <br />, " Ana se fija en cada detalle para dejar las uñas increíbles tal y como las quieres."]
                 }
              client = "Cielo Huerta"
              service = "Uñas Acrílicas con Diseño"
            />
            <TestimonialsCard />
            <TestimonialsCard />
          </div>
        </div>
        </>
    )
};

export default Testimonials;