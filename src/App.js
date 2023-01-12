
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import API from "./utils/API";

function App() {
    return (
        <Container>
            <Router>
              {showHeader &&
                <Header />
              }
              {showNav &&
                <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
              }
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="*" element={<h1>404</h1>} />
              </Routes>
              {showFooter &&
                <StickyFooter />
              }
            </Router>

    
        </Container>
      );
    }
    
    export default App;
    