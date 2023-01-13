
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import List from "./components/pages/Games";
import Resources from "./components/pages/Resources";

// I will need thise for database
// import API from "./utils/API";
import { Container, CssBaseline } from '@mui/material/';

function App() {

  return (
    <Container>
      <CssBaseline />
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <StickyFooter />
      </Router>
    </Container>
  );
}

export default App;
