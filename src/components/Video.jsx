import React from "react";
import './Video.css'
import { useParams } from 'react-router-dom';
import noticias from '../data/noticias';

function Video( {tamañoTexto, confContraste}){

    const { id } = useParams();

    const video = noticias.find((noticia) => noticia.id === parseInt(id));

    return(

        <article className={`contenedor-video ${confContraste ? 'border-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}>
            <h2 className="titulo-noticia-video"> {video.contenido.titulo} </h2>
            <hr className={`video-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            
            <header className="video-cabezal">
                <iframe  className="video-cabezal-video" src={video.contenido.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="descripcion-imagen"> {video.contenido.descripcionDeVideo} </div>
            </header>

            <hr className={`video-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="contenedor-cuerpo-video">
                <p>
                 {video.contenido.cuerpo}         
                </p>
            </div>
            <hr className={`video-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <footer className="footer-video">
                <span aria-label="autor del artículo" className={`autor-video ${confContraste ? 'contraste-aumentado' : ''}`}>
                    Publicado por: <span> {video.contenido.autor} </span> 
                </span>
                <span aria-label="fecha de hoy" className={`fecha-video ${confContraste ? 'contraste-aumentado' : ''}`}>{video.contenido.fecha}</span>
            </footer>
        </article>
    )
}

export default Video;