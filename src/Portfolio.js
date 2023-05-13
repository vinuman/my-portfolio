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
import payapi from "./images/Card images/apipay.jpg";
import coffee from "./images/Card images/coffee.jpg";
import dinein from "./images/Card images/dinein.jpg";
import scoot from "./images/Card images/scoot.jpg";

const Portfolio = () => {
  const [appCard, setAppCard] = useState(true);
  const [pageCard, setPageCard] = useState(false);

  useEffect(() => {
    if (pageCard == true) {
      setAppCard(false);
    }
  }, [pageCard]);

  useEffect(() => {
    if (appCard == true) {
      setPageCard(false);
    }
  }, [appCard]);

  return (
    <div>
      <header className="projects-header">
        <button
          onClick={() => setAppCard(true)}
          style={{ borderRadius: "1rem 0 0 1rem" }}
          className="project-type-btn"
        >
          In Browser Applications
          <img className="project-arrow" src={arrowright}></img>
        </button>
        <button onClick={() => setPageCard(true)} className="project-type-btn">
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
            src={payapi}
            title="PayAPI multi-page website"
            description="A marketing site, complete with custom form validation throughout."
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
          <Card
            src={dinein}
            title="Dine restaurant website"
            description="A 2-page website with tricky design details and form validation."
          />
        </section>
      )}
    </div>
  );
};

export default Portfolio;
