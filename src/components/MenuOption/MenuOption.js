import React from "react";

// components
import { MenuItem } from "react-pro-sidebar";

function MenuOption(props) {
  const { title, icon, menuClick = () => {} } = props;
  return (
    <div id="menu-option">
      <MenuItem
        className="menu-item-toggle"
        icon={icon}
        onClick={() => {menuClick()}}
      >
        <h1 className="menu-item">
          {title}
        </h1>
      </MenuItem>
    </div>
  );
}

export default MenuOption;