import arrowright from "./images/icons/down-arrows.svg";

const Portfolio = () => {
  return (
    <header className="projects-header">
      <button
        style={{ borderRadius: "1rem 0 0 1rem" }}
        className="project-type-btn"
      >
        In Browser Applications
        <img className="project-arrow" src={arrowright}></img>
      </button>
      <button className="project-type-btn">
        Multi Page Websites
        <img className="project-arrow" src={arrowright}></img>
      </button>
      <button
        style={{ borderRadius: "0 1rem 1rem 0" }}
        className="project-type-btn"
      >
        API Interactions
        <img className="project-arrow" src={arrowright}></img>
      </button>
    </header>
  );
};

export default Portfolio;
