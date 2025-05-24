// ui/single/ProjectItem.jsx
import { useParams, useNavigate } from "react-router-dom";
import { RevalTopBottom } from "../../ui/introImg";
import { projectCard } from "../../components/const";
import "./_style.scss";

export const ProjectItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectCard.find((item) => item.id === Number(id));

  if (!project) {
    return <h2>Project topilmadi!</h2>;
  }

  return (
    <div className="single">
      <div className="top">
        <h1>{project.name}</h1>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="page">
        <div className="container">
          <div className="wrapper">
            <img src={project.image} alt={project.name} />
            <div className="right">
              <RevalTopBottom>
                <h3>Used Stack:</h3>
                <h4>{project.techStack.join(", ")}</h4>
                <p>{project.description}</p>
                <div className="links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-link-45deg"></i> Live
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </RevalTopBottom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
