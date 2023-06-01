import './Contact.css';
import { SocialIcon } from 'react-social-icons';
// const github = require('../helpers/github-pic.png');
// const linkedin = require('../helpers/linkedin-pic.png');
// const email = require('../helpers/email-pic.png');

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-icons">
                <SocialIcon url="https://github.com/jliu6184" bgColor="transparent" fgColor="#EBCFC4"className="github"/>
                <SocialIcon url="https://www.linkedin.com/in/jiajun-liu-1ba152251/" bgColor="transparent" fgColor="#EBCFC4"className="linkedin"/>
                <SocialIcon url="mailto:jliu618@berkeley.edu" bgColor="transparent" fgColor="#EBCFC4"className="email"/>
            </div>
        </div>
    )
}

export default Contact;