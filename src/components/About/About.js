import { useEffect } from 'react';
import {useRef} from 'react';
import './About.css';
const profile = require('../helpers/profile.jpg');
const arrow = require('../helpers/down-arrow.png');
const computer = require('../helpers/monitor.png');
const healthcare = require('../helpers/healthcare.png');
const music = require('../helpers/musical-notes.png');

/*useEffect(() => {
  return typeWriter();
}, [""]);*/

function About() {
  const ref = useRef(null);

  const scrollClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

    return (
      <div className="About">
        <div className="home">
          <div className="left-textbox">
            <h2 className="intro">hi, my name is<span className="pink-text"> jiajun.</span></h2>
            {/* <h3 className="intro-description">i'm a student studying <span class="pink-text">computer science</span> and <span class="pink-text">data science</span> at uc berkeley.</h3> */}
            <div className="intro-scroller">i'm a &nbsp;&nbsp;
              <div className="scroller">
                <span className="pink-text">
                  student.<br/>
                  programmer.<br/>
                  musician.<br/>
                  foodie.<br/>
                </span>
              </div>
            </div>
            <div>
              <img src={arrow} alt="down arrow" className="down-arrow" onClick={scrollClick}></img>
            </div>
          </div>
          <div className="right-picturebox">
            <img src={profile} alt="profile" className="profile-pic"/>
          </div>
        </div>
        <div className="about"  ref={ref}>
          <div className="left-about">
            <div className='first-box'>
              <img src={computer} alt="computer" className="computer-pic"/>
              <h3 className="box-header">school...</h3>
              <p className="about-text">i’m a current sophomore studying <span className="bold-text">computer science and data science</span> at uc berkeley.</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='third-box'>
              <img src={music} alt="music notes" className="music-pic"/>
              <h3 className="box-header">other...</h3>
              <p className="about-text">in my free time, i enjoy playing clarinet in the berkeley wind ensemble. i also enjoy <span className="bold-text">reading, watching dramas, and trying new restaurants and cafes</span>.</p>
            </div>
          </div>
          <div className="right-about">
            <h1 className="about-header">about me</h1>
            <div className="second-box">
              <img src={healthcare} alt="healthcare" className="healthcare-pic"/>
              <h3 className="box-header">career...</h3>
              <p className="about-text">i’m passionate about <span className="bold-text">healthcare and technology</span>, and hope to combine both to help make the world a better place!</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <h2>you can reach me at: </h2>
        </div>
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