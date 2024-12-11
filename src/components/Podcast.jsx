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
        <article className={`contenedor-podcast ${confContraste ? 'border-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}>
            <h2 className="titulo-noticia-podcast"> {podcast.contenido.titulo} </h2>
            <hr className={`podcast-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            
            <header className="podcast-cabezal">
                <iframe className="podcast-cabezal-podcast" src={podcast.contenido.podcastUrl}  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </header>

            <hr className={`podcast-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="contenedor-cuerpo-podcast">
                <p>
                {podcast.contenido.cuerpo}      
                </p>
            </div>
            <hr className={`podcast-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <footer className="footer-podcast">
                <span aria-label="autor del artículo" className={`autor-podcast ${confContraste ? 'contraste-aumentado' : ''}`}>
                    PUBLICADO POR: <span> {podcast.contenido.autor} </span> 
                </span>
                <span aria-label="fecha de hoy" className={`fecha-podcast ${confContraste ? 'contraste-aumentado' : ''}`}>{podcast.contenido.fecha}</span>
            </footer>
        </article>
    )
}

export default Podcast;