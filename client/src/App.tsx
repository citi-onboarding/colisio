import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages';
import { Footer } from './pages';
import { Navbar, Contato } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Contato />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
