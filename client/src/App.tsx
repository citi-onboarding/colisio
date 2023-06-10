import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home, Navbar, Process, Contato, Sobre_Nos } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Navbar />
      <Process />
      <Sobre_Nos />
      <Contato />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
