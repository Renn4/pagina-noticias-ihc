import React from "react";
import './BotonAjustes.css'
import { useState } from "react";
import { useRef } from "react";
import SettingsIcon from '@mui/icons-material/Settings';

function BotonAjustes({ esMovil, tamañoTexto,  setTamañoTexto, confContraste, setConfContraste}) {
    
    const [isOpen, setIsOpen] = useState(false); 
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null); // Reference to the button element

    const handleSizeChange = (event) => {
        setTamañoTexto(event.target.value);  // Update the parent's state
    };

    const handleContrasteChange = (event) => {
        setConfContraste(event.target.value);
    };

    const abrirMenu = () => {

        const buttonRect = buttonRef.current.getBoundingClientRect();
        
        // Para hacer que el menú se muestre debajo del botón
        setModalPosition({
            top: buttonRect.bottom + window.scrollY, // cara inferior del botón + offset de scroll
            left: buttonRect.left - (esMovil ? 390 : 160) + window.scrollX,  // cara izquierda del boton + offset de scroll
        });

        setIsOpen(true);
    };

    const cerrarMenu = () => {
        setIsOpen(false);
    };
    
    return(
        <>
            {!esMovil ? (
                <button
                    className='boton-ajustes' 
                    ref={buttonRef} 
                    onClick={abrirMenu} 
                    aria-expanded={isOpen}
                    aria-controls="menu-ajustes"
                > AJUSTES <div className="chevron"/> 
                </button>
            ) 
            : (
                <button 
                    className='boton-ajustes-movil' 
                    ref={buttonRef} 
                    onClick={abrirMenu}
                    aria-expanded={isOpen}
                    aria-controls="menu-ajustes"
                > <SettingsIcon/> 
                </button>
            )
            }
            

            {isOpen && (
                <div className="modal-overlay" onClick={cerrarMenu} role="dialog">
                    <div className="modal-content" 
                        onClick={(e) => e.stopPropagation()}
                        style={{ top: `${modalPosition.top}px`, left: `${modalPosition.left}px`, '--font-size-multiplier': tamañoTexto }}>
                        <button className="btn-cerrar-modal" onClick={cerrarMenu} aria-label="Cerrar ajustes">&times;</button>
                        
                        <fieldset>
                        <legend className="nombre-configuracion"> Contraste de texto</legend>
                        <ul className="lista-opciones">
                            <li className="opcion">
                                <input 
                                type="radio" 
                                name="contraste" 
                                id="contraste-regular" 
                                value="false"
                                checked={confContraste === false}
                                onChange={() => setConfContraste(false)}
                                />
                                <label htmlFor="contraste-regular"> Regular </label>
                            </li>
                            <li className="opcion">
                                <input 
                                type="radio" 
                                name="contraste" 
                                id="contraste-elevado" 
                                value="true"
                                checked={confContraste === true}
                                onChange={() => setConfContraste(true)}
                                />
                                <label htmlFor="contraste-elevado"> Elevado </label>
                            </li>
                        </ul>
                        </fieldset>


                        <fieldset>
                        <legend className="nombre-configuracion">Tamaño de texto</legend>
                        <ul className="lista-opciones">
                            <li className="opcion">
                                <input
                                 type="radio" 
                                 name="tamaño" 
                                 id="texto-pequeño" 
                                 value="1"
                                 checked={tamañoTexto === '1'}
                                 onChange={handleSizeChange}
                                 />
                                <label htmlFor="texto-pequeño"> Pequeño </label>
                            </li>
                            <li className="opcion">
                                <input 
                                type="radio" 
                                name="tamaño" 
                                id="texto-normal" 
                                value="1.2"
                                checked={tamañoTexto === '1.2'}
                                onChange={handleSizeChange}
                                />
                                <label htmlFor="texto-normal"> Normal </label>
                            </li>
                            <li className="opcion">
                                <input 
                                type="radio"
                                name="tamaño" 
                                id="texto-grande"
                                value="1.4"
                                checked={tamañoTexto === '1.4'}
                                onChange={handleSizeChange}
                                />
                                <label htmlFor="texto-grande"> Grande </label>
                            </li>
                        </ul>
                        </fieldset>
                    
                    </div>
                </div>
            )}

        </>
    )
}

export default BotonAjustes;