import React from 'react';

// components
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

// icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

// const { collapseSidebar } = useProSidebar();

function SidebarWrapper() {
    const { collapseSidebar } = useProSidebar();

    return (
        <div id='sidebar' style={{ height: '100vh', display: 'flex' }}>
            <Sidebar>
                <Menu>
                    <MenuItem
                        icon = {<HomeOutlinedIcon />}
                        onClick = {() => {
                            collapseSidebar();
                        }}
                    >
                    {" "}
                    <h1 style={{ color: 'white' }}>test</h1>
                    </MenuItem>
                </Menu>                
            </Sidebar>
        </div>
    );
}

export default SidebarWrapper;