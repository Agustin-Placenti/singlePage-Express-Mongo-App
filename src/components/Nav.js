import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => setShowMenu(false);

  return (
    <nav
      className="navbar is-warning"
      role="navigation"
      aria-label="main navigation"
    >
      <div className={`navbar-menu ${showMenu ? "is-active" : ""}`}>
        <div className="navbar-start">
          <NavLink
            onClick={() => hideMenu()}
            activeclassname="is-active"
            className="navbar-item"
            to="/videogames/see"
          >
            See videogames
          </NavLink>
          <NavLink
            onClick={() => hideMenu()}
            activeclassname="is-active"
            className="navbar-item"
            to="/videogames/add"
          >
            Add videogames
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
