import { NavLink } from "react-router-dom";
import './NavBar.css';
const logo = require('../helpers/logo-stars.png');

function NavBar() {
	return (
		<nav className="Nav">
			<img src={logo} alt="logo pic" className="logo-image"></img>
			<ul className="nav-links">
				<li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>about</NavLink></li>
				<li><NavLink to="/experience"className={({ isActive }) => isActive ? "active" : ""}>experience</NavLink></li>
				<li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>projects</NavLink></li>
				<li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>contact</NavLink></li>
			</ul>
		</nav>
	);
}

export default NavBar;