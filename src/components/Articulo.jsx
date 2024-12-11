import React from "react";
import './Articulo.css'
import { useParams } from 'react-router-dom';
import noticias from '../data/noticias';

function Articulo( {tamañoTexto, confContraste}){

    /*
    Elementos de un artículo: 
    - Título
    - Introducción
    - Cuerpo
    - Imagen (con descripción )
    - Autor
    - Fecha
    */

    const { id } = useParams();

    const articulo = noticias.find((noticia) => noticia.id === parseInt(id));

    return(

        <div className={`contenedor-articulo ${confContraste ? 'border-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}>
            <h2 className="titulo-noticia-articulo"> 
                 {articulo.contenido.titulo}
            </h2>
            <hr className={`articulo-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="articulo-contenedor-cabezal">
                <p style={{margin:'0'}} className="articulo-contenedor-introduccion">
                    {articulo.contenido.introduccion}
                </p>
                <div className="articulo-contenedor-imagen">
                    <figure style={{margin:'0'}} className="articulo-imagen">
                        <img src={articulo.contenido.imagen} alt={articulo.contenido.descripcionDeImagen} />
                    </figure>
                    <div className={`descripcion-imagen ${confContraste ? 'contraste-aumentado' : ''}`}> {articulo.contenido.descripcionDeImagen} </div>
                </div>
            </div>
            <hr className={`articulo-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="contenedor-cuerpo-articulo">
                <p>
                {articulo.contenido.cuerpo}          
            </p>
            </div>
            <hr className={`articulo-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <footer className="footer-articulo">
                <span aria-label="autor del artículo" className={`autor-articulo ${confContraste ? 'contraste-aumentado' : ''}`}>
                    ESCRITO POR: <span> {articulo.contenido.autor} </span> 
                </span>
                <span aria-label="fecha de hoy" className={`fecha-articulo ${confContraste ? 'contraste-aumentado' : ''}`}> {articulo.contenido.fecha} </span>
            </footer>
        </div>
    )
}

export default Articulo;