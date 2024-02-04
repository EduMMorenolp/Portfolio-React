import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Certificados.css';

const Certificados = () => {
  const certificados = [
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
  ]
  const certificadosUdemy = [
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/7.png",
      alt: "Certificado Udemy",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/8.png",
      alt: "Certificado Udemy",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/9.png",
      alt: "Certificado Udemy",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/10.png",
      alt: "Certificado Udemy",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/11.png",
      alt: "Certificado Udemy",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/12.png",
      alt: "Certificado Udemy",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/13.png",
      alt: "Certificado Udemy",
    },
    {
      src: process.env.PUBLIC_URL + "/imagenes/certificados/14.png",
      alt: "Certificado Udemy",
    }
  ];

  return (
    <div id="educacion" className="tarjeta">
      <div className="tarjeta">
        <h3>Certificaciones</h3>
        <Carousel interval={3000}>
          {certificados.map((imagen, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={imagen.src} alt={imagen.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="tarjeta">
        
        <h3>Certificaciones Udemy</h3>

        <Carousel interval={3000}>
          {certificadosUdemy.map((imagen, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={imagen.src} alt={imagen.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Certificados;
