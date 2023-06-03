import './Experience.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useRef} from 'react';
import ExperienceItem from './ExperienceItem'
import {ExperienceList} from '../helpers/ExperienceList';
import '../FadeInSection.css';
import Footer from '../Footer/Footer';
const experiences = require('../helpers/experiences.png');



function Experience() {

  let [experienceItem, setExperienceItem] = useState([]);

  useEffect(() => {
    const url1 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_EXPERIENCE_ID}`;
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
      console.log(items);
      setExperienceItem(items);
    })
    .catch(err=> console.log(err))
  
    console.log("Finished fetching experience table from Airtable...");
  }, []);

  function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
          setVisible(entry.isIntersecting);
        });
      });
  
      const { current } = domRef;
      observer.observe(current);
  
      return () => observer.unobserve(current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  
  return (
    <div className="Experience">
        {/* <h1 className="experience-header">experiences</h1> */}
        <img src={experiences} alt="experience header" className="experience-header"></img>
        {/* <FadeInSection> */}
        <div className="ExperienceList">
            {experienceItem.map(item => {
              return <ExperienceItem image={item["image"]} name={item["name"]} description={item["description"]}/>
            })}
        </div>
        {/* </FadeInSection> */}
        <Footer/>
    </div>
  );
}

export default Experience;
