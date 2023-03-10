import './NavBar.css';

function NavBar() {
  return (
    <nav className="Nav">
      <ul>
        <li><a href="#contact-section" activeClass="active">contact</a></li>
        <li><a href="#project-section" class="button">projects</a></li>
        <li><a href="#experience-section" class="button">experience</a></li>
        <li><a href="#about-section" class="button">about</a></li>
       </ul>
    </nav>
  );
}

export default NavBar;
