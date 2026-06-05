import "./App.css";

import Header from "./components/Header";

import Services from "./components/Services";
import About from "./components/About";
import Packages from "./components/Packages";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import VideoHero from "./components/VideoHero";
import Chatbot from "./components/Chatbot";
function App() {
  return (
    <div className="app">
      <Header />
      <VideoHero />
      

      <Services />
      <About />
      <Packages />
      <Process />
      <Projects />
      <Contact />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;