import './ProjectItem.css';

function ProjectItem({name, description}) {
    return (
        <div className="ProjectItem">
            <div className="top">
                <h2>{name}</h2>
            </div>
            <div className="bottom">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectItem;