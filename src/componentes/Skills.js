import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <div id="habilidades" className="tarjeta">
            <h3>Habilidades</h3>
            <div className="columnas">
                <div className="ceddi">
                    <h3>Entorno de desarrollo</h3>
                    <ul>
                        <li><i className="fab fa-microsoft"></i> Vs code</li>
                        <li><i className="fab fa-java"></i> Netbeans</li>
                        <li><i className="fab fa-google"></i>Google Colab</li>
                        <li><i className="fas fa-scroll"></i>Deepnote</li>
                    </ul>
                </div>

                <div className="cl">
                    <h3>Lenguajes</h3>
                    <ul>
                        <li><i className="fab fa-java"></i> Java</li>
                        <li><i className="fab fa-python"></i> Python</li>
                        <li><i className="fab fa-html5"></i> HTML5</li>
                        <li><i className="fab fa-css3"></i> CSS</li>
                        <li><i className="fab fa-js"></i> JavaScript</li>
                        <li><i className="fab fa-react"></i> React</li>
                    </ul>
                </div>

                <div className="ccdv">
                    <h3>Control de versiones</h3>
                    <ul>
                        <li><i className="fab fa-git"></i> Git</li>
                        <li><i className="fab fa-github"></i> GitHub</li>
                    </ul>
                    <h3>Bases de datos</h3>
                    <ul>
                        <li><i className="fas fa-database"></i> MySQL Workbench</li>
                    </ul>
                </div>

                <div className="cde">
                    <h3>Mas Herramientas</h3>
                    <ul>
                        <li><i className="fas fa-code"></i>Sprinboot</li>
                        <li><i className="fas fa-code"></i>Numpy</li>
                        <li><i className="fas fa-code"></i>Pandas</li>
                        <li><i className="fas fa-code"></i>Matplotlib</li>
                        <li><i className="fas fa-code"></i>Seaborn</li>
                    </ul>

                    <h3>Diseño y edición</h3>
                    <ul>
                        <li><i className="fas fa-file-word"></i> Word</li>
                        <li><i className="fas fa-file-excel"></i> Excel</li>
                        <li><i className="fas fa-file-powerpoint"></i> PowerPoint</li>
                        <li><i className="fab fa-figma"></i> Figma</li>
                        <li><i className="fas fa-chart-line"></i>Looker Studio</li>
                        <li><i className="fas fa-project-diagram"></i>UML (Unified Modeling Language)</li>
                    </ul>
                </div>



                <div className="chp">
                    <h3>Habilidades personales</h3>
                    <ul>
                        <li><i className="fas fa-comments"></i> Comunicación efectiva</li>
                        <li><i className="fas fa-users"></i> Trabajo en equipo</li>
                        <li><i className="fas fa-lightbulb"></i> Resolución de problemas</li>
                        <li><i className="fas fa-brain"></i> Pensamiento crítico</li>
                        <li><i className="fas fa-clock"></i> Gestión del tiempo</li>
                        <li><i className="fas fa-exchange-alt"></i> Adaptabilidad</li>
                        <li><i className="fas fa-graduation-cap"></i> Aprendizaje rápido</li>
                        <li><i className="fas fa-check"></i> Toma de decisiones</li>
                        <li><i className="fas fa-hands-helping"></i> Empatía</li>
                        <li><i className="fas fa-bolt"></i> Gestión del estrés</li>
                        <li><i className="fas fa-clipboard-check"></i> Autodisciplina</li>
                    </ul>
                </div>
                <div className="cbdd">
                    <h3>Idiomas</h3>
                    <ul>
                        <li><i className="fas fa-book"></i> Inglés: Intermedio</li>
                        <li><i className="fas fa-flag"></i>Español: Nativo</li>
                    </ul>
                    <h3>FORMACIÓN ACADÉMICA</h3>
                    <ul>
                        <li><i className="fas fa-graduation-cap"></i>Primario | Benito Linch</li>
                        <li><i className="fas fa-graduation-cap"></i>Secundario | Media Nº8</li>
                        <li><i className="fas fa-graduation-cap"></i>Ingeniería en Sistemas | UTN (incompleta)</li>
                        <li><i className="fas fa-book"></i>Programación Web Desde Cero | Egg Academy</li>
                        <li><i className="fas fa-book"></i>Big Data (Ciencia de Datos) | Codo a Codo</li>
                        <li><i className="fas fa-book"></i>Full Stack Back/Front Developer | Arg Programa 4.0 EGG Academy</li>
                        <li><i className="fas fa-list"></i> Cursos :
                            <ul>
                                <li><i className="fas fa-star"></i>HTML5 - Udemy</li>
                                <li><i className="fas fa-star"></i>CSS - Udemy</li>
                                <li><i className="fas fa-star"></i>JavaScript - Udemy</li>
                                <li><i className="fas fa-star"></i>Python, Java y JavaScript - Udemy</li>
                                <li><i className="fas fa-star"></i>Angular - Udemy</li>
                                <li><i className="fas fa-star"></i>Script - Udemy</li>
                                <li><i className="fas fa-star"></i>Looker Studio - Udemy</li>
                                <li><i className="fas fa-star"></i>Springboot - Egg</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;

/**
import React from 'react';
import './Skills.css';

const skillsText = {
    sectionTitle: {
        espanol: "Habilidades",
        english: "Skills",
    },
    categories: [
        {
            title: {
                espanol: "Entorno de desarrollo",
                english: "Development Environment",
            },
            items: [
                { icon: "fab fa-microsoft", text: "Vs code" },
                { icon: "fab fa-java", text: "Netbeans" },
                { icon: "fab fa-google", text: "Google Colab" },
                { icon: "fas fa-scroll", text: "Deepnote" },
            ],
        },
        {
            title: {
                espanol: "Lenguajes",
                english: "Languages",
            },
            items: [
                { icon: "fab fa-java", text: "Java" },
                { icon: "fab fa-python", text: "Python" },
                { icon: "fab fa-html5", text: "HTML5" },
                { icon: "fab fa-css3", text: "CSS" },
                { icon: "fab fa-js", text: "JavaScript" },
                { icon: "fab fa-react", text: "React" },
            ],
        },
        {
            title: {
                espanol: "Control de versiones",
                english: "Version Control",
            },
            tools: [
                { icon: "fab fa-git", text: "Git" },
                { icon: "fab fa-github", text: "GitHub" },
            ],
        },
        // ... Otras categorías
        {
            title: {
                espanol: "Habilidades personales",
                english: "Soft Skills",
            },
            items: [
                { icon: "fas fa-comments", text: "Comunicación efectiva" },
                { icon: "fas fa-users", text: "Trabajo en equipo" },
                { icon: "fas fa-lightbulb", text: "Resolución de problemas" },
                // ... Otros elementos
            ],
        },
        {
            title: {
                espanol: "Idiomas",
                english: "Languages",
            },
            items: [
                { icon: "fas fa-book", text: "Inglés: Intermedio" },
                { icon: "fas fa-flag", text: "Español: Nativo" },
            ],
        },
        // ... Otras categorías
    ],
};

function Skills() {
    const language = 'espanol'; // Cambia a 'english' para cambiar el idioma

    return (
        <div id="habilidades" className="tarjeta">
            <h3>{skillsText.sectionTitle[language]}</h3>
            <div className="columnas">
                {skillsText.categories.map((category, index) => (
                    <div key={index} className="categoria">
                        <h3>{category.title[language]}</h3>
                        <ul>
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <i className={item.icon}></i> {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;

 */