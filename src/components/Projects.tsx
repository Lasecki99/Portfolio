import React from 'react';
import '../styles/Projects.css';
import { projectsTab } from '../util/project';

const Projects: React.FC = () => {
  const viewCode = <p>View code</p>;
  const liveDemo = <p>Live demo</p>;
  return (
    <>
      <div className="paper">
        <div className="projects">
          <p className="title">Projects</p>
        </div>
        <div className="project-wrapper">
          {projectsTab.length &&
            projectsTab.map(project => (
              <div className={`example ${project.class}`} key={project.id}>
                <div className="background-wrapper">
                  <p className="name">{project.name}</p>
                  <p className="description">{project.desc}</p>
                  <div className="button-wrapper">
                    <div className={project.liveLink ? 'text' : 'text-solo'}>
                      <a
                        target="blank"
                        href={project.codeLink}
                        className={
                          project.liveLink ? 'view-code' : 'view-code solo'
                        }
                      >
                        <i className="fas fa-code"></i>
                        {viewCode}
                      </a>
                    </div>
                    {project.liveLink && (
                      <div className="code">
                        <a
                          target="blank"
                          href={project.liveLink}
                          className="live-demo"
                        >
                          <i className="fas fa-tv"></i>
                          {liveDemo}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
