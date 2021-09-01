import sand from "./sand.jpg";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from"./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img id="background" src={sand} alt="sand"/>
      <Navbar />
        <Homepage />
    </div>
  );
}

export default App;
