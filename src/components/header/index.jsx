import React, { useState } from 'react';
import styled from 'styled-components';
import Resources from '../../resources';
import { menuData } from '../../utils/data';
import MenuItem from '../menuItem';
import SideNav from '../sideNav';

const StyledHeader = styled.div`
background : ${(props) => props.theme.primary};
padding: 0px 32px;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: ${(props) => (props.sideNavOpen ? `1px solid black` : ``)};
.logo{
  height: 26px;
}
.menu{
  display: flex;

}
button{
  background: none;
  border: none; 
}
`;

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <StyledHeader sideNavOpen={sideNav}>
      <SideNav open={sideNav} />
      <img
        onClick={() => setSideNav(!sideNav)}
        className="ddisplayNone"
        src={Resources.assets[sideNav ? 'cross' : 'hamBurger']}
        alt="menu"
      />
      <img className="logo" src={Resources.assets.logo} alt="logo" />
      <nav className="menu mdisplayNone">
        {menuData.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              index={index}
              selected={item.selected}
              value={item.name}
            />
          );
        })}
      </nav>
      <img
        src={Resources.assets.logout}
        className="ddisplayNone"
        alt="logout"
      />
    </StyledHeader>
  );
};
export default Header;
