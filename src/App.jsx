import './App.css';
import Cabezal from './components/Cabezal.jsx';
import CartaNoticia from './components/CartaNoticia.jsx';
import CartaNoticiaGrande from './components/CartaNoticiaGrande.jsx';
import CartaNoticiaMobile from './components/CartaNoticiaMobile.jsx';
import PieDePagina from './components/PieDePagina.jsx';
import { useState, useEffect } from 'react';
import Articulo from './components/Articulo.jsx';


function App() {

  const [esMovil, setEsMovil] = useState(window.innerWidth < 1440);
  const [tamañoTexto, setTamañoTexto] = useState(1);

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


  return (
    <div className="App">
      <div className='contenedor-principal'>
        
        <Cabezal esMovil={esMovil}  tamañoTexto={tamañoTexto} setTamañoTexto={setTamañoTexto}/> 

        <div className='cabezal-seccion' style={{ '--font-size-multiplier': tamañoTexto }}>
          <div id='titulo-seccion'>ÚLTIMO MOMENTO</div>
        </div>

        {/* <Articulo tamañoTexto={tamañoTexto}/> */}

        {!esMovil &&
        <div className='contenedor-grid-noticias'>
          <div className='fila-noticias'>
            <CartaNoticia tamañoTexto={tamañoTexto}/>
            <CartaNoticia tamañoTexto={tamañoTexto}/>
            <CartaNoticia tamañoTexto={tamañoTexto}/>
            <CartaNoticia tamañoTexto={tamañoTexto}/>
          </div>
          <div className='fila-noticias'>
            <CartaNoticia tamañoTexto={tamañoTexto}/>
            <CartaNoticia tamañoTexto={tamañoTexto}/>
            <CartaNoticiaGrande tamañoTexto={tamañoTexto}/>
          </div>
          <div className='fila-noticias'>
            <CartaNoticia tamañoTexto={tamañoTexto}/>
            <CartaNoticiaGrande tamañoTexto={tamañoTexto}/>
            <CartaNoticia tamañoTexto={tamañoTexto}/>
          </div>
        </div>
        }

        {esMovil && 
          <div style={{ display: 'flex', alignItems: 'center',  flexDirection: 'column' }}>
            <CartaNoticiaMobile tamañoTexto={tamañoTexto}/>
            <CartaNoticiaMobile tamañoTexto={tamañoTexto}/>
            <CartaNoticiaMobile tamañoTexto={tamañoTexto}/>
            <CartaNoticiaMobile tamañoTexto={tamañoTexto}/>
          </div>
        }

        <PieDePagina esMovil= { esMovil } tamañoTexto={tamañoTexto}/>

      </div>
    </div>
  );
}

export default App;
