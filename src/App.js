import './App.css';
import Barra from './componentes/Barra';
import Footer from './componentes/Footer';
import Projects from './componentes/Projects';
import Contact from './componentes/Contact';
import Main from './componentes/Main';
import Skills from './componentes/Skills';
import Certificados from './componentes/Certificados';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import textContent from './textContent';




function App() {
  const [currentSection, setCurrentSection] = useState("Inicio");
  const [languageContent, setLanguage] = useState(textContent['espanol']);


  const handleSectionChange = (sectionName) => {
    setCurrentSection(sectionName);
  };

  const handleLanguageChange = () => {
    const newLanguage = languageContent === textContent['espanol'] ? textContent['english'] : textContent['espanol'];

    setLanguage(newLanguage);
    console.log("Cambiando Idioma a", newLanguage);
  };

  return (
    <div className="appbody">
      <Barra onSectionChange={handleSectionChange} onLanguageChange={handleLanguageChange} languageContent={languageContent} setLanguage={setLanguage} />

      <Element name="Inicio">
        {currentSection === "Inicio" && <Main languageContent={languageContent}/>}
      </Element>
      <Element name="Proyectos">
        {currentSection === "Proyectos" && <Projects />}
      </Element>
      <Element name="Contacto">
        {currentSection === "Contacto" && <Contact />}
      </Element>
      <Element name="Habilidades">
        {currentSection === "Habilidades" && <Skills />}
      </Element>
      <Element name="Certificados">
        {currentSection === "Certificados" && <Certificados />}
      </Element>
      <Footer />

    </div>
  );
}

/*
Proyecto "Mi Portafolio"

Este proyecto es mi portafolio personal, creado con React, donde muestro mis habilidades, proyectos y experiencia en desarrollo web. Aquí podrás conocer más sobre mí y explorar algunos de los proyectos en los que he trabajado.

Características:
- Secciones de presentación, sobre mí, proyectos y contacto.
- Navegación fácil a través de las secciones con React Router.
- Estilo personalizado con CSS para una presentación atractiva.

¡Gracias por visitar mi portafolio!
By Eduardo Manuel Moreno
*/

export default App;
