import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Home, Navbar, Contato, Sobre_Nos, Footer} from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Sobre_Nos/>
      <Contato/>
      <Footer />
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
