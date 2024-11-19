import React from "react";
import './PieDePagina.css'
function PieDePagina({ esMovil }) {
    return(
        <div className="pie-de-pagina">
            
                <div className="contenedor-links">
                    <span className="link-pie">Preguntas frecuentes</span>
                    <span className="link-pie">Sobre nosotros</span>
                    <span className="link-pie">Ayuda al cliente</span>
                    <span className="link-pie">Contáctanos</span>
                    <span className="link-pie">Negocios</span>
                </div>
            

            
            <div className="divisor-pie"/>
            <div className="info-pie">  
                <span>
                    Desarrollado por Martín Peralta para la asignatura de Interacción Hombre-Computadora en la Universidad Nacional de San Antonio de Areco  &#40;UNSAdA&#41;, durante el año 2024.
                </span>
               </div>
        </div>

        
        
    )
}

export default PieDePagina