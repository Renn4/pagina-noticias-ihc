import React from 'react';
import FechaDeHoy from './FechaDeHoy';
import './Cabezal.css'
import BotonAjustes from './BotonAjustes'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cabezal({ esMovil, tamañoTexto, setTamañoTexto, confContraste, setConfContraste, tipoContenido, setTipoContenido}) {
  
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleDropdown2 = () => {
    setDropdown2Visible(!dropdown2Visible);
  };

  const handleCategoryClick = () => {
    setDropdownVisible(false); // Cierra el dropdown al hacer clic en una categoría
  };

  const handleTypeClick = () => {
    setDropdown2Visible(false); // Cierra el dropdown al hacer clic en una categoría
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
    setDropdown2Visible(false);
  };

  return (
    <div style={{ '--font-size-multiplier': tamañoTexto }}>
      <header className={`cabezal ${confContraste ? 'border-bottom-contraste' : ''}`}>
        <time> <FechaDeHoy confContraste={confContraste}/> </time>
        <h1 id="titulo-pagina">DIARIO</h1>
        <BotonAjustes
          esMovil={esMovil}
          tamañoTexto={tamañoTexto}
          setTamañoTexto={setTamañoTexto}
          confContraste={confContraste}
          setConfContraste={setConfContraste}
        />
      </header>

      {!esMovil && (
        <nav aria-label="Navegación de categorías." className={`barra-navegacion nav-1 ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`}>
          <Link to="/" className="boton-navegacion btn-grande">INICIO</Link>
          <Link to="/política" className="boton-navegacion">POLÍTICA</Link>
          <Link to="/economía" className="boton-navegacion">ECONOMÍA</Link>
          <Link to="/deportes" className="boton-navegacion">DEPORTES</Link>
          <Link to="/mundo" className="boton-navegacion">MUNDO</Link>
          <Link to="/entretenimiento" className="boton-navegacion">ENTRETENIMIENTO</Link>
        </nav>
      )}

      {!esMovil && (
        <nav aria-label="Navegación de tipos de noticia." className={`barra-navegacion nav-2 ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`}>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('TODO')}>TODO</button>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('articulo')}>ARTÍCULOS</button>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('reportaje')}>REPORTAJES</button>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('video')}>VIDEOS</button>
          <button className={`boton-navegacion ${confContraste ? 'contraste-aumentado-rojo' : 'btn-gris'}`} onClick={() => handleTipoClick('podcast')}>PODCASTS</button>
        </nav>
      )}

        {esMovil && (
                <div className="botones-dropdown-navegacion">
                  <button
                    className={`boton-dropdown-1 ${confContraste ? 'border-bottom-contraste border-right-contraste' : ''}`}
                    onClick={toggleDropdown}
                    aria-expanded={dropdownVisible}
                    aria-controls="menu-categorias"
                  >
                    CATEGORÍAS
                  </button>
                  {dropdownVisible && (
                    <div id="menu-categorias" role="menu" className="dropdown-content">
                      {categorias.map((categoria, index) => (
                        <Link to={categoria.ruta} 
                          key={index} 
                          className={`dropdown-item ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`} 
                          onClick={handleCategoryClick}
                          role="menuitem"
                          >
                          {categoria.nombre}
                        </Link>
                      ))}
                    </div>
                  )}
                  <button 
                  className={`boton-dropdown-2 ${confContraste ? 'border-bottom-contraste' : ''}`}
                    onClick={toggleDropdown2}
                    aria-expanded={dropdownVisible}
                    aria-controls="menu-tipos"
                  >
                    TIPO DE CONTENIDO
                  </button>
                  {dropdown2Visible && (
                    <div className="dropdown2-content" id="menu-tipos" role="menu">
                      <button className={`dropdown-item dropdown2-override ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`} 
                        onClick={() => handleTipoClick('TODO')} 
                        role="menuitem"
                        aria-label="Mostrar todo el contenido"
                        >TODO</button>
                      <button className={`dropdown-item dropdown2-override ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`} 
                        onClick={() => handleTipoClick('articulo')} 
                        role="menuitem"
                        aria-label="Mostrar solo artículos"
                        >ARTÍCULOS</button>
                      <button className={`dropdown-item dropdown2-override ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`} 
                        onClick={() => handleTipoClick('reportaje')} 
                        role="menuitem"
                        aria-label="Mostrar solo reportajes"
                        >REPORTAJES</button>
                      <button className={`dropdown-item dropdown2-override ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`} 
                        onClick={() => handleTipoClick('video')} 
                        role="menuitem"
                        aria-label="Mostrar solo videos"
                        >VIDEOS</button>
                      <button className={`dropdown-item dropdown2-override ${confContraste ? 'contraste-aumentado border-bottom-contraste' : ''}`} 
                        onClick={() => handleTipoClick('podcast')} 
                        role="menuitem"
                        aria-label="Mostrar solo podcasts"
                        >PODCASTS</button>
                    </div>
                  )}
                </div>
              )}
    </div>
  );
}

export default Cabezal;