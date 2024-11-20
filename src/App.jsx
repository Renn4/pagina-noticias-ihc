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
  const [confContraste, setConfContraste] = useState(false);

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

        <Articulo tamañoTexto={tamañoTexto} confContraste={confContraste}/>


        {/* {!esMovil &&
        <div className='contenedor-grid-noticias'>
          <div className='fila-noticias'>
            <CartaNoticia tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticia tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticia tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticia tamañoTexto={tamañoTexto} confContraste={confContraste}/>
          </div>
          <div className='fila-noticias'>
            <CartaNoticia tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticia tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticiaGrande tamañoTexto={tamañoTexto} confContraste={confContraste}/>
          </div>
          <div className='fila-noticias'>
            <CartaNoticia tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticiaGrande tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticia tamañoTexto={tamañoTexto} confContraste={confContraste}/>
          </div>
        </div>
        }

        {esMovil && 
          <div style={{ display: 'flex', alignItems: 'center',  flexDirection: 'column' }}>
            <CartaNoticiaMobile tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticiaMobile tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticiaMobile tamañoTexto={tamañoTexto} confContraste={confContraste}/>
            <CartaNoticiaMobile tamañoTexto={tamañoTexto} confContraste={confContraste}/>
          </div>
        } */}

        <PieDePagina esMovil= { esMovil } tamañoTexto={tamañoTexto} confContraste={confContraste}/>

      </div>
    </div>
  );
}

export default App;
