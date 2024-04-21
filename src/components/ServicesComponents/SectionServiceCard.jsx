import React from 'react';

function SectionServiceCard( {title, img, text, price} ) {
  return (
    <div className='sectionservicecard-wrapper'>
        <img className='sectionservicecard-img' src={img}></img>
        <h4 className='sectionservicecard-title'>{title}</h4>
        <p className='sectionservicecard-text'>{text}</p>
        <p className='sectionservicecard-price'>{price}</p>
    </div>
  )
}

export default SectionServiceCard