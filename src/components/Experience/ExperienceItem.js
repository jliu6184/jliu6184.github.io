import "./ExperienceItem.css";

function ExperienceItem(props) {
    return (
        <div className="ExperienceItem">
            <div className="experience-item-top">
                <div className="experience-item-name">  
                    <div className="experience-name-header">{props.name}</div>
                    <div className="experience-role">{props.role}</div>
                </div>
                <div className="experience-item-description">{props.description}</div>
            </div>
            <div className="experience-item-bottom">
                <div className="experience-timeline">{props.timeline}</div>
            </div>
        </div>
    );
}

export default ExperienceItem;