import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Section />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
