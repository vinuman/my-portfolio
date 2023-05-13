import rightarrow from "./images/icons/arrow-right.svg";

const Card = ({ title, description, src }) => {
  return (
    <div className="card">
      <img className="card-image" src={src} alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="card-btn-container">
          <button className="card-btn">
            View Website
            <img className="btn-arrow" src={rightarrow}></img>
          </button>
          <button className="card-btn">
            View Code
            <img className="btn-arrow" src={rightarrow}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
