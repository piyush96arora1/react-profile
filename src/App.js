import React from 'react';
import './style.css';
import Header from './components/header';
import Profile from './components/profile';

import { ThemeProvider } from 'styled-components';
const theme = {
  primary: '#5C524D',
  secondary: '#FC732F',
  white: '#fff',
  gray: 'rgba(255, 255, 255, 0.75)',
};
export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Profile />
      </ThemeProvider>
    </div>
  );
}
