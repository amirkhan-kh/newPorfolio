import gitHub from '../../assets/github.png';
import netlify from '../../assets/netlify.png';
import telegram from '../../assets/telegram.png';
import linkedin from '../../assets/linkedin.png';
import './_style.scss'
const index = () => {
  return (
    <footer>
        <div className="container">
            <nav>
                <ul>
                    <li><a href="https://github.com/amirkhan-kh"><img src={gitHub} alt="githubApp" /></a></li>
                    <li><a href="https://app.netlify.com/teams/hodisaliyevamirhon/sites"><img src={netlify} alt="netlifyApp" /></a></li>
                    <li><a href="https://t.me/amirxonwebb"><img src={telegram} alt="tm.messnger" /></a></li>
                    <li><a href="https://www.linkedin.com/in/%D0%B0%D0%BC%D0%B8%D1%80%D1%85%D0%BE%D0%BD-%D1%85%D0%BE%D0%B4%D0%B8%D1%81%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2-3ab458340/"><img src={linkedin} alt="linkedinApp" /></a></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default index