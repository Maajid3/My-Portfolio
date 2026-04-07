import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";

import "./App.css";
import Header from "./components/Header";
import FallbackLoader from "./components/FallbackLoader";
import LandingPage from "./components/LandingPage";

const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const sectionFallback = <FallbackLoader message="Loading section..." />;

function App() {
  return (
    <div className="App">
      <Toaster />
      <div className="landing-container">
        <LandingPage />
      </div>
      <Header />
      <Suspense fallback={sectionFallback}>
        <Projects />
      </Suspense>
      <Suspense fallback={sectionFallback}>
        <Contact />
      </Suspense>
      <Suspense fallback={sectionFallback}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
