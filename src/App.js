
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import List from "./components/pages/List";
import Resources from "./components/pages/Resources";

// I will need thise for database
// import API from "./utils/API";
import { Container } from '@mui/material/';

function App() {

    return (
        <Container>
            <Router>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="*" element={<h1>404</h1>} />
              </Routes>

            </Router>

    
        </Container>
      );
    }
    
    export default App;
    