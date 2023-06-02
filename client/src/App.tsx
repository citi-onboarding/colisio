import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { AboutUs, Home, Navbar, Process } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Process />
      <AboutUs />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
