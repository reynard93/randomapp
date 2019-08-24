import React from "react";
import { NavLink } from "react-router-dom";

const Navbah = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
      <span className="navbar-brand mb-0 h1">React Project</span>
      <div>
        <div className="navbar-nav ml-auto">
          <NavLink
            exact
            to="/one"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            PageOne
          </NavLink>
          <NavLink
            exact
            to="/two"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            PageTwo
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbah;
