import React from 'react';
import './Juego.css';

function Imagen({ url }) {
  return (
    <div className="imagen-container">
      <img src={url} alt="Anillo" className="imagen" />
    </div>
  );
}

export default Imagen;
