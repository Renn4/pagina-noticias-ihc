import React from 'react';
import './CartaNoticia.css'
import { Link } from 'react-router-dom';
import noticias from '../data/noticias';

function CartaNoticia({tamañoTexto, confContraste, contenido, noticia}) {
    return(
        <Link to={`/${contenido.tipo}/${noticia.id}`} className='unstyled-link' aria-label={`Ir a la noticia titulada ${contenido.titulo}`}>
        <article className={`carta-noticia ${confContraste ? 'carta-noticia-borde-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}> 

            <figure className='imagen-noticia'>
                <img src={contenido.imagen} alt={contenido.descripcionDeImagen} />
            </figure>
            
            <h2 className='titulo-noticia' >
            {contenido.titulo}
            </h2>
            
            <hr />

            <p className='parrafo-noticia' style={{margin:'0'}}>
                {contenido.parrafo}
            </p>

            <div className='padding-footer-noticia'></div>
            <footer className='footer-noticia'>
                <span className={`tema-noticia ${confContraste ? 'contraste-aumentado-rojo' : ''}`}>
                    {contenido.categoria}
                </span>
                <span className='tipo-contenido-noticia'>
                    {contenido.tipo}
                </span>
            </footer>
        </article>
        </Link>
    )
}

export default CartaNoticia;