import React from "react";

// styles
import * as s from "./Navbar.styles";

// icons
import { FaIgloo } from 'react-icons/fa';

const Navbar = () => {
  return (
    <s.NavWrapper className="nav-wrapper">
      <s.NavLink spy={true} smooth={true} offset={-160} duration={600} to="home">
        <FaIgloo style={{ transform: 'scale(1.6)' }} />
      </s.NavLink>
      <s.NavMenu>
        <s.NavLink
          className="navlink"
          spy={true}
          smooth={true}
          offset={-60}
          duration={600}
          to="skills"
        >
          SKILLS
        </s.NavLink>
        <s.NavLink
          className="navlink"
          spy={true}
          smooth={true}
          offset={-60}
          duration={600}
          to="about"
        >
          ABOUT
        </s.NavLink>
      </s.NavMenu>
    </s.NavWrapper>
  );
};

export default Navbar;
