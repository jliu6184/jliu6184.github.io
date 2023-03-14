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

const tableMap = {
  0: process.env.REACT_APP_EXPERIENCE_TABLE_ID,
  1: process.env.REACT_APP_PROJECT_TABLE_ID,
}

function App() {
  let [experienceID, setExperienceID] = useState(1);
  let [experienceItem, setExperienceItem] = useState([]);

  useEffect(() => {
    const url1 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_PROJECT_TABLE_ID}`;

    const config = {
      headers : {
        "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      }
    };

    axios.get(url1, config)
    .then(res => {
      let tableEntries = res.data.records;
      let items = [];
      tableEntries.forEach(record => {
        let entry = record.fields;
        let item = {
          name: entry["name"],
          description: entry["description"],
          image: entry["image"][0]["url"],
        }
        items.push(item);
      });
      setExperienceItem(items);
    })
    .catch(err=> console.log(err))

    // === TELL THE USER THE FETCH IS DONE ===
    console.log("Finished fetching table from Airtable...");

    const url2 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.enb.REACT_APP_EXPERIENCE_TABLE_ID}`;
    
    axios.get(url2, config)
    .then(res => {
      let tableEntries = res.data.records;
      let items = [];
      tableEntries.forEach(record => {
        let entry = record.fields;
        let item = {
          name: entry["name"],
          description: entry["description"],
          image: entry["image"][0]["url"],
        }
        items.push(item);
      });
      setExperienceItem(items);
    })
    .catch(err=> console.log(err))

    console.log("Finished fetching table from Airtable...");
  }, []);


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
