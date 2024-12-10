import './App.css';
import Cabezal from './components/Cabezal.jsx';
import HomePage from './components/HomePage.jsx';
import CartaNoticia from './components/CartaNoticia.jsx';
import CartaNoticiaGrande from './components/CartaNoticiaGrande.jsx';
import CartaNoticiaMobile from './components/CartaNoticiaMobile.jsx';
import PieDePagina from './components/PieDePagina.jsx';
import { useState, useEffect } from 'react';
import Articulo from './components/Articulo.jsx';
import Reportaje from './components/Reportaje.jsx';
import Video from './components/Video.jsx'; 
import Podcast from './components/Podcast.jsx';
import { useMemo } from 'react';
import noticias from './data/noticias.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
    <Router>
    <div className="App">
      <div className='contenedor-principal'>
        
        <Cabezal 
        esMovil={esMovil}  
        tamañoTexto={tamañoTexto} 
        setTamañoTexto={setTamañoTexto} 
        confContraste={confContraste}
        setConfContraste={setConfContraste}
        /> 

        {/* <Articulo tamañoTexto={tamañoTexto} confContraste={confContraste}/>
        <Reportaje tamañoTexto={tamañoTexto} confContraste={confContraste}/>
        <Video tamañoTexto={tamañoTexto} confContraste={confContraste}/>
        <Podcast tamañoTexto={tamañoTexto} confContraste={confContraste}/> */}

          <Routes>
            {/* Página principal */}
            <Route path="/" element={<HomePage esMovil={esMovil} tamañoTexto={tamañoTexto} confContraste={confContraste}/>} />
            {/* Páginas individuales */}
            <Route path="/articulo/:id" element={<Articulo esMovil={esMovil} tamañoTexto={tamañoTexto} confContraste={confContraste}/>} />
            <Route path="/reportaje/:id" element={<Reportaje esMovil={esMovil} tamañoTexto={tamañoTexto} confContraste={confContraste}/>} />
            <Route path="/video/:id" element={<Video esMovil={esMovil} tamañoTexto={tamañoTexto} confContraste={confContraste}/>} />
            <Route path="/podcast/:id" element={<Podcast esMovil={esMovil} tamañoTexto={tamañoTexto} confContraste={confContraste}/>} />
          </Routes>
        

        <PieDePagina esMovil= { esMovil } tamañoTexto={tamañoTexto} confContraste={confContraste}/>

      </div>
    </div>
    </Router>
  );
}

export default App;
