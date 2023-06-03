import './ProjectItem.css';

function ProjectItem({image, name, description}) {

    return (
        <div className="ProjectItem">
            <div className="left">
                <h2>{name}</h2>
            </div>
            <div className="right">
                <p>{description}</p>
            </div>
            <div className="image-div">
                <img src={image} alt="proj pic" className="image1"></img>
            </div>
        </div>
    );
}

export default ProjectItem;