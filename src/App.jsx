import './App.css'
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Information from "./components/Information.jsx";
import OurProducts from "./components/OurProducts.jsx";
import RoomsInspiration from "./components/RoomsInspiration.jsx";
import TipsTricks from "./components/TipsTricks.jsx";
import FuniroFurniture from "./components/FuniroFurniture.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Information />
      <OurProducts />
      <RoomsInspiration />
      <TipsTricks />
      <FuniroFurniture />
      <Footer />
    </>
  )
}

export default App
