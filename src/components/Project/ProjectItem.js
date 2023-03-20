import './ProjectItem.css';

function ProjectItem({name, description}) {
    return (
        <div className="ProjectItem">
            <div className="top">
                {name}
            </div>
            <div className="bottom">
                {description}
            </div>
        </div>
    );
}

export default ProjectItem;