import './App.css';
import Cabezal from './components/Cabezal.jsx';
import CartaNoticia from './components/CartaNoticia.jsx';
import CartaNoticiaGrande from './components/CartaNoticiaGrande.jsx';
import PieDePagina from './components/PieDePagina.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        
        <Cabezal/> 
        <div className='cabezal-seccion'>
          <div id='titulo-seccion'>ÚLTIMO MOMENTO</div>
        </div>

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

        <PieDePagina/>

      </div>
    </div>
  );
}

export default App;
