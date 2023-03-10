import './Project.css';
import ProjectItem from './ProjectItem';
import {ProjectList} from '../helpers/ProjectList';


function Project() {
  return (
    <div className="Project">
        <div className="ProjectList">
            {ProjectList.map((project) => {
              return <ProjectItem name={project.name} description={project.description}/>
            })}
        </div>
    </div>
  );
}

export default Project;