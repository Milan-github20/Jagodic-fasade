import React from "react";
import styles from "./Home.module.css";
import Navigation from "../Navigation/Navigation";
import { Route, Switch } from "react-router-dom";

import Galerija from "../../pages/Galerija/Galerija";
import Kontakt from "../../pages/Kontakt/Kontakt";
import Ponuda from "../../pages/Ponuda/Ponuda";
import Pocetna from "../../pages/Pocetna/Pocetna";

const Home = () => {
  return (
    <>
      <div className={styles.stil}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Pocetna />
          </Route>
          <Route path="/ponuda">
            <Ponuda />
          </Route>
          <Route path="/galerija">
            <Galerija />
          </Route>
          <Route path="/kontakt">
            <Kontakt />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Home;
