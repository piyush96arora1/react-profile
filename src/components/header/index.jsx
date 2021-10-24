import React, { useState } from "react";
import styled from "styled-components";
import Resources from "../../resources";
import { device, menuData } from "../../utils/data";
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
//   .info{
//     background: #FFF7F3;
//     position: absolute;
//     top: 0;
//     width: 100%;
//     left: 0;
//     font-weight:700;
//     font-size: 0.8rem;
//     display: flex;
//     align-items:center;
//     padding-left: 32px;
//     height: 56px;
//     img{
//       margin-right: 10px;
//     }
// }
  }

  @media only screen and ${device.mobileS} { 
  width: 100%;
    .menu { 
      display: none;
    }
    .hamburger{
      display: block;
    }
  }
  @media only screen and ${device.tablet} { 
  width: auto;
    .menu {
      display: flex;
    }
    .hamburger{
      display: none;
    }
    .logout{
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
        onClick={() => setSideNav(!sideNav)}
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
