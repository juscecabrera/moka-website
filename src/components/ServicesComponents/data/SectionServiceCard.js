import CardImg1 from "../../../images/ServicesComponents/SectionServiceCard/CardImg1.png";
import CardImg2 from "../../../images/ServicesComponents/SectionServiceCard/CardImg2.png";
import CardImg3 from "../../../images/ServicesComponents/SectionServiceCard/CardImg3.png";
import CardImg4 from "../../../images/ServicesComponents/SectionServiceCard/CardImg4.png";
import CardImg5 from "../../../images/ServicesComponents/SectionServiceCard/CardImg5.png";
import CardImg6 from "../../../images/ServicesComponents/SectionServiceCard/CardImg6.png";
import CardImg7 from "../../../images/ServicesComponents/SectionServiceCard/CardImg7.png";
import CardImg8 from "../../../images/ServicesComponents/SectionServiceCard/CardImg8.png";
import CardImg9 from "../../../images/ServicesComponents/SectionServiceCard/CardImg9.png";
import CardImg10 from "../../../images/ServicesComponents/SectionServiceCard/CardImg10.png";

const sectionServiceCardPropsData = [
    {
        title : "Manicura Rubber Gel",
        img : `${CardImg1}`,
        text: [`Exfoliación de manos, limpieza y corte de uñas, reforzamiento de la uña natural con`, <strong> base rubber. </strong>, `Ideal para promover la sanación y fortalecimiento de la uña natural.`, <br></br>,<br></br>, `Incluye`, <strong> esmaltado en gel </strong>, `en gel semi-permanente en una amplia variedad de colores, con diseños simples a elección.`],
        price : "S/60"
    },
    {
        title : "Diseño de Uñas",
        img : `${CardImg2}`,
        text: [`Nuestro favorito, amamos hacer diseños, decoraciones y tendencias`, <br></br>,<br></br>, `Incluye todo el proceso de manicura y rubber gel, pero al final se decoran las uñas según el diseño de la clienta.`],
        price : "Precio a evaluar según diseño"
    },
    {
        title : "Uñas Acrílicas con Tips",
        img : `${CardImg3}`,
        text: [`Exfoliación de manos, limpieza y corte de uñas, limpieza de cutículas. Aplicación de acrílico polimerizado sobre extensiones con tips a la medida. Retoques mediante limado y pulido de las uñas.`, <br></br>,<br></br>, `Incluye `, <strong>esmaltado en gel</strong>, ` semi-permanente en una amplia variedad de colores, con diseños simples a elección.`],
        price : "S/. 90"
    },
    {
        title : "Uñas Acrílicas Esculpidas",
        img : `${CardImg4}`,
        text: [`Exfoliación de manos, limpieza y corte de uñas, limpieza de cutículas. Aplicación de acrílico polimerizado sobre molde retirable. Retoques mediante limado y pulido de las uñas. Permite un acabado más fino.`, <br></br>,<br></br>, `Incluye `, <strong>esmaltado en gel</strong>,  ` semi-permanente en una amplia variedad de colores, con diseños simples a elección.`],
        price : "S/. 100"
    },
    {
        title : "Uñas Esculpidas en Polygel",
        img : `${CardImg5}`,
        text: ["Exfoliación de manos, limpieza y corte de uñas, limpieza de cutículas. Aplicación de Polygel sobre molde retirable. A diferencia de las acrílicas, las uñas en Polygel", <strong> conservan mejor la uña natural</strong>, " y son más flexibles que las acrílicas, pero suelen durar menos tiempo.", <br></br>,<br></br>, "Incluye", <strong> esmaltado en gel </strong>,"semi-permanente en una amplia variedad de colores, con diseños simples a elección."],
        price : "S/. 110"
    },
    {
        title : "Retoque o Relleno (Acrílico y Polygel) & Cambio de Diseño",
        img : `${CardImg6}`,
        text: [`Limpieza de cutículas, recorte de extensiones (opcional), limado de las extensiones y relleno del área de crecimiento con material elegido.`, <br></br>,<br></br>, `Se aplica nuevamente el esmaltado en gel o el diseño que al que desee cambiar.`],
        price : ["S/. 80 (solo para uñas hechas en Moka Nails)", <br></br> ,"+ S/. 10 por cada uña que requiera rehacer por completo (despegadas o rotas)."]
    },
    {
        title : "Pedicure Spa en Gel",
        img : `${CardImg7}`,
        text: [`Baño de pies con agua temperada, sales y minerales exóticos que desintoxican y suavizan la piel de los pies. Luego se procede a la exfoliación completa, limpieza y corte de uñas, limpieza de cutículas, retiro y limado de callosidades. `, <br></br>,<br></br>, `Incluye esmaltado en gel semi-permanente en una amplia variedad de colores, con diseños simples a elección.`, <br></br>, <br></br>, "Nota: No utilizamos esmaltes tradicionales, dado que estos tienen un alto riesgo de contagio de hongos."],
        price : "S/. 70"
    },
    {
        title : "Combo de Manicure + Pedicure en Gel",
        img : `${CardImg8}`,
        text: [`Incluye todos los beneficios de los servicios de manicura en gel y pedicura en gel, a un precio irresistible!`, <br></br>,<br></br>, `Incluye esmaltado en gel semi-permanente, tanto en manos y pies, en una amplia variedad de colores, con diseños simples a elección.`, <br />, <br />, "* Precio promocional disponible por tiempo limitado"],
        price : [<s>S/.130 </s>, "S/. 110 "]
    },
    {
        title : "Retiro de Gel / Acrílico",
        img : `${CardImg9}`,
        text: [`En Moka Nails evitamos el uso de químicos para el retiro de materiales en las uñas porque ello deteriora el estado de las uñas. Usamos una técnica cuidadosa para retirar el producto con un drill y limar la uña hasta que quede natural.`],
        price : ["Retiro de Gel: S/. 15", <br></br>, <br></br>, "Retiro de Acrílicos: S/. 30"]
    },
    {
        title : "Reparación ó Alargamiento de Uñas con Polygel (manos y/o pies)",
        img : `${CardImg10}`,
        text: [`Alargamos la punta de tus uñas naturales con Polygel sin necesidad de cubrir toda tu uña! Luego se aplica todo el proceso de manicura gel.`, <br></br>,<br></br>, `También abarca la reconstrucción y nivelación para uñas rotas; uñas que crecen hacia abajo; y uñas de tamaños diferentes con polygel y gel de construcción.`],
        price : ["S/. 40 (todas las uñas)", <br></br>, <br></br>, "ó S/.5.00 por uña si no requiere todas las uñas"]
    }
]

export default sectionServiceCardPropsData;