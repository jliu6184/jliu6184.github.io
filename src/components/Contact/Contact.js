import './Contact.css';
const github = require('../helpers/github-pic.png');
const linkedin = require('../helpers/linkedin-pic.png');
const email = require('../helpers/email-pic.png');

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-icons">
                <a href="https://github.com/jliu6184">
                    <img src={github} alt="github icon" className="contact-icon"/>
                </a>
            </div>
            <div className="contact-icons">
                <a href="https://www.linkedin.com/in/jiajun-liu-1ba152251/">
                    <img src={linkedin} alt="linkedin icon" className="contact-icon"/>
                </a>
            </div>
            <div className="contact-icons">
                <a href="mailto:jliu618@berkeley.edu">
                    <img src={email} alt="email icon" className="contact-icon"/>
                </a>
            </div>
        </div>
    )
}

export default Contact;