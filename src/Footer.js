import logo from "./images/logo.svg";
import github from "./images/icons/github.svg";
import frontendmentor from "./images/icon-frontend-mentor.svg";
import linkedin from "./images/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="nav-links">
        <img src={logo}></img>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </div>
      <div className="contact-links">
        <a href="https://github.com/vinuman" target="_blank">
          <img src={github}></img>
        </a>
        <a href="https://www.frontendmentor.io/profile/vinuman" target="_blank">
          <img
            style={{ backgroundColor: "#333", borderRadius: "50%" }}
            src={frontendmentor}
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/vinu-cyril-a3936b154/"
          target="_blank"
        >
          <img src={linkedin}></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
