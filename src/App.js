import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider";
import PhoneIcon from "@mui/icons-material/Phone";

function App() {
  return (
    <div className="App">
      <h1>Coding Exercises with material-ui and Bootstrap</h1>
      <Navbar />
      <PhoneIcon />
      {/* <Slider /> */}
    </div>
  );
}

export default App;
