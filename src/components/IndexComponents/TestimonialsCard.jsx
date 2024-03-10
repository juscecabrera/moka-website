import "../../stylesheets/main.css";


function TestimonialsCard (props) {
    return (
        <>
        <div className="testimonialcard-wrapper">
          <img className="testimonialcard-img" src={props.img}/>
          <p className="testimonialcard-text">{props.text}</p>
          <p className="testimonialcard-client">{props.client}</p>
          <p className="testimonialcard-service">{props.service}</p>
        </div>
        </>
    )
};

export default TestimonialsCard;