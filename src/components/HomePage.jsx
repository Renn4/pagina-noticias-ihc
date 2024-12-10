
import { useState, useEffect } from 'react';
import '../App.css';
import noticias from '../data/noticias.js';
import CartaNoticia from './CartaNoticia.jsx';
import CartaNoticiaGrande from './CartaNoticiaGrande.jsx';
import CartaNoticiaMobile from './CartaNoticiaMobile.jsx';

function HomePage( {tamañoTexto, confContraste, esMovil}){


    // Estado para almacenar la distribución de las noticias
    const [filasNoticias, setFilasNoticias] = useState([]);

    const noticiasPequenas = noticias.filter(noticia => noticia.tamaño === 'pequeña');
    const noticiasGrandes = noticias.filter(noticia => noticia.tamaño === 'grande');

    const distribuirNoticiasAleatoriamente = () => {
    const filas = [];
    let filaActual = [];
    let restantesPequenas = [...noticiasPequenas];
    let restantesGrandes = [...noticiasGrandes];
  
    while (restantesPequenas.length > 0 || restantesGrandes.length > 0) {
      // Si la fila está llena (4 espacios), la añadimos y empezamos una nueva
      if (getEspacioOcupado(filaActual) === 4) {
        filas.push(filaActual);
        filaActual = [];
      }
  
      // Calculamos el espacio libre en la fila actual
      const espacioLibre = 4 - getEspacioOcupado(filaActual); // Calculamos los espacios libres, teniendo en cuenta las noticias grandes
  
      // Caso 1: Si hay 2 o más espacios libres, elegimos aleatoriamente entre agregar una noticia grande o pequeña
      if (espacioLibre >= 2) {
        if (Math.random() < 0.5 && restantesGrandes.length > 0) {
          // 50% de probabilidad para agregar una noticia grande si hay noticias grandes disponibles
          const noticiaGrande = restantesGrandes.pop();
          filaActual.push(noticiaGrande); // Ocupa 2 espacios
        } else if (restantesPequenas.length > 0) {
          // Si no se eligió una noticia grande, agregamos una noticia pequeña
          const noticiaPequena = restantesPequenas.pop();
          filaActual.push(noticiaPequena); // Ocupa 1 espacio
        }
      } 
      // Caso 2: Si solo hay 1 espacio libre, agregamos una noticia pequeña
      else if (espacioLibre === 1 && restantesPequenas.length > 0) {
        const noticiaPequena = restantesPequenas.pop();
        filaActual.push(noticiaPequena); // Ocupa 1 espacio
      } 
      // Caso 3: Si hay espacio libre (por ejemplo 2 espacios vacíos en una fila) pero no se pueden colocar grandes, agregamos pequeñas
      else if (restantesPequenas.length > 0) {
        const noticiaPequena = restantesPequenas.pop();
        filaActual.push(noticiaPequena); // Ocupa 1 espacio
      }
    }


    // Si queda una fila incompleta al final, la añadimos
    if (filaActual.length > 0) {
      filas.push(filaActual);
    }
  
    return filas;
    };

    const getEspacioOcupado = (fila) => {
        return fila.reduce((total, noticia) => {
        return total + (noticia.tamaño === 'grande' ? 2 : 1); // Cada noticia grande ocupa 2, y cada pequeña ocupa 1
        }, 0);
    };

    // Al cargar las noticias o al cambiar las noticias, se calcula la distribución de noticias
    useEffect(() => {
        setFilasNoticias(distribuirNoticiasAleatoriamente());
    }, []); // Solo se vuelve a calcular cuando las noticias cambian


    return(
        <>  

            <div className='cabezal-seccion' style={{ '--font-size-multiplier': tamañoTexto }}>
                <div id='titulo-seccion'>ÚLTIMO MOMENTO</div>
            </div>

            {!esMovil &&
            <div className="contenedor-grid-noticias">
            {filasNoticias.flat().map((noticia, i) => (
                noticia.tamaño === 'grande' ? (
                <CartaNoticiaGrande key={i} 
                noticia={noticia}
                contenido={noticia.contenido}
                tamañoTexto={tamañoTexto} 
                confContraste={confContraste} />
                ) : (
                <CartaNoticia key={i} 
                noticia={noticia}
                contenido={noticia.contenido}
                tamañoTexto={tamañoTexto} 
                confContraste={confContraste} />
                )
                ))}
            </div>
            }

            {esMovil && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            {noticiasPequenas.concat(noticiasGrandes).map((noticia, i) => (
              <CartaNoticiaMobile 
                key={i} 
                noticia={noticia}
                contenido={noticia.contenido}
                tamañoTexto={tamañoTexto} 
                confContraste={confContraste} 
              />
            ))}
            </div>
            )}
        </>
    )
}

export default HomePage;