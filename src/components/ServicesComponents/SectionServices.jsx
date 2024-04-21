import React from 'react'
import SectionServiceCard from './SectionServiceCard';
import sectionServiceCardPropsData from "./data/SectionServiceCard.js";

function SectionServices () {
    return (
        <>
        <h3 className='sectionservice-title'>Manicura</h3>
            <SectionServiceCard 
            {...sectionServiceCardPropsData[0]}/>
            <SectionServiceCard 
            {...sectionServiceCardPropsData[1]}/>

        <h3 className='sectionservice-title'>Extensiones de Uñas</h3>
            <SectionServiceCard 
            {...sectionServiceCardPropsData[2]}/>
            <SectionServiceCard 
            {...sectionServiceCardPropsData[3]}/>
            <SectionServiceCard 
            {...sectionServiceCardPropsData[4]}/>
            <SectionServiceCard 
            {...sectionServiceCardPropsData[5]}/>
        <h3 className='sectionservice-title'>Pedicure</h3>
        <SectionServiceCard 
            {...sectionServiceCardPropsData[6]}/>
            <SectionServiceCard 
            {...sectionServiceCardPropsData[7]}/>
        <h3 className='sectionservice-title'>Servicios Complementarios</h3>
        <SectionServiceCard 
            {...sectionServiceCardPropsData[8]}/>
            <SectionServiceCard 
            {...sectionServiceCardPropsData[9]}/>
        </>
    )
}

export default SectionServices;