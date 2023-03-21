import './ProjectItem.css';
import { useEffect, useState } from 'react';

function ProjectItem({image, name, description}) {
    useEffect(() => {

        const projectCard = [...document.querySelectorAll('.projectCard')];
        const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
        const preBtn = [...document.querySelectorAll('.pre-btn')];
      
        projectCard.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
      
        nxtBtn[i].addEventListener('click', () => {
          item.scrollLeft += containerWidth;
          console.log("right");
        })
      
        preBtn[i].addEventListener('click', () => {
          item.scrollLeft -= containerWidth;
          console.log("left");
        })
      })
        
      }, []);

    return (
        <div className="ProjectItem">
            <div className="image-div">
                <img src={image} alt="proj pic" className="image1"></img>
            </div>
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