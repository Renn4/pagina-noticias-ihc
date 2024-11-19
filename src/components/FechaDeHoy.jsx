import React from 'react';
import './FechaDeHoy.css'
function FechaDeHoy() {

    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString("es-AR", {
        day: '2-digit',   
        month: '2-digit', 
        year: 'numeric'   
    });

    return (
        <div className='fecha-de-hoy'>
            {formattedDate} {/* Muestra la fecha en el formato DD-MM-YYYY */}
        </div>
    );
}

export default FechaDeHoy;