import React from "react";

// styles
import * as s from "./Navbar.styles";

const Navbar = () => {
  return (
    <>
      <s.NavWrapper>
        <s.Menu />

        <div className="nav-menu">
          <s.NavLink
            spy={true}
            smooth={true}
            offset={-40}
            duration={600}
            to="home"
          >
            HOME
          </s.NavLink>
          <s.NavLink
            spy={true}
            smooth={true}
            offset={-40}
            duration={600}
            to="about"
          >
            ABOUT
          </s.NavLink>
          <s.NavLink
            spy={true}
            smooth={true}
            offset={-40}
            duration={600}
            to="projects"
          >
            PROJECTS
          </s.NavLink>
        </div>
      </s.NavWrapper>
    </>
  );
};

export default Navbar;
