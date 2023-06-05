import { Link } from "react-router-dom";
import './Footer.css';
const heart = require('../helpers/heart.png');

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-1">
                <Link to="/" className="footer-link">home</Link>
                <Link to="/experience" className="footer-link">experience</Link>
                <Link to="/projects" className="footer-link">projects</Link>
                <Link to="/contact" className="footer-link">contact</Link>
            </div>
            <div className="footer-2">
                <p className="footer-2-text">coded with <img src={heart} alt="love" className="heart-icon" /> by jiajun liu 2023</p>
            </div>
        </div>
    )
}

export default Footer;