import React from "react";
import styled from "styled-components";
import Resources from "../../resources";

const StyledWrapper = styled.div`
img{
    height: 128px;
    width: 128px;
}
.grtJob{
    font-size: 4rem;
    font-weight: 700;
}
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
`;

const ThankYouModal = ({}) =>{
    return(<StyledWrapper>
        <img src={Resources.assets.clap} alt="clap" className="gap"/>
        <div className="grtJob gap">Great Job</div>
        <div className="content">Your configurations have been updated successfully.</div>
    </StyledWrapper>)
}
export default ThankYouModal;