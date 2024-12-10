import React from "react";
import './CartaNoticiaGrande.css'
import { Link } from 'react-router-dom';
import noticias from '../data/noticias';

function CartaNoticiaGrande({tamañoTexto, confContraste, contenido, noticia}) {
    return(
        
        <div className={`carta-noticia-grande ${confContraste ? 'carta-noticia-borde-contraste' : ''} ${(tamañoTexto === '1.4') ? 'carta-grande-vertical' : ''}`} 
             style={{ '--font-size-multiplier': tamañoTexto }}>
            <Link to={`/${contenido.tipo}/${noticia.id}`} className={`unstyled-link-grande  ${(tamañoTexto === '1.4') ? 'carta-grande-vertical' : ''}`} >
            <div className={`info-noticia-grande ${(tamañoTexto === '1.4') ? 'info-noticia-grande-vertical' : ''}`}>

                <div className='titulo-noticia-grande'>
                {contenido.titulo}
                </div>
                
                <hr />

                <div className='parrafo-noticia-grande'>
                    {contenido.parrafo}
                </div>

                <div className={`parrafo-secundario-noticia-grande ${confContraste ? 'contraste-aumentado' : ''}`}>
                    {contenido.parrafoSecundario}
                </div>

                <div className={`autor-noticia-grande ${confContraste ? 'contraste-aumentado' : ''}`}>
                    
                    <span> - </span> {contenido.autor}
                </div>

                <div className='footer-noticia-grande'>
                    <div className={`tema-noticia-grande ${confContraste ? 'contraste-aumentado-rojo' : ''}`}>
                        {contenido.categoria}
                    </div>
                    <div className='tipo-contenido-noticia-grande'>
                        {contenido.tipo}
                    </div>
                </div>

            </div>

            <div className={`imagen-noticia-grande ${(tamañoTexto === '1.4') ? 'imagen-noticia-grande-vertical' : ''}`}>
                <img src={contenido.imagen} alt={contenido.descripcionDeImagen} />
            </div></Link>
            
        </div>
       
    )
}

export default CartaNoticiaGrande;