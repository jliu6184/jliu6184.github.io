import './App.css';
// import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
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

        {/* <section id="experience-section" className="experience-section">
          <h1 className="title">experiences</h1>
            <Experience/>
        </section>

        <section id="project-section" className="project-section">
        <h1 className="title">projects</h1>
          <Project/>
        </section> */}

        {/* <section id="contact-section">
        <h1 className="title">let's connect!</h1>
            <Contact/>
            <div className="end">
                <h3>created by jiajun liu</h3>
            </div>
        </section> */}
    </div>
  );
}

export default App;
