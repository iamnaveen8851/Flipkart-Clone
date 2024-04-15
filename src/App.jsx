import "./App.css";
import Dropdown from "./Dropdown";
import OffersCards from "./OffersCards";
import Electronics from "./components/Electronics";
import Navbar from "./components/Navbar";
import SimpleSlider from "./components/SimpleSlider";
import Footer from "./components/Footer";
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

      <Footer/>
    </>
  );
}

export default App;
