import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "../src/components/Contact";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <div className="landing-container">
        <LandingPage />
      </div>
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
