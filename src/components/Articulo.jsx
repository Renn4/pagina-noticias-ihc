import React from "react";
import './Articulo.css'

function Articulo( {tamañoTexto}){
    return(

        <div className="contenedor-articulo" style={{ '--font-size-multiplier': tamañoTexto }}>
            <div className="titulo-noticia-articulo"> Título de la noticia que particularmente es un artículo informativo sí sí </div>
            <hr className="articulo-divisor"/>
            <div className="articulo-contenedor-cabezal">
                <div className="articulo-contenedor-introduccion">
                    blablablablablabla. bla bla bla. blablablab bla bla blab. blablalbl  balblab l bal blabalblbalb lalalba la blablablbl 
                    lab al bla bl ablblbl blablablab bla bla blab. blablalbl  balblab l bal blabalbl lablalb lablalblablalb
                    blablablablablabla. bla bla bla. blablablab bla bla blab. blablalbl  balblab l bal blabalblbalb lalalba la blablablbl 
                    lab al bla bl ablblbl blablablab bla bla blab. blablalbl  balblab l bal blabalbl lablalb lablalblablalb
                </div>
                <div className="articulo-contenedor-imagen">
                    <div className="articulo-imagen"></div>
                    <div className="descripcion-imagen"> Breve descripción de la imagen.</div>
                </div>
            </div>
            <hr className="articulo-divisor"/>
            <div className="contenedor-cuerpo-articulo">
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
            <hr className="articulo-divisor"/>
            <div className="footer-articulo">
                <div className="autor-articulo">
                    ESCRITO POR: <span> AUTOR DEL ARTÍCULO </span> 
                </div>
                <div className="fecha-articulo">12/12/2024</div>
            </div>
        </div>
    )
}

export default Articulo;