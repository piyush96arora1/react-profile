import React from "react";
import styled from "styled-components";
const StyledMenuItem = styled.div`
  color: ${(props) => (props.selected ? `#fff` : props.theme.gray)};
  font-size: 0.9rem;
  margin-right: ${(props) => (props.idx < 3 ? `40px` : `0px`)};
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 8px;
  position: relative;

  .line {
    height: 7px;
    background: #86eaae;
    position: absolute;
    width: 100%;
    top: 47px;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 42px;
    padding-bottom: 16px;
    border-bottom: ${(props) => (props.selected ? `2px solid #86EAAE` : ``)};
  }
`;

const MenuItem = ({ value, selected, index }) => {
  return (
    <StyledMenuItem idx={index} selected={selected}>
      {value}
      {selected && <div className="mdisplayNone line" />}
    </StyledMenuItem>
  );
};

export default MenuItem;
