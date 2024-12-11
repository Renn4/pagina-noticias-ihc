import React from "react";
import './CartaNoticiaGrande.css'
import { Link } from 'react-router-dom';
import noticias from '../data/noticias';

function CartaNoticiaGrande({tamañoTexto, confContraste, contenido, noticia}) {
    return(
        
        <article aria-label={`Ir a la noticia titulada ${contenido.titulo}`} className={`carta-noticia-grande ${confContraste ? 'carta-noticia-borde-contraste' : ''} ${(tamañoTexto === '1.2' || tamañoTexto === '1.4') ? 'carta-grande-vertical' : ''}`} 
             style={{ '--font-size-multiplier': tamañoTexto }}>
            <Link to={`/${contenido.tipo}/${noticia.id}`} className={`unstyled-link-grande  ${(tamañoTexto === '1.2' || tamañoTexto === '1.4') ? 'carta-grande-vertical' : ''}`} >
            <article className={`info-noticia-grande ${(tamañoTexto === '1.2' || tamañoTexto === '1.4') ? 'info-noticia-grande-vertical' : ''}`}>

                <h3 className='titulo-noticia-grande'>
                {contenido.titulo}
                </h3>
                
                <hr />

                <p className='parrafo-noticia-grande' style={{margin: '0'}}>
                    {contenido.parrafo}
                </p>

                <p className={`parrafo-secundario-noticia-grande ${confContraste ? 'contraste-aumentado' : ''}`} style={{margin: '0'}}>
                    {contenido.parrafoSecundario}
                </p>

                <span className={`autor-noticia-grande ${confContraste ? 'contraste-aumentado' : ''}`}>
                    
                    <span> - </span> {contenido.autor}
                </span>

                <footer className='footer-noticia-grande'>
                    <span className={`tema-noticia-grande ${confContraste ? 'contraste-aumentado-rojo' : ''}`}>
                        {contenido.categoria}
                    </span>
                    <span className='tipo-contenido-noticia-grande'>
                        {contenido.tipo}
                    </span>
                </footer>

            </article>

            <figure className={`imagen-noticia-grande ${(tamañoTexto === '1.2' || tamañoTexto === '1.4') ? 'imagen-noticia-grande-vertical' : ''}`}>
                <img src={contenido.imagen} alt={contenido.descripcionDeImagen} />
            </figure></Link>
            
        </article>
       
    )
}

export default CartaNoticiaGrande;