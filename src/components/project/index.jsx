import { Link } from "react-router-dom";
import {RevalAboutContent} from '../../ui/introImg'
import {projectCard} from '../const';
import "./_style.scss"
const index = () => {
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
              <Link to={`/project/${project.id}`} key={project.id} className="gridCard">
                <div className="gridImg">
                  <img src={project.image} />
                </div>
                <h3>{project.name}</h3>
                <i className="bi bi-eye-fill"></i>
              </Link>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default index