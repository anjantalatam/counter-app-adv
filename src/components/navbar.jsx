import React from "react";

const NavBar = (props) => {
  const { totalCounters } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#enterhere">
        Navbar
        <span className="badge badge-primary m-2">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
