import React from 'react'
import './sass/style.scss';
import Nav from "./components/Home/Nav";
import Header from "./components/Home/Header";
import WorkOne from "./components/Work/WorkOne";
import WorkTwo from "./components/Work/WorkTwo";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <section id="home" className="home">
        <Nav></Nav>
        <Header></Header>
      </section>
        <WorkOne></WorkOne>
        <WorkTwo></WorkTwo>
        <About></About>
        <Contact></Contact>
    </>
  );
}

export default App;
