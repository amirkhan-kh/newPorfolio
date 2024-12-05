import { useState } from "react";
import {RevalAboutContent} from '../../ui/introImg'
import {skillsCard} from '../const'
import "./_style.scss"
const index = () => {
  const [hoveredSkillId, setHoveredSkillId] = useState(null);
  return (
    <div>
      <div className="container">
        <div id="skills">
          <RevalAboutContent>
          <h2>Technologies</h2>
          <h3>I've worked with a range a technologies in the web development world.</h3>
          </RevalAboutContent>
          <div className="gridItem">
            {
              skillsCard.map((skill) => (
                <div key={skill.id} className="gridCard"
                onMouseEnter={() => setHoveredSkillId(skill.id)}
                onMouseLeave={() => setHoveredSkillId(null)}
              >
                  <div className="gridImg" 
                   >
                    <img src={skill.icon}
                    style={{
                      filter: `drop-shadow(0px 1px 10px ${hoveredSkillId === skill.id ? skill.color : "transparent"})`,
                      transition: "filter 0.4s ease",
                    }}
                    alt="" />
                  </div>
                  <h3>{skill.name}</h3>
                  <h4>{skill.description}</h4>
                  <span>{skill.titles}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default index