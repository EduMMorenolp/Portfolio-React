import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Barra.css';
import React, { useState } from 'react';
import textContent from '../textContent';


function Barra({ onSectionChange }) {

    const [languageContent, setLanguage] = useState(textContent['espanol']);

    const handleNavLinkClick = (sectionName) => {
        onSectionChange(sectionName);
    };

    const handleLanguageChange = () => {
        const newLanguage = languageContent === textContent['espanol'] ? textContent['english'] : textContent['espanol'];

        setLanguage(newLanguage);
        console.log("Cambiando Idioma a", newLanguage);
    };

    return (
        <Navbar expand="lg" className="bg-body">
            <Container>
                <div className="language-button">
                    <button onClick={handleLanguageChange}>
                        {languageContent === textContent['espanol'] ? 'In English' : 'En Español'}
                    </button>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
                    <Nav.Link onClick={() => handleNavLinkClick("Inicio")}>
                        {languageContent.inicio}
                    </Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick("Habilidades")}>
                        {languageContent.habilidades}
                    </Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick("Proyectos")}>
                        {languageContent.proyectos}
                    </Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick("Certificados")}>
                        {languageContent.certificados}
                    </Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick("Contacto")}>
                        {languageContent.contacto}
                    </Nav.Link>
                </Navbar.Collapse>


            </Container>
        </Navbar>

    );
}



export default Barra;

