import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { AboutUs, Footer, Home, Navbar, Process } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Process />
      <AboutUs />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
