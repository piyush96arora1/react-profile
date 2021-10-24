import React from 'react';
import './style.css';
import Header from './components/header';
import Profile from './components/profile';
import Configuration from './components/configuration';

import styled  from 'styled-components';
import { ThemeProvider } from 'styled-components';
const theme = {
  primary: '#5C524D',
  secondary: '#FC732F',
  white: '#fff',
  gray: 'rgba(255, 255, 255, 0.75)',
};
const StyledWrapper = styled.div`

.flex{
  display: flex;
}
.align-center{
  align-items: center;
}
.justify-center{
  justify-content: center;
}
.center{
  align-items: center;
  justify-content: center;
}
.column{
  flex-direction: column;
}
.row{
  flex-direction: row;
}
.form-item{
  margin-top: 1.6rem;
}
`

export default function App() {
  return (
    <StyledWrapper>
      <ThemeProvider theme={theme}>
        <Header />
        <Profile />
        <Configuration/>
      </ThemeProvider>
    </StyledWrapper>
  );
}
