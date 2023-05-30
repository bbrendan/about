import React from "react";

// styles
import * as s from "./SidebarWrapper.styles";

// components
import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import MenuOption from "../MenuOption/MenuOption";

// icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

function SidebarWrapper() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="sidebar" style={{ height: "100vh", display: "inline-flex" }}>
      <s.WrapperStyles>
        <Sidebar className="sidebar" backgroundColor="#F4F7F5" transitionDuration={200}>
          <Menu>
            <MenuOption icon={<MenuOutlinedIcon />} menuClick={() => collapseSidebar()} />
            <MenuOption title="Home" icon={<HomeOutlinedIcon />} />
            <MenuOption title="Contact" icon={<ContactsOutlinedIcon />} />
          </Menu>
        </Sidebar>
      </s.WrapperStyles>
    </div>
  );
}

export default SidebarWrapper;
