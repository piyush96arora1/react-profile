import React, { useState } from "react";
import styled from "styled-components";
import Resources from "../../resources";
import {  menuData } from "../../utils/data";
import MenuItem from "../menuItem";
import SideNav from "../sideNav";

const StyledHeader = styled.div`
  background: ${(props) => props.theme.primary};
  padding: 0px 32px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) => (props.sideNavOpen ? `1px solid black` : ``)};
  .logo {
    height: 26px;
  }

  .hamburger {
    display: none;
  }
  .menu {
    display: flex;
  }
  .logout {
    display: none;
  }
  @media only screen and (max-width: 1024px) {
    .menu {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .logout {
      display: none;
    }
  }
`;

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <StyledHeader sideNavOpen={sideNav}>
      <SideNav open={sideNav} />
      {/* <div className="info">
        <img src={Resources.assets.triangle} alt="info"/>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
      </div> */}
      <img
        onClick={() => 
          {
          document.body.style.overflow = sideNav?"auto":"hidden";
          setSideNav(!sideNav)
        }
        }
        className="hamburger"
        src={Resources.assets[sideNav ? "cross" : "hamBurger"]}
        alt="menu"
      />
      <img className="logo" src={Resources.assets.logo} alt="logo" />
      <div className="menu">
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
      </div>
      <img src={Resources.assets.logout} className="logout" alt="logout" />
    </StyledHeader>
  );
};
export default Header;
