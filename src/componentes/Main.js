import React from 'react';
import './Main.css';

function Main() {
  return (
        <div id="sobre-mi" className="tarjeta">
        <h1 className="display-4">Bienvenido a mi portafolio</h1>
      <p className="lead">¡Explora mis proyectos y conoce más sobre mí! en Contacto</p>
          <h3>Sobre mí</h3>
          <img src= {process.env.PUBLIC_URL + "/imagenes/fotoEduMMoreno.png"} alt="Foto de Eduardo Manuel Moreno"/>
          <hr></hr>
          <p>
            Soy un programador iniciado con una pasión por la tecnología y la resolución de problemas.
            En busca de oportunidades y proyectos emocionantes.
          </p>
        </div>
  );
}

export default Main;
