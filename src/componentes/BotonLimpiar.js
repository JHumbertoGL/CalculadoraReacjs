import React from 'react';
import '../hojas-de-estilo/BotonLimpiar.css';

const BotonLimpiar =(props) => (
  <div className='boton-limpiar' onClick={props.manejarLimpiar}>
    {props.children}
  </div>
);

export default BotonLimpiar;