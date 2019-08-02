import React from "react";
import "./App.scss";

import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import HeroBanner from "../HeroBanner";
import LogInForm from "../LogInForm";
import SignUpForm from "../SignUpForm";
import PageNotFound from "../PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layout wrapper">
        <header className="app-header">
          <NavLink className="app-header__logo" to="/">
            Musi<span>que</span>
          </NavLink>
        </header>
        <main className="app-main">
          <section className="app-main__left">
            <HeroBanner />
          </section>
          <section className="app-main__right">
            <Switch>
              <Route exact path="/" component={LogInForm} />
              <Route path="/register" component={SignUpForm} />
              <Route component={PageNotFound} />
            </Switch>
          </section>
        </main>
        <footer className="app-footer">
          <span>
            <a
              href="https://www.freepik.com/premium-vector/vector-illustration-rockstar-guitarist-poster_2921725.htm"
              target="blank"
            >
              Illustration
            </a>
          </span>
          <span>
            Created by{" "}
            <a href="https://www.timothygo.me" target="blank">
              Timothy Go
            </a>
          </span>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
