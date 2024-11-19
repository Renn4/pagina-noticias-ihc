import React from "react";
import './BotonAjustes.css'
import { useState } from "react";
import { useRef } from "react";
import SettingsIcon from '@mui/icons-material/Settings';

function BotonAjustes({ esMovil }) {
    
    const [isOpen, setIsOpen] = useState(false); 
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null); // Reference to the button element

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
                <button className='boton-ajustes' ref={buttonRef} onClick={abrirMenu}> AJUSTES <div className="chevron"/> </button>
            ) 
            : (
                <button className='boton-ajustes-movil' ref={buttonRef} onClick={abrirMenu}> <SettingsIcon/> </button>
            )
            }
            

            {isOpen && (
                <div className="modal-overlay" onClick={cerrarMenu}>
                    <div className="modal-content" 
                        onClick={(e) => e.stopPropagation()}
                        style={{ top: `${modalPosition.top}px`, left: `${modalPosition.left}px` }}>
                        
                        <button className="btn-cerrar-modal" onClick={cerrarMenu}>&times;</button>

                        <span className="nombre-configuracion"> Contraste de texto</span>
                        <ul className="lista-opciones">
                            <li className="opcion">
                                <input type="radio" name="" id="contraste-regular" />
                                <label htmlFor="contraste-regular"> Regular </label>
                            </li>
                            <li className="opcion">
                                <input type="radio" name="" id="contraste-elevado" />
                                <label htmlFor="contraste-elevado"> Elevado </label>
                            </li>
                        </ul>

                        <hr className="divisor-opciones"/>

                        <span className="nombre-configuracion">Tamaño de texto</span>
                        <ul className="lista-opciones">
                            <li className="opcion">
                                <input type="radio" name="" id="contraste-regular" />
                                <label htmlFor="contraste-regular"> Pequeño </label>
                            </li>
                            <li className="opcion">
                                <input type="radio" name="" id="contraste-elevado" />
                                <label htmlFor="contraste-elevado"> Normal </label>
                            </li>
                            <li className="opcion">
                                <input type="radio" name="" id="contraste-elevado" />
                                <label htmlFor="contraste-elevado"> Grande </label>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            )}

        </>
    )
}

export default BotonAjustes;