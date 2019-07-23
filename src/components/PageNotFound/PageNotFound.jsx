import React from "react";
import "./PageNotFound.scss";

import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Uh Oh! This page doesn't exist.</h2>
      <p>Seems like you got lost in the music, let's go back home.</p>
      <NavLink to="/" className="btn--cta">
        Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
