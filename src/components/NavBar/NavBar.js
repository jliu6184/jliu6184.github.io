import './NavBar.css';
import {Link} from "react-router-dom";

const logo = require('../helpers/logo-stars.png');

function NavBar() {
  return (
    <nav className="Nav">
      <img src={logo} alt="logo pic" className="logo-image"></img>
      <ul className="nav-links">
        <li><Link to="/">about</Link></li>
        <li><Link to="/experience">experience</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/contact">contact</Link></li>
       </ul>
    </nav>
  );
}

export default NavBar;
