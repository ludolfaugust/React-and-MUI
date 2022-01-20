import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//import Slider from "./components/Slider";

import Cards from "./components/Products/Cards.js/Cards";

import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <h1>Coding Exercises with material-ui and Bootstrap</h1>
      <Navbar />

      {/* <Slider /> */}
      <Cards />
    </div>
  );
}

export default App;
