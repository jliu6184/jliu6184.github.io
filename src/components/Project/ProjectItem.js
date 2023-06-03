import './ProjectItem.css';

function ProjectItem(props) {

    return (
        <div className="ProjectItem">
            <div className="project-item-main">
                <div className="top">
                    <div className="project-item-header">{props.name}</div>
                    <div className="project-item-description">{props.description}</div>
                </div>
                <div className="bottom">
                    <div className="skills">
                        {props.skills.map(item => {
                            return <p className="ind-skill">{item}</p>
                        })}
                    </div>
                </div>
            </div>
            
            <div className="image-div">
                <img src={props.image} alt="proj pic" className="image1"></img>
            </div>
        </div>
    );
}

export default ProjectItem;