import React from 'react'
import './sass/style.scss';
import Nav from "./components/Home/Nav";
import Header from "./components/Home/Header";

function App() {
  return (
    <>
      <div className="home">
        <Nav></Nav>
        <Header></Header>
      </div>
    </>
  );
}

export default App;
