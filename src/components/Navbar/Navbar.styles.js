import { Link } from "react-scroll";
import styled from 'styled-components';
  
export const NavWrapper = styled.nav`
  position: fixed;
  box-shadow: 2px 0px 11px 2px #d9d9d9;
  font-size: 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f7f7;
  padding: 16px 15%;
  z-index: 12;
`;

export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;

  .navlink {
    margin-left: 32px;
  }
`;

export const NavLink = styled(Link)`
  color: #000000;
  font-weight: 600;

  cursor: pointer;
  &:hover {
    color: #de9556;
  }
`;