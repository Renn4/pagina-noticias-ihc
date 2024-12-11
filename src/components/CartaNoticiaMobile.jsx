import React from 'react';
import './CartaNoticiaMobile.css'
import { Link } from 'react-router-dom';
import noticias from '../data/noticias';

function CartaNoticiaMobile( {tamañoTexto, confContraste, contenido, noticia}) {
    return(
        <Link to={`/${contenido.tipo}/${noticia.id}`} className='unstyled-link'>
        <div className={`carta-noticia-mobile ${confContraste ? 'carta-noticia-borde-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}> 

            <div className='imagen-noticia-mobile'>
                <img src={contenido.imagen} alt="" />
            </div>

            <div className='titulo-noticia-mobile'>
                {contenido.titulo}
            </div>
            
            <hr />

            <div className='parrafo-noticia-mobile'>
                {contenido.parrafo}
            </div>

            <div className='padding-footer-noticia-mobile'></div>
            <div className='footer-noticia-mobile'>
                <div className={`tema-noticia-mobile ${confContraste ? 'contraste-aumentado-rojo' : ''}`}>
                    {contenido.categoria}
                </div>
                <div className='tipo-contenido-noticia-mobile'>
                    {contenido.tipo}
                </div>
            </div>
        </div>
        </Link>
    )
}

export default CartaNoticiaMobile;