import "./ExperienceItem.css";

function ExperienceItem({image, name, description}) {
    return (
        <div className="ExperienceItem">
            <div className="left">
                <img src={image} alt="exp pic" class="image"></img>
            </div>
            <div className="right">
                <h2 className="name-header"> {name} </h2>
                <p className="description-text">{description}</p>
            </div>
        </div>
    );
}

export default ExperienceItem;