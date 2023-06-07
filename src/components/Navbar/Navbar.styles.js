import { Link } from "react-scroll";
import styled from 'styled-components';
  
export const NavWrapper = styled.nav`
  position: fixed;
  box-shadow: 2px 0px 11px 2px #DE9556;
  font-size: 14px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF6DD;
  padding: 16px 15%;
  z-index: 12;
`;

export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;

  .navlink {
    margin-left: 16px;
  }
`;

export const NavLink = styled(Link)`
  color: #DE9556;

  cursor: pointer;
  &:hover {
    color: #B56252;
  }
`;