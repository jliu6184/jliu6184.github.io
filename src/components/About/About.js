import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from "react";
import { animated, useSpring } from 'react-spring';
import './About.css';
import '../FadeInSection.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const profile = require('../helpers/new-profile.png');
const intro = require('../helpers/intro.png');
const about = require('../helpers/about.png');
const arrow = require('../helpers/down-arrow.png');
const computer = require('../helpers/monitor.png');
const healthcare = require('../helpers/healthcare.png');
const music = require('../helpers/musical-notes.png');
const leftstars = require('../helpers/left-stars.png');
const rightstars = require('../helpers/right-stars.png');

function About(props) {
	const ref = useRef(null);
	const initialRef = useRef(null);

	useEffect(() => {
		if (props.reference === "contact") {
			initialRef.current?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [initialRef]);


	const scrollClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	function FadeInSection(props) {
		const [isVisible, setVisible] = useState(false);
		const domRef = useRef();

		useEffect(() => {
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
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

	const Boop = ({ x = 0, y = 8, rotation = 0, scale = 1, timing = 150, children }) => {
		const [isBooped, setIsBooped] = useState(false);
		const style = useSpring({
			display: 'inline-block',
			backfaceVisibility: 'hidden',
			transform: isBooped
			? `translate(${x}px, ${y}px)
				rotate(${rotation}deg)
				scale(${scale})`
			: `translate(0px, 0px)
				rotate(0deg)
				scale(1)`,
			  config: {
				tension: 300,
				friction: 10,
			  },
		  });
		useEffect(() => {
		  if (!isBooped) {
			return;
		  }
		  const timeoutId = window.setTimeout(() => {
			setIsBooped(false);
		  }, timing);
		  return () => {
			window.clearTimeout(timeoutId);
		  };
		}, [isBooped, timing]);
		const trigger = () => {
		    setIsBooped(true);
		};
		return (
			<animated.span onMouseEnter={trigger} style={style}>
				{children}
			</animated.span>
		);
	  };

	return (
		<div className="About">
			<FadeInSection>
				<div className="home">
					<div className="right-picturebox">
						<img src={intro} alt="intro" className="about-intro-pic" />
						<img src={profile} alt="profile" className="about-profile-pic" />
					</div>
					<div className="left-textbox">
						<h3 className="intro-description">i'm a current student at uc berkeley studying <span class="pink-text">computer science</span> and <span class="pink-text">data science</span>.</h3>
						{/* <h2 className="intro">hi, i'm<span className="pink-text"> jiajun.</span></h2> */}
						<Boop rotation={0} timing={200}>
							<div className="arrow">
								<img src={arrow} alt="down arrow" className="down-arrow" onClick={scrollClick}></img>
							</div>
						</Boop>
					</div>
				</div>
			</FadeInSection>

			<FadeInSection>
				<div className="mini-section" ref={ref}>
					<img src={leftstars} alt="stars" className="stars" />
					<div className="intro-scroller">i'm a &nbsp;
						<div className="scroller">
							<span className="brown-text">
								student.<br />
								coder.<br />
								musician.<br />
								traveler.<br />
							</span>
						</div>
					</div>
					<img src={rightstars} alt="stars" className="stars" />
				</div>
			{/* </FadeInSection> */}

			{/* <FadeInSection> */}
				<div className="about">
					<div className="big-about-box">
						<div className="left-about">
							{/* <h1 className="about-header">about me</h1> */}
							<img src={about} alt="about header" className="about-header" />
						</div>
						<div className="right-about">
							<div className='about-box'>
								<div className="about-box-header">
									<img src={computer} alt="computer" className="computer-pic" />
									<h3 className="box-header">school...</h3>
								</div>
								<p className="about-text">i’m a sophomore studying <span className="bold-text">computer science and data science</span> at uc berkeley. groups i'm involved with on campus include <a className="underline-text" href="https://codebase.berkeley.edu/">codebase</a>, <a className="underline-text" href="https://saas.berkeley.edu/">saas</a>, and the berkeley <a className="underline-text" href="https://music.berkeley.edu/performance-opportunities/windensemble/">wind ensemble</a>.</p>
							</div>
							<div className="about-box">
								<div className="about-box-header">
									<img src={healthcare} alt="healthcare" className="healthcare-pic" />
									<h3 className="box-header">career...</h3>
								</div>
								<p className="about-text">i’m passionate about <span className="bold-text">healthcare and technology</span>, and hope to combine both fields to help make the world a better place!</p>
							</div>
							<div className='about-box'>
								<div className="about-box-header">
									<img src={music} alt="music notes" className="music-pic" />
									<h3 className="box-header">other...</h3>
								</div>
								<p className="about-text">in my free time, i enjoy playing clarinet and listening to music. i also enjoy <span className="bold-text">reading, watching asian dramas, and traveling</span>.</p>
							</div>
						</div>
					</div>
				</div>
			</FadeInSection>

			<FadeInSection>
				<div className="contact-section" ref={initialRef}>
					<Contact />
				</div>
			</FadeInSection>

			<div className="footer-section">
				<Footer />
			</div>
		</div>
	);
}

export default About;