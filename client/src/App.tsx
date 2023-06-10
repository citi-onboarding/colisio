import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


<<<<<<< Updated upstream
import { Home } from './pages';
=======
import { Home, Navbar, Process, Contato } from './pages';
>>>>>>> Stashed changes

function App() {
  return (
    <ThemeProvider theme={theme}>
<<<<<<< Updated upstream
      <Home/>
      <GlobalStyle/>
=======
      <Home />
      <Navbar />
      <Process />
      <Contato />
      <GlobalStyle />
>>>>>>> Stashed changes
    </ThemeProvider>
  );
}

export default App;
