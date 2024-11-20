import './App.css';
import Cabezal from './components/Cabezal.jsx';
import CartaNoticia from './components/CartaNoticia.jsx';
import CartaNoticiaGrande from './components/CartaNoticiaGrande.jsx';
import CartaNoticiaMobile from './components/CartaNoticiaMobile.jsx';
import PieDePagina from './components/PieDePagina.jsx';
import { useState, useEffect } from 'react';
import Articulo from './components/Articulo.jsx';
import { useMemo } from 'react';

function App() {

  const [esMovil, setEsMovil] = useState(window.innerWidth < 1440);
  const [tamañoTexto, setTamañoTexto] = useState(1);
  const [confContraste, setConfContraste] = useState(false);


  // Estado para almacenar la distribución de las noticias
  const [filasNoticias, setFilasNoticias] = useState([]);

  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      setEsMovil(window.innerWidth < 1360);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []); // Empty dependency array to run the effect only once

  const noticias = [
    { id: 1, tamaño: 'pequeña', contenido: 'Noticia 1' },
    { id: 2, tamaño: 'pequeña', contenido: 'Noticia 2' },
    { id: 3, tamaño: 'grande', contenido: 'Noticia 3' },
    { id: 4, tamaño: 'pequeña', contenido: 'Noticia 4' },
    { id: 5, tamaño: 'pequeña', contenido: 'Noticia 5' },
    { id: 6, tamaño: 'grande', contenido: 'Noticia 6' },
    { id: 7, tamaño: 'grande', contenido: 'Noticia 7' },
    { id: 8, tamaño: 'pequeña', contenido: 'Noticia 8' },
    { id: 9, tamaño: 'pequeña', contenido: 'Noticia 9' },
    { id: 10, tamaño: 'pequeña', contenido: 'Noticia 10' },
    { id: 11, tamaño: 'grande', contenido: 'Noticia 11' },
    { id: 12, tamaño: 'pequeña', contenido: 'Noticia 12' }
  ];

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


  return (
    <div className="App">
      <div className='contenedor-principal'>
        
        <Cabezal 
        esMovil={esMovil}  
        tamañoTexto={tamañoTexto} 
        setTamañoTexto={setTamañoTexto} 
        confContraste={confContraste}
        setConfContraste={setConfContraste}
        /> 

        <div className='cabezal-seccion' style={{ '--font-size-multiplier': tamañoTexto }}>
          <div id='titulo-seccion'>ÚLTIMO MOMENTO</div>
        </div>

        {/* <Articulo tamañoTexto={tamañoTexto} confContraste={confContraste}/> */}


        {!esMovil &&
        <div className="contenedor-grid-noticias">
          {filasNoticias.flat().map((noticia, i) => (
            noticia.tamaño === 'grande' ? (
              <CartaNoticiaGrande key={i} contenido={noticia.contenido} tamañoTexto={tamañoTexto} confContraste={confContraste} />
            ) : (
              <CartaNoticia key={i} contenido={noticia.contenido} tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            )
            ))}
        </div>
        }

        {esMovil && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            {noticiasPequenas.concat(noticiasGrandes).map((noticia, i) => (
              <CartaNoticiaMobile 
                key={i} 
                contenido={noticia.contenido} 
                tamañoTexto={tamañoTexto} 
                confContraste={confContraste} 
              />
            ))}
          </div>
        )}

        <PieDePagina esMovil= { esMovil } tamañoTexto={tamañoTexto} confContraste={confContraste}/>

      </div>
    </div>
  );
}

export default App;
