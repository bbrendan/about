import React from "react";

// styles
import * as s from "./SidebarWrapper.styles";

// components
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

// icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

function SidebarWrapper() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="sidebar" style={{ height: "100vh", display: "flex" }}>
      <s.WrapperStyles>
        <Sidebar className="sidebar">
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
            ></MenuItem>
            <MenuItem icon={<HomeOutlinedIcon />}>
              <h1 style={{ color: "white" }}>Home</h1>
            </MenuItem>
            <MenuItem icon={<ContactsOutlinedIcon />}>
              <h1 style={{ color: "white" }}>Contact</h1>
            </MenuItem>
          </Menu>
        </Sidebar>
      </s.WrapperStyles>
      <div id="shell">
        <h1 style={{ color: "white", marginLeft: "50px" }}>Brendan Farrell</h1>
      </div>
    </div>
  );
}

export default SidebarWrapper;
