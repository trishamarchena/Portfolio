import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import "./Homepage.css"

const Homepage = (props) => {
  return (
    <div className="homepageContainer">
      <h1 className="homepagename">Patricia Marchena.</h1> 
      <h2 className="homepagemessage">
     Full stack developer.
      </h2>
      <About / >
        <Projects / >
          <Contact />
    </div>
  );
};

export default Homepage;
