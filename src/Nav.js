import logo from "./images/logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
