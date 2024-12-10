import React from 'react';
import FechaDeHoy from './FechaDeHoy';
import './Cabezal.css'
import BotonAjustes from './BotonAjustes'
import { Link } from 'react-router-dom';

function Cabezal({ esMovil, tamañoTexto, setTamañoTexto, confContraste, setConfContraste}) {
  return(
  <div style={{ '--font-size-multiplier': tamañoTexto }}>
    
    <div className={`cabezal ${confContraste ? 'border-bottom-contraste' : ''}`} >
      <FechaDeHoy confContraste={confContraste}/>
      <div id='titulo-pagina'>
        DIARIO
      </div>
      <BotonAjustes esMovil={esMovil} tamañoTexto={tamañoTexto} setTamañoTexto={setTamañoTexto} confContraste={confContraste} setConfContraste={setConfContraste}/>
    </div>
    
    {!esMovil &&
    <div className={`barra-navegacion nav-1 ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`} >
      <Link to="/" className='boton-navegacion btn-grande'> INICIO </Link>
      <Link to="/política" className='boton-navegacion'> POLÍTICA </Link>
      <Link to="/economía" className='boton-navegacion'> ECONOMÍA </Link>
      <Link to="/deportes" className='boton-navegacion'> DEPORTES </Link>
      <Link to="/mundo" className='boton-navegacion'> MUNDO </Link>
      <Link to="/entretenimiento" className='boton-navegacion'> ENTRETENIMIENTO </Link>
    </div>}
 
    {!esMovil &&
    <div className={`barra-navegacion nav-2 ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`}>
      <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`}> TODO</button>
      <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`}> ARTÍCULOS </button>
      <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`}> REPORTAJES </button>
      <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`}> VIDEOS </button>
      <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`}> PODCASTS </button>
    </div>  
    }  

    {esMovil &&
    <div className='botones-dropdown-navegacion' >
      <button className={`boton-dropdown-1 ${confContraste ? 'border-bottom-contraste border-right-contraste' : ''}`}> CATEGORÍAS </button>
      <button className={`boton-dropdown-2 ${confContraste ? 'border-bottom-contraste' : ''}`}> TIPO DE CONTENIDO</button>
    </div>
    }

  </div>
  )

}

export default Cabezal;