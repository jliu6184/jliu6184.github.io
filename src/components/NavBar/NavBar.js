import './NavBar.css';
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav className="Nav">
      <ul>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/experience">experience</Link></li>
        <li><Link to="/">about</Link></li>
       </ul>
    </nav>
  );
}

export default NavBar;
