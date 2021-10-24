import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  padding: 64px;
  background: #fff;
  position: absolute;
  width: 574px;
  height: 428px;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;

`;

const Modal = ({ isOpen, children }) => {
  return isOpen ? <StyledModal>{children}</StyledModal> : null;
};

export default Modal;
