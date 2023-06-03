import './Project.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import Footer from '../Footer/Footer';
const projects = require('../helpers/projects.png');


function Project() {

  const [projectItem, setProjectItem] = useState([]);
  const [projectSkills, setProjectSkills] = useState([]);

  useEffect(() => {
    const url2 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_PROJECT_ID}`;
    const config = {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
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
            image: entry["image"][0]["url"],
            skills: entry["skills"],
            year: entry["year"]
          }
          items.push(item);
        });
        items.sort((a, b) => b.year - a.year);
        console.log(items);
        setProjectItem(items);
        // let newSkills = projectItem.map(item => {
        //   console.log(item.skills.split(","));
        //   return item.skills.split(",");
        // })
        // console.log(newSkills);
        // setProjectSkills(newSkills);
      })
      .catch(err => console.log(err))

    console.log("Finished fetching table from Airtable...");
  }, []);


  return (
    <div className="Project">
      <img src={projects} alt="project header" className="project-header"></img>
      <div className="project-list">
        {projectItem.map(item => {
          return <ProjectItem image={item["image"]} name={item["name"]} description={item["description"]} skills={item["skills"].split(",")} />
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Project;
