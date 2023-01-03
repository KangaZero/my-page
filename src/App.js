
import './App.css';
import React from 'react';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
// import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import FancyNavbar from './components/FancyNavbar';

// Pages
import About from './pages/About';
// import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

import {ThemeContext} from './utils/ThemeContext';





function App() {

  const [theme, setTheme] = useState('light');

//   const lightMode = {
//     backgroundColor: '#333',
//     color: '#D3D3D3'
//   }
  
//   const darkMode = {
//     backgroundColor: '#fff',
//     color: '#333'
//   }
  

//   const Container = styled.div`
//   background-color: ${theme === 'light' ? lightMode.backgroundColor : darkMode.backgroundColor};
//   color: ${theme === 'light' ? lightMode.color : darkMode.color};
// `


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>

      <Router>
              {/* <Header /> */}
              <Navbar/>
                <Routes>
                <Route 
                    path="/"
                    element={<Home />}
                  />
                  <Route 
                    path="/about" 
                    element={<About />}
                  />
                  <Route 
                    path="/projects" 
                    element={<Projects />}
                  />
                  {/* <Route 
                    path="/contact" 
                    element={<Contact />}
                  /> */}
                  <Route 
                    path="/resume" 
                    element={<Resume />}
                  />
                </Routes>        
              <Footer />
      </Router>

    </ThemeContext.Provider>
  );
}

export default App;
