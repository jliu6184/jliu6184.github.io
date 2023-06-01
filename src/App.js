import './App.css';
// import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
// import Experience from './components/Experience/Experience';
// import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
// import { useEffect, useState } from 'react';

const logo = require('./JL-1.png');

function App() {
  return (
    <div className="App">
      <div className="NavBar">
          <img src={logo} alt="logo pic" className="logo-image"></img>
          <NavBar/>
       </div>
       
        <div className = "about-sec">
          <About/>
        </div>

        <div className="contact-sec">
          <Contact/>
        </div>

        <div className="footer-sec">
          <Footer/>
        </div>
    </div>
  );
}

export default App;
