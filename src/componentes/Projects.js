import React from 'react';

import './Projects.css';

function Projects() {
  // Iconos

  const iconMapping = {
    Python: 'fab fa-python',
    Flask: 'fas fa-flask',
    HTML: 'fab fa-html5',
    Bootstrap: 'fab fa-bootstrap',
    JavaScript: 'fab fa-js-square',
    CSS: 'fab fa-css3',
    Java: 'fab fa-java',
    MySql: 'fas fa-database'
  };

  // Ejemplo de datos de proyectos
  const projects = [
    {
      id: 1,
      title: 'Portfolio 0.1 v',
      description: 'Descripción del proyecto 1.',
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
      description: 'Descripción del proyecto 2.',
      tecnologias: ['Python', 'Flask', 'HTML', 'Bootstrap', 'MySql'],
      linkYotube: 'https://www.youtube.com/embed/9NIHMHP_dFE',
      link: 'https://github.com/EduMMorenolp/Python-Biblioteca',
    },
    {
      id: 4,
      title: 'Proyecto 4',
      description: 'Descripción del proyecto 2.',
      link: 'https://www.ejemplolink2.com',
    },
    // Agrega más proyectos según tus necesidades
  ];

  return (
    <section id="projects" className="container">
      <hr></hr>
      <h2 className="display-4 text-center">Proyectos</h2>
      <hr></hr>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <hr></hr>
                <ul className="list-unstyled">
                  {project.tecnologias ? (
                    project.tecnologias.map((tecnologia, index) => (
                      <li key={index}>
                        <i className={iconMapping[tecnologia]}></i> {tecnologia}
                      </li>
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
    </section>
  );
}

export default Projects;
