import './Main.css';
import React, { useState, useEffect, Fragment } from 'react';

function Main() {

  const [nombre] = useState("Soy Eduardo M Moreno");
  const [currentIndex, setCurrentIndex] = useState(0);
  const duracionIntervalo = 200;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < nombre.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(nombre.length);
      }
    }, duracionIntervalo);

    return () => clearInterval(interval);
  }, [currentIndex, nombre]);
  return (
    <div id="sobre-mi" className="tarjeta">
      <h1 className="display-4">Bienvenido a mi portafolio</h1>

      <div className=" nombre-container">
        <span className="nombre-estilo">
          {nombre.slice(0, currentIndex)}
        </span>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Tektur&display=swap');
        </style>
      </div>

      <p className="lead">¡Explora mis proyectos y conoce más sobre mí! en Contacto</p>
      <h3>Sobre mí</h3>
      <img src={process.env.PUBLIC_URL + "/imagenes/fotoEduMMoreno.png"} alt="Foto de Eduardo Manuel Moreno" />
      <hr></hr>
      <p>
        Soy un programador iniciado con una pasión por la tecnología y la resolución de problemas.
        En busca de oportunidades y proyectos emocionantes.
      </p>
    </div>
  );
}

export default Main;
