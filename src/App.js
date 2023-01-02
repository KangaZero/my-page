
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


function App() {
  return (
    <Router>
     <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
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
              <Route 
                path="/contact" 
                element={<Contact />}
              />
              <Route 
                path="/resume" 
                element={<Resume />}
              />
            </Routes>
          </div>
          <Footer />
   </div>
   </Router>
  );
}

export default App;
