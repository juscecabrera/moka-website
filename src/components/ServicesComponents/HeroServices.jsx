import React from 'react';
import HeroServicesImg from "../../images/ServicesComponents/heroServicesImg.jpg"

function HeroServices () {
    return (
        <>
        <div className='hero-services-img-wrapper'>
            <img className='hero-services-img' src={HeroServicesImg}></img>
        </div>
        <div className='hero-services-banner-wrapper'>
            <h1 className='hero-services-banner-h1'>NUESTROS SERVICIOS</h1>
            <h2 className='hero-services-banner-h2'>Manicure | Uñas Acrílicas | Uñas de Polygel | Pedicure</h2>
            <button className='hero-services-banner-button'>Consúltanos por WhatsApp</button>
        </div>
        
        </>
    )
}

export default HeroServices;