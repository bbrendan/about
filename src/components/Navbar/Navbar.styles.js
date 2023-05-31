import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-scroll";
import styled from 'styled-components';
  
export const NavWrapper = styled.nav`
  background: #FFF6DD;
  display: flex;
  justify-content: left;
  padding: 8px;
  position: sticky;
  top: 0;
  width: 100vh;

  .nav-menu {
    display: flex;
  }
`;

export const Menu = styled(MenuOutlinedIcon)`
  color: #DE9556;
  margin: 0px 32px 0px 4px;
`;

export const NavLink = styled(Link)`
  color: #DE9556;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px 16px 0px 16px;

  cursor: pointer;
  &:hover {
    color: #FFF2E3;
    background-color: #B56252;
    border-radius: 8px 24px;
  }
`;