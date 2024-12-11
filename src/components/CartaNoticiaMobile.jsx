import React from 'react';
import './CartaNoticiaMobile.css'
import { Link } from 'react-router-dom';
import noticias from '../data/noticias';
import { Margin } from '@mui/icons-material';

function CartaNoticiaMobile( {tamañoTexto, confContraste, contenido, noticia}) {
    return(
        <Link to={`/${contenido.tipo}/${noticia.id}`} className='unstyled-link'>
        <article className={`carta-noticia-mobile ${confContraste ? 'carta-noticia-borde-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}> 

            <figure className='imagen-noticia-mobile' style={{margin:'0'}}>
                <img src={contenido.imagen} alt={contenido.descripcionDeImagen} />
            </figure>

            <h3 className='titulo-noticia-mobile'>
                {contenido.titulo}
            </h3>
            
            <hr />

            <p className='parrafo-noticia-mobile' style={{margin:'0'}}>
                {contenido.parrafo}
            </p>

            <div className='padding-footer-noticia-mobile'></div>
            <footer className='footer-noticia-mobile'>
                <span className={`tema-noticia-mobile ${confContraste ? 'contraste-aumentado-rojo' : ''}`}>
                    {contenido.categoria}
                </span>
                <span className='tipo-contenido-noticia-mobile'>
                    {contenido.tipo}
                </span>
            </footer>
        </article>
        </Link>
    )
}

export default CartaNoticiaMobile;