import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contactus from "./component/Contactus";
import About from "./component/About";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Skills />
      <Projects />
      <Contactus />
    </div>
  );
};

export default App;
