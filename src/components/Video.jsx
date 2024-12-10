import React from "react";
import './Video.css'
import { useParams } from 'react-router-dom';
import noticias from '../data/noticias';

function Video( {tamañoTexto, confContraste}){

    const { id } = useParams();

    const video = noticias.find((noticia) => noticia.id === parseInt(id));

    return(

        <div className={`contenedor-video ${confContraste ? 'border-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}>
            <div className="titulo-noticia-video"> {video.contenido.titulo} </div>
            <hr className={`video-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            
            <div className="video-cabezal">
                <iframe  className="video-cabezal-video" src={video.contenido.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="descripcion-imagen"> {video.contenido.descripcionDeVideo} </div>
            </div>

            <hr className={`video-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="contenedor-cuerpo-video">
                <p>
                 {video.contenido.cuerpo}         
                </p>
            </div>
            <hr className={`video-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="footer-video">
                <div className={`autor-video ${confContraste ? 'contraste-aumentado' : ''}`}>
                    Publicado por: <span> {video.contenido.autor} </span> 
                </div>
                <div className={`fecha-video ${confContraste ? 'contraste-aumentado' : ''}`}>{video.contenido.fecha}</div>
            </div>
        </div>
    )
}

export default Video;