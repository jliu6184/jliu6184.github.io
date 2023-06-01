import './Contact.css';
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import { SocialIcon } from 'react-social-icons';
import SwiperCore, { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import '../FadeInSection.css';
const meadowlark = require('../helpers/meadowlark.JPG');
const dc = require('../helpers/dc.JPEG');
const prom = require('../helpers/prom.JPG');
const soricha = require ('../helpers/soricha.JPG');
const soricha2 = require ('../helpers/soricha2.JPEG');
// const github = require('../helpers/github-pic.png');
// const linkedin = require('../helpers/linkedin-pic.png');
// const email = require('../helpers/email-pic.png');

function Contact() {

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
        <FadeInSection>
        <div className="Contact">
            <div className="contact">
              <h1 className="contact-header">let's connect! </h1>
              {/* <h2 className="contact-text">you can find me here: </h2> */}
                <div className="contact-icons">
                    <SocialIcon url="https://github.com/jliu6184" bgColor="transparent" fgColor="#EBCFC4"className="github"/>
                    <SocialIcon url="https://www.linkedin.com/in/jiajun-liu-1ba152251/" bgColor="transparent" fgColor="#EBCFC4"className="linkedin"/>
                    <SocialIcon url="mailto:jliu618@berkeley.edu" bgColor="transparent" fgColor="#EBCFC4"className="email"/>
                </div>
              <h2 className="contact-text">or email me at <a className="email-link" href="mailto:jliu618@berkeley.edu"><span className="email-text">jliu618@berkeley.edu</span></a>.</h2>
            </div>
            <div className="slideshow-box">
            <Swiper slidesPerView={3.5}
              spaceBetween={15}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper">
                <SwiperSlide><img src={meadowlark} alt="meadowlark park" className="pictures" id="meadowlark-pic"/></SwiperSlide>
                <SwiperSlide><img src={prom} alt="prom" className="pictures" id="prom-pic"/></SwiperSlide>
                <SwiperSlide><img src={dc} alt="dc lake" className="pictures" id="dc-pic"/></SwiperSlide>
                <SwiperSlide><img src={soricha} alt="soricha" className="pictures" id="soricha-pic"/></SwiperSlide>
                <SwiperSlide><img src={soricha2} alt="soricha" className="pictures" id="soricha2-pic"/></SwiperSlide>
              </Swiper>
            </div>
        </div>
        </FadeInSection>
    )
}

export default Contact;