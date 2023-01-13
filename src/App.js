
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import Resources from "./components/pages/Resources";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container
} from "@mui/material"

// I will need thise for database
// import API from "./utils/API";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4c8527',
      light: '#9aad55',
    },
    secondary: {
      main: '#fcecc4',
      dark: '#ccbc94',
    },
  },
  typography: {
    fontFamily: 'Droid Sans',
  }
});

function App() {

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <StickyFooter />
      </Router>
      </ThemeProvider>
    </Container>
  );
}

export default App;
