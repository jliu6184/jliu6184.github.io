import { useState, useEffect, useRef } from 'react';
import "./ExperienceItem.css";
import "../FadeInSection.css";

function ExperienceItem(props) {
    function FadeInSection(props) {
        const [isVisible, setVisible] = useState(false);
        const domRef = useRef();

        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
                    setVisible(entry.isIntersecting);
                });
            });

            const { current } = domRef;
            observer.observe(current);

            return () => observer.unobserve(current);
        }, []);
        return (
            <div
                className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
                ref={domRef}
            >
                {props.children}
            </div>
        );
    }
    return (
        <div className="ExperienceItem">
            <FadeInSection>
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
            </FadeInSection>
        </div>
    );
}

export default ExperienceItem;