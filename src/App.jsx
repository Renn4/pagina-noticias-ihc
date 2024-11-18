import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        
        <div className='cabezal'>
          <div id='titulo'>
            DIARIO
          </div>
        </div>
        
        <div className='barra-navegacion nav-1'>
          <button className='boton-navegacion btn-grande'> INICIO </button>
          <button className='boton-navegacion'> POLÍTICA </button>
          <button className='boton-navegacion'> ECONOMÍA </button>
          <button className='boton-navegacion'> DEPORTES </button>
          <button className='boton-navegacion'> MUNDO </button>
          <button className='boton-navegacion'> ENTRETENIMIENTO </button>
        </div>

        <div className='barra-navegacion nav-2'>
          <button className='boton-navegacion btn-gris'> TODO</button>
          <button className='boton-navegacion btn-gris'> ARTÍCULOS </button>
          <button className='boton-navegacion btn-gris'> REPORTAJES </button>
          <button className='boton-navegacion btn-gris'> VIDEOS </button>
          <button className='boton-navegacion btn-gris'> PODCASTS </button>
        </div>

        <div className='contenedor-grid-noticias'>
          <div className='fila-noticias'>
            <div className='carta-noticia'></div>
            <div className='carta-noticia'></div>
            <div className='carta-noticia'></div>
            <div className='carta-noticia'></div>
          </div>
          <div className='fila-noticias'>
            <div className='carta-noticia'></div>
            <div className='carta-noticia'></div>
            <div className='carta-noticia-grande'></div>
          </div>
          <div className='fila-noticias'>
            <div className='carta-noticia-grande'></div>
            <div className='carta-noticia'></div>
            <div className='carta-noticia'></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
