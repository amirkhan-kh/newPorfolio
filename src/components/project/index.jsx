import { RevalAboutContent } from '../../ui/introImg'
import { projectCard } from '../const';
import "./_style.scss"

const Index = () => {

  const handleClick = (e, projectId) => {
    e.preventDefault(); 
    window.location.href = `/project/${projectId}`;  
  };

  return (
    <div>
      <div className="container">
        <div id="projects">
          <RevalAboutContent>
            <h2>Projects</h2>
            <h3>Some of my latest projects and work.</h3>
          </RevalAboutContent>
          <div className="gridItem">
            {
              projectCard.map((project) => (
                <a
          href={`/project/${project.id}`}
          key={project.id}
          className="gridCard"
          onClick={(e) => handleClick(e, project.id)}
        >
          <div className="gridImg">
            <img src={project.image} alt={project.name} />
          </div>
          <h3>{project.name}</h3>
          <i className="bi bi-eye-fill"></i>
        </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
