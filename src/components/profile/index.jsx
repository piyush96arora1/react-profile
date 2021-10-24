import React from "react";
import Input from "../input";
import styled from "styled-components";
import Resources from "../../resources";

const StyledProfile = styled.div`
  .container {
    display: flex;
    padding: 64px 130px;
  }
  .container__inputsection {
    margin-left: 130px;
    width: 100%;
    flex-direction: column;
  }
  .container__secondInput {
    flex-direction: row;

    div {
      flex: 1;
      justify-content: space-between;
      margin-right: 16px;
    }
    div:last-child {
      margin-right: 0;
    }
  }

  .container__textMain {
    font-size: 2.4rem;
    font-weight: 800;
    color: #212121;
  }
`;

const Profile = ({}) => {
  return (
    <StyledProfile>
      <div className="container">
        <div>
          <img src={Resources.assets.profile} alt="profile" />
        </div>
        <div className="flex container__inputsection">
          <div className="container__textMain">MY ACCOUNT</div>
          <Input />
          <div className="flex container__secondInput">
            <Input name="mobile" label="Mobile" id="mobile" />
            <Input name="email" label="Email" id="email" />
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};
export default Profile;
