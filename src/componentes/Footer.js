import React from 'react';
import "./Footer.css"

function Footer() {
    const socialLinks = [
        {
            iconClass: "fab fa-linkedin",
            color: "#0077B5",
            url: "https://www.linkedin.com/in/eduardo-m-moreno-programador/",
        },
        {
            iconClass: "fab fa-github",
            color: "#ffffff",
            url: "https://github.com/EduMMorenolp",
        },
        {
            iconClass: "fab fa-instagram",
            color: "#E4405F",
            url: "https://www.instagram.com/edu.m.morenolp/",
        },
        {
            iconClass: "fab fa-twitter",
            color: "#1DA1F2",
            url: "https://twitter.com/EduMMorenolp",
        },
    ];

    const date = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p>&copy; {date} By Eduardo M Moreno. Todos los derechos reservados.</p>
            </div>
            <div className="sidebar">
                <ul>
                    {socialLinks.map((social, index) => (
                        <li key={index}>
                            <a href={social.url} rel="IconsRedes">
                                <i className={social.iconClass}></i>
                                <span className="social-name" style={{ color: social.color }}></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <img src="https://profile-counter.glitch.me/EduMReact/count.svg?" alt='Contador'/>
            </div>
        </footer>
    );
}

export default Footer;

