import './Experience.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ExperienceItem from './ExperienceItem'
import {ExperienceList} from '../helpers/ExperienceList';



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
  
  return (
    <div className="Experience">
        <div className="ExperienceList">
            {experienceItem.map(item => {
              return <ExperienceItem image={item["image"]} name={item["name"]} description={item["description"]}/>
            })}
        </div>
    </div>
  );
}

export default Experience;
