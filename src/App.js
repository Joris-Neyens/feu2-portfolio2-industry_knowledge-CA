import React from 'react'
import './sass/style.scss';
import Nav from "./components/Home/Nav";
import Jumbotron from "./components/Home/Jumbotron";
import WorkOne from "./components/Work/WorkOne";
import WorkTwo from "./components/Work/WorkTwo";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <section id="home" className="home">
        <Nav></Nav>
        <Jumbotron></Jumbotron>
      </section>
        <WorkOne></WorkOne>
        <WorkTwo></WorkTwo>
        <About></About>
        <Contact></Contact>
    </>
  );
}

export default App;
