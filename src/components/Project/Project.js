import './Project.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import {ProjectList} from '../helpers/ProjectList';

const left = require('../helpers/left-arrow.png');
const right = require('../helpers/right-arrow.png');


function Project() {

  let [projectItem, setProjectItem] = useState([]);

  useEffect(() => {
    const url2 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_PROJECT_ID}`;
    const config = {
      headers : {
        "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      }
    };
    
    axios.get(url2, config)
    .then(res => {
      let tableEntries = res.data.records;
      let items = [];
      tableEntries.forEach(record => {
        let entry = record.fields;
        let item = {
          name: entry["name"],
          description: entry["description"],
          image: entry["image"][0]["url"]
        }
        items.push(item);
      });
      setProjectItem(items);
    })
    .catch(err=> console.log(err))

    console.log("Finished fetching table from Airtable...");
  }, []);

  return (
    <div className="Project">
      <img src={left} alt='left-arrow' className='pre-btn'/>
      <img src={right} alt='right-arrow' className='nxt-btn'/>
      <div className="projectCard">
        {projectItem.map(item => {
          return <ProjectItem image={item["image"]} name={item["name"]} description={item["description"]}/>
        })}
      </div>
    </div>
  );
}

export default Project;