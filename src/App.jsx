import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contactus from "./component/Contactus";
import About from "./component/About";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contactus />
      <Footer />
    </div>
  );
};

export default App;
