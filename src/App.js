import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import { useEffect, useState } from 'react';

const logo = require('./logo-pic.jpg');
const arrow = require('./down-arrow.png');

function App() {

  return (
    <div className="App">
      <div className="NavBar">
        <NavBar/>
        <a href="#">
        <img src={logo} alt="logo pic" class="logo-image"></img>
        </a>
       </div>
       
       <section id="about-section">
          <div className = "about-sec">
            <About/>
          </div>
        </section>

        <a href="#experience-section">
          <img src={arrow} alt="down arrow" class="down-arrow"></img>
        </a>

        <section id="experience-section" class="experience-section">
          <h1 className="title">--- experiences ---</h1>
            <Experience/>
        </section>

        <section id="project-section" class="project-section">
        <h1 className="title">--- projects ---</h1>
          <Project/>
        </section>

        <section id="contact-section">
        <h1 className="title">let's connect!</h1>
            <Contact/>
        </section>
    </div>
  );
}

export default App;
