import { useState, useEffect } from "react";

import arrowright from "./images/icons/down-arrows.svg";
import Card from "./Card";
import markdown from "./images/Card images/Markdown editor.jpg";
import devjobs from "./images/Card images/Devjobs.jpg";
import kanban from "./images/Card images/Kanban.jpg";
import feedback from "./images/Card images/Feedback.jpg";
import invoices from "./images/Card images/Invoices.jpg";
import myteam from "./images/Card images/myteam.jpg";
import archstudio from "./images/Card images/archstudio.jpg";
import designo from "./images/Card images/preview.jpg";
import coffee from "./images/Card images/coffee.jpg";
import scoot from "./images/Card images/scoot.jpg";
import githubsearch from "./images/Card images/githubsearch.jpg";
import dictionary from "./images/Card images/dictionary.jpg";
import restcountries from "./images/Card images/restcountries.jpg";
import ipaddress from "./images/Card images/ipaddress.jpg";
import clock from "./images/Card images/clock.jpg";
import urlshort from "./images/Card images/urlshort.jpg";

const Portfolio = () => {
  const [appCard, setAppCard] = useState(true);
  const [pageCard, setPageCard] = useState(false);
  const [apiCard, setApiCard] = useState(false);
  const [button1State, setButton1State] = useState(true);
  const [button2State, setButton2State] = useState(false);
  const [button3State, setButton3State] = useState(false);

  useEffect(() => {
    if (appCard == true) {
      setPageCard(false);
      setApiCard(false);
      setButton1State(true);
      setButton2State(false);
      setButton3State(false);
    }
  }, [appCard]);

  useEffect(() => {
    if (pageCard == true) {
      setAppCard(false);
      setApiCard(false);
      setButton1State(false);
      setButton2State(true);
      setButton3State(false);
    }
  }, [pageCard]);

  useEffect(() => {
    if (apiCard == true) {
      setAppCard(false);
      setPageCard(false);
      setButton1State(false);
      setButton2State(false);
      setButton3State(true);
    }
  }, [apiCard]);

  return (
    <div>
      <header className="projects-header">
        <button
          onClick={() => setAppCard(true)}
          style={{ borderRadius: "1rem 0 0 1rem" }}
          className={`project-type-btn ${button1State ? "active" : ""}`}
        >
          In Browser Applications
          <img className="project-arrow" src={arrowright}></img>
        </button>
        <button
          onClick={() => setPageCard(true)}
          className={`project-type-btn ${button2State ? "active" : ""}`}
        >
          Multi Page Websites
          <img className="project-arrow" src={arrowright}></img>
        </button>
        <button
          onClick={() => setApiCard(true)}
          style={{ borderRadius: "0 1rem 1rem 0", borderRight: "none" }}
          className={`project-type-btn ${button3State ? "active" : ""}`}
        >
          API Interactions
          <img className="project-arrow" src={arrowright}></img>
        </button>
      </header>
      {appCard && (
        <section className="application-cards cards-container">
          <Card
            src={kanban}
            title="Kanban task management app"
            description="A fully-functional task management app with a light/dark mode toggle. Additional work with JSON."
          />
          <Card
            src={invoices}
            title="Invoices App"
            description="A real worl feedback App, working with JSON and managing states."
          />
          <Card
            src={feedback}
            title="Product feedback app"
            description="A real worl feedback App, working with JSON and managing states."
          />
          <Card
            src={devjobs}
            title="Devjobs web app"
            description="A real-world app, working with JSON, managing state"
          />
          <Card
            src={markdown}
            title="In-browser markdown editor"
            description="A fully-functional in-browser markdown editor application with a light/dark mode toggle. "
          />
        </section>
      )}
      {pageCard && (
        <section className="multipage-cards cards-container">
          <Card
            src={designo}
            title="Designo multi-page website"
            description="This one's a BIG project! This challenge includes 5 different templates that make up a 7-page site. A perfect portfolio piece to show how you build multi-page websites!"
          />
          <Card
            src={myteam}
            title="myteam multi-page website"
            description="A professional front-end developer's workflow. It includes designs for a 3-page fully-functional website."
          />
          <Card
            src={archstudio}
            title="Arch Studio multi-page website"
            description="A 4-page site with mapping APIs. The pages are fully responsive"
          />

          <Card
            src={scoot}
            title="Scoot multi-page website"
            description="A 4-page website with mobile and desktop views."
          />
          <Card
            src={coffee}
            title="Coffeeroasters subscription site"
            description="A 3-page subscription site with interactive subscription page"
          />
        </section>
      )}
      {apiCard && (
        <section className="api-cards cards-container">
          <Card
            src={restcountries}
            title="REST Countries API"
            description="Data pulle from the REST Countries API with color theme switcher"
          />
          <Card
            src={ipaddress}
            title="IP Address Tracker"
            description="Two separate APIs used together to create an IP Address Tracking app."
          />
          <Card
            src={clock}
            title="Clock app"
            description="Working with external APIs to set data based on a visitor's location. logic to set content depending on the time of day."
          />
          <Card
            src={dictionary}
            title="Dictionary web app"
            description="Integrate with the Dictionary API to create a real-world dictionary web app. Additional functionss include colour themes and font selection."
            href2="https://github.com/vinuman/Dictionary-web-app"
            href1="https://vinuman.github.io/Dictionary-web-app/"
          />
          <Card
            src={urlshort}
            title="URL shortening API landing page"
            description="Integrate with the shrtcode URL shortening API and work with browser storage in this landing page."
          />
          <Card
            src={githubsearch}
            title="GitHub user search app"
            description="A page to searchGitHub users API to pull profile data and display it"
            href1="https://vinuman.github.io/GitHub-user-search-app/"
            href2="https://github.com/vinuman/GitHub-user-search-app"
          />
        </section>
      )}
    </div>
  );
};

export default Portfolio;
