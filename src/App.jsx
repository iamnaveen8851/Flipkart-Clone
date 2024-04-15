import "./App.css";
import Dropdown from "./Dropdown";
import OffersCards from "./OffersCards";
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
      <br />
      <OffersCards/>
    </>
  );
}

export default App;
