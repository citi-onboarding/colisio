import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { AboutUs, Footer, Home, Navbar, Process, Contact, Services, Colisers } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Process />
      <AboutUs />
      <Services />
      <Colisers />
      <Contact />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
