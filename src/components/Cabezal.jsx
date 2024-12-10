import React from 'react';
import FechaDeHoy from './FechaDeHoy';
import './Cabezal.css'
import BotonAjustes from './BotonAjustes'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cabezal({ esMovil, tamañoTexto, setTamañoTexto, confContraste, setConfContraste, tipoContenido, setTipoContenido}) {
  
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCategoryClick = () => {
    setDropdownVisible(false); // Cierra el dropdown al hacer clic en una categoría
  };

  const categorias = [
    { nombre: "INICIO", ruta: "/" },
    { nombre: "POLÍTICA", ruta: "/política" },
    { nombre: "ECONOMÍA", ruta: "/economía" },
    { nombre: "DEPORTES", ruta: "/deportes" },
    { nombre: "MUNDO", ruta: "/mundo" },
    { nombre: "ENTRETENIMIENTO", ruta: "/entretenimiento" },
  ];

  const handleTipoClick = (tipo) => {
    setTipoContenido(tipo); // Cambiar el tipo de contenido
  };

  return (
    <div style={{ '--font-size-multiplier': tamañoTexto }}>
      <div className={`cabezal ${confContraste ? 'border-bottom-contraste' : ''}`}>
        <FechaDeHoy confContraste={confContraste} />
        <div id="titulo-pagina">DIARIO</div>
        <BotonAjustes
          esMovil={esMovil}
          tamañoTexto={tamañoTexto}
          setTamañoTexto={setTamañoTexto}
          confContraste={confContraste}
          setConfContraste={setConfContraste}
        />
      </div>

      {!esMovil && (
        <div className={`barra-navegacion nav-1 ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`}>
          <Link to="/" className="boton-navegacion btn-grande">INICIO</Link>
          <Link to="/política" className="boton-navegacion">POLÍTICA</Link>
          <Link to="/economía" className="boton-navegacion">ECONOMÍA</Link>
          <Link to="/deportes" className="boton-navegacion">DEPORTES</Link>
          <Link to="/mundo" className="boton-navegacion">MUNDO</Link>
          <Link to="/entretenimiento" className="boton-navegacion">ENTRETENIMIENTO</Link>
        </div>
      )}

      {!esMovil && (
        <div className={`barra-navegacion nav-2 ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`}>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('TODO')}>TODO</button>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('articulo')}>ARTÍCULOS</button>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('reportaje')}>REPORTAJES</button>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('video')}>VIDEOS</button>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('podcast')}>PODCASTS</button>
        </div>
      )}

        {esMovil && (
                <div className="botones-dropdown-navegacion">
                  <button
                    className={`boton-dropdown-1 ${confContraste ? 'border-bottom-contraste border-right-contraste' : ''}`}
                    onClick={toggleDropdown}
                  >
                    CATEGORÍAS
                  </button>
                  {dropdownVisible && (
                    <div className="dropdown-content">
                      {categorias.map((categoria, index) => (
                        <Link to={categoria.ruta} key={index} className={`dropdown-item ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`} onClick={handleCategoryClick}>
                          {categoria.nombre}
                        </Link>
                      ))}
                    </div>
                  )}
                  <button className={`boton-dropdown-2 ${confContraste ? 'border-bottom-contraste' : ''}`}>
                    TIPO DE CONTENIDO
                  </button>
                </div>
              )}
    </div>
  );
}

export default Cabezal;