import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-white font-poppins">
      <Navbar></Navbar>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
