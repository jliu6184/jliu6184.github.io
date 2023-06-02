import './App.css';
// import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
// import Experience from './components/Experience/Experience';
// import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';
import Experience from './components/Experience/Experience';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// const logo = require('./JL-1.png');
const logo = require('./logo.png');

function App() {
  return (
    <Router>
      <div className="App">
      <div className="NavBar">
          <img src={logo} alt="logo pic" className="logo-image"></img>
          <NavBar/>
       </div>

        <Routes>
          <Route exact path = "/" element={<About/>}/>
          <Route path = "/contact" element={<Contact/>}/>
          <Route path = "/projects" element={<Project/>}/>
          <Route path = "/experience" element={<Experience/>}/>

{/*           
          <div className="contact-sec">
            <Contact/>
          </div>

          <div className="footer-sec">
            <Footer/>
          </div> */}
        </Routes>
    </div>
    </Router>
  );
}

export default App;
