import { Route } from "react-router";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from"./Components/Navbar/Navbar";
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
