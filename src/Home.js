import jigsaw from "./images/ashkan-forouzani-m0l9NBCivuk-unsplash.jpg";
import downarrow from "./images/icons/down-arrows.svg";

const Home = () => {
  return (
    <div>
      <header className="home-header">
        <img src={jigsaw}></img>
        <div className="title">
          <p>
            Hi there! I'm Vinu Cyril, a budding front-end developer passionate
            about creating responsive and engaging user experience.
          </p>
          <button className="about-button">
            <img src={downarrow}></img>
            About me
          </button>
        </div>
      </header>
      <main>
        <div className="image-container">IMAGE</div>
        <div className="about">
          <p className="about-title">About Me</p>
          <p className="about-description">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <button className="about-btn">Go to Portfolio</button>
        </div>
      </main>
      <section className="home-contact">
        <p className="home-contact-title">
          Interested in doing a project together?
        </p>
        <button className="about-btn">Contact Me</button>
      </section>
    </div>
  );
};

export default Home;
