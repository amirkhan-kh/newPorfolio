import { useEffect, useState } from "react";
import { style } from 'motion/react-client'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {Reval} from '../../ui/introImg'
import bg from '../icons/back.jpg'
import "./_style.scss"
const index = () => {
  const [text] = useTypewriter({
    words: ['HTML5', 'Tailwind CSS', 'JavaScript', 'SCSS', 'Bootstrap', 'CSS', 'React', 'Angular','Angular Material','Chakra UI','Ant Design','Next UI','Vue','GIT', 'GitHub'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 80,
  });
  const [brightness, setBrightness] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = 70; 
      const newBrightness = Math.max(0.3, 1 - (scrollY / maxScroll) * 1);
      setBrightness(newBrightness);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div id="intro"
      style={{
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: `brightness(${brightness})`,
        height: "100vh",
        transition: "filter 0.7s ease-in-out",
      }}
      >
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <Reval>
                <h1 className={style.title}>Welcome To Mr <br /> Humble's Portfolio</h1>
                <h4>Greetings! 👋 My name is Amirxon. I'm an <br />Fontend Developer, and here's what I bring <br /> to the table: Proficient in :</h4>
                <h5>{' '}
              <span>
                {text}
                </span>
              <span><Cursor /></span>
            </h5>
              </Reval>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default index