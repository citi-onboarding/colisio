import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages';
import { Footer } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
