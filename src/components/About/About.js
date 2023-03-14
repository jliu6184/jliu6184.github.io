import { useEffect } from 'react';
import './About.css';

/*useEffect(() => {
  return typeWriter();
}, [""]);*/

function About() {
    return (
      <div className="About">
        <h2 class="intro">hi, i'm<span className="pink-text"> jiajun.</span></h2>
        <h3 class="intro-description">i'm a student studying <span class="pink-text">computer science</span> and <span class="pink-text">data science</span> at uc berkeley.</h3>
      </div>
    );
  }
  export default About;

  /*var i = 0;
  var txt = "hi, i'm jiajun.";
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("intro").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }*/