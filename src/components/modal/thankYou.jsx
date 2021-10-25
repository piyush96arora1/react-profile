import React from "react";
import styled from "styled-components";
import Resources from "../../resources";

const StyledWrapper = styled.div`
display:flex;
align-items:center;
justify-content-center;
flex-direction:column;
.content{
    font-size: 1.2rem;
}
.gap{
    margin-bottom: 32px;
}
img{
  height: 128px;
  width: 128px;
}
.grtJob{
  font-size: 4rem;
  font-weight: 700;
}
.content{
  text-align: center;
}
@media only screen and (max-width: 768px) {
  img{
    height: 80px;
    width: 80px;
  }
  .grtJob{
    font-size: 2rem;
    font-weight: 700;
  }
  .content{
    font-size: 1rem;
  }
}
`;

const ThankYouModal = ({}) => {
  return (
    <StyledWrapper>
      <img src={Resources.assets.clap} alt="clap" className="gap" />
      <div className="grtJob gap">Great Job</div>
      <div className="content">
        Your configurations have been updated successfully.
      </div>
    </StyledWrapper>
  );
};
export default ThankYouModal;
