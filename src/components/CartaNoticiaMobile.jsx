import React from 'react';
import './CartaNoticiaMobile.css'

function CartaNoticiaMobile( {tamañoTexto}) {
    return(
        <div className='carta-noticia-mobile' style={{ '--font-size-multiplier': tamañoTexto }}> 

            <div className='imagen-noticia-mobile'></div>

            <div className='titulo-noticia-mobile'>
                Título de la Noticia
            </div>
            
            <hr />

            <div className='parrafo-noticia-mobile'>
                Párrafo corto añadiendo contexto al título de la noticia. asdasd asdasd asdaasd
            </div>

            <div className='padding-footer-noticia-mobile'></div>
            <div className='footer-noticia-mobile'>
                <div className='tema-noticia-mobile'>
                    economía
                </div>
                <div className='tipo-contenido-noticia-mobile'>
                    artículo
                </div>
            </div>
        </div>
    )
}

export default CartaNoticiaMobile;