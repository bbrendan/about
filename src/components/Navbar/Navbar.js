import React from "react";
import {
  NavWrapper,
  NavLink,
  Menu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <Menu />

        <div className="nav-menu">
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
        </div>
      </NavWrapper>
    </>
  );
};

export default Navbar;
