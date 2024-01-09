import React from 'react';

import './Projects.css';

function Projects() {
  // Iconos

  const iconMapping = {
    // Tecnologias Aprendidas
    Python: 'fab fa-python',
    Flask: 'fas fa-flask',
    HTML: 'fab fa-html5',
    Bootstrap: 'fab fa-bootstrap',
    JavaScript: 'fab fa-js-square',
    CSS: 'fab fa-css3',
    Java: 'fab fa-java',
    MySql: 'fas fa-database',
    Springboot: 'fas fa-code',
    Thymeleaf: 'fa-solid fa-leaf',
    Deepnote: 'fas fa-book-open',
    Excel: 'fas fa-file-excel',
  };

  // Ejemplo de datos de proyectos
  const projects = [
    {
      id: 1,
      title: 'Portfolio 0.1 v',
      description: 'Primer portfolio que realize',
      tecnologias: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
      linkYotube: 'https://www.youtube.com/embed/cMoa_k5ESX4',
      link: 'https://www.ejemplolink1.com',
    },
    {
      id: 2,
      title: 'Aprender a Programar',
      description: 'Descripción del proyecto 1.',
      tecnologias: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
      linkYotube: 'https://www.youtube.com/embed/a3uv39OAn4U',
      link: 'https://www.ejemplolink1.com',
    },
    {
      id: 3,
      title: 'Python Biblioteca',
      description: 'Una implementacion de una Biblioteca con las tecnologias de python y flask ademas de usar base de datos mySql',
      tecnologias: ['Python', 'Flask', 'HTML', 'Bootstrap', 'MySql'],
      linkYotube: 'https://www.youtube.com/embed/9NIHMHP_dFE',
      link: 'https://github.com/EduMMorenolp/Python-Biblioteca',
    },
    {
      id: 4,
      title: 'Proyecto Final Springboot',
      description: 'Proyecto Final, donde se implemento Springboot y Thymeleaf para su realizacion, en colovaricon con un equipo de 10 personas, tomando roles y diviendose las treas',
      tecnologias: ['Java', 'Springboot', 'Thymeleaf', 'MySql', 'Bootstrap'],
      linkYotube: 'https://www.youtube.com/embed/Z70zCfUsE4s?si=1kybwL2th3agibVL',
      link: 'https://github.com/EduMMorenolp/ProyectoFinal-Spring',
    },
    {
      id: 5,
      title: 'Proyecto Final Big Data',
      description: 'Proyecto Final, donde se implemento diferentes intrumentos de analisis de datos y big data',
      tecnologias: ['Python', 'Excel', 'Deepnote', 'MySql', 'Bootstrap'],
      linkYotube: 'https://www.youtube.com/embed/kyzCkpCHaGI?si=smvaN9F9Wn75VZQq',
      link: 'https://deepnote.com/workspace/eduardommoreno-34ae987d-0d5e-4172-936b-60005e69667f/project/c23664-Eduardo-Moreno-TPintegrador-57a710b8-5854-4f44-a9e8-4a17d1732d80/notebook/0.%20Consignas%20%2B%20Redes%20Sociales-a13245fd02f84ed48077777de1da7da5',
    },
    {
      id: 6,
      title: 'Biblioteca Web',
      description: 'Una implementacion de una Biblioteca con las tecnologias de Springboot,bootstrap,html,css y javascript ademas de usar base de datos mySql',
      tecnologias: ['Java', 'Springboot', 'Thymeleaf', 'MySql', 'Bootstrap'],
      linkYotube: 'https://www.youtube.com/embed/o8bm6A3G_o4?si=5XMW4lyVIsONMsQ6',
      link: 'https://github.com/EduMMorenolp/ARG-Programa-4.0-FullStack-Ejercicios/tree/master/Guia-21%20-%20Security%20%26%20Login/Biblioteca',
    },
    // Agrega más proyectos según tus necesidades
  ];

  return (
      <div id="projects" className=" tarjeta">
      <hr></hr>
      <h2 className="display-4 text-center">Proyectos</h2>
      <hr></hr>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col">
            <div className="card mb-4 ceddi">
              <div className="card-body mb-4">
                <h3 className="card-title mb-4">{project.title}</h3>
                <hr></hr>
                <ul className="list-unstyled mb-4">
                  {project.tecnologias ? (
                    project.tecnologias.map((tecnologia, index) => (
                      <div key={index}>
                        <i className={iconMapping[tecnologia]}></i> {tecnologia}
                      </div>
                    ))
                  ) : (
                    <li></li>
                  )}
                </ul>
                <p className="card-text">{project.description}</p>
                <div className="Video">
                  <iframe
                    className="embed-responsive-item"
                    src={project.linkYotube}
                    title="YouTube Video"
                    allowFullScreen
                  />
                </div>
                <br></br>
                <a href={project.link} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

  );
}

export default Projects;
