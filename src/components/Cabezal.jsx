import React from 'react';
import FechaDeHoy from './FechaDeHoy';
import './Cabezal.css'
import BotonAjustes from './BotonAjustes'
function Cabezal() {
  return(
  <>
    
    <div className='cabezal'>
      <FechaDeHoy/>
      <div id='titulo-pagina'>
        DIARIO
      </div>
      <BotonAjustes/>
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
  </>
  )

}

export default Cabezal;