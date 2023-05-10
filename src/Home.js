import jigsaw from "./images/ashkan-forouzani-m0l9NBCivuk-unsplash.jpg";
import downarrow from "./images/icons/down-arrows.svg";

const Home = () => {
  return (
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
  );
};

export default Home;
