import './Footer.css';
const heart = require ('../helpers/heart.png');

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-1">
                <a href="a" className="footer-link">home</a>
                <a href="a" className="footer-link">experience</a>
                <a href="a" className="footer-link">projects</a>
                <a href="a" className="footer-link">contact</a>
            </div>
            <div className="footer-2">
                    <p className="footer-2-text">coded with <img src={heart} alt="love" className="heart-icon"/> by jiajun liu 2023</p>
            </div>
        </div>
    )
}

export default Footer;