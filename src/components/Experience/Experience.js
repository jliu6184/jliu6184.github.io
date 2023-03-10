import './Experience.css';
import ExperienceItem from './ExperienceItem'
import {ExperienceList} from '../helpers/ExperienceList';

function Experience() {
  return (
    <div className="Experience">
        <div className="ExperienceList">
            {ExperienceList.map((experience) => {
              return <ExperienceItem image={experience.image} name={experience.name} description={experience.description}/>
            })}
        </div>
    </div>
  );
}

export default Experience;
