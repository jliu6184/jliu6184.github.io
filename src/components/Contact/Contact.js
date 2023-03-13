import './Contact.css';
const github = require('../helpers/github-pic.png');
const linkedin = require('../helpers/linkedin-pic.png');
const email = require('../helpers/email-pic.png');

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-icon">
                <img src={github} alt="github icon" className="contact-icon"/>
            </div>
            <div className="contact-icon">
                <img src={linkedin} alt="linkedin icon" className="contact-icon"/>
            </div>
            <div className="contact-icon">
                <img src={email} alt="email icon" className="contact-icon"/>
            </div>
        </div>
    )
}

export default Contact;