import React, {useState} from 'react';
import "./Contact.css"



const socialLinks = [
  {
    id: 1,
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/in/eduardo-m-moreno-programador/',
    iconClass: 'fab fa-linkedin',
    color: '#0077B5',
  },
  {
    id: 2,
    platform: 'GitHub',
    link: 'https://github.com/EduMMorenolp',
    iconClass: 'fab fa-github',
  },
  {
    id: 3,
    platform: 'Instagram',
    link: 'https://www.instagram.com/edu.m.morenolp/',
    iconClass: 'fab fa-instagram',
    color: '#E4405F',
  },
  {
    id: 4,
    platform: 'Twitter',
    link: 'https://twitter.com/EduMMorenolp',
    iconClass: 'fab fa-twitter',
    color: '#1DA1F2',
  },
  {
    id: 6,
    platform: 'Youtube',
    link: 'https://www.youtube.com/@edummorenolp',
    iconClass: 'fab fa-youtube',
    color: '#FF0000',
  },
  {
    id: 7,
    platform: 'Twitch',
    link: 'https://www.twitch.tv/edummorenolp',
    iconClass: 'fab fa-twitch',
    color: '#9146FF',
  },
];

const contactText = {
  title: {
    espanol: "Contacto",
    english: "Contact",
  },
  email: {
    espanol: "e.m.morenolp@gmail.com",
    english: "e.m.morenolp@gmail.com",
  },
  cv: {
    espanol: "Curriculum Vitae",
    english: "Curriculum Vitae",
  },
  downloadCV: {
    espanol: "Descargar CV",
    english: "Download CV",
  },
  contactMessage: {
    espanol: "Si deseas ponerte en contacto conmigo o tienes alguna consulta, no dudes en enviarme un mensaje. Estaré encantado de ayudarte.",
    english: "If you want to get in touch with me or have any inquiries, feel free to send me a message. I'll be happy to help.",
  },
  contactForm: {
    espanol: "Puedes utilizar el formulario de contacto a continuación o escribirme directamente a mi dirección de correo electrónico.",
    english: "You can use the contact form below or write to me directly at my email address.",
  },
  lookingForward: {
    espanol: "¡Espero tener noticias tuyas pronto!",
    english: "Looking forward to hearing from you soon!",
  },
};

function Contact() {
  const language = 'espanol';

  const [showSocialLinks, setShowSocialLinks] = useState(false);

  return (
    <section id="contact" className="container text-center ">
      <div id="contacto" className="tarjeta">
        <h2>{contactText.title[language]}</h2>
        <p><a href={`mailto:${contactText.email[language]}`}>{contactText.email[language]}</a></p>
        <p>{contactText.cv[language]}: <a href="/imagenes/CVEduardoMorenoDevFullStack.pdf" download className="boton-descargar">{contactText.downloadCV[language]}</a></p>

        <p>{contactText.contactMessage[language]}</p>
        <p>{contactText.lookingForward[language]}</p>

        <div className="social2-links">
          <button className="btn-outline-info" onClick={() => setShowSocialLinks(!showSocialLinks)}>
            {showSocialLinks ? 'Ocultar Redes' : 'Mostrar Redes'}
          </button>
          {showSocialLinks && (
            <ul className="sidebar2">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    <i className={link.iconClass} style={{ color: link.color }}>{` ${link.platform}`}</i>
                  </a>
                </li>
              ))}
            </ul>
          )}</div>
      </div>
      <div className="formulario">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf4FqRrnjIti1MvLQoNTuu-SCYC1EsYeQZM3MS3e79QGcPJoA/viewform?embedded=true" title="googleform">Cargando…</iframe>
      </div>
    </section>
  );
}

export default Contact;



