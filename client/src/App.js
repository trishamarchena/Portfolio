import { Route } from "react-router";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from"./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/Homepage">
        <Homepage />
      </Route>
      
    </div>
  );
}

export default App;
