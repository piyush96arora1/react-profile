import React from 'react';
import styled from 'styled-components';
import { menuData, menuDataMobile } from '../../utils/data';
import MenuItem from '../menuItem';
const StyledNav = styled.div`
width: ${(props) => (props.open ? `100%` : `0`)};
display: ${(props) => (props.open ? `block` : `none`)};
position: fixed;
top: 81px;
left: 0;
transition: 0.5s;
background-color: ${(props) => props.theme.primary};
height: 100%;
padding: 0px 32px;
padding-top: 40px;
`;

const SideNav = ({ open }) => {
  return (
    <StyledNav open={open}>
      {menuDataMobile.map((item, index) => {
        return (
          <MenuItem
            key={item.id}
            index={index}
            selected={item.selected}
            value={item.name}
          />
        );
      })}
    </StyledNav>
  );
};
export default SideNav;
