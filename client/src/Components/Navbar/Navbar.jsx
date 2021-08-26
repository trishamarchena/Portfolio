import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className ="navbarContainer">
      <Link to="/Homepage">Home</Link>
      <Link to="/About" className="aboutlink">About</Link>
      <Link to ="/Projects" className="Projects">Projects</Link>
      <Link to="/Contact" className="contactlink">Contact me</Link>
    </div>
  );
};

export default Navbar;
