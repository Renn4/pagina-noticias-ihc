import React from "react";
import './Reportaje.css'
import { useParams } from 'react-router-dom';
import noticias from '../data/noticias';

function Reportaje( {tamañoTexto, confContraste}){

    const { id } = useParams();

    const reportaje = noticias.find((noticia) => noticia.id === parseInt(id));

    /*
        Elementos de un reportaje:
        - titulo
        - Cabezal: imagen, descripcionImagen1
        - Cuerpo 1: cuerpo1
        - texto e imagen 1: imagen2, descripcionImagen2, textoImagen2
        - Cuerpo 2: cuerpo2
        - texto e imagen 2: textoImagen3, imagen3, descripcionImagen3
        - footer:
    */

    return(

        <div className={`contenedor-reportaje ${confContraste ? 'border-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}>
            
            {/* TITULO */}
            <h2 className="titulo-noticia-reportaje"> {reportaje.contenido.titulo} </h2>
            <hr className={`reportaje-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            
            {/* CABEZAL */}
            <header className="reportaje-cabezal">
                <figure style={{margin:'0'}} className="reportaje-cabezal-imagen">
                    <img src={reportaje.contenido.imagen} alt={reportaje.contenido.descripcionImagen1} />
                </figure>
                <div className={`descripcion-imagen ${confContraste ? 'contraste-aumentado' : ''}`}> {reportaje.contenido.descripcionImagen1} </div>
            </header>
            <hr className={`reportaje-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            
            {/* CUERPO 1 */}
            <div className="contenedor-cuerpo-reportaje">
                <p>
                {reportaje.contenido.cuerpo1} 
            </p>
            </div>

            {/* TEXTO C IMAGEN 1*/}
            <div className="reportaje-contenedor-texto-con-imagen">
                <div className="reportaje-contenedor-imagen" style={{paddingTop: '0px', paddingBottom: '0px'}}>
                    <figure style={{margin:'0'}} className="reportaje-imagen" >
                        <img src={reportaje.contenido.imagen2} alt={reportaje.contenido.descripcionImagen2} />
                    </figure>
                    <div className={`descripcion-imagen ${confContraste ? 'contraste-aumentado' : ''}`}> {reportaje.contenido.descripcionImagen2} </div>
                </div>
                <p className="reportaje-contenedor-texto-de-imagen" style={{paddingTop: '0px', paddingBottom: '0px', margin:'0'}}>
                    {reportaje.contenido.textoImagen2}
                </p>
            </div>

            {/* CUERPO 2 */}
            <div className="contenedor-cuerpo-reportaje">
                <p>
                {reportaje.contenido.cuerpo2}         
                </p>
            </div>

            {/* TEXTO C IMAGEN 2*/}
            <div className="reportaje-contenedor-texto-con-imagen">
                <p className="reportaje-contenedor-texto-de-imagen" style={{paddingTop: '0px', paddingBottom: '20px', margin:'0'}}>
                    {reportaje.contenido.textoImagen3}
                </p>
                <div className="reportaje-contenedor-imagen" style={{paddingTop: '0px', paddingBottom: '20px'}}>
                    <figure style={{margin:'0'}} className="reportaje-imagen" >
                        <img src={reportaje.contenido.imagen3} alt=" {reportaje.contenido.descripcionImagen3}" />
                    </figure>
                    <div className={`descripcion-imagen ${confContraste ? 'contraste-aumentado' : ''}`}> {reportaje.contenido.descripcionImagen3}</div>
                </div>
            </div>
            <hr className={`reportaje-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            
            {/* FOOTER */}
            <footer className="footer-reportaje">
                <div aria-label="Autor del reportaje" className={`autor-reportaje ${confContraste ? 'contraste-aumentado' : ''}`}>
                    Escrito por: <span> {reportaje.contenido.autor} </span> 
                </div>
                <div aria-label="Fecha de hoy" className={`fecha-reportaje ${confContraste ? 'contraste-aumentado' : ''}`}> {reportaje.contenido.fecha} </div>
            </footer>
        </div>
    )
}

export default Reportaje;