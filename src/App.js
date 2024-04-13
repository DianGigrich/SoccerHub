
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navigationbar";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Count from "./components/pages/Count";
import Calendar from "./components/pages/Calendar";
import Games from "./components/pages/Games";
import Resources from "./components/pages/Resources";


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

  // work in progress TODO
  // const [userId, setUserId] = useState(0);
  // const [userName, setUserName] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [token, setToken] = useState("");
  // const [showHeader, setShowHeader] = useState(true);
  // const [showFooter, setShowFooter] = useState(true);
  // const [showNav, setShowNav] = useState(true);
  // const [correct, setCorrect] = useState(false);

  // const handleLoginSubmit = userObj => {
  //   console.log('handle login')
  //   API.login(userObj).then(data => {
  //     console.log(data);
  //     if (data.token) {
  //       setUserId(data.user.id)
  //       localStorage.setItem("userid", data.user.id)
  //       setToken(data.token)
  //       setIsLoggedIn(true)
  //       setUserName(data.user.username)
  //       localStorage.setItem("token", data.token)
  //     }
  //   })
  // }

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  //   setUserId(0);
  //   setToken("");
  //   setUserName("")
  // }

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Router> 
        {/* {showHeader &&
            <Header />
          }
          {showNav &&
            <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          } */}
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/games" element={<Games />} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/count" element={<Count />} />

          <Route path="*" element={<Error/>} />
        </Routes>
        <StickyFooter />
      </Router>
      </ThemeProvider>
    </Container>
  );
}

export default App;
