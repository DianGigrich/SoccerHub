
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navigationbar";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import Resources from "./components/pages/Resources";
import Error from "./components/pages/Error";
import Calendar from "./components/pages/Calendar";

import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container
} from "@mui/material"


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
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    },
  },
  typography: {
    fontFamily: 'Droid Sans',
  }
});

function App() {

  const data = {
    title: "practice game",
    date: "2023-3-04"
  }

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />

          <Route path="/games" element={<Games />} />
          <Route path="/calendar" element={<Calendar {...data}/>} />

          <Route path="*" element={<Error/>} />
        </Routes>
        <StickyFooter />
      </Router>
      </ThemeProvider>
    </Container>
  );
}

export default App;
