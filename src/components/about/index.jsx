import {RevalAboutImg, RevalAboutContent} from '../../ui/introImg'
import person from '../../assets/bg.jpg'
import logo from '../icons/icon-removebg-preview.png'
import "./_style.scss"
const index = () => {
 
  return (
    <div >
      <div className="container">
      < RevalAboutContent>
        <h2>About Me</h2>
        </RevalAboutContent>
      <div id="about">
        
          <RevalAboutImg >
           <div className="leftAbout">
           <img  className="img" src={person} alt="" />
           <div className="logo">
            <img src={logo} alt="" />
            </div>
           </div>
          </RevalAboutImg>

          < RevalAboutContent>
          <h3 className="content">Greetings! 👋 I'm Amirxon   Xodisaliyev,  a React.js front-end  
                developer 🚀   passionate about crafting captivating and user- 
                centric web experiences. With a keen eye for design  and a 
                commitment to clean, efficient code, I thrive  on transforming 
                ideas into seamless interfaces. I  embrace collaboration, 
                continuously learn, and stay  ahead of industry trends. Let's 
                connect and create   something amazing together!🌐✨</h3>
          </RevalAboutContent>
        </div>
      </div>
    </div>
  )
}

export default index