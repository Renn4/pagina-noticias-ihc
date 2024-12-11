
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import noticias from '../data/noticias.js';
import CartaNoticia from './CartaNoticia.jsx';
import CartaNoticiaGrande from './CartaNoticiaGrande.jsx';
import CartaNoticiaMobile from './CartaNoticiaMobile.jsx';
import { useMemo } from 'react';


const HomePage = ({ tamañoTexto, confContraste, esMovil, tipoContenido }) => {
  const { categoria } = useParams();
  const [filasNoticias, setFilasNoticias] = useState([]);
  const categoriaSeleccionada = categoria || 'Todas';

  
  // Memoriza las noticias filtradas
  const noticiasFiltradas = useMemo(() => {
    const noticiasPorCategoria = categoriaSeleccionada === 'Todas'
      ? noticias
      : noticias.filter(
          (noticia) =>
            noticia.contenido.categoria &&
            noticia.contenido.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()
        );

    // Ahora filtramos por tipo de contenido
    return noticiasPorCategoria.filter((noticia) => {
      return tipoContenido === 'TODO' || noticia.contenido.tipo.toLowerCase() === tipoContenido.toLowerCase();
    });
  }, [categoriaSeleccionada, tipoContenido]);
  // Memoriza las noticias pequeñas y grandes
  const noticiasPequenas = useMemo(
    () => noticiasFiltradas.filter((noticia) => noticia.tamaño === 'pequeña'),
    [noticiasFiltradas]
  );
  const noticiasGrandes = useMemo(
    () => noticiasFiltradas.filter((noticia) => noticia.tamaño === 'grande'),
    [noticiasFiltradas]
  );

  // Lógica para distribuir las noticias
  const distribuirNoticiasAleatoriamente = () => {
    const filas = [];
    let filaActual = [];
    let restantesPequenas = [...noticiasPequenas];
    let restantesGrandes = [...noticiasGrandes];

    while (restantesPequenas.length > 0 || restantesGrandes.length > 0) {
      if (getEspacioOcupado(filaActual) === 4) {
        filas.push(filaActual);
        filaActual = [];
      }

      const espacioLibre = 4 - getEspacioOcupado(filaActual);

      if (espacioLibre >= 2) {
        if (Math.random() < 0.5 && restantesGrandes.length > 0) {
          filaActual.push(restantesGrandes.pop());
        } else if (restantesPequenas.length > 0) {
          filaActual.push(restantesPequenas.pop());
        }
      } else if (espacioLibre === 1 && restantesPequenas.length > 0) {
        filaActual.push(restantesPequenas.pop());
      } else if (restantesPequenas.length > 0) {
        filaActual.push(restantesPequenas.pop());
      }
    }

    if (filaActual.length > 0) {
      filas.push(filaActual);
    }

    return filas;
  };

  const getEspacioOcupado = (fila) => {
    return fila.reduce((total, noticia) => {
      return total + (noticia.tamaño === 'grande' ? 2 : 1);
    }, 0);
  };

  // Actualiza filasNoticias solo cuando cambian las noticias filtradas
  useEffect(() => {
    setFilasNoticias(distribuirNoticiasAleatoriamente());
  }, [noticiasPequenas, noticiasGrandes]);

  return (
    <>
      <div className="cabezal-seccion" style={{ '--font-size-multiplier': tamañoTexto }}>
        <h2 id="titulo-seccion" style={{margin:'0'}}>
          {categoriaSeleccionada === 'Todas'
            ? 'Todas las Noticias'
            : `Noticias de ${categoriaSeleccionada}`}
        </h2>
          
      </div>
           
      {!esMovil && (
        <div className="contenedor-grid-noticias">
          
          {filasNoticias.flat().map((noticia, i) =>
            noticia.tamaño === 'grande' ? (
              <CartaNoticiaGrande
                key={i}
                noticia={noticia}
                contenido={noticia.contenido}
                tamañoTexto={tamañoTexto}
                confContraste={confContraste}
                
              />
            ) : (
              <CartaNoticia
                key={i}
                noticia={noticia}
                contenido={noticia.contenido}
                tamañoTexto={tamañoTexto}
                confContraste={confContraste}
              />
            )
          )}
        </div>
      )}

      {esMovil && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          {noticiasFiltradas.map((noticia, i) => (
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
  );
};

export default HomePage;