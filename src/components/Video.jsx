import React from "react";
import './Video.css'
import { useParams } from 'react-router-dom';
import noticias from '../data/noticias';

function Video( {tamañoTexto, confContraste}){

    const { id } = useParams();

    const video = noticias.find((noticia) => noticia.id === parseInt(id));

    return(

        <div className={`contenedor-video ${confContraste ? 'border-contraste' : ''}`} style={{ '--font-size-multiplier': tamañoTexto }}>
            <div className="titulo-noticia-video"> {video.contenido.titulo} </div>
            <hr className={`video-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            
            <div className="video-cabezal">
                <iframe  className="video-cabezal-video" src="https://www.youtube.com/embed/3BHlrrUAmA4?si=v7mL3xCvqS7fdhAO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="descripcion-imagen"> Breve descripción del video. </div>
            </div>

            <hr className={`video-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="contenedor-cuerpo-video">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia nulla sit amet nisi aliquet, ac fermentum nulla efficitur. Curabitur tempor, metus a feugiat interdum, leo ligula dictum nulla, in luctus tortor risus ac leo. Aliquam erat volutpat. Nullam fermentum mollis risus, sed consequat justo. Integer varius est nec erat vulputate, at pretium ante tristique. Quisque viverra, velit ac ultricies laoreet, sapien lorem sollicitudin eros, at auctor velit odio eget elit.
                Sed euismod risus vitae leo scelerisque, et interdum erat egestas. Fusce tristique sem orci, sit amet pharetra eros tincidunt a. Nam laoreet nisi quis nisi varius lacinia. Maecenas ac bibendum ligula. Curabitur non nibh sed dui dictum iaculis nec a lorem. Aenean auctor nulla at massa faucibus, id pretium turpis feugiat. Ut gravida dui non velit sodales, sit amet posuere elit fermentum. Fusce vitae orci non arcu convallis feugiat non id urna.
                Morbi volutpat, mi ac tempor convallis, odio dui suscipit felis, non scelerisque nulla metus non orci. Aenean sollicitudin lorem in dui vehicula, ut rhoncus lacus lobortis. Aliquam erat volutpat. Suspendisse vitae libero ac nunc tincidunt scelerisque a a odio. Integer congue leo ut risus fermentum euismod. Cras vitae nisi nec enim venenatis gravida. Etiam euismod nec lorem sed cursus. Nulla facilisi. Ut gravida sed urna sed maximus. 
                Donec lobortis vestibulum est. Ut malesuada dui vitae purus tincidunt, at ullamcorper odio malesuada. In venenatis.
                <br/><br/>   
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia nulla sit amet nisi aliquet, ac fermentum nulla efficitur. Curabitur tempor, metus a feugiat interdum, leo ligula dictum nulla, in luctus tortor risus ac leo. Aliquam erat volutpat. Nullam fermentum mollis risus, sed consequat justo. Integer varius est nec erat vulputate, at pretium ante tristique. Quisque viverra, velit ac ultricies laoreet, sapien lorem sollicitudin eros, at auctor velit odio eget elit.
                Sed euismod risus vitae leo scelerisque, et interdum erat egestas. Fusce tristique sem orci, sit amet pharetra eros tincidunt a. Nam laoreet nisi quis nisi varius lacinia. Maecenas ac bibendum ligula. Curabitur non nibh sed dui dictum iaculis nec a lorem. Aenean auctor nulla at massa faucibus, id pretium turpis feugiat. Ut gravida dui non velit sodales, sit amet posuere elit fermentum. Fusce vitae orci non arcu convallis feugiat non id urna.
                Morbi volutpat, mi ac tempor convallis, odio dui suscipit felis, non scelerisque nulla metus non orci. Aenean sollicitudin lorem in dui vehicula, ut rhoncus lacus lobortis. Aliquam erat volutpat. Suspendisse vitae libero ac nunc tincidunt scelerisque a a odio. Integer congue leo ut risus fermentum euismod. Cras vitae nisi nec enim venenatis gravida. Etiam euismod nec lorem sed cursus. Nulla facilisi. Ut gravida sed urna sed maximus. 
                Donec lobortis vestibulum est. Ut malesuada dui vitae purus tincidunt, at ullamcorper odio malesuada. In venenatis.            
            </p>
            </div>
            <hr className={`video-divisor ${confContraste ? 'border-top-contraste' : ''}`}/>
            <div className="footer-video">
                <div className={`autor-video ${confContraste ? 'contraste-aumentado' : ''}`}>
                    Publicado por: <span> AUTOR DEL VIDEO </span> 
                </div>
                <div className={`fecha-video ${confContraste ? 'contraste-aumentado' : ''}`}>12/12/2024</div>
            </div>
        </div>
    )
}

export default Video;