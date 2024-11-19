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
        
        <Cabezal esMovil={esMovil}/> 

        <div className='cabezal-seccion'>
          <div id='titulo-seccion'>ÚLTIMO MOMENTO</div>
        </div>

        <Articulo/>

        {/* {!esMovil &&
        <div className='contenedor-grid-noticias'>
          <div className='fila-noticias'>
            <CartaNoticia/>
            <CartaNoticia/>
            <CartaNoticia/>
            <CartaNoticia/>
          </div>
          <div className='fila-noticias'>
            <CartaNoticia/>
            <CartaNoticia/>
            <CartaNoticiaGrande/>
          </div>
          <div className='fila-noticias'>
            <CartaNoticia/>
            <CartaNoticiaGrande/>
            <CartaNoticia/>
          </div>
        </div>
        }

        {esMovil && 
          <div style={{ display: 'flex', alignItems: 'center',  flexDirection: 'column' }}>
            <CartaNoticiaMobile/>
            <CartaNoticiaMobile/>
            <CartaNoticiaMobile/>
            <CartaNoticiaMobile/>
          </div>
        } */}
        <PieDePagina esMovil= { esMovil }/>

      </div>
    </div>
  );
}

export default App;
