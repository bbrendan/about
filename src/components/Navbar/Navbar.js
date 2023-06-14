import React from "react";

// styles
import * as s from "./Navbar.styles";

import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <s.NavWrapper className="nav-wrapper">
      <s.NavLink spy={true} smooth={true} offset={-120} duration={600} to="home">
        <HomeIcon />
      </s.NavLink>
      <s.NavMenu>
        <s.NavLink
          className="navlink"
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
          to="about"
        >
          ABOUT
        </s.NavLink>
        <s.NavLink
          className="navlink"
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
          to="skills"
        >
          SKILLS
        </s.NavLink>
      </s.NavMenu>
    </s.NavWrapper>
  );
};

export default Navbar;
