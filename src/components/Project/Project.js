import './Project.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import {ProjectList} from '../helpers/ProjectList';


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
        <div className="ProjectList">
            {projectItem.map(item => {
              return <ProjectItem name={item["name"]} description={item["description"]}/>
            })}
        </div>
    </div>
  );
}

export default Project;