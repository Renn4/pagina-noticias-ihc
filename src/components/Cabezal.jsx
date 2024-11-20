import React from 'react';
import FechaDeHoy from './FechaDeHoy';
import './Cabezal.css'
import BotonAjustes from './BotonAjustes'
function Cabezal({ esMovil, tamañoTexto, setTamañoTexto }) {
  return(
  <div style={{ '--font-size-multiplier': tamañoTexto }}>
    
    <div className='cabezal'>
      <FechaDeHoy/>
      <div id='titulo-pagina'>
        DIARIO
      </div>
      <BotonAjustes esMovil={esMovil} tamañoTexto={tamañoTexto} setTamañoTexto={setTamañoTexto}/>
    </div>
    
    {!esMovil &&
    <div className='barra-navegacion nav-1' >
      <button className='boton-navegacion btn-grande'> INICIO </button>
      <button className='boton-navegacion'> POLÍTICA </button>
      <button className='boton-navegacion'> ECONOMÍA </button>
      <button className='boton-navegacion'> DEPORTES </button>
      <button className='boton-navegacion'> MUNDO </button>
      <button className='boton-navegacion'> ENTRETENIMIENTO </button>
    </div>}
 
    {!esMovil &&
    <div className='barra-navegacion nav-2'>
      <button className='boton-navegacion btn-gris'> TODO</button>
      <button className='boton-navegacion btn-gris'> ARTÍCULOS </button>
      <button className='boton-navegacion btn-gris'> REPORTAJES </button>
      <button className='boton-navegacion btn-gris'> VIDEOS </button>
      <button className='boton-navegacion btn-gris'> PODCASTS </button>
    </div>  
    }  

    {esMovil &&
    <div className='botones-dropdown-navegacion' >
      <button className='boton-dropdown-1'> CATEGORÍAS </button>
      <button className='boton-dropdown-2'> TIPO DE CONTENIDO</button>
    </div>
    }

  </div>
  )

}

export default Cabezal;