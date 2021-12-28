
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
    <div className ="navbarContainer">
      {/* < h2 className="myLogo">Patricia Marchena</h2> */}
      {/* <div className="myLogo">
      <a href ="/">Patricia Marchena</a></div> */}
      <a href ="#aboutContainer" className="aboutLink">About</a>
      <a href ="#projectsContainer" className="projects">Projects</a>
      <a href="#contactMeContainer" className="contactLink">Contact</a>
    </div>
    </nav>
  );
};

export default Navbar;
