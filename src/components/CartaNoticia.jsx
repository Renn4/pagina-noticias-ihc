import React from 'react';
import './CartaNoticia.css'

function CartaNoticia({tamañoTexto}) {
    return(
        <div className='carta-noticia' style={{ '--font-size-multiplier': tamañoTexto }}> 

            <div className='imagen-noticia'></div>

            <div className='titulo-noticia' >
                Título de la Noticia
            </div>
            
            <hr />

            <div className='parrafo-noticia'>
                Párrafo corto añadiendo contexto al título de la noticia. asdasd asdasd asdaasd
            </div>

            <div className='padding-footer-noticia'></div>
            <div className='footer-noticia'>
                <div className='tema-noticia'>
                    economía
                </div>
                <div className='tipo-contenido-noticia'>
                    artículo
                </div>
            </div>
        </div>
    )
}

export default CartaNoticia;