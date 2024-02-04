import './Main.css';
import React, { useState, useEffect } from 'react';

function Main({ languageContent }) {

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
      <h1 className="display-4">{languageContent.esp_main}</h1>

      <div>
        <span className="nombre-estilo">
          {nombre.slice(0, currentIndex)}
        </span>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Tektur&display=swap');
        </style>
      </div>

      <p className="lead">{languageContent.esp_explora_proyectos}</p>
      <h2>{languageContent.esp_sobre_mi}</h2>
      <img src={process.env.PUBLIC_URL + "/imagenes/fotoEduMMoreno.png"} alt="Foto de Eduardo Manuel Moreno" />
      <hr></hr>
      <p>
        {languageContent.esp_descripcion}
      </p>
    </div>
  );
}

export default Main;
