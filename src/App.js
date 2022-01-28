import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import OutlinedCard from "./components/Cards/OutLinedCard";
//import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <h1>Coding Exercises with material-ui and Bootstrap</h1>
      <Router>
        <Navbar />
        {/* <Slider /> */}
      </Router>
      <OutlinedCard />
    </div>
  );
}

export default App;
