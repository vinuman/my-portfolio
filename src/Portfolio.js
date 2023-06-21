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

import coffee from "./images/Card images/coffee.jpg";

import githubsearch from "./images/Card images/githubsearch.jpg";
import dictionary from "./images/Card images/dictionary.jpg";
import restcountries from "./images/Card images/restcountries.jpg";
import ipaddress from "./images/Card images/ipaddress.jpg";
import clock from "./images/Card images/clock.jpg";

import snapshot from "./images/Card images/snapshot.jpg";
import entertainment from "./images/Card images/Entertainment.jpg";

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
      <section className="cards-container">
        <Card
          src={coffee}
          title="Coffeeroasters subscription site"
          description="A 3-page subscription site with interactive subscription component build with the useState hook. The website was built using React Router Dom for handling the routing within the application. The Website is fully responsive, implemented with vanilla CSS."
          href1="https://vinuman.github.io/Coffeeroasters-subscription-site/#/"
          href2="https://github.com/vinuman/Coffeeroasters-subscription-site"
        />
      </section>
    </div>
  );
};

export default Portfolio;
