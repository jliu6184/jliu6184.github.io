import { useEffect } from 'react';
import {useRef} from 'react';
import './About.css';
import { useState } from "react";
import '../FadeInSection.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const profile = require('../helpers/profile.jpg');
const profile2 = require('../helpers/new-profile.png');
const intro = require('../helpers/intro.png');
const about = require('../helpers/about.png');
const arrow = require('../helpers/down-arrow.png');
const computer = require('../helpers/monitor.png');
const healthcare = require('../helpers/healthcare.png');
const music = require('../helpers/musical-notes.png');
const leftstars = require('../helpers/left-stars.png');
const rightstars = require('../helpers/right-stars.png');


/*useEffect(() => {
  return typeWriter();
}, [""]);*/

function About() {
  const ref = useRef(null);

  const scrollClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

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
      <div className="About">
        <FadeInSection>
          <div className="home">
            
            <div className="right-picturebox">
              <img src={intro} alt="intro" className="about-intro-pic"/>
              <img src={profile2} alt="profile" className="about-profile-pic"/>
            </div>

            <div className="left-textbox">
              <h3 className="intro-description">i'm a student studying <span class="pink-text">computer science</span> and <span class="pink-text">data science</span> at uc berkeley.</h3>
              {/* <h2 className="intro">hi, i'm<span className="pink-text"> jiajun.</span></h2> */}
              <div className="arrow">
                <img src={arrow} alt="down arrow" className="down-arrow" onClick={scrollClick}></img>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mini-section">
            <img src={leftstars} alt="stars" className="stars"/>
            <div className="intro-scroller">i'm a &nbsp;&nbsp;
                <div className="scroller">
                  <span className="brown-text">
                    student.<br/>
                    coder.<br/>
                    musician.<br/>
                    foodie.<br/>
                  </span>
                </div>
            </div>
            <img src={rightstars} alt="stars" className="stars"/>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="about"  ref={ref}>
            <div className="big-about-box">
            <div className="left-about">
              {/* <h1 className="about-header">about me</h1> */}
              <img src={about} alt="about header" className="about-header"/>
            </div>
            <div className="right-about">
              <div className='about-box'>
                <div className="about-box-header">
                  <img src={computer} alt="computer" className="computer-pic"/>
                  <h3 className="box-header">school...</h3>
                </div>
                <p className="about-text">i’m a current sophomore studying <span className="bold-text">computer science and data science</span> at uc berkeley. some groups i'm involved with on campus are <a className="underline-text" href="https://codebase.berkeley.edu/">codebase</a>, <a className="underline-text" href="https://saas.berkeley.edu/">saas</a>, and the berkeley <a className="underline-text" href="https://music.berkeley.edu/performance-opportunities/windensemble/">wind ensemble</a>.</p>
              </div>
              <div className="about-box">
                <div className="about-box-header">
                  <img src={healthcare} alt="healthcare" className="healthcare-pic"/>
                  <h3 className="box-header">career...</h3>
                </div>
                <p className="about-text">i’m passionate about <span className="bold-text">healthcare and technology</span>, and hope to combine both fields to help make the world a better place!</p>
              </div>
              <div className='about-box'>
                <div className="about-box-header">
                  <img src={music} alt="music notes" className="music-pic"/>
                  <h3 className="box-header">other...</h3>
                </div>
                <p className="about-text">in my free time, i enjoy playing clarinet and listening to music. i also enjoy <span className="bold-text">reading, watching dramas, and trying new restaurants and cafes</span>.</p>
              </div>
            </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection>
            <div className="contact-section">
              <Contact/>
            </div>
          </FadeInSection>

          <div className="footer-section">
            <Footer/>
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