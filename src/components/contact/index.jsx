import { RevalAboutContent } from "../../ui/introImg"
import "./_style.scss"
const index = () => {
  return (
    <div>
      <div className="container">
        <div id="contact">
          <RevalAboutContent>
          <h2>Contact Me</h2>
          </RevalAboutContent>
          <form>
            <div className="div1">
              <div className="top">
                <label htmlFor="">Name</label>
              <input type="text"  placeholder='Enter your name'/>
              </div>
              <div className="top">
                <label htmlFor="">Email</label>
              <input type="text" placeholder='Enter your email'/>
              </div>
            </div>
            <label>Message</label>
              <textarea placeholder='Enter your message'></textarea>
          </form>
        </div>
      </div>
    </div>
  )
}

export default index