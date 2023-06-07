import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home, Navbar, Contato } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <Navbar/>
      <Contato/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
