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
            <div className="titulo-noticia-articulo"> 
                 {articulo.contenido.titulo}
                </div>
            <hr className={`articulo-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="articulo-contenedor-cabezal">
                <div className="articulo-contenedor-introduccion">
                    {articulo.contenido.introduccion}
                </div>
                <div className="articulo-contenedor-imagen">
                    <div className="articulo-imagen">
                        <img src={articulo.contenido.imagen} alt={articulo.contenido.descripcionDeImagen} />
                    </div>
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
            <div className="footer-articulo">
                <div className={`autor-articulo ${confContraste ? 'contraste-aumentado' : ''}`}>
                    ESCRITO POR: <span> {articulo.contenido.autor} </span> 
                </div>
                <div className={`fecha-articulo ${confContraste ? 'contraste-aumentado' : ''}`}> {articulo.contenido.fecha} </div>
            </div>
        </div>
    )
}

export default Articulo;