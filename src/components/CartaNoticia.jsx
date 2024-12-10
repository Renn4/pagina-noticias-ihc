import React from 'react';
import './CartaNoticia.css'
import { Link } from 'react-router-dom';
import noticias from '../data/noticias';

function CartaNoticia({tamañoTexto, confContraste, contenido, noticia}) {
    return(
        <Link to={`/${contenido.tipo}/${noticia.id}`} className='unstyled-link'>
        <div className={`carta-noticia ${confContraste ? 'carta-noticia-borde-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}> 

            <div className='imagen-noticia'>
                <img src={contenido.imagen} alt={contenido.descripcionDeImagen} />
            </div>
            
            <div className='titulo-noticia' >
            {contenido.titulo}
            </div>
            
            <hr />

            <div className='parrafo-noticia'>
                {contenido.parrafo}
            </div>

            <div className='padding-footer-noticia'></div>
            <div className='footer-noticia'>
                <div className={`tema-noticia ${confContraste ? 'contraste-aumentado-rojo' : ''}`}>
                    {contenido.categoria}
                </div>
                <div className='tipo-contenido-noticia'>
                    {contenido.tipo}
                </div>
            </div>
        </div>
        </Link>
    )
}

export default CartaNoticia;