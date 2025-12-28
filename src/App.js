import "./App.css";
import Header from "../src/components/Header";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import LandingPage from "./components/LandingPage";
import ChakraSection from "./components/ChakraSection";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="landing-container">
        <ChakraSection>
          <LandingPage />
        </ChakraSection>
      </div>
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
