import React, { useState } from 'react';
import Imagen from './Imagen.jsx';
import './Juego.css';


function Juego(){
    const [imagenActual, setImagenActual] = useState(0);
    const [imagenSiguiente, setImagenSiguiente] = useState(1);
    let [puntaje, setPuntaje] = useState(0);

    const imagenesAnillos = [
        { id: 1, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/bf8859b4-0f56-45ea-b497-09a07e2a4bd41-6de50a0b30182d148a16843267637502-320-0.webp' },
        { id: 2, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/g11-2b62d4710b810f84c316766524432382-320-0.webp' },
        // Agrega el resto de las imágenes
        { id: 3, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/a31-0d0051d0b0304c811316832117640297-320-0.jpeg' },
        { id: 4, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/e11-1c4227540a7194ce7a16909172828401-320-0.jpeg' },
        { id: 5, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/b41-21a672a9f192f8df9e16909076569455-320-0.jpeg' },
        { id: 6, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/f11-f0604f8b78863fee2f16832141040605-320-0.jpeg' },
        { id: 7, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/diseno-sin-titulo1-7af6a61ac0157e831916843416569267-320-0.webp' },
        { id: 8, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/a51-acaa9d2f77ab6a9d7616727682254132-320-0.webp' },
        { id: 9, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/ad4e70cb-27cb-444f-b528-6a8fa55ac6e91-d07384f4dc6d82951016550900997653-320-0.webp' },
        { id: 10, url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/927/954/products/diseno-sin-titulo1-7af6a61ac0157e831916843416569267-320-0.webp' },
      ];

    const reiniciarJuego = () => {
        setPuntaje(0);
        setImagenActual(0);
        setImagenSiguiente(1);
      };

    const meGustaMasUno = () => {
        cambiarImagenDos();
      };
    
    const meGustaMasDos = () => {
        cambiarImagenUno();
      };

    const cambiarImagenUno = () => {
        if (imagenSiguiente < imagenesAnillos.length - 1) {
            setImagenActual(imagenSiguiente);
            setImagenSiguiente(imagenSiguiente + 1);
            setPuntaje(0);
          } else {
            setImagenSiguiente(0); // Llama a la función para finalizar el juego
          }
      };

    const cambiarImagenDos = () => {
        if (puntaje > 8) {
            setPuntaje(0);
            puntaje = 0;

        } 
        if (imagenSiguiente < imagenesAnillos.length - 1) {
            setImagenSiguiente(imagenSiguiente + 1);
            setPuntaje(puntaje + 1);
          }else {
            setImagenSiguiente(0); // Llama a la función para finalizar el juego
          }
    }

    return (
      <div className="juego-container">
        {puntaje === 8 ? ( // Renderizar mensaje de felicitaciones si el puntaje es 9
        <div className="mensaje-ganaste">
          <p>Toca casarse con este anillo entonces! (espero que hayas elegido el indicado porque ya lo compré jiji)</p>
          <p>Atentamente y con amor, tizidev </p>
          <Imagen url={imagenesAnillos[imagenActual].url} className="mensaje-imagen"/>
          <button className="reiniciar-button" onClick={reiniciarJuego}>
              Jugar de nuevo
            </button>
        </div>
      ) : (
        // Renderizar el juego normal si el puntaje no es 9
        <>
        <h1>Choose your ring, Sunny!</h1>
        <div className="imagenes-container">
            <Imagen url={imagenesAnillos[imagenActual].url} />
            <Imagen url={imagenesAnillos[imagenSiguiente].url} />
            
          </div>
          <div className="botones-container">
            <button onClick={meGustaMasUno}>Left</button>
            <button onClick={meGustaMasDos}>Right</button>
          </div>
          <p className="puntaje">Score: {puntaje}</p>
        </>
      )}
    </div>
  );
}

export default Juego;

