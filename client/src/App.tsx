import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages';
import { Navbar } from './pages/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Home/>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
