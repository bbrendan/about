import React from "react";

// styles
import * as s from "./Navbar.styles";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
  return (
    <s.NavWrapper className="nav-wrapper">
      <s.NavLink spy={true} smooth={true} offset={-80} duration={600} to="home">
        <MenuOutlinedIcon />
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
          offset={-250}
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
