import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Home/>
    <About/>
    <Service/>
    <Education/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    
    </div>
  );
}

export default App;
