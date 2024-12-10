import React from "react";
import './Podcast.css'
import { useParams } from 'react-router-dom';
import noticias from '../data/noticias';

function Podcast( {tamañoTexto, confContraste}){

    /*
    Elementos de un podcast: 
    - Título
    - Podcast (con descripción)
    - Cuerpo 
    - Autor
    - Fecha
    */

    const { id } = useParams();

    const podcast = noticias.find((noticia) => noticia.id === parseInt(id));

    return(
        <div className={`contenedor-podcast ${confContraste ? 'border-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}>
            <div className="titulo-noticia-podcast"> {podcast.contenido.titulo} </div>
            <hr className={`podcast-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            
            <div className="podcast-cabezal">
            <iframe className="podcast-cabezal-podcast" src={podcast.contenido.podcastUrl}  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <hr className={`podcast-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="contenedor-cuerpo-podcast">
                <p>
                {podcast.contenido.cuerpo}      
                </p>
            </div>
            <hr className={`podcast-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="footer-podcast">
                <div className={`autor-podcast ${confContraste ? 'contraste-aumentado' : ''}`}>
                    PUBLICADO POR: <span> {podcast.contenido.autor} </span> 
                </div>
                <div className={`fecha-podcast ${confContraste ? 'contraste-aumentado' : ''}`}>{podcast.contenido.fecha}</div>
            </div>
        </div>
    )
}

export default Podcast;