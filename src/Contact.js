import github from "./images/icons/github.svg";
import linkedin from "./images/icons/linkedin.svg";
import frontendmentor from "./images/icon-frontend-mentor.svg";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-actual">
        <h2>Contact Me</h2>
        <div className="contact-details">
          <div className="contact-item">
            <p className="contact-title">Email:</p>
            <p className="contact-info email">vinucyril@gmail.com</p>
          </div>
          <div className="contact-item">
            <p className="contact-title">Phone:</p>
            <p className="contact-info">+91 7560824678</p>
          </div>
          <div className="contact-item">
            <p className="contact-title">Github:</p>
            <p className="contact-info">
              <a href="https://github.com/vinuman" target="_blank">
                <img src={github}></img>
              </a>
            </p>
          </div>
          <div className="contact-item">
            <p className="contact-title">Linkedin:</p>
            <p className="contact-info">
              <a
                href="https://www.linkedin.com/in/vinu-cyril-a3936b154/"
                target="_blank"
              >
                <img src={linkedin}></img>
              </a>
            </p>
          </div>
          <div className="contact-item">
            <p className="contact-title">FrontendMentor:</p>
            <p className="contact-info">
              <a
                href="https://www.frontendmentor.io/profile/vinuman"
                target="_blank"
              >
                <img
                  style={{ backgroundColor: "#33323D", borderRadius: "50%" }}
                  src={frontendmentor}
                ></img>
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="contact-description">
        <h1>Get in Touch</h1>

        <p>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>
      </section>
    </div>
  );
};

export default Contact;
