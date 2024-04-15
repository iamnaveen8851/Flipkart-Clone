import "./App.css";
import Dropdown from "./Dropdown";
import Electronics from "./components/Electronics";
import Navbar from "./components/Navbar";
import SimpleSlider from "./components/SimpleSlider";
function App() {
  return (
    <>
      <Navbar />
      <br />
      <Dropdown />
      <br />
      <SimpleSlider />
      <br />
      <Electronics />
    </>
  );
}

export default App;
