import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
    <div className ="navbarContainer">
      <Link to="/Homepage">Home</Link>
      <a href ="#aboutContainer" className="aboutLink">About</a>
      <a href ="#projectContainer" className="projects">Projects</a>
      <a href="#contactMeContainer" className="contactLink">Contact</a>
    </div>
    </nav>
  );
};

export default Navbar;
