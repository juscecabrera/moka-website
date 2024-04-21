import React from 'react';
import ListServicesIcon1 from "../../images/ServicesComponents/listServicesIcon1.png";
import ListServicesIcon2 from "../../images/ServicesComponents/listServicesIcon2.png";
import ListServicesIcon3 from "../../images/ServicesComponents/listServicesIcon3.png";
import ListServicesIcon4 from "../../images/ServicesComponents/listServicesIcon4.png";
import ListServicesIconBg1 from "../../images/ServicesComponents/listServicesIconBg1.png";
import ListServicesIconBg2 from "../../images/ServicesComponents/listServicesIconBg2.png";
import ListServicesIconBg3 from "../../images/ServicesComponents/listServicesIconBg3.png";
import ListServicesIconBg4 from "../../images/ServicesComponents/listServicesIconBg4.png";

function ListServices () {
    return (
        <>
        <div className='list-services-icons-wrapper'>
            <img src={ListServicesIcon1} className='list-services-icon'></img>
            <img src={ListServicesIconBg1}className='list-services-icon-bg'></img>
            <p className='list-services-subtitle'>Acrílico</p>
            <img src={ListServicesIcon2} className='list-services-icon'></img>
            <img src={ListServicesIconBg2}className='list-services-icon-bg'></img>
            <p className='list-services-subtitle'>Rubber</p>
            <img src={ListServicesIcon3} className='list-services-icon'></img>
            <img src={ListServicesIconBg3}className='list-services-icon-bg'></img>
            <p className='list-services-subtitle'>Esmalte Gel</p>
            <img src={ListServicesIcon4} className='list-services-icon'></img>
            <img src={ListServicesIconBg4}className='list-services-icon-bg'></img>
            <p className='list-services-subtitle'>Polygel</p>
        </div>
        </>
    )
}

export default ListServices;