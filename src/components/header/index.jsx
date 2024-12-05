import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../icons/icon-removebg-preview.png";
import "./_style.scss";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src={logo} alt="Logo" />
              <h1><strong>Amirxon </strong></h1>
            </div>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="toogleParent">
            <div className="toogle">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                color="#89b1bb"
                distance="sm"
              />

              <ol className={isOpen ? "menu-open" : "menu-closed"}>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ol>
            </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Index;
