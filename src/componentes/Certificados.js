import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Certificados.css';

const Certificados = () => {
  const imagenes = [
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/0.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/1.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/2.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/3.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/4.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/5.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/6.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/7.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/8.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/9.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/10.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/11.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/12.png",
      alt: "Certificado",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/13.png",
      alt: "Certificado",
    }
  ];

  return (
    <div id="educacion" className="tarjeta">
      <h3>Certificaciones</h3>
      <Carousel interval={3000}>
        {imagenes.map((imagen, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={imagen.src} alt={imagen.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Certificados;
