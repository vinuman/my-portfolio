import { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import Footer from "./Footer";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  const [home, setHome] = useState(true);
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);
  const [link1State, setLink1State] = useState(true);
  const [link2State, setLink2State] = useState(false);
  const [link3State, setLink3State] = useState(false);

  useEffect(() => {
    if (home == true) {
      setPortfolio(false);
      setContact(false);
      setLink1State(true);
      setLink2State(false);
      setLink3State(false);
    }
  }, [home]);

  useEffect(() => {
    if (portfolio == true) {
      setHome(false);
      setContact(false);
      setLink1State(false);
      setLink2State(true);
      setLink3State(false);
    }
  }, [portfolio]);

  useEffect(() => {
    if (contact == true) {
      setPortfolio(false);
      setHome(false);
      setLink1State(false);
      setLink2State(false);
      setLink3State(true);
    }
  }, [contact]);

  return (
    <div className="App">
      <nav>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="nav-links">
          <ul>
            <li
              className={link1State ? "li-active" : ""}
              onClick={() => setHome(true)}
            >
              Home
            </li>
            <li
              className={link2State ? "li-active" : ""}
              onClick={() => setPortfolio(true)}
            >
              Portfolio
            </li>
            <li
              className={link3State ? "li-active" : ""}
              onClick={() => setContact(true)}
            >
              Contact Me
            </li>
          </ul>
        </div>
      </nav>
      {home && <Home />}
      {portfolio && <Portfolio />}
      {contact && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
