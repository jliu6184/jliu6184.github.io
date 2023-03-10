function ProjectItem({name, description}) {
    return (
        <div className="ProjectItem">
            <div className="top">
                <h1 className="name-header"> {name} </h1>
            </div>
            <div className="bottom">
                <p className="description-text">{description}</p>
            </div>
        </div>
    );
}

export default ProjectItem;