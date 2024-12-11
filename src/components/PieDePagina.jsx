import React from "react";
import './PieDePagina.css'
function PieDePagina({ esMovil, tamañoTexto, confContraste}) {
    return(
        <footer className={`pie-de-pagina ${confContraste ? 'contraste-aumentado border-top-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}>
            
                <div className="contenedor-links">
                    <span aria-label="Preguntas frecuentes" className="link-pie">Preguntas frecuentes</span>
                    <span aria-label="Sobre nosotros" className="link-pie">Sobre nosotros</span>
                    <span aria-label="Ayuda al cliente" className="link-pie">Ayuda al cliente</span>
                    <span aria-label="Contáctanos" className="link-pie">Contáctanos</span>
                    <span aria-label="Negocios" className="link-pie">Negocios</span>
                </div>
            
            <div className={`divisor-pie ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="info-pie">  
                <p style={{margin:'0'}}>
                    Desarrollado por Martín Peralta para la asignatura de Interacción Hombre-Computadora en la Universidad Nacional de San Antonio de Areco  &#40;UNSAdA&#41;, durante el año 2024.
                </p>
               </div>
        </footer> 
    )
}

export default PieDePagina