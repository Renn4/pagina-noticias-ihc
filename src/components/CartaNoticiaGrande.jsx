import React from "react";
import './CartaNoticiaGrande.css'

function CartaNoticiaGrande({tamañoTexto, confContraste}) {
    return(
        <div className={`carta-noticia-grande ${confContraste ? 'carta-noticia-borde-contraste' : ''} ${(tamañoTexto === '1.4') ? 'carta-grande-vertical' : ''}`} 
             style={{ '--font-size-multiplier': tamañoTexto }}>
            <div className={`info-noticia-grande ${(tamañoTexto === '1.4') ? 'info-noticia-grande-vertical' : ''}`}>

                <div className='titulo-noticia-grande'>
                    Título de la Noticia
                </div>
                
                <hr />

                <div className='parrafo-noticia-grande'>
                    Párrafo corto añadiendo contexto al título de la noticia. asdasd asdasd asdaasd
                </div>

                <div className={`parrafo-secundario-noticia-grande ${confContraste ? 'contraste-aumentado' : ''}`}>
                    Párrafo corto desarrollando un poco más en la noticia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </div>

                <div className={`autor-noticia-grande ${confContraste ? 'contraste-aumentado' : ''}`}>
                    
                    <span> - </span> NOMBRE DEL AUTOR
                </div>

                <div className='footer-noticia-grande'>
                    <div className={`tema-noticia-grande ${confContraste ? 'contraste-aumentado-rojo' : ''}`}>
                        economía
                    </div>
                    <div className='tipo-contenido-noticia-grande'>
                        artículo
                    </div>
                </div>

            </div>

            <div className={`imagen-noticia-grande ${(tamañoTexto === '1.4') ? 'imagen-noticia-grande-vertical' : ''}`}>

            </div>
        </div>
    )
}

export default CartaNoticiaGrande;