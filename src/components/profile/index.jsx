import React from 'react';
import Input from '../input';
import styled from 'styled-components';
import Resources from '../../resources';

const StyledProfile = styled.div``;

const Profile = ({}) => {
  return (
    <StyledProfile>
      <div className="container">
        <div>
          <img src={Resources.assets.profile} alt="profile" />
        </div>
        <div>
          <Input />
        </div>
      </div>
    </StyledProfile>
  );
};
export default Profile;
