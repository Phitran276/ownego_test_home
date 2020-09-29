import React from 'react';
import { Sidebar, NavLinkItem } from './Styles';

const AppSidebar = () => {
    return (
        <Sidebar>
            <NavLinkItem to="/Ding-tea">Ding Tea</NavLinkItem>
            <NavLinkItem to="/Tocotoco">Tocotoco</NavLinkItem>
            <NavLinkItem to="/Gongcha">Gongcha</NavLinkItem>
            <NavLinkItem to="/Leetee">Leetee</NavLinkItem>
        </Sidebar>
    );
}

export default AppSidebar;